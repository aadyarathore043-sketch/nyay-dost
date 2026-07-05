/**
 * Container — centers content with consistent max-width and horizontal padding.
 * Use across every section so spacing stays uniform.
 */
export default function Container({ className = '', children }) {
  return <div className={`container-px ${className}`}>{children}</div>
}
