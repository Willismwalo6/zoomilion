import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProduct, relatedProducts } from '../data/products';
import { formatKsh, productWaMessage, waLink } from '../data/site';
import { useSeo } from '../lib/seo';
import { EnquiryForm } from '../components/EnquiryForm';
import { ProductCard } from '../components/ProductCard';
import { Reveal } from '../components/Reveal';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Shield,
  Tag,
  WhatsApp,
} from '../components/Icons';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;
  const [active, setActive] = useState(0);

  const related = useMemo(() => (product ? relatedProducts(product) : []), [product]);

  useSeo(
    product ? `${product.name} — ${formatKsh(product.price)}` : 'Product',
    product
      ? `${product.summary} Available from Zoomlion, YTO Tractors and Implements at ${formatKsh(product.price)}.`
      : 'Zoomlion, YTO Tractors and Implements product catalogue.',
  );

  if (!product) return <NotFound />;

  const images = product.images;
  const current = images[Math.min(active, images.length - 1)];
  const categoryCrumb =
    product.category === 'tractors'
      ? { label: 'Our Tractors', to: '/tractors' }
      : { label: 'Implements & Equipment', to: '/implements' };

  const enquiryMessage = productWaMessage(product.name);

  return (
    <>
      <section className="product-top">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <span className="crumbs__item">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
            </span>
            <span className="crumbs__item">
              <Link to={categoryCrumb.to}>{categoryCrumb.label}</Link>
              <span className="sep">/</span>
            </span>
            <span className="crumbs__item">
              <span className="current">{product.name}</span>
            </span>
          </nav>

          <div className="product-top__grid">
            <div className="gallery">
              <div className="gallery__main">
                <img src={current.src} alt={current.alt} decoding="async" />
                {product.badge && <span className="gallery__badge">{product.badge}</span>}
                {images.length > 1 && (
                  <div className="gallery__nav">
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={() => setActive((value) => (value - 1 + images.length) % images.length)}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="gallery__counter">
                      {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                    </span>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={() => setActive((value) => (value + 1) % images.length)}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </div>

              <div className="gallery__thumbs">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={`gallery__thumb${index === active ? ' is-active' : ''}`}
                    onClick={() => setActive(index)}
                    aria-label={`Show image ${index + 1}: ${image.alt}`}
                    aria-current={index === active}
                  >
                    <img src={image.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-top__info">
              <p className="eyebrow">
                {product.brand ? `${product.brand} · ${product.group}` : product.group}
              </p>
              <h1 className="product-top__title">{product.name}</h1>
              <p className="product-top__summary">{product.summary}</p>

              {product.offer && (
                <p className="product-top__offer">
                  <Tag size={15} />
                  <span>{product.offer}</span>
                </p>
              )}

              <div className="product-top__price">
                <span className="product-top__price-label">Price</span>
                <strong>{formatKsh(product.price)}</strong>
                <span className="product-top__price-note">Kenyan Shillings · availability confirmed on enquiry</span>
              </div>

              <ul className="product-top__specs">
                {product.horsepower && (
                  <li>
                    <span>Horsepower</span>
                    <strong>{product.horsepower}</strong>
                  </li>
                )}
                {product.drive && (
                  <li>
                    <span>Drive</span>
                    <strong>{product.drive}</strong>
                  </li>
                )}
                {product.warranty && (
                  <li>
                    <span>Warranty</span>
                    <strong>
                      <Shield size={13} /> {product.warranty}
                    </strong>
                  </li>
                )}
                <li>
                  <span>Category</span>
                  <strong>
                    <Layers size={13} /> {product.group}
                  </strong>
                </li>
              </ul>

              <div className="product-top__actions">
                <a
                  className="btn btn--primary"
                  href={waLink(enquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp size={16} />
                  Enquire on WhatsApp
                </a>
                <a className="btn btn--ghost" href="#quotation">
                  Request a quotation
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-body">
        <div className="container product-body__grid">
          <div className="product-body__aside">
            <p className="eyebrow">Overview</p>
            <h2 className="section-title section-title--sm">
              ABOUT THIS
              <br />
              <span className="accent">MACHINE.</span>
            </h2>
            <p className="product-body__aside-note">
              Specifications shown are the details confirmed for this product. For anything else, ask
              our team directly.
            </p>
            <a href={waLink(enquiryMessage)} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Ask a question
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="product-body__content">
            {product.description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}

            {product.specs.length > 0 && (
              <div className="spec-table">
                <h3 className="spec-table__title">Key specifications</h3>
                <dl>
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="spec-table__row">
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="quotation">
        <div className="container quotation__grid">
          <Reveal className="quotation__copy">
            <p className="eyebrow">Quotation request</p>
            <h2 className="section-title">
              GET A QUOTE ON THIS
              <br />
              <span className="accent">{product.name.toUpperCase()}.</span>
            </h2>
            <p className="lead">
              Send us your details and we will come back with pricing, availability and the next steps
              to purchase. Every enquiry reaches the same team that supplies the machine.
            </p>
            <ul className="tick-list">
              <li>
                <Shield size={14} /> {product.warranty ? `${product.warranty} warranty on this model` : 'Guidance on the right configuration'}
              </li>
              <li>
                <Tag size={14} /> Price: {formatKsh(product.price)}
              </li>
              <li>
                <WhatsApp size={14} /> Direct WhatsApp contact
              </li>
            </ul>
          </Reveal>

          <Reveal className="quotation__form" delay={1}>
            <EnquiryForm
              defaultProduct={product.name}
              heading="Request a quotation"
              intro="Complete the details below and send your request straight to our team."
              compact
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal className="section-head__copy">
              <p className="eyebrow">You may also need</p>
              <h2 className="section-title section-title--sm">
                COMPLETE THE <span className="accent">PACKAGE.</span>
              </h2>
            </Reveal>
            <Reveal className="section-head__aside" delay={2}>
              <Link to="/catalogue" className="link-arrow">
                Browse everything
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="product-grid product-grid--three">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
