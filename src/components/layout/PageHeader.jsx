import { motion } from 'framer-motion'
import Container from '../common/Container.jsx'
import GradientOrbs from '../common/GradientOrbs.jsx'
import { fadeUp, staggerContainer } from '../../utils/motion'

/**
 * PageHeader — consistent top hero used by inner pages.
 * Eyebrow + title (+ optional highlight) + subtitle, with gradient orbs.
 */
export default function PageHeader({ eyebrow, title, highlight, subtitle, children }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16">
      <GradientOrbs variant="subtle" />
      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center"
        >
          {eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl"
          >
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {subtitle}
            </motion.p>
          )}
          {children && <motion.div variants={fadeUp}>{children}</motion.div>}
        </motion.div>
      </Container>
    </section>
  )
}
