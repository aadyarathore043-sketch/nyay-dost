import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Button — the one source of truth for buttons and link-buttons.
 *
 * Variants:  primary | secondary | ghost | outline | danger
 * Sizes:     sm | md | lg
 * If `to` is provided, renders a React Router <Link>; if `href`, an <a>;
 * otherwise a <button>. Keeps call-sites consistent.
 */
const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 select-none focus-visible:ring-2 focus-visible:ring-brand-500/60 disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-gradient-to-r from-brand-600 to-violet-600 text-white shadow-glow hover:shadow-[0_8px_40px_-8px_rgba(99,102,241,0.7)] hover:-translate-y-0.5',
  secondary:
    'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 hover:-translate-y-0.5 shadow-soft',
  outline:
    'border border-slate-300 text-slate-800 hover:border-brand-400 hover:text-brand-700 hover:bg-brand-50/60 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:bg-brand-500/10 dark:hover:text-brand-300',
  ghost:
    'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70',
  danger:
    'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-[0_8px_30px_-8px_rgba(225,29,72,0.5)] hover:-translate-y-0.5',
}

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  // Slight press feedback on every button
  const motionProps = {
    whileTap: { scale: 0.97 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
