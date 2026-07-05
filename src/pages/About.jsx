import { motion } from 'framer-motion'
import { Target, HeartHandshake, Globe2, Sparkles } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/common/Container.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Button from '../components/common/Button.jsx'
import FeatureCard from '../components/ui/FeatureCard.jsx'
import { GlassCard } from '../components/common/Card.jsx'
import { whyChooseUs } from '../data/whyChooseUs.js'
import { stats } from '../data/stats.js'
import { staggerContainer, fadeUp, viewportOnce } from '../utils/motion'

const values = [
  {
    icon: Target,
    title: 'Clarity over complexity',
    description: 'We strip away jargon. If something can be said simply, we say it simply.',
    tone: 'brand',
  },
  {
    icon: HeartHandshake,
    title: 'Empathy first',
    description: 'Behind every query is a person in a stressful moment. We design with that in mind.',
    tone: 'accent',
  },
  {
    icon: Globe2,
    title: 'Access for all',
    description: 'Multilingual, mobile-first, and free to start. Geography and income shouldn’t be barriers.',
    tone: 'brand',
  },
]

/**
 * About — mission, story, values, stats, and a closing CTA.
 */
export default function About() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Our mission"
        title="Making the law"
        highlight="understandable"
        subtitle="NyayaPath exists because legal problems shouldn’t require a law degree to understand. We translate the complex into the clear, so every Indian can know their rights and their next step."
      />

      {/* Mission / story */}
      <section className="relative py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <span className="eyebrow mb-4"><Sparkles className="h-3.5 w-3.5" /> The story</span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                Justice shouldn’t be a <span className="text-gradient">privilege</span>
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                <p>
                  India has a powerful legal framework protecting its citizens — consumer rights,
                  women’s rights, labour rights, and more. But for most people, that framework feels
                  locked behind intimidating language, scattered resources, and expensive consultants.
                </p>
                <p>
                  NyayaPath was built to change that. We believe the first step toward justice is
                  understanding — knowing what happened to you, what your rights are, and what you
                  can do next. We’re not a law firm, and we never replace a qualified advocate. We’re
                  the bridge that gets you from confusion to clarity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <GlassCard key={s.label} className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="bg-gradient-to-r from-brand-600 via-violet-600 to-accent-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">{s.label}</span>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="relative py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="The values that"
            highlight="guide us"
            subtitle="Three principles shape every decision we make and every feature we build."
          />
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid gap-5 sm:grid-cols-3"
          >
            {values.map((v) => (
              <FeatureCard key={v.title} {...v} />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Why choose us (reused) */}
      <section className="relative py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why NyayaPath"
            title="Reasons people"
            highlight="trust us"
          />
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map((item, i) => (
              <FeatureCard key={item.title} {...item} tone={i % 2 === 0 ? 'brand' : 'accent'} />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Team placeholder */}
      <section className="relative py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Behind NyayaPath"
            title="A team that"
            highlight="gives a damn"
            subtitle="Legal experts, designers, and engineers united by one belief — access to legal understanding is a right, not a luxury."
          />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4">
            {['Legal', 'Design', 'Engineering', 'Research'].map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 rounded-3xl border border-slate-200/80 bg-white/70 p-6 text-center backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-600 text-xl font-bold text-white">
                  {role[0]}
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{role} Team</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">We’re hiring</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-4xl border border-brand-500/20 bg-gradient-to-br from-brand-700 via-violet-700 to-brand-800 px-6 py-14 text-center shadow-glow">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Ready to understand your situation?
            </h2>
            <Button to="/ai-assistant" size="lg" variant="secondary">
              <Sparkles className="h-5 w-5" /> Start Now
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  )
}
