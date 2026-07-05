import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '../../utils/motion'

/**
 * BusinessCard — interactive topic card for the Business & Startup Hub.
 * Premium hover state with an arrow indicator. `tone` controls the icon badge.
 */
const toneStyles = {
  brand: 'from-brand-500 to-violet-600',
  accent: 'from-accent-500 to-cyan-600',
}

export default function BusinessCard({
  icon: Icon,
  title,
  description,
  tone = 'brand',
  tag,
  className = '',
}) {
  return (
    <motion.a
      href="#"
      variants={fadeUp}
      whileHover={{ y: -6 }}
      onClick={(e) => e.preventDefault()}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-xl transition-shadow duration-300 hover:border-brand-300/70 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-500/40 ${className}`}
    >
      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${toneStyles[tone]} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          {Icon && <Icon className="h-6 w-6" />}
        </div>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-slate-800">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {tag && (
        <span className="mt-4 inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          {tag}
        </span>
      )}

      <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
        Explore topic
      </span>
    </motion.a>
  )
}
