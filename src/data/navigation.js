/**
 * Central navigation config. Navbar and Footer both read from this so
 * links never drift out of sync.
 */
export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'AI Assistant', to: '/ai-assistant' },
  { label: 'Business Hub', to: '/business-hub' },
  { label: 'Emergency Help', to: '/emergency' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav = {
  Platform: [
    { label: 'AI Legal Assistant', to: '/ai-assistant' },
    { label: 'Business & Startup Hub', to: '/business-hub' },
    { label: 'Emergency Help', to: '/emergency' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
  ],
}

export const socialLinks = [
  { label: 'Twitter', href: '#', icon: 'twitter' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
]
