import { PageHero } from '../components/PageHero';
import { useSeo } from '../lib/seo';
import { credits } from '../data/credits';

export default function Credits() {
  useSeo(
    'Photography Credits',
    'Photography credits and licensing for the machinery images used on the Zoomlion, YTO Tractors and Implements website.',
  );

  return (
    <>
      <PageHero
        eyebrow="Photography credits"
        title={
          <>
            IMAGE
            <br />
            <span className="accent">CREDITS.</span>
          </>
        }
        lead="The machinery photography on this website is illustrative and sourced from Wikimedia Commons under Creative Commons licences. Replace these images with your own product photography before launch."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Photography credits' }]}
      />

      <section className="section">
        <div className="container">
          <p className="credits-note">
            Each photograph below is credited to its author and licence as published on Wikimedia
            Commons. Where a product photograph is available from Zoomlion, YTO Tractors and Implements, swap the file in{' '}
            <code>public/images/</code> and keep the same filename so the catalogue picks it up
            automatically.
          </p>

          <div className="credits-grid" style={{ marginTop: '32px' }}>
            {credits.map((credit) => (
              <div className="credit-item" key={credit.file}>
                <a href={credit.page} target="_blank" rel="noopener noreferrer">
                  {credit.file}
                </a>
                <span>
                  {credit.artist || 'Author listed on source page'} · {credit.license || 'See source'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
