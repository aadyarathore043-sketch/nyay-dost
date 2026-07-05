import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading.jsx'
import Container from '../common/Container.jsx'
import FeatureCard from '../ui/FeatureCard.jsx'
import { whyChooseUs } from '../../data/whyChooseUs.js'
import { staggerContainer, viewportOnce } from '../../utils/motion'

/**
 * WhyChooseUs — reasons to trust NyayaPath.
 * Reuses FeatureCard but tones alternate for visual rhythm.
 */
export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why NyayaPath"
          title="Built for the people who"
          highlight="need it most"
          subtitle="We obsess over clarity, honesty, and access — because the law should work for everyone, not just those who can afford it."
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
  )
}
