import { motion } from 'framer-motion'
import { Phone, Clock } from 'lucide-react'
import { fadeUp } from '../../utils/motion'

/**
 * EmergencyCard — high-contrast card for helpline numbers.
 * `tone` controls the icon badge + accent. The number is a tappable
 * tel: link so it works on mobile in a real emergency.
 */
const toneStyles = {
  brand: {
    badge: 'from-brand-500 to-violet-600',
    ring: 'group-hover:shadow-glow',
    text: 'text-brand-700 dark:text-brand-300',
  },
  accent: {
    badge: 'from-accent-500 to-cyan-600',
    ring: 'group-hover:shadow-glow-accent',
    text: 'text-accent-700 dark:text-accent-300',
  },
  danger: {
    badge: 'from-rose-500 to-red-600',
    ring: 'group-hover:shadow-[0_8px_30px_-8px_rgba(244,63,94,0.5)]',
    text: 'text-rose-700 dark:text-rose-300',
  },
}

export default function EmergencyCard({
  icon: Icon,
  name,
  number,
  description,
  tone = 'brand',
  available,
  className = '',
}) {
  const t = toneStyles[tone]

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-xl transition-shadow duration-300 ${t.ring} dark:border-slate-800 dark:bg-slate-900/60 ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${t.badge} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          {Icon && <Icon className="h-6 w-6" />}
        </div>
        {available && (
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/70 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            <Clock className="h-3 w-3" /> {available}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {/* Big tappable number */}
      <a
        href={`tel:${number}`}
        className={`mt-5 inline-flex items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:border-brand-400 hover:bg-brand-50/60 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-brand-500 dark:hover:bg-brand-500/10`}
      >
        <span className="inline-flex items-center gap-2.5">
          <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${t.badge} text-white`}>
            <Phone className="h-4 w-4" />
          </span>
          <span className={`text-2xl font-extrabold tracking-tight ${t.text}`}>{number}</span>
        </span>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Tap to call</span>
      </a>
    </motion.div>
  )
}
