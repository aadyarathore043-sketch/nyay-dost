import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

/**
 * StatCard — animated statistic tile.
 * Numbers are rendered large with a gradient for emphasis.
 */
export default function StatCard({ value, label, className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col items-center text-center ${className}`}
    >
      <span className="bg-gradient-to-r from-brand-600 via-violet-600 to-accent-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl dark:from-brand-400 dark:via-violet-400 dark:to-accent-400">
        {value}
      </span>
      <span className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{label}</span>
    </motion.div>
  )
}
