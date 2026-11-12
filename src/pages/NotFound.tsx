import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo';
import { ArrowRight } from '../components/Icons';

export default function NotFound() {
  useSeo('Page Not Found', 'The page you were looking for could not be found.');

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="eyebrow">404</p>
        <h1 className="not-found__title">
          THIS PAGE ISN&apos;T
          <br />
          <span className="accent">IN THE YARD.</span>
        </h1>
        <p className="lead">
          The page you were looking for has moved or no longer exists. Head back to the machinery, or
          get in touch and we will point you the right way.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            Back to home
            <ArrowRight size={15} />
          </Link>
          <Link to="/catalogue" className="btn btn--ghost">
            Browse the catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
