import {
  MessageSquareText,
  ShieldCheck,
  Building2,
  Siren,
  BookOpen,
  Languages,
} from 'lucide-react'

/**
 * Feature cards shown on the landing page and referenced elsewhere.
 * Icons are lucide components so they render as crisp SVGs.
 */
export const features = [
  {
    icon: MessageSquareText,
    title: 'Plain-language explanations',
    description:
      'Describe your situation in your own words. NyayaPath breaks complex legal jargon into simple, actionable language anyone can follow.',
    tone: 'brand',
  },
  {
    icon: ShieldCheck,
    title: 'Know your rights',
    description:
      'Understand the rights and protections you have under Indian law — for consumers, women, tenants, employees, and citizens.',
    tone: 'accent',
  },
  {
    icon: Building2,
    title: 'Business & startup hub',
    description:
      'From company registration to GST and trademarks — a structured guide for founders navigating India’s business laws.',
    tone: 'brand',
  },
  {
    icon: Siren,
    title: 'Emergency help',
    description:
      'Instant access to verified national helplines — police, ambulance, women’s, cybercrime, child, and consumer support.',
    tone: 'danger',
  },
  {
    icon: BookOpen,
    title: 'Government resources',
    description:
      'Curated links to official portals, schemes, and complaint mechanisms so you always reach the right authority.',
    tone: 'accent',
  },
  {
    icon: Languages,
    title: 'Multilingual access',
    description:
      'India speaks many languages. Choose your preferred language to understand legal guidance in a way that feels native.',
    tone: 'brand',
  },
]
