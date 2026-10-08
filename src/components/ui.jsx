import { ArrowUpRight, Sprout } from 'lucide-react';
import { Link } from 'react-router';
export function SectionHeading({ eyebrow, title, text, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {text && <p className="section-description">{text}</p>}
      </div>
      {children}
    </div>
  );
}
export function TextLink({ to, children }) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function EmptyState({ title, children }) {
  return (
    <div className="empty-state">
      <span className="icon-box">
        <Sprout size={28} aria-hidden="true" />
      </span>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
