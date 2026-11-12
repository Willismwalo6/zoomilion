import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { useSeo } from '../lib/seo';
import { about } from '../data/content';
import { ArrowRight, Check, Shield, Tag, WhatsApp } from '../components/Icons';
import { waLink } from '../data/site';

export default function About() {
  useSeo(
    'About Us — Agricultural Machinery Supplier',
    'Zoomilion Tractors supplies tractors, agricultural implements and farming equipment to farmers and agricultural businesses, with clear pricing and two-year warranty cover on selected tractors.',
  );

  return (
    <>
      <PageHero
        eyebrow="About Zoomilion Tractors"
        title={
          <>
            BUILT AROUND
            <br />
            THE <span className="accent">WORK.</span>
          </>
        }
        lead="An agricultural machinery supplier serving farmers and agricultural businesses with tractors, implements, equipment and the support to keep them working."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        asideFigure="Machinery"
        asideLabel="Tractors · Implements · Equipment"
      />

      <section className="section about-intro">
        <div className="container about-intro__grid">
          <Reveal className="about-intro__copy">
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title">
              AGRICULTURAL MACHINERY,
              <br />
              SUPPLIED WITH <span className="accent">PURPOSE.</span>
            </h2>
            <p className="about-intro__lead">{about.intro}</p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="about-intro__para">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="about-intro__media" delay={1}>
            <img
              src="/images/about-field.jpg"
              alt="A tractor preparing a field, seen from above"
              loading="lazy"
            />
            <div className="about-intro__quote">
              <p>“Powering agriculture. Driving progress.”</p>
              <span>Zoomilion Tractors</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt about-values">
        <div className="container">
          <div className="section-head">
            <Reveal className="section-head__copy">
              <p className="eyebrow">What we stand for</p>
              <h2 className="section-title section-title--sm">
                THREE THINGS THAT <span className="accent">MATTER.</span>
              </h2>
            </Reveal>
          </div>

          <div className="about-values__grid">
            {about.values.map((value, index) => (
              <Reveal key={value.title} className="about-values__item" delay={(index % 4) as 0 | 1 | 2 | 3}>
                <span className="about-values__index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-supply">
        <div className="container about-supply__grid">
          <Reveal className="about-supply__copy">
            <p className="eyebrow">What we supply</p>
            <h2 className="section-title section-title--sm">
              ONE SUPPLIER, <span className="accent">THE WHOLE PACKAGE.</span>
            </h2>
            <ul className="tick-list tick-list--lg">
              <li>
                <Check size={15} /> Tractors — 110HP and YTO 75HP 4WD, both with a two-year warranty
              </li>
              <li>
                <Check size={15} /> Ploughs, harrows, rotavators and walking tractors
              </li>
              <li>
                <Check size={15} /> Spare parts and equipment guidance
              </li>
              <li>
                <Check size={15} /> Special offers, including the free Baldan plough with the YTO 75HP
              </li>
            </ul>
            <div className="about-supply__actions">
              <Link to="/catalogue" className="btn btn--primary">
                Browse the catalogue
                <ArrowRight size={15} />
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <WhatsApp size={16} /> WhatsApp
              </a>
            </div>
          </Reveal>

          <div className="about-supply__cards">
            <Reveal className="about-supply__card">
              <Shield size={20} />
              <h3>Two-year warranty</h3>
              <p>Supplied with the 110HP Tractor and the YTO 75HP 4WD for lasting confidence.</p>
            </Reveal>
            <Reveal className="about-supply__card" delay={1}>
              <Tag size={20} />
              <h3>Free 3DSCS Baldan plough</h3>
              <p>Included with the YTO 75HP 4WD — a complete tillage package at one price.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="container closing__inner">
          <Reveal>
            <p className="eyebrow">Talk to us</p>
            <h2 className="closing__title">
              READY TO SPECIFY
              <br />
              YOUR <span className="accent">NEXT MACHINE?</span>
            </h2>
          </Reveal>
          <Reveal className="closing__actions" delay={1}>
            <Link to="/contact" className="btn btn--primary">
              Contact our team
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
