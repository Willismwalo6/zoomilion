import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { EnquiryForm } from '../components/EnquiryForm';
import { Reveal } from '../components/Reveal';
import { useSeo } from '../lib/seo';
import { spareParts } from '../data/content';
import { waLink } from '../data/site';
import { ArrowRight, Cog, Layers, Wrench, WhatsApp } from '../components/Icons';

const icons = [Cog, Layers, Wrench];

export default function SpareParts() {
  useSeo(
    'Spare Parts — Tractor & Implement Parts',
    'Spare parts for the tractors and implements supplied by Zoomlion, YTO Tractors and Implements. Tell us the machine and the part you need and we will confirm availability, pricing and lead time.',
  );

  return (
    <>
      <PageHero
        eyebrow="Spare parts"
        title={
          <>
            KEEP IT
            <br />
            <span className="accent">WORKING.</span>
          </>
        }
        lead="Spare parts and wearing components for the tractors and implements we supply. Share the machine and the part you need — we will confirm availability, pricing and lead time."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Spare Parts' }]}
        asideFigure="Parts"
        asideLabel="Tractors · Implements · Equipment"
      />

      <section className="section spare-intro">
        <div className="container spare-intro__grid">
          <Reveal className="spare-intro__copy">
            <p className="eyebrow">Parts &amp; support</p>
            <h2 className="section-title">
              THE RIGHT PART,
              <br />
              <span className="accent">WITHOUT THE GUESSWORK.</span>
            </h2>
            <p className="lead">{spareParts.intro}</p>
            <div className="spare-intro__actions">
              <a
                className="btn btn--primary"
                href={waLink(
                  'Hello Zoomlion, YTO Tractors and Implements, I am looking for a spare part. Kindly provide more information and details about purchasing.',
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp size={16} />
                Enquire about parts
              </a>
              <Link to="/contact" className="btn btn--ghost">
                Send an enquiry
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal className="spare-intro__media" delay={1}>
            <img
              src="/images/spare-parts.jpg"
              alt="Close-up of a disc harrow implement, showing wearing components"
              loading="lazy"
            />
            <span className="spare-intro__media-tag">Wearing components</span>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="spare-cards">
            {spareParts.cards.map((card, index) => {
              const Icon = icons[index] ?? Cog;
              return (
                <Reveal key={card.title} className="spare-card" delay={(index % 4) as 0 | 1 | 2 | 3}>
                  <span className="spare-card__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="parts-enquiry">
        <div className="container quotation__grid">
          <Reveal className="quotation__copy">
            <p className="eyebrow">Parts enquiry</p>
            <h2 className="section-title section-title--sm">
              TELL US WHAT
              <br />
              YOU <span className="accent">NEED.</span>
            </h2>
            <p className="lead">
              Include the machine model, the part name and, if you can, a photograph. Our team will
              confirm what is available and how quickly it can reach you.
            </p>
          </Reveal>
          <Reveal className="quotation__form" delay={1}>
            <EnquiryForm
              defaultProduct="Spare parts"
              heading="Spare parts enquiry"
              intro="Send the details and we will respond with availability and pricing."
              compact
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
