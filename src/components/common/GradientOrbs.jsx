/**
 * GradientOrbs — decorative animated background blobs.
 * Place inside a `relative` parent to give any section a soft, premium
 * gradient-mesh feel without a heavy image asset.
 *
 * Props:
 *  - className: extra positioning for the wrapper
 *  - variant: 'default' | 'subtle'
 */
export default function GradientOrbs({ className = '', variant = 'default' }) {
  const opacity = variant === 'subtle' ? 'opacity-30' : 'opacity-50'
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div
        className={`absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl dark:bg-brand-600/30 ${opacity} animate-float`}
      />
      <div
        className={`absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-400/40 blur-3xl dark:bg-violet-600/30 ${opacity} animate-float [animation-delay:1.5s]`}
      />
      <div
        className={`absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-300/40 blur-3xl dark:bg-accent-600/25 ${opacity} animate-float [animation-delay:3s]`}
      />
    </div>
  )
}
