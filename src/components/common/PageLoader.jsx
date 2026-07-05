import Logo from './Logo.jsx'

/**
 * PageLoader — branded loading animation shown on initial app boot
 * and as a fallback during async work. Pure CSS animation (no deps).
 */
export default function PageLoader({ label = 'Loading NyayaPath…' }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
      <div className="relative">
        {/* Pulsing rings */}
        <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-brand-500/40" />
        <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-brand-500/40 [animation-delay:0.6s]" />
        <div className="relative animate-float">
          <Logo compact />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        {/* Shimmer progress bar */}
        <div className="relative h-1 w-40 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
        </div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
      </div>
    </div>
  )
}
