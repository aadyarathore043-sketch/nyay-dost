import PageTransition from '../components/layout/PageTransition.jsx'
import Hero from '../components/sections/Hero.jsx'
import Features from '../components/sections/Features.jsx'
import Stats from '../components/sections/Stats.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'
import HowItWorks from '../components/sections/HowItWorks.jsx'
import BusinessHubPreview from '../components/sections/BusinessHubPreview.jsx'
import EmergencyPreview from '../components/sections/EmergencyPreview.jsx'
import Faq from '../components/sections/Faq.jsx'
import CTA from '../components/sections/CTA.jsx'

/**
 * Home — the NyayaPath landing page.
 * Composes the full narrative: hero → features → stats → why → how →
 * business preview → emergency preview → FAQ → CTA.
 */
export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Features />
      <Stats />
      <WhyChooseUs />
      <HowItWorks />
      <BusinessHubPreview />
      <EmergencyPreview />
      <Faq />
      <CTA />
    </PageTransition>
  )
}
