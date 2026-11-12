import { Link } from 'react-router-dom';
import { formatKsh, productWaMessage, waLink } from '../data/site';
import type { Product } from '../data/products';
import { ArrowUpRight, Shield, Tag, WhatsApp } from './Icons';

export function ProductCard({ product }: { product: Product }) {
  const chips = [product.horsepower, product.drive].filter(Boolean) as string[];

  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-card__media" tabIndex={-1} aria-hidden="true">
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          loading="lazy"
          decoding="async"
        />
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
        <span className="product-card__zoom">
          View details <ArrowUpRight size={14} />
        </span>
      </Link>

      <div className="product-card__body">
        <p className="product-card__eyebrow">{product.brand ? `${product.brand} · ${product.group}` : product.group}</p>

        <h3 className="product-card__title">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>

        {chips.length > 0 && (
          <ul className="chips">
            {chips.map((chip) => (
              <li key={chip} className="chip">
                {chip}
              </li>
            ))}
            {product.warranty && (
              <li className="chip chip--accent">
                <Shield size={12} /> {product.warranty} warranty
              </li>
            )}
          </ul>
        )}

        {product.offer && (
          <p className="product-card__offer">
            <Tag size={14} /> {product.offer}
          </p>
        )}

        <div className="product-card__foot">
          <div className="product-card__price-block">
            <span className="product-card__price-label">Price</span>
            <span className="product-card__price">{formatKsh(product.price)}</span>
          </div>
          <div className="product-card__actions">
            <Link to={`/products/${product.slug}`} className="btn btn--ghost btn--sm">
              View Details
            </Link>
            <a
              className="card-wa"
              href={waLink(productWaMessage(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about the ${product.name} on WhatsApp`}
            >
              <WhatsApp size={18} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
