import { motion } from 'framer-motion'
import { Home, Sparkles, Compass, ArrowLeft } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition.jsx'
import Container from '../components/common/Container.jsx'
import Button from '../components/common/Button.jsx'
import GradientOrbs from '../components/common/GradientOrbs.jsx'
import { fadeUp } from '../utils/motion'

/**
 * NotFound — polished 404 page with helpful navigation back.
 */
export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <GradientOrbs />
        <Container className="relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            {/* Big 404 */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[7rem] font-extrabold leading-none tracking-tighter sm:text-[10rem]"
            >
              <span className="text-gradient">404</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="-mt-4 flex items-center gap-2 text-brand-600 dark:text-brand-400">
              <Compass className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Lost the path</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-5 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              This page took a wrong turn
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 max-w-md text-base text-slate-600 dark:text-slate-400">
              The page you’re looking for doesn’t exist or may have moved. Let’s get you back on the right path.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button to="/" size="lg">
                <Home className="h-4 w-4" /> Back home
              </Button>
              <Button to="/ai-assistant" size="lg" variant="outline">
                <Sparkles className="h-4 w-4" /> Try the AI Assistant
              </Button>
            </motion.div>

            <motion.button
              variants={fadeUp}
              onClick={() => window.history.back()}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
            >
              <ArrowLeft className="h-4 w-4" /> Go back to the previous page
            </motion.button>
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  )
}
