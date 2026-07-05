import { motion } from 'framer-motion'

/**
 * Card — standard surface card.
 * `glass` prop swaps to a glassmorphism treatment (translucent + blur).
 */
export default function Card({
  as: Tag = 'div',
  glass = false,
  hover = false,
  className = '',
  children,
  ...props
}) {
  const surface = glass
    ? 'glass'
    : 'bg-white border border-slate-200/80 dark:bg-slate-900/70 dark:border-slate-800'

  return (
    <Tag
      className={`rounded-3xl shadow-card ${surface} ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-glow' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

/**
 * GlassCard — convenience wrapper around Card with glass enabled,
 * plus an optional Framer Motion entrance.
 */
export function GlassCard({ children, className = '', motionProps, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`glass rounded-3xl shadow-card ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  )
}
