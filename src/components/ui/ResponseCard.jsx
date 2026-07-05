import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

/**
 * ResponseCard — a tile in the AI Assistant's placeholder result.
 * `icon` + `title` header, then free-form children as the body.
 * `tone` tints the icon badge; `accent` adds a colored top border.
 */
const toneStyles = {
  brand: 'from-brand-500 to-violet-600',
  accent: 'from-accent-500 to-cyan-600',
  danger: 'from-rose-500 to-red-600',
  neutral: 'from-slate-500 to-slate-700',
  success: 'from-emerald-500 to-teal-600',
  warning: 'from-amber-500 to-orange-600',
}

export default function ResponseCard({
  icon: Icon,
  title,
  tone = 'brand',
  accent = false,
  className = '',
  children,
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-card dark:border-slate-800 dark:bg-slate-900/70 ${className}`}
    >
      {accent && (
        <span
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${toneStyles[tone]}`}
        />
      )}
      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <span
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${toneStyles[tone]} text-white shadow`}
          >
            <Icon className="h-5 w-5" />
          </span>
        )}
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{children}</div>
    </motion.div>
  )
}
