import {
  Building2,
  GitBranch,
  FileText,
  FileLock2,
  Users,
  Receipt,
  Lightbulb,
  BadgeCheck,
  Copyright,
  ClipboardCheck,
} from 'lucide-react'

/**
 * Business & Startup Legal Hub cards.
 * Each card represents a topic; `to` would later route to a detail page.
 */
export const businessCards = [
  {
    icon: Building2,
    title: 'Company Registration',
    description: 'How to incorporate a private limited company, LLP, or sole proprietorship in India.',
    tone: 'brand',
    tag: 'Setup',
  },
  {
    icon: GitBranch,
    title: 'Choosing Business Structure',
    description: 'Compare structures — liability, taxation, compliance, and ownership trade-offs.',
    tone: 'accent',
    tag: 'Foundations',
  },
  {
    icon: FileText,
    title: 'Contracts',
    description: 'Essentials of valid contracts, key clauses, and common pitfalls to avoid.',
    tone: 'brand',
    tag: 'Agreements',
  },
  {
    icon: FileLock2,
    title: 'NDAs',
    description: 'Non-disclosure agreements — when you need them and what they must contain.',
    tone: 'accent',
    tag: 'Agreements',
  },
  {
    icon: Users,
    title: 'Employment',
    description: 'Employment law basics: offer letters, PF, gratuity, and worker rights.',
    tone: 'brand',
    tag: 'People',
  },
  {
    icon: Receipt,
    title: 'GST Basics',
    description: 'GST registration thresholds, filing cycles, input credit, and invoicing rules.',
    tone: 'accent',
    tag: 'Tax',
  },
  {
    icon: Lightbulb,
    title: 'Intellectual Property',
    description: 'Protecting ideas — the difference between patents, designs, and trade secrets.',
    tone: 'brand',
    tag: 'IP',
  },
  {
    icon: BadgeCheck,
    title: 'Trademark',
    description: 'Registering and defending your brand name and logo in India.',
    tone: 'accent',
    tag: 'IP',
  },
  {
    icon: Copyright,
    title: 'Copyright',
    description: 'Protecting original creative work — software, content, designs, and music.',
    tone: 'brand',
    tag: 'IP',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Checklist',
    description: 'A startup’s essential legal & regulatory compliance checklist, in one place.',
    tone: 'accent',
    tag: 'Compliance',
  },
]
