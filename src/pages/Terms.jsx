import { motion } from 'framer-motion'
import { FileText, AlertTriangle, Ban, Scale, RefreshCw, Mail } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/common/Container.jsx'
import Disclaimer from '../components/common/Disclaimer.jsx'
import { GlassCard } from '../components/common/Card.jsx'
import { staggerContainer, fadeUp, viewportOnce } from '../utils/motion'

const sections = [
  {
    icon: FileText,
    title: '1. Acceptance of terms',
    body: [
      'By accessing or using NyayaPath, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the service.',
    ],
  },
  {
    icon: AlertTriangle,
    title: '2. Educational information only',
    body: [
      'NyayaPath provides general educational legal information, not legal advice. The content is for informational purposes and is not a substitute for professional legal advice from a qualified advocate.',
      'We are not a law firm. We do not provide legal representation, and using NyayaPath does not create a lawyer-client relationship.',
    ],
  },
  {
    icon: Scale,
    title: '3. No guarantee of accuracy',
    body: [
      'While we strive for accuracy, laws change and legal situations are unique. You should verify all information with official sources or a licensed lawyer before taking action.',
      'We are not liable for any decisions made based on information provided by NyayaPath.',
    ],
  },
  {
    icon: Ban,
    title: '4. Acceptable use',
    body: [
      'You agree not to misuse the service, including attempting to harm it, use it for unlawful purposes, or submit false/misleading information.',
      'We may suspend or terminate access for violations of these terms.',
    ],
  },
  {
    icon: RefreshCw,
    title: '5. Changes to these terms',
    body: [
      'We may update these Terms from time to time. Continued use of NyayaPath after changes constitutes acceptance of the updated terms.',
    ],
  },
  {
    icon: Mail,
    title: '6. Contact',
    body: ['For questions about these Terms, contact us at hello@nyayapath.in.'],
  },
]

/**
 * Terms — Terms & Conditions page with the legal disclaimer reinforced.
 */
export default function Terms() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Legal"
        title="Terms &"
        highlight="Conditions"
        subtitle="The rules and expectations for using NyayaPath — please read carefully."
      />

      <section className="relative pb-20">
        <Container className="max-w-4xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-8 text-sm text-slate-500 dark:text-slate-400"
          >
            Last updated: July 2026
          </motion.p>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {sections.map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={fadeUp}>
                <GlassCard className="p-6 sm:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h2>
                  </div>
                  <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8">
            <Disclaimer />
          </div>
        </Container>
      </section>
    </PageTransition>
  )
}
