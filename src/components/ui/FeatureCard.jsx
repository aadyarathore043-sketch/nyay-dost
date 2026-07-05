import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

/**
 * FeatureCard — premium glass card with an icon, title, and description.
 * `tone` controls the icon badge gradient.
 * Reused across the landing page, About, and other feature grids.
 */
const toneStyles = {
  brand: 'from-brand-500 to-violet-600 text-white shadow-glow',
  accent: 'from-accent-500 to-cyan-600 text-white shadow-glow-accent',
  danger: 'from-rose-500 to-red-600 text-white shadow-[0_8px_30px_-8px_rgba(244,63,94,0.5)]',
}

export default function FeatureCard({ icon: Icon, title, description, tone = 'brand', className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900/60 ${className}`}
    >
      {/* Hover sheen */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-400/20 to-accent-400/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${toneStyles[tone]} transition-transform duration-300 group-hover:scale-110`}
      >
        {Icon && <Icon className="h-6 w-6" />}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
    </motion.div>
  )
}
