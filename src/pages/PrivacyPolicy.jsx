import { motion } from 'framer-motion'
import { ShieldCheck, FileText, Database, Cookie, UserCheck, Mail } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/common/Container.jsx'
import Disclaimer from '../components/common/Disclaimer.jsx'
import { GlassCard } from '../components/common/Card.jsx'
import { staggerContainer, fadeUp, viewportOnce } from '../utils/motion'

const sections = [
  {
    icon: Database,
    title: '1. Information we collect',
    body: [
      'When you use the AI Legal Assistant, we may ask for details such as your name, age, state, district, preferred language, email (optional), and a description of your legal problem.',
      'We collect only what is necessary to provide our educational guidance. We also collect basic technical information (such as device type and usage analytics) to improve the service.',
    ],
  },
  {
    icon: UserCheck,
    title: '2. How we use your information',
    body: [
      'Your information is used to generate relevant, plain-language educational content and to improve the quality of our guidance over time.',
      'We do not sell your personal information. Aggregated, anonymized data may be used for research or product improvement.',
    ],
  },
  {
    icon: ShieldCheck,
    title: '3. How we protect your data',
    body: [
      'We apply reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.',
      'Legal queries are sensitive — please avoid sharing information more identifying or detailed than necessary.',
    ],
  },
  {
    icon: Cookie,
    title: '4. Cookies & local storage',
    body: [
      'We use cookies and local storage (for example, to remember your theme preference). You can control cookies through your browser settings.',
      'Disabling certain cookies may affect how some features work.',
    ],
  },
  {
    icon: FileText,
    title: '5. Your rights',
    body: [
      'Depending on your location, you may have rights to access, correct, or request deletion of your personal information.',
      'To exercise these rights, contact us using the details below.',
    ],
  },
  {
    icon: Mail,
    title: '6. Contacting us',
    body: [
      'If you have questions about this Privacy Policy or how we handle your information, please contact us at hello@nyayapath.in.',
    ],
  },
]

/**
 * PrivacyPolicy — structured legal content with a clear disclaimer.
 * Marked "last updated" for credibility.
 */
export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        highlight="Policy"
        subtitle="How NyayaPath collects, uses, and protects your information."
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
