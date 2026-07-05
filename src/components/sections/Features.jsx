import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading.jsx'
import Container from '../common/Container.jsx'
import FeatureCard from '../ui/FeatureCard.jsx'
import { features } from '../../data/features.js'
import { staggerContainer, viewportOnce } from '../../utils/motion'

/**
 * Features — the "What we do" feature grid.
 */
export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to"
          highlight="navigate the law"
          subtitle="NyayaPath brings clarity, resources, and direction together — so legal problems feel less overwhelming."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
