/**
 * Frontend API helper.
 *
 * The frontend NEVER touches the API key or calls Google directly.
 * It only talks to our own backend proxy at /api/gemini, which is
 * forwarded to http://localhost:3001 by Vite's dev-server proxy.
 *
 * The backend uses the official Google Gemini SDK and reads the key
 * from the GEMINI_API_KEY environment variable. If Google returns an
 * error, it is thrown here and shown in the UI via <ErrorState/>.
 */

export async function analyzeLegalProblem(formData) {
  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  const body = await response.json().catch(() => ({}))

  if (!response.ok) {
    // Forward the exact error from Google (or our backend)
    throw new Error(body?.error || `Backend error (${response.status})`)
  }

  return body
}
