import { motion } from 'framer-motion'
import { pageTransition } from '../../utils/motion'

/**
 * PageTransition — wraps page content to animate route changes
 * (fade + slight vertical slide). Drop one at the root of each page.
 */
export default function PageTransition({ children, className = '' }) {
  return (
    <motion.div {...pageTransition} className={className}>
      {children}
    </motion.div>
  )
}
