import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'

// Load environment variables from .env
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const SYSTEM_PROMPT = `You are NyayaPath, an educational legal assistant for people in India.

IMPORTANT RULES:
- You provide EDUCATIONAL information ONLY. You are NOT a lawyer.
- Use simple, everyday language. Avoid legal jargon.
- Reference Indian law, rights, and official procedures where relevant.
- Be specific with immediate steps the user can take.
- Always recommend preserving evidence.
- Suggest relevant Indian government resources and helplines.
- Advise when the user should consult a qualified advocate.

You MUST respond with ONLY a valid JSON object (no markdown, no code fences, no extra text) with this exact structure:

{
  "legalCategory": "Short name, e.g. 'Consumer Dispute — Online Fraud'",
  "summary": "2-3 sentence plain-language explanation of what happened and what it means legally",
  "immediateSteps": ["step 1", "step 2", "step 3", "step 4"],
  "evidenceToPreserve": ["evidence 1", "evidence 2", "evidence 3"],
  "governmentResources": [
    {"label": "Resource name", "href": "#", "note": "What it helps with"}
  ],
  "helplines": [
    {"name": "Helpline name", "number": "phone number"}
  ],
  "emergencyContacts": [
    {"name": "Contact name", "number": "phone number"}
  ],
  "whenToContactLawyer": "1-2 sentences explaining when to consult a real advocate"
}

Be specific to the user's situation. Adapt helplines and resources to match their problem.`

function buildUserMessage(data) {
  return `Here is my situation:
- Name: ${data.name || 'Not provided'}
- Age: ${data.age || 'Not provided'}
- State: ${data.state || 'Not provided'}
- District/City: ${data.district || 'Not provided'}
- Preferred Language: ${data.language || 'English'}
- Email: ${data.email || 'Not provided'}

My legal problem:
${(data.problem || '').slice(0, 5000) || 'Not provided'}

Please analyze this and give me guidance in simple language.`
}

function parseGeminiJSON(text) {
  const cleaned = text.replace(/```json\s*/g, '').replace(/```/g, '').trim()
  return JSON.parse(cleaned)
}

// ---- Cached working model -------------------------------------------------
let cachedModel = null
let modelCacheTime = 0

/**
 * Find a working model by querying Google's ListModels API.
 * Picks the first available text-generation model that supports
 * generateContent. Result is cached for 10 minutes.
 */
async function findWorkingModel() {
  const now = Date.now()
  if (cachedModel && now - modelCacheTime < 10 * 60 * 1000) {
    return cachedModel
  }

  const apiKey = process.env.GEMINI_API_KEY
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
  const resp = await fetch(url)
  const data = await resp.json()

  if (!resp.ok) {
    throw new Error(`ListModels failed: ${data?.error?.message || resp.status}`)
  }

  const models = data.models || []
  // Prefer flash (fast + free tier), then any text model
  const preferredOrder = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-flash',
    'gemini-flash-latest',
    'gemini-2.5-pro',
    'gemini-1.5-pro',
    'gemini-pro',
  ]

  // Find first preferred model that exists in the available list
  const availableNames = models.map((m) => m.name.replace('models/', ''))
  for (const name of preferredOrder) {
    if (availableNames.includes(name)) {
      cachedModel = name
      modelCacheTime = now
      console.log(`[NyayaPath] Using model: ${name}`)
      return name
    }
  }

  // Fallback: pick any model that supports generateContent
  const textModel = models.find((m) =>
    (m.supportedGenerationMethods || []).includes('generateContent')
  )
  if (textModel) {
    cachedModel = textModel.name.replace('models/', '')
    modelCacheTime = now
    console.log(`[NyayaPath] Using fallback model: ${cachedModel}`)
    return cachedModel
  }

  throw new Error('No text-generation model available for this API key.')
}

// ---------------------------------------------------------------------------

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    keySet: !!process.env.GEMINI_API_KEY,
    configuredModel: process.env.GEMINI_MODEL || 'auto',
    activeModel: cachedModel,
    time: new Date().toISOString(),
  })
})

// Lists every model your key can access (handy for debugging)
app.get('/api/models', async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY not set in .env' })
    }
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`
    const resp = await fetch(url)
    const data = await resp.json()
    if (!resp.ok) {
      return res.status(resp.status).json(data)
    }
    const names = (data.models || []).map((m) => m.name.replace('models/', ''))
    res.json({ count: names.length, models: names })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Main endpoint — called by the frontend
app.post('/api/gemini', async (req, res) => {
  try {
    const formData = req.body || {}

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not set in the .env file.',
      })
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

    // Pick a model: explicit env var OR auto-detect a working one
    const modelName = process.env.GEMINI_MODEL && process.env.GEMINI_MODEL !== 'auto'
      ? process.env.GEMINI_MODEL
      : await findWorkingModel()

    const model = genAI.getGenerativeModel({ model: modelName })

    const userMessage = buildUserMessage(formData)
    const fullPrompt = SYSTEM_PROMPT + '\n\n' + userMessage

    const result = await model.generateContent(fullPrompt)
    const text = result.response.text()

    const parsed = parseGeminiJSON(text)
    res.json(parsed)
  } catch (error) {
    console.error('[Gemini Proxy Error]', error)
    res.status(500).json({
      error: error.message || 'Unknown error from Gemini API',
    })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`\n  NyayaPath backend running on http://localhost:${PORT}`)
  console.log(`  Health check:    http://localhost:${PORT}/api/health`)
  console.log(`  List models:     http://localhost:${PORT}/api/models`)
  console.log(`  Gemini endpoint: POST http://localhost:${PORT}/api/gemini\n`)
})
