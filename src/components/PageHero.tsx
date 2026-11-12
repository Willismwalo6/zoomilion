import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  crumbs?: readonly Crumb[];
  asideFigure?: string;
  asideLabel?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, lead, crumbs, asideFigure, asideLabel, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <div className="page-hero__copy">
          {crumbs && (
            <nav className="crumbs" aria-label="Breadcrumb">
              {crumbs.map((crumb, index) => (
                <span key={`${crumb.label}-${index}`} className="crumbs__item">
                  {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span className="current">{crumb.label}</span>}
                  {index < crumbs.length - 1 && <span className="sep">/</span>}
                </span>
              ))}
            </nav>
          )}
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-hero__title">{title}</h1>
          <p className="lead">{lead}</p>
          {children}
        </div>
        {(asideFigure || asideLabel) && (
          <div className="page-hero__aside">
            {asideFigure && <span className="figure">{asideFigure}</span>}
            {asideLabel && <span className="label">{asideLabel}</span>}
          </div>
        )}
      </div>
    </section>
  );
}
