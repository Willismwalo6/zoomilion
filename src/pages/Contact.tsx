import { PageHero } from '../components/PageHero';
import { EnquiryForm } from '../components/EnquiryForm';
import { Reveal } from '../components/Reveal';
import { useSeo } from '../lib/seo';
import { isPlaceholder, site, waLink } from '../data/site';
import { Clock, Mail, Phone, Pin, WhatsApp } from '../components/Icons';

export default function Contact() {
  useSeo(
    'Contact Us — Enquiries & Quotations',
    'Contact Zoomlion, YTO Tractors and Implements about tractors, implements, spare parts or a quotation. Send an enquiry by form or WhatsApp and our team will respond.',
  );

  const cards = [
    {
      icon: Phone,
      label: 'Calls',
      value: site.contact.callPhone,
      placeholder: 'Phone number to be confirmed',
      href: site.contact.callPhone ? `tel:${site.contact.callPhone.replace(/\s/g, '')}` : undefined,
    },
    {
      icon: WhatsApp,
      label: 'WhatsApp',
      value: site.contact.whatsapp,
      placeholder: 'WhatsApp number to be confirmed',
      href: waLink(),
      external: true,
      cta: 'Open WhatsApp',
    },
    {
      icon: Mail,
      label: 'Email',
      value: site.contact.email,
      placeholder: 'Email address to be confirmed',
      href: site.contact.email ? `mailto:${site.contact.email}` : undefined,
    },
    {
      icon: Pin,
      label: 'Location',
      value: site.contact.location,
      placeholder: 'Physical location to be confirmed',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact & enquiries"
        title={
          <>
            LET&apos;S TALK
            <br />
            <span className="accent">MACHINERY.</span>
          </>
        }
        lead="Questions about a tractor, an implement or a spare part? Send us the details and our team will come back with pricing, availability and advice."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        asideFigure="Enquiries"
        asideLabel="Sales · Quotations · Spare parts"
      />

      <section className="section contact">
        <div className="container contact__grid">
          <Reveal className="contact__details">
            <p className="eyebrow">Reach us directly</p>
            <h2 className="section-title section-title--sm">
              DIRECT LINES TO
              <br />
              <span className="accent">OUR TEAM.</span>
            </h2>

            <ul className="contact-cards">
              {cards.map((card) => {
                const Icon = card.icon;
                const empty = isPlaceholder(card.value);
                return (
                  <li key={card.label} className="contact-card">
                    <span className="contact-card__icon">
                      <Icon size={17} />
                    </span>
                    <div className="contact-card__body">
                      <span className="contact-card__label">{card.label}</span>
                      {empty ? (
                        <span className="contact-card__value contact-card__value--empty">{card.placeholder}</span>
                      ) : card.href ? (
                        <a
                          className="contact-card__value"
                          href={card.href}
                          {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {card.label === 'WhatsApp' ? card.cta ?? 'WhatsApp' : card.value}
                        </a>
                      ) : (
                        <span className="contact-card__value">{card.value}</span>
                      )}
                    </div>
                  </li>
                );
              })}

              {!isPlaceholder(site.contact.hours) && (
                <li className="contact-card">
                  <span className="contact-card__icon">
                    <Clock size={17} />
                  </span>
                  <div className="contact-card__body">
                    <span className="contact-card__label">Opening hours</span>
                    <span className="contact-card__value">{site.contact.hours}</span>
                  </div>
                </li>
              )}
            </ul>

          </Reveal>

          <Reveal className="contact__form" delay={1}>
            <EnquiryForm
              heading="Send an enquiry"
              intro="Tell us what you need and the team will respond with pricing, availability and next steps."
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight contact-strip">
        <div className="container contact-strip__inner">
          <p className="contact-strip__title">Prefer to talk it through?</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            <WhatsApp size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
