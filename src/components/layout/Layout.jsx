import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from '../common/ScrollToTop.jsx'
import PageLoader from '../common/PageLoader.jsx'

/**
 * Layout — the app shell shared by every route.
 * Holds the persistent Navbar + Footer and renders the active route
 * via <Outlet />. ScrollToTop resets scroll on navigation, and Suspense
 * shows the branded loader while lazy chunks load.
 */
export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      {/* Faint grid texture behind everything */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-grid" aria-hidden="true" />

      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
