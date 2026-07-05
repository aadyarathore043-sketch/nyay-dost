/**
 * FormField — accessible, consistently styled label + control wrapper.
 * Supports text, number, select, and textarea via the `as` prop.
 *
 * Props:
 *  - id, label, required, hint, error
 *  - as: 'input' | 'textarea' | 'select'
 *  - type: input type (when as='input')
 *  - children: <option>s when as='select'
 */
export default function FormField({
  id,
  label,
  required = false,
  hint,
  error,
  as = 'input',
  type = 'text',
  className = '',
  children,
  ...props
}) {
  const baseControl =
    'w-full rounded-xl border bg-white/70 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white dark:bg-slate-900/60 dark:text-slate-100 dark:focus:bg-slate-900 ' +
    (error
      ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30'
      : 'border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700')

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
        {required ? (
          <span className="ml-0.5 text-rose-500">*</span>
        ) : (
          <span className="ml-1 text-xs font-normal text-slate-400">(optional)</span>
        )}
      </label>

      {as === 'textarea' ? (
        <textarea id={id} className={`${baseControl} min-h-[140px] resize-y`} {...props} />
      ) : as === 'select' ? (
        <select id={id} className={baseControl} {...props}>
          {children}
        </select>
      ) : (
        <input id={id} type={type} className={baseControl} {...props} />
      )}

      {hint && !error && <p className="text-xs text-slate-500 dark:text-slate-400">{hint}</p>}
      {error && <p className="text-xs font-medium text-rose-600 dark:text-rose-400">{error}</p>}
    </div>
  )
}
