import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'

// Lazy-load every page so each route is a separate chunk — fast initial load
// and the branded <PageLoader> shows while a chunk is being fetched.
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const AILegalAssistant = lazy(() => import('./pages/AILegalAssistant.jsx'))
const EmergencyHelp = lazy(() => import('./pages/EmergencyHelp.jsx'))
const BusinessHub = lazy(() => import('./pages/BusinessHub.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

/**
 * App — declares the route table.
 * Every page renders inside the shared <Layout> (Navbar + Footer).
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai-assistant" element={<AILegalAssistant />} />
        <Route path="/emergency" element={<EmergencyHelp />} />
        <Route path="/business-hub" element={<BusinessHub />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
