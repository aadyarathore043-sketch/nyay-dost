import { motion } from 'framer-motion'
import { ArrowRight, Building2, Receipt, BadgeCheck } from 'lucide-react'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/motion'

// A few representative hub topics for the preview
const previewTopics = [
  { icon: Building2, label: 'Company Registration' },
  { icon: Receipt, label: 'GST Basics' },
  { icon: BadgeCheck, label: 'Trademark' },
]

/**
 * BusinessHubPreview — a two-column teaser for the Business & Startup Hub.
 * Links to the full hub page.
 */
export default function BusinessHubPreview() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <SectionHeading
              align="left"
              eyebrow="For founders"
              title="A legal command center for"
              highlight="startups"
              subtitle="From choosing a business structure to GST, contracts, and trademarks — the Business & Startup Hub gives founders a clear map of what to do, and when."
            />
            <motion.ul
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 flex flex-col gap-3"
            >
              {previewTopics.map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className="inline-flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8">
              <Button to="/business-hub" size="lg" variant="secondary">
                Explore the Hub
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right: stylized dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-4xl p-2 shadow-glow">
              <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-900/70">
                {/* Mock window chrome */}
                <div className="mb-4 flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                {/* Mock dashboard tiles */}
                <div className="grid grid-cols-2 gap-3">
                  {['Company', 'Contracts', 'GST', 'Trademarks', 'Employment', 'Compliance'].map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-4 dark:border-slate-800 dark:from-slate-800/60 dark:to-slate-900"
                    >
                      <div className="mb-3 h-2 w-10 rounded-full bg-brand-300 dark:bg-brand-600/50" />
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{t}</p>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
                      <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-slate-200 dark:bg-slate-700" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating chip */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-2 text-xs font-semibold text-accent-700 shadow-soft backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/90 dark:text-accent-300 sm:block"
            >
              10 topics · 1 checklist
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
