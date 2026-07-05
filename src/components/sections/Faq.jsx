import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading.jsx'
import Container from '../common/Container.jsx'
import FaqAccordion from '../ui/FaqAccordion.jsx'
import { faqs } from '../../data/faqs.js'
import { fadeUp, viewportOnce } from '../../utils/motion'

/**
 * Faq — frequently asked questions section.
 */
export default function Faq() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Good to know"
          title="Questions, "
          highlight="answered"
          subtitle="The essentials about what NyayaPath is — and importantly, what it isn’t."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12"
        >
          <FaqAccordion items={faqs} />
        </motion.div>
      </Container>
    </section>
  )
}
