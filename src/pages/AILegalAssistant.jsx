import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Mic, Send, Tag, FileText, ListChecks, FolderLock,
  Landmark, PhoneCall, Siren, Scale, RotateCcw, AlertTriangle, CheckCircle2,
} from 'lucide-react'
import PageTransition from '../components/layout/PageTransition.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/common/Container.jsx'
import Button from '../components/common/Button.jsx'
import FormField from '../components/common/FormField.jsx'
import Disclaimer from '../components/common/Disclaimer.jsx'
import ResponseCard from '../components/ui/ResponseCard.jsx'
import { analyzeLegalProblem } from '../utils/ai.js'
import { indianStates, languages, sampleResponse } from '../data/forms.js'
import { staggerContainer, fadeUp, viewportOnce } from '../utils/motion'

export default function AILegalAssistant() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [apiKeyMissing, setApiKeyMissing] = useState(false)
  const [listening, setListening] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitted(true)
    setResult(null)
    setError(null)
    setApiKeyMissing(false)

    const formData = {
      name: e.target.name?.value || '',
      age: e.target.age?.value || '',
      state: e.target.state?.value || '',
      district: e.target.district?.value || '',
      language: e.target.language?.value || '',
      email: e.target.email?.value || '',
      problem: e.target.problem?.value || '',
    }

    try {
      const data = await analyzeLegalProblem(formData)

      if (data?._isSample) {
        setApiKeyMissing(true)
      }

      setResult(data)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleVoice = () => setListening((l) => !l)

  return (
    <PageTransition>
      <PageHeader
        eyebrow="AI Legal Assistant"
        title="Explain your problem in"
        highlight="plain words"
        subtitle="Tell us what happened â€” in your own language. Weâ€™ll break it down into a clear category, next steps, and the resources you need. No legal jargon required."
      >
        <Disclaimer variant="compact" className="!max-w-2xl" />
      </PageHeader>

      <section className="relative pb-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-4xl border border-slate-200/80 bg-white/80 p-6 shadow-card backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-violet-600 text-white shadow-glow">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Tell us about your situation</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">All fields marked * are required.</p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="name" name="name" label="Name" required placeholder="e.g. Aarav Sharma" />
                <FormField id="age" name="age" label="Age" type="number" required placeholder="e.g. 28" min={1} max={120} />
                <FormField id="state" name="state" label="State" as="select" required defaultValue="">
                  <option value="" disabled>Select your state</option>
                  {indianStates.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </FormField>
                <FormField id="district" name="district" label="District / City" required placeholder="e.g. Pune" />
                <FormField id="language" name="language" label="Preferred language" as="select" required defaultValue="English">
                  {languages.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </FormField>
                <FormField id="email" name="email" label="Email" type="email" placeholder="you@example.com" hint="Weâ€™ll only use this to send you your summary." />
              </div>

              <div className="mt-5">
                <FormField
                  id="problem"
                  name="problem"
                  label="Describe your legal problem"
                  required
                  as="textarea"
                  placeholder="In your own words, describe what happened. For example: 'I bought a phone online and it stopped working after a week. The seller is refusing a refundâ€¦'"
                />

                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleVoice}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      listening
                        ? 'border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-300'
                        : 'border-slate-300 text-slate-700 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500'
                    }`}
                  >
                    <Mic className="h-4 w-4" />
                    {listening ? 'Listeningâ€¦ (UI demo)' : 'Voice input'}
                  </button>
                  <span className="text-xs text-slate-400">Voice input is a UI placeholder for now.</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  By submitting, you acknowledge this is educational information, not legal advice.
                </p>
                <Button type="submit" size="lg" disabled={loading}>
                  {loading ? (
                    <>
                      <RotateCcw className="h-4 w-4 animate-spin" /> Analysingâ€¦
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Get my guidance
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          <AnimatePresence>
            {submitted && (
              <motion.div
                id="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mx-auto mt-12 max-w-5xl"
              >
                {loading ? (
                  <AnalyzingState />
                ) : error ? (
                  <ErrorState error={error} onReset={() => setSubmitted(false)} />
                ) : result ? (
                  <ResultsGrid data={result} apiKeyMissing={apiKeyMissing} onReset={() => { setSubmitted(false); setResult(null); setError(null); }} />
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </PageTransition>
  )
}

function AnalyzingState() {
  const steps = ['Understanding your description', 'Identifying the legal category', 'Gathering resources']
  return (
    <div className="flex flex-col items-center gap-6 rounded-4xl border border-slate-200/80 bg-white/70 p-10 text-center backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
      <div className="relative">
        <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-brand-500/40" />
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 text-white shadow-glow">
          <Sparkles className="h-7 w-7" />
        </span>
      </div>
      <div className="space-y-2">
        {steps.map((s, i) => (
          <motion.p key={s} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.4 }} className="text-sm font-medium text-slate-600 dark:text-slate-300">
            <span className="text-brand-500">â—</span> {s}â€¦
          </motion.p>
        ))}
      </div>
    </div>
  )
}

function ErrorState({ error, onReset }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-4xl border border-rose-200/80 bg-rose-50/70 p-10 text-center dark:border-rose-500/30 dark:bg-rose-500/10">
      <AlertTriangle className="h-10 w-10 text-rose-600 dark:text-rose-400" />
      <h3 className="text-lg font-semibold text-rose-700 dark:text-rose-300">Something went wrong</h3>
      <p className="max-w-md text-sm text-rose-800/80 dark:text-rose-200/80">{error}</p>
      <Button onClick={onReset} variant="outline" size="sm">
        <RotateCcw className="h-4 w-4" /> Try again
      </Button>
    </div>
  )
}
function ResultsGrid({ data, apiKeyMissing, onReset }) {
  // Normalize response to handle both old and new API formats
  const r = {
    legalCategory: data.legalCategory || data.situationSummary || 'Legal Issue',
    summary: data.summary || data.situationSummary || '',
    immediateSteps: data.immediateSteps || [],
    evidenceToPreserve: data.evidenceToPreserve || [],
    knownFacts: data.knownFacts || [],
    missingInformation: data.missingInformation || [],
    possibleLegalScenarios: data.possibleLegalScenarios || [],
    relevantLaws: data.relevantLaws || [],
    legalReasoning: data.legalReasoning || '',
    authoritiesToContact: data.authoritiesToContact || data.governmentResources || [],
    officialGovernmentWebsites: data.officialGovernmentWebsites || [],
    emergencyHelplines: data.emergencyHelplines || data.helplines || data.emergencyContacts || [],
    documentsRequired: data.documentsRequired || [],
    thingsToAvoid: data.thingsToAvoid || [],
    whenToContactLawyer: data.whenToContactLawyer || '',
    confidenceLevel: data.confidenceLevel || { value: 'Medium', explanation: 'No confidence level provided.' },
    followUpQuestions: data.followUpQuestions || [],
    disclaimer: data.disclaimer || '',
  }

  const confidenceColours = {
    High: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
    Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
    Low: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
  }

  return (
    <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="visible" viewport={viewportOnce}>

      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
            <CheckCircle2 className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Your guidance is ready</h2>
        </div>
        <Button size="sm" variant="ghost" onClick={onReset}>
          <RotateCcw className="h-4 w-4" /> Start over
        </Button>
      </div>

      {/* Confidence banner */}
      <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/60">
        <div className="flex items-center gap-3">
          <Scale className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <span className="text-sm font-semibold text-slate-900 dark:text-white">Report Confidence</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${confidenceColours[r.confidenceLevel.value] || confidenceColours.Medium}`}>
            {r.confidenceLevel.value}
          </span>
          <span className="hidden max-w-md text-xs text-slate-500 dark:text-slate-400 sm:inline">{r.confidenceLevel.explanation}</span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Legal Category */}
        <ResponseCard icon={Tag} title="Legal Category" tone="brand" accent>
          <p className="font-semibold text-slate-900 dark:text-white">{r.legalCategory}</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">This is an automated estimate for educational purposes â€” not a legal determination.</p>
        </ResponseCard>

        {/* Summary */}
        <ResponseCard icon={FileText} title="Summary" tone="accent">
          <p>{r.summary}</p>
        </ResponseCard>

        {/* Known Facts */}
        {r.knownFacts.length > 0 && (
          <ResponseCard icon={CheckCircle2} title="Known Facts" tone="success">
            <ul className="space-y-2">
              {r.knownFacts.map((fact, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{fact}</span>
                </li>
              ))}
            </ul>
          </ResponseCard>
        )}

        {/* Missing Information */}
        {r.missingInformation.length > 0 && (
          <ResponseCard icon={AlertTriangle} title="Missing Information" tone="warning">
            <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">The following details would help provide a more accurate analysis:</p>
            <ul className="space-y-2">
              {r.missingInformation.map((item, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </ResponseCard>
        )}

        {/* Possible Legal Scenarios */}
        {r.possibleLegalScenarios.length > 0 && (
          <ResponseCard icon={Scale} title="Possible Legal Scenarios" tone="neutral" className="md:col-span-2">
            <ul className="space-y-4">
              {r.possibleLegalScenarios.map((scenario, i) => (
                <li key={i} className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-800/40">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-brand-600 dark:text-brand-400">{i + 1}.</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{scenario.title}</h4>
                      <span className={`inline-block mt-0.5 rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${confidenceColours[scenario.likelihood] || 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}>
                        {scenario.likelihood} likelihood
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{scenario.description}</p>
                  {scenario.explanation && (
                    <p className="mt-1 text-xs italic text-slate-500 dark:text-slate-400">{scenario.explanation}</p>
                  )}
                </li>
              ))}
            </ul>
          </ResponseCard>
        )}

        {/* Relevant Laws */}
        {r.relevantLaws.length > 0 && (
          <ResponseCard icon={BookOpen} title="Relevant Indian Laws" tone="brand" className="md:col-span-2">
            <ul className="space-y-4">
              {r.relevantLaws.map((law, i) => (
                <li key={i} className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-800/40">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{law.name}</h4>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{law.description}</p>
                  {law.howItApplies && (
                    <p className="mt-1 text-xs text-brand-600 dark:text-brand-400">{law.howItApplies}</p>
                  )}
                </li>
              ))}
            </ul>
          </ResponseCard>
        )}

        {/* Legal Reasoning */}
        {r.legalReasoning && (
          <ResponseCard icon={Info} title="Legal Reasoning" tone="accent" className="md:col-span-2">
            <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-300">{r.legalReasoning}</p>
          </ResponseCard>
        )}

        {/* Immediate Steps */}
        <ResponseCard icon={ListChecks} title="Immediate Steps" tone="brand">
          {r.immediateSteps.length > 0 ? (
            <ol className="space-y-2">
              {r.immediateSteps.map((step, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-slate-500 dark:text-slate-400">No specific steps could be determined for this situation.</p>
          )}
        </ResponseCard>

        {/* Evidence to Preserve */}
        <ResponseCard icon={FolderLock} title="Evidence to Preserve" tone="warning">
          {r.evidenceToPreserve.length > 0 ? (
            <ul className="space-y-2">
              {r.evidenceToPreserve.map((e, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500 dark:text-slate-400">General advice: preserve all documents, communications, and records related to this matter.</p>
          )}
        </ResponseCard>

        {/* Authorities to Contact */}
        {r.authoritiesToContact.length > 0 && (
          <ResponseCard icon={Landmark} title="Authorities to Contact" tone="success">
            <ul className="space-y-3">
              {r.authoritiesToContact.map((auth, i) => (
                <li key={i} className="rounded-lg border border-slate-200/60 bg-slate-50/40 p-2.5 dark:border-slate-800 dark:bg-slate-800/30">
                  <p className="font-semibold text-slate-900 dark:text-white">{auth.name || auth.label}</p>
                  {auth.whenToContact && <p className="text-xs text-slate-500 dark:text-slate-400">{auth.whenToContact}</p>}
                  {auth.note && <p className="text-xs text-slate-500 dark:text-slate-400">{auth.note}</p>}
                </li>
              ))}
            </ul>
          </ResponseCard>
        )}

        {/* Official Government Websites */}
        {r.officialGovernmentWebsites.length > 0 && (
          <ResponseCard icon={Landmark} title="Official Government Websites" tone="success">
            <ul className="space-y-3">
              {r.officialGovernmentWebsites.map((site, i) => (
                <li key={i}>
                  <a href={site.url || '#'} onClick={(e) => e.preventDefault()} className="font-semibold text-emerald-700 hover:underline dark:text-emerald-300">
                    {site.label}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{site.description}</p>
                </li>
              ))}
            </ul>
          </ResponseCard>
        )}

        {/* Emergency Helplines */}
        {r.emergencyHelplines.length > 0 && (
          <ResponseCard icon={Siren} title="Emergency Helplines" tone="danger" accent>
            <ul className="space-y-2">
              {r.emergencyHelplines.map((h, i) => (
                <li key={i} className="flex items-center justify-between gap-3">
                  <span>{h.name}</span>
                  <a href={`tel:${h.number}`} className="font-bold text-rose-600 dark:text-rose-400">{h.number}</a>
                </li>
              ))}
            </ul>
            <a href="/emergency" className="mt-3 inline-flex text-xs font-semibold text-rose-600 hover:underline dark:text-rose-400">View all emergency helplines â†’</a>
          </ResponseCard>
        )}

        {/* Documents Required */}
        {r.documentsRequired.length > 0 && (
          <ResponseCard icon={FileText} title="Documents Required" tone="accent">
            <ul className="space-y-2">
              {r.documentsRequired.map((doc, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100 text-xs font-bold text-accent-700 dark:bg-accent-500/20 dark:text-accent-300">
                    {i + 1}
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </ResponseCard>
        )}

        {/* Things to Avoid */}
        {r.thingsToAvoid.length > 0 && (
          <ResponseCard icon={ShieldAlert} title="Things to Avoid" tone="warning">
            <ul className="space-y-2">
              {r.thingsToAvoid.map((item, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ResponseCard>
        )}

        {/* When to Contact a Lawyer */}
        {r.whenToContactLawyer && (
          <ResponseCard icon={Scale} title="When to Contact a Lawyer" tone="neutral" className="md:col-span-2">
            <p>{r.whenToContactLawyer}</p>
          </ResponseCard>
        )}

        {/* Follow-up Questions */}
        {r.followUpQuestions.length > 0 && (
          <ResponseCard icon={MessageCircleQuestion} title="Follow-up Questions" tone="brand" className="md:col-span-2">
            <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">Answering these questions would help us provide more accurate guidance:</p>
            <ul className="space-y-3">
              {r.followUpQuestions.map((q, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{q}</span>
                </li>
              ))}
            </ul>
          </ResponseCard>
        )}

        {/* Disclaimer */}
        <div className="md:col-span-2">
          <Disclaimer />
        </div>
      </div>
    </motion.div>
  )
}
