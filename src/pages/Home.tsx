import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { Reveal } from '../components/Reveal';
import { useSeo } from '../lib/seo';
import { implementsList, tractors } from '../data/products';
import { whyChoose } from '../data/content';
import { formatKsh, waLink } from '../data/site';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cog,
  Gauge,
  Layers,
  Shield,
  Tag,
  Wrench,
  WhatsApp,
} from '../components/Icons';

const iconMap = { gauge: Gauge, tag: Tag, shield: Shield, layers: Layers, wrench: Wrench } as const;

const marqueeItems = [
  'Tractors',
  'Agricultural implements',
  'Spare parts',
  'Two-year warranty',
  'Free plough offer',
  'Farming equipment',
  'YTO · 75HP 4WD',
];

const offer = {
  name: 'YTO 75HP 4WD Tractor',
  price: 2_800_000,
  href: '/products/yto-75hp-4wd-tractor',
};

export default function Home() {
  useSeo(
    'Zoomlion, YTO Tractors and Implements — Powering Agriculture. Driving Progress.',
    'Powerful tractors, dependable agricultural machinery and quality farming equipment. Explore the YTO 75HP 4WD with a free Baldan plough and two-year warranty cover.',
  );

  const featuredImplements = implementsList.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Value marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div className="marquee__group" key={copy}>
              {marqueeItems.map((item) => (
                <span key={`${copy}-${item}`} className="marquee__item">
                  {item}
                  <span className="marquee__dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <section className="section manifesto">
        <div className="container manifesto__inner">
          <Reveal className="manifesto__copy">
            <p className="eyebrow">The Zoomlion standard</p>
            <h2 className="section-title">
              MACHINERY THAT EARNS
              <br />
              ITS PLACE <span className="accent">IN THE FIELD.</span>
            </h2>
            <p className="lead">
              From primary tillage to the last pass before planting, our range is chosen to do real
              work on real farms — and backed with the support to keep it working.
            </p>
            <Link to="/about" className="link-arrow">
              About Zoomlion, YTO Tractors and Implements
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>

          <div className="manifesto__points">
            {[
              {
                figure: '110',
                unit: 'HP',
                title: 'Tractor power',
                text: 'The 110HP Tractor leads the range for demanding field operations.',
              },
              {
                figure: '02',
                unit: 'YEARS',
                title: 'Warranty cover',
                text: 'Two-year warranty on the specified tractor models.',
              },
              {
                figure: '09',
                unit: 'PRODUCTS',
                title: 'Tractors & implements',
                text: 'A complete package from tractor to plough, harrow and rotavator.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} className="manifesto__point" delay={(index % 4) as 0 | 1 | 2 | 3}>
                <div className="manifesto__figure">
                  <span className="manifesto__number">{item.figure}</span>
                  <span className="manifesto__unit">{item.unit}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tractors */}
      <section className="section section--alt fleet">
        <div className="container">
          <div className="section-head">
            <Reveal className="section-head__copy">
              <p className="eyebrow">Our tractors</p>
              <h2 className="section-title">
                POWER FOR EVERY
                <br />
                <span className="accent">OPERATION.</span>
              </h2>
              <p className="lead">
                Two tractors, one standard of support. Both models are supplied with a two-year
                warranty, and the YTO 75HP 4WD arrives with a plough included.
              </p>
            </Reveal>
            <Reveal className="section-head__aside" delay={2}>
              <Link to="/tractors" className="link-arrow">
                View all tractors
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="fleet__grid">
            {tractors.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Special offer */}
      <section className="offer-band" aria-labelledby="offer-heading">
        <div className="offer-band__bg" aria-hidden="true">
          <img src="/images/offer-bg.jpg" alt="" loading="lazy" />
        </div>
        <div className="container offer-band__inner">
          <Reveal className="offer-band__copy">
            <p className="eyebrow">Special offer</p>
            <h2 id="offer-heading" className="offer-band__title">
              YTO 75HP <span className="accent">4WD</span>
            </h2>
            <p className="offer-band__price">{formatKsh(offer.price)}</p>
            <ul className="offer-band__list">
              <li>
                <Check size={15} /> Bonus offer: free 3DSCS Baldan plough
              </li>
              <li>
                <Shield size={15} /> Two-year warranty
              </li>
              <li>
                <Gauge size={15} /> 75 horsepower, four-wheel drive
              </li>
            </ul>
            <div className="offer-band__actions">
              <Link to={offer.href} className="btn btn--primary">
                Claim this offer
                <ArrowRight size={15} />
              </Link>
              <a
                href={waLink(
                  'Hello Zoomlion, YTO Tractors and Implements, I am interested in the YTO 75HP 4WD Tractor offer with the free 3DSCS Baldan Plough. Kindly provide more information and details about purchasing.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <WhatsApp size={16} />
                Enquire on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal className="offer-band__card" delay={2}>
            <span className="offer-band__tag">
              <Tag size={13} /> Free plough included
            </span>
            <p className="offer-band__card-label">Bonus implement</p>
            <p className="offer-band__card-title">3DSCS Baldan Plough</p>
            <div className="offer-band__card-foot">
              <span>Worth</span>
              <strong>{formatKsh(250_000)}</strong>
            </div>
            <p className="offer-band__card-note">Included at no additional cost with the YTO 75HP 4WD.</p>
          </Reveal>
        </div>
      </section>

      {/* Implements */}
      <section className="section section--alt implements-preview">
        <div className="container">
          <div className="section-head">
            <Reveal className="section-head__copy">
              <p className="eyebrow">Implements &amp; equipment</p>
              <h2 className="section-title">
                THE WORK BEHIND
                <br />
                <span className="accent">THE TRACTOR.</span>
              </h2>
              <p className="lead">
                Ploughs, harrows, rotavators and walking tractors — the equipment that turns tractor
                power into prepared ground.
              </p>
            </Reveal>
            <Reveal className="section-head__aside" delay={2}>
              <Link to="/implements" className="link-arrow">
                View all implements
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="product-grid product-grid--four">
            {featuredImplements.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section why">
        <div className="container">
          <div className="section-head">
            <Reveal className="section-head__copy">
              <p className="eyebrow">Why Zoomlion, YTO Tractors and Implements</p>
              <h2 className="section-title">
                A DEALERSHIP THAT STANDS
                <br />
                <span className="accent">BEHIND THE MACHINE.</span>
              </h2>
            </Reveal>
            <Reveal className="section-head__aside" delay={2}>
              <p className="section-head__note">
                Everything you need to specify, buy and keep agricultural machinery working.
              </p>
            </Reveal>
          </div>

          <div className="why__grid">
            {whyChoose.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Cog;
              return (
                <Reveal key={item.title} className="why__item" delay={(index % 4) as 0 | 1 | 2 | 3}>
                  <div className="why__icon">
                    <Icon size={22} />
                  </div>
                  <span className="why__index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section about-teaser section--edge">
        <div className="container about-teaser__inner">
          <Reveal className="about-teaser__media">
            <img
              src="/images/about-field.jpg"
              alt="A tractor preparing a field, photographed from above"
              loading="lazy"
            />
            <div className="about-teaser__media-tag">
              <span>In the field</span>
              <strong>Land preparation</strong>
            </div>
          </Reveal>

          <Reveal className="about-teaser__copy" delay={1}>
            <p className="eyebrow">About us</p>
            <h2 className="section-title">
              SUPPORTING THE WORK
              <br />
              THAT <span className="accent">FEEDS PEOPLE.</span>
            </h2>
            <p className="lead">
              Zoomlion, YTO Tractors and Implements supplies tractors, agricultural implements and farming equipment to
              farmers and agricultural businesses — with straightforward advice on the machinery that
              suits the work in front of you.
            </p>
            <ul className="tick-list">
              <li>
                <Check size={14} /> Tractors, implements and spare parts in one place
              </li>
              <li>
                <Check size={14} /> Clear pricing in Kenyan Shillings
              </li>
              <li>
                <Check size={14} /> Direct contact on WhatsApp for every enquiry
              </li>
            </ul>
            <Link to="/about" className="btn btn--ghost">
              More about us
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="closing">
        <div className="container closing__inner">
          <Reveal>
            <p className="eyebrow">Next step</p>
            <h2 className="closing__title">
              READY TO PUT THE RIGHT
              <br />
              MACHINE <span className="accent">TO WORK?</span>
            </h2>
            <p className="closing__lead">
              Tell us what you farm and what you need to get done. We will help you specify the
              tractor, implement or spare part that fits.
            </p>
          </Reveal>
          <Reveal className="closing__actions" delay={1}>
            <Link to="/contact" className="btn btn--primary">
              Contact our team
              <ArrowRight size={15} />
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              <WhatsApp size={16} />
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
