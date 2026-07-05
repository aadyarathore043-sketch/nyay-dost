import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Scale, ShieldCheck, Phone } from 'lucide-react'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import Disclaimer from '../common/Disclaimer.jsx'
import GradientOrbs from '../common/GradientOrbs.jsx'

/**
 * Hero — the landing page hero section.
 * Headline ("Know Your Rights. Know Your Next Step."), mission, CTAs,
 * a stylized illustration placeholder, trust badges, and a disclaimer.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <GradientOrbs />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
            className="flex flex-col items-start gap-6"
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="eyebrow"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Legal clarity for every Indian
            </motion.span>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Know Your Rights.
              <br />
              <span className="text-gradient text-shimmer">Know Your Next Step.</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              NyayaPath turns confusing legal problems into clear, simple guidance. Understand your
              rights, find government resources, and know exactly where to begin — no law degree
              required.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button to="/ai-assistant" size="lg">
                <Sparkles className="h-5 w-5" />
                Start Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/emergency" size="lg" variant="outline">
                <Phone className="h-4 w-4" />
                Emergency Help
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-500" /> Private &amp; secure
              </span>
              <span className="inline-flex items-center gap-2">
                <Scale className="h-4 w-4 text-brand-500" /> Grounded in Indian law
              </span>
            </motion.div>
          </motion.div>

          {/* Right: illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Hero disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 max-w-3xl"
        >
          <Disclaimer variant="compact" />
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * HeroIllustration — a stylized placeholder "illustration" built from
 * pure CSS/SVG so there's no image asset dependency. Represents the
 * "path" from a confusing problem to a clear next step.
 */
function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Glow halo */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-brand-400/30 via-violet-400/30 to-accent-400/30 blur-3xl" />

      {/* Glass panel */}
      <div className="glass relative flex h-full flex-col justify-between rounded-[2.5rem] p-7 shadow-glow">
        {/* Top: problem chip */}
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-rose-200/70 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300">
            Confusing problem
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-violet-600 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
        </div>

        {/* Middle: dotted path SVG */}
        <div className="flex flex-1 items-center justify-center py-4">
          <svg viewBox="0 0 200 120" className="h-32 w-full">
            <defs>
              <linearGradient id="path-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <path
              d="M20 100 Q 70 100 70 60 T 130 40 T 180 20"
              fill="none"
              stroke="url(#path-grad)"
              strokeWidth="3"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
            <circle cx="20" cy="100" r="7" fill="#f43f5e" />
            <circle cx="180" cy="20" r="7" fill="#06b6d4" />
          </svg>
        </div>

        {/* Bottom: clear next steps */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Clear next step
          </p>
          {['File a complaint with proof', 'Contact the right authority'].map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.2 }}
              className="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/60 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700/70 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                <ShieldCheck className="h-3 w-3" />
              </span>
              {s}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating accent badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-3 top-10 hidden rounded-2xl border border-slate-200/70 bg-white/90 px-3 py-2 text-xs font-semibold text-brand-700 shadow-soft backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/90 dark:text-brand-300 sm:block"
      >
        ⚖️ Rights explained
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-3 bottom-12 hidden rounded-2xl border border-slate-200/70 bg-white/90 px-3 py-2 text-xs font-semibold text-accent-700 shadow-soft backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/90 dark:text-accent-300 sm:block"
      >
        🛡️ Verified resources
      </motion.div>
    </div>
  )
}
