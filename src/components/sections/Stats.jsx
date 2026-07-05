import { motion } from 'framer-motion'
import Container from '../common/Container.jsx'
import StatCard from '../ui/StatCard.jsx'
import { stats } from '../../data/stats.js'
import { staggerContainer, viewportOnce } from '../../utils/motion'

/**
 * Stats — a banded statistics section with a gradient backdrop
 * to break up the page rhythm.
 */
export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-4xl border border-slate-200/70 bg-gradient-to-br from-brand-600 via-violet-600 to-brand-700 px-6 py-14 shadow-glow dark:border-slate-800">
          {/* Decorative pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0, transparent 40%)',
            }}
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {stats.map((s) => (
              // Override StatCard colors for use on the gradient band
              <StatCard key={s.label} {...s} className="[&_span]:!text-white [&_span:last-child]:!text-white/80" />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
