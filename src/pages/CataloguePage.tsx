import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Catalogue } from '../components/Catalogue';
import { Reveal } from '../components/Reveal';
import { useSeo } from '../lib/seo';
import { implementGroups, implementsList, products, tractorGroups, tractors } from '../data/products';
import { ArrowRight, WhatsApp } from '../components/Icons';
import { waLink } from '../data/site';

type View = 'tractors' | 'implements' | 'all';

const config = {
  tractors: {
    eyebrow: 'Our tractors',
    title: (
      <>
        TRACTORS BUILT
        <br />
        TO <span className="accent">WORK.</span>
      </>
    ),
    lead: 'Two tractor models, both supplied with a two-year warranty. Compare power, drive configuration and price, then enquire directly on WhatsApp.',
    figure: '02',
    figureLabel: 'Tractor models',
    crumbs: [{ label: 'Home', to: '/' }, { label: 'Our Tractors' }],
    seoTitle: 'Our Tractors — 110HP & YTO 75HP 4WD',
    seoDescription:
      'Browse the Zoomlion, YTO Tractors and Implements range: the 110HP Tractor at KSh 3,800,000 and the YTO 75HP 4WD at KSh 2,800,000 with a free 3DSCS Baldan plough and two-year warranty.',
  },
  implements: {
    eyebrow: 'Implements & equipment',
    title: (
      <>
        EQUIPMENT THAT
        <br />
        FINISHES <span className="accent">THE JOB.</span>
      </>
    ),
    lead: 'Ploughs, harrows, rotavators and walking tractors — matched to the tractor and the land you work.',
    figure: '07',
    figureLabel: 'Implements in range',
    crumbs: [{ label: 'Home', to: '/' }, { label: 'Implements & Equipment' }],
    seoTitle: 'Implements & Agricultural Equipment',
    seoDescription:
      'Agricultural implements from Zoomlion, YTO Tractors and Implements: Baldan ploughs, rotavators, mould boards, harrow ploughs and walking tractors, with prices in Kenyan Shillings.',
  },
  all: {
    eyebrow: 'Full catalogue',
    title: (
      <>
        EVERY MACHINE
        <br />
        IN <span className="accent">ONE PLACE.</span>
      </>
    ),
    lead: 'Search the complete Zoomlion, YTO Tractors and Implements catalogue by name, implement type or horsepower.',
    figure: '09',
    figureLabel: 'Products in catalogue',
    crumbs: [{ label: 'Home', to: '/' }, { label: 'All Products' }],
    seoTitle: 'Product Catalogue — Tractors & Implements',
    seoDescription:
      'The full Zoomlion, YTO Tractors and Implements catalogue: tractors, ploughs, harrows, rotavators and walking tractors with prices in Kenyan Shillings.',
  },
} as const;

export default function CataloguePage({ view }: { view: View }) {
  const current = config[view];
  const items = view === 'tractors' ? tractors : view === 'implements' ? implementsList : products;
  const groups = view === 'tractors' ? tractorGroups : view === 'implements' ? implementGroups : ['All'];

  useSeo(current.seoTitle, current.seoDescription);

  return (
    <>
      <PageHero
        eyebrow={current.eyebrow}
        title={current.title}
        lead={current.lead}
        crumbs={current.crumbs}
        asideFigure={current.figure}
        asideLabel={current.figureLabel}
      />

      <section className="section catalogue-section">
        <div className="container">
          <Catalogue items={items} groups={groups} showCategory={view === 'all'} />
        </div>
      </section>

      <section className="section section--tight catalogue-help">
        <div className="container catalogue-help__inner">
          <Reveal className="catalogue-help__copy">
            <p className="eyebrow">Not sure which machine?</p>
            <h2 className="section-title section-title--sm">
              TELL US WHAT YOU FARM. <span className="accent">WE&apos;LL TELL YOU WHAT YOU NEED.</span>
            </h2>
            <p className="lead">
              Share your land size, the crops you grow and the work you need to complete. Our team will
              recommend the tractor and implement combination that fits.
            </p>
          </Reveal>
          <div className="catalogue-help__actions">
            <Link to="/contact" className="btn btn--primary">
              Contact our team
              <ArrowRight size={15} />
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <WhatsApp size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
