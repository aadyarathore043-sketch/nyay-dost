import { Link } from 'react-router-dom'

/**
 * Logo — brand lockup (mark + wordmark).
 * The mark is an inline SVG (no external asset needed) representing the
 * "N" of NyayaPath within a gradient rounded square.
 *
 * Props:
 *  - compact: renders mark only (good for tight spaces)
 *  - to:      link target (defaults to home)
 */
export default function Logo({ compact = false, to = '/', className = '' }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="NyayaPath home">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 via-violet-600 to-accent-500 shadow-glow transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 64 64" className="h-5 w-5" aria-hidden="true">
          <path
            d="M18 46 L18 18 L32 38 L32 18 M44 18 L44 46"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>

      {!compact && (
        <span className="font-display text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Nyaya<span className="text-gradient">Path</span>
        </span>
      )}
    </Link>
  )
}
