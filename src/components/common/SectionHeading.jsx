import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../utils/motion'

/**
 * SectionHeading — consistent section headers across the site.
 * Renders an optional eyebrow, a title (with an optional gradient word),
 * and a subtitle. Animates in on scroll.
 *
 * Props:
 *  - eyebrow:    small label above the title
 *  - title:      main heading (string)
 *  - highlight:  trailing word(s) rendered with the brand gradient
 *  - subtitle:   supporting paragraph
 *  - align:      'left' | 'center'
 *  - as:         heading tag (defaults to h2)
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  as: Tag = 'h2',
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
      )}

      <Tag className="text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </Tag>

      {subtitle && (
        <p className="text-base text-slate-600 dark:text-slate-400 sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}
