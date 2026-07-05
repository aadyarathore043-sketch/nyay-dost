import { motion } from 'framer-motion'
import { LayoutGrid, CheckCircle2, Sparkles } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/common/Container.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Button from '../components/common/Button.jsx'
import BusinessCard from '../components/ui/BusinessCard.jsx'
import Disclaimer from '../components/common/Disclaimer.jsx'
import { businessCards } from '../data/businessCards.js'
import { staggerContainer, fadeUp, viewportOnce } from '../utils/motion'

const compliancePreview = [
  'Company / LLP registration',
  'PAN, TAN & GST registration',
  'Shops & Establishments license',
  'MSME / Udyam registration',
  'Professional tax & PF setup',
  'Annual filings & ROC compliance',
]

/**
 * BusinessHub — interactive dashboard of business & startup legal topics.
 */
export default function BusinessHub() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Business & Startup Hub"
        title="Your startup’s legal"
        highlight="command center"
        subtitle="A structured map through India’s business laws — from choosing a structure to protecting your brand. Pick a topic to learn the essentials and your next steps."
      />

      {/* Topic cards */}
      <section className="relative py-10 sm:py-12">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
              <LayoutGrid className="h-4 w-4" />
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Explore topics</h2>
          </div>

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {businessCards.map((card) => (
              <BusinessCard key={card.title} {...card} />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Compliance checklist highlight */}
      <section className="relative py-12 sm:py-16">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-4xl border border-brand-500/20 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 p-8 shadow-glow sm:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 12% 18%, rgba(99,102,241,0.5) 0, transparent 35%), radial-gradient(circle at 88% 82%, rgba(6,182,212,0.4) 0, transparent 35%)',
              }}
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="eyebrow mb-4 !border-white/20 !bg-white/10 !text-white/90">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Don’t miss a thing
                </span>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">The startup compliance checklist</h2>
                <p className="mt-4 max-w-md text-base text-white/70">
                  Everything founders tend to forget — consolidated into one clear list. Use it as a
                  starting point, then talk to a professional for your specific situation.
                </p>
                <div className="mt-6">
                  <Button to="/ai-assistant" size="lg" variant="secondary">
                    <Sparkles className="h-5 w-5" /> Ask a question
                  </Button>
                </div>
              </div>

              <ul className="grid gap-3">
                {compliancePreview.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="relative pb-16">
        <Container className="max-w-4xl">
          <Disclaimer />
        </Container>
      </section>
    </PageTransition>
  )
}
