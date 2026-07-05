import { Shield, Ambulance, Heart, Globe, Baby, ShoppingCart } from 'lucide-react'

/**
 * National emergency & helpline numbers for India.
 * These are real, widely-published numbers; tone controls the card color.
 */
export const emergencyContacts = [
  {
    icon: Shield,
    name: 'Police',
    number: '100',
    description: 'Crime, safety threats, immediate law enforcement assistance.',
    tone: 'brand',
    available: '24/7',
  },
  {
    icon: Ambulance,
    name: 'Ambulance',
    number: '108',
    description: 'Medical emergencies requiring urgent ambulance and medical response.',
    tone: 'danger',
    available: '24/7',
  },
  {
    icon: Heart,
    name: 'Women Helpline',
    number: '1091',
    description: 'Support and rescue for women in distress, anywhere in India.',
    tone: 'accent',
    available: '24/7',
  },
  {
    icon: Globe,
    name: 'Cybercrime',
    number: '1930',
    description: 'Report online fraud, UPI scams, phishing, and cybercrime incidents.',
    tone: 'brand',
    available: '24/7',
  },
  {
    icon: Baby,
    name: 'Child Helpline',
    number: '1098',
    description: 'Children in difficulty, child abuse, and child protection support.',
    tone: 'accent',
    available: '24/7',
  },
  {
    icon: ShoppingCart,
    name: 'Consumer Helpline',
    number: '1915',
    description: 'Consumer complaints, defective goods, and unfair trade practices.',
    tone: 'brand',
    available: '24/7',
  },
]
