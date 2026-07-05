import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading.jsx'
import Container from '../common/Container.jsx'
import { howItWorks } from '../../data/howItWorks.js'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/motion'

/**
 * HowItWorks — a 4-step horizontal flow with a connecting line.
 */
export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From confused to clear in"
          highlight="four steps"
          subtitle="No jargon, no paperwork, no intimidation. Just a simple path from problem to action."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connecting line on large screens */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block dark:via-brand-700"
          />

          {howItWorks.map(({ icon: Icon, step, title, description }) => (
            <motion.div key={step} variants={fadeUp} className="relative flex flex-col items-center text-center">
              {/* Step circle */}
              <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-200/70 bg-white text-brand-600 shadow-card dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-300">
                <Icon className="h-6 w-6" />
                <span className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-violet-600 text-[10px] font-bold text-white shadow">
                  {step}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
