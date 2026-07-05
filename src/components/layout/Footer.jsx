import { Link } from 'react-router-dom'
import { Mail, MapPin, Twitter, Linkedin, Instagram, Scale } from 'lucide-react'
import Logo from '../common/Logo.jsx'
import Container from '../common/Container.jsx'
import Disclaimer from '../common/Disclaimer.jsx'
import { footerNav } from '../../data/navigation.js'

// Map string keys (from data) to lucide icon components
const socialIcons = { twitter: Twitter, linkedin: Linkedin, instagram: Instagram }

/**
 * Footer — professional multi-column footer.
 * Includes brand blurb, link columns, contact info, social, and a
 * persistent compact disclaimer (legal trust).
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-slate-200/70 bg-white/50 dark:border-slate-800/70 dark:bg-slate-950/50">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand + mission */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              NyayaPath helps people across India understand legal problems in simple language —
              your rights, your next steps, and where to begin. Built for clarity, trust, and access.
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <a href="mailto:hello@nyayapath.in" className="inline-flex items-center gap-2 hover:text-brand-600 dark:hover:text-brand-400">
                <Mail className="h-4 w-4" /> hello@nyayapath.in
              </a>
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Lucknow, India
              </p>
            </div>

            {/* Social */}
            <div className="mt-5 flex gap-2">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:text-brand-400"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {Object.entries(footerNav).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{heading}</h4>
                <ul className="mt-4 space-y-2.5">
                  {links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer strip */}
        <div className="mt-12 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-4 dark:border-amber-500/20 dark:bg-amber-500/5">
          <Disclaimer variant="compact" />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-6 text-sm text-slate-500 dark:border-slate-800/70 dark:text-slate-400 sm:flex-row">
          <p className="inline-flex items-center gap-2">
            <Scale className="h-4 w-4 text-brand-500" />
            © {year} NyayaPath. Educational legal information for India.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-brand-600 dark:hover:text-brand-400">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-600 dark:hover:text-brand-400">Terms</Link>
            <Link to="/contact" className="hover:text-brand-600 dark:hover:text-brand-400">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
