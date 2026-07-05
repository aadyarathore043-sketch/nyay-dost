import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import Disclaimer from '../common/Disclaimer.jsx'
import { fadeUp, viewportOnce } from '../../utils/motion'

/**
 * CTA — closing call-to-action band before the footer.
 */
export default function CTA() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-4xl border border-brand-500/20 bg-gradient-to-br from-brand-700 via-violet-700 to-brand-800 px-6 py-16 text-center shadow-glow sm:px-12"
        >
          {/* Decorative orbs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.5) 0, transparent 35%), radial-gradient(circle at 85% 80%, rgba(6,182,212,0.5) 0, transparent 35%)',
            }}
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <Sparkles className="h-7 w-7 text-white" />
            </span>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Don’t let confusion cost you.
              <br />
              <span className="text-white/80">Find your next step today.</span>
            </h2>
            <p className="max-w-xl text-base text-white/80 sm:text-lg">
              Describe your situation in your own words and get a clear, plain-language breakdown in
              seconds — free to start.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button to="/ai-assistant" size="lg" variant="secondary">
                <Sparkles className="h-5 w-5" />
                Start Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/contact" size="lg" variant="outline" className="!border-white/30 !text-white hover:!bg-white/10 hover:!text-white">
                Talk to us
              </Button>
            </div>

            <div className="mt-4 w-full max-w-xl rounded-2xl bg-white/10 p-4 text-left backdrop-blur-sm">
              <Disclaimer variant="compact" className="!text-white/80">
                Educational legal information only — NyayaPath is not a law firm or a substitute for a qualified lawyer.
              </Disclaimer>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
