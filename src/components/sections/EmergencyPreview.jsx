import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { emergencyContacts } from '../../data/emergencyContacts.js'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/motion'

// Show three representative contacts in the preview
const preview = emergencyContacts.slice(0, 3)

/**
 * EmergencyPreview — teaser for the Emergency Help page.
 * Surfaces a few key helplines and links to the full dashboard.
 */
export default function EmergencyPreview() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="When it’s urgent"
          title="Help is one tap"
          highlight="away"
          subtitle="Verified national helpline numbers for the moments that matter most — always free, always available."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          {preview.map((c) => (
            <motion.a
              key={c.name}
              href={`tel:${c.number}`}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-start gap-3 rounded-3xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-xl transition-shadow hover:shadow-glow dark:border-slate-800 dark:bg-slate-900/60"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{c.name}</p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{c.number}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 flex justify-center"
        >
          <Button to="/emergency" size="lg" variant="danger">
            View all helplines
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
