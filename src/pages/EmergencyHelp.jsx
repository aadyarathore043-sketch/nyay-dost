import { motion } from 'framer-motion'
import { Phone, Info, Heart } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/common/Container.jsx'
import EmergencyCard from '../components/ui/EmergencyCard.jsx'
import Disclaimer from '../components/common/Disclaimer.jsx'
import { GlassCard } from '../components/common/Card.jsx'
import { emergencyContacts } from '../data/emergencyContacts.js'
import { staggerContainer, viewportOnce } from '../utils/motion'

/**
 * EmergencyHelp — a professional emergency dashboard of helpline cards.
 */
export default function EmergencyHelp() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Emergency Help"
        title="National helplines,"
        highlight="always available"
        subtitle="Verified, toll-free numbers you can call in an emergency — anywhere in India. Tap any number to call instantly from your phone."
      />

      {/* Quick call strip */}
      <section className="relative pb-4">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-rose-200/70 bg-rose-50/70 p-4 text-center backdrop-blur-xl dark:border-rose-500/30 dark:bg-rose-500/5"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 dark:text-rose-300">
              <Heart className="h-4 w-4" /> In immediate danger? Call <a href="tel:112" className="underline">112</a> (national emergency) or <a href="tel:100" className="underline">100</a> (police) now.
            </span>
          </motion.div>
        </Container>
      </section>

      {/* Helpline cards */}
      <section className="relative py-10 sm:py-12">
        <Container>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {emergencyContacts.map((c) => (
              <EmergencyCard key={c.name} {...c} />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Guidance note */}
      <section className="relative py-10 sm:py-12">
        <Container className="max-w-4xl">
          <GlassCard className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-glow">
                <Info className="h-5 w-5" />
              </span>
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">What to do in an emergency</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" /> Stay as calm as possible and move to a safe location if you can.</li>
                  <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" /> Note the exact address/landmark so responders can reach you.</li>
                  <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" /> Save evidence — screenshots, photos, or messages — for later action.</li>
                  <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" /> Tell someone you trust about your situation and location.</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="relative py-6 pb-16">
        <Container className="max-w-4xl">
          <Disclaimer />
        </Container>
      </section>
    </PageTransition>
  )
}
