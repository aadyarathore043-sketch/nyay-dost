import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/common/Container.jsx'
import Button from '../components/common/Button.jsx'
import FormField from '../components/common/FormField.jsx'
import { GlassCard } from '../components/common/Card.jsx'
import { staggerContainer, fadeUp, viewportOnce } from '../utils/motion'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@nyayapath.in', href: 'mailto:hello@nyayapath.in' },
  { icon: Phone, label: 'Phone', value: '+91 80 0000 0000', href: 'tel:+918000000000' },
  { icon: MapPin, label: 'Office', value: 'Bengaluru, India', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri, 10am–6pm IST', href: null },
]

/**
 * Contact — contact form (UI only) + contact details + map placeholder.
 */
export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Contact"
        title="We’d love to"
        highlight="hear from you"
        subtitle="Questions, feedback, partnership ideas, or just want to say hello? Reach out and we’ll get back to you."
      />

      <section className="relative py-10 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <GlassCard className="p-6 sm:p-8">
                {sent ? (
                  <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Message sent!</h2>
                    <p className="max-w-sm text-sm text-slate-600 dark:text-slate-400">
                      Thanks for reaching out. This is a demo form, so no message was actually sent — but in the real
                      product, our team would reply shortly.
                    </p>
                    <Button onClick={() => setSent(false)} variant="outline" size="sm">
                      Send another
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-violet-600 text-white shadow-glow">
                        <MessageSquare className="h-5 w-5" />
                      </span>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Send us a message</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                      <FormField id="c-name" label="Name" required placeholder="Your name" />
                      <FormField id="c-email" label="Email" type="email" required placeholder="you@example.com" />
                      <FormField id="c-subject" label="Subject" required placeholder="How can we help?" className="sm:col-span-2" />
                      <FormField
                        id="c-message"
                        label="Message"
                        as="textarea"
                        required
                        placeholder="Write your message…"
                        className="sm:col-span-2"
                      />
                      <div className="sm:col-span-2 flex justify-end">
                        <Button type="submit" size="lg">
                          <Send className="h-4 w-4" /> Send message
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </GlassCard>
            </motion.div>

            {/* Contact details */}
            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-4 lg:col-span-2"
            >
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <GlassCard className="flex items-center gap-4 p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{value}</p>
                    </div>
                  </GlassCard>
                )
                return href ? (
                  <motion.a key={label} href={href} variants={fadeUp}>{content}</motion.a>
                ) : (
                  <motion.div key={label} variants={fadeUp}>{content}</motion.div>
                )
              })}

              {/* Map placeholder */}
              <motion.div variants={fadeUp} className="relative mt-2 flex-1 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                <div className="absolute inset-0 bg-grid opacity-60" />
                <div className="relative flex h-full min-h-[180px] flex-col items-center justify-center gap-2 text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow">
                    <MapPin className="h-6 w-6" />
                  </span>
                  < risen className="text-sm font-semibold text-slate-700 dark:text-slate-200">Bengaluru, India</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Map preview placeholder</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </PageTransition>
  )
}
