import { ShieldAlert, X } from 'lucide-react'
import { useState } from 'react'

/**
 * Disclaimer — the trust & legal disclaimer shown throughout the site.
 * Reinforces that NyayaPath provides educational information only and is
 * NOT a law firm and NOT a substitute for a lawyer.
 *
 * Variants:
 *  - inline:   bordered alert box (used in result cards, pages)
 *  - banner:   dismissible top strip
 *  - compact:  one-line footnote (used in footer)
 */
export default function Disclaimer({ variant = 'inline', className = '', children }) {
  const [dismissed, setDismissed] = useState(false)

  if (variant === 'compact') {
    return (
      <p className={`text-xs leading-relaxed text-slate-500 dark:text-slate-500 ${className}`}>
        {children ||
          'NyayaPath provides educational legal information only and is not a law firm or a substitute for a qualified lawyer.'}
      </p>
    )
  }

  if (variant === 'banner' && dismissed) return null

  if (variant === 'banner') {
    return (
      <div
        className={`relative w-full bg-gradient-to-r from-brand-700 via-violet-700 to-brand-700 px-4 py-2 text-center text-xs font-medium text-white sm:text-sm ${className}`}
      >
        <span className="inline-flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 shrink-0" />
          Educational legal information only — NyayaPath is not a law firm and not a substitute for a lawyer.
        </span>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss disclaimer"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  // default: inline alert box
  return (
    <div
      className={`flex gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200 ${className}`}
      role="note"
    >
      <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" />
      <div className="space-y-1">
        <p className="font-semibold">Important disclaimer</p>
        <p className="text-amber-800/90 dark:text-amber-200/90">
          {children ||
            'This is educational legal information, not legal advice. NyayaPath is not a law firm and is not a substitute for a qualified lawyer. For matters with serious consequences, please consult a licensed advocate.'}
        </p>
      </div>
    </div>
  )
}
