import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Shield, Tag } from './Icons';
import { formatKsh } from '../data/site';

const featured = {
  name: 'YTO 75HP 4WD Tractor',
  hp: '75 HP',
  drive: '4WD',
  price: 2_800_000,
  href: '/products/yto-75hp-4wd-tractor',
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, window.innerHeight);
        node.style.setProperty('--scroll-y', String(offset));
      });
    };

    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty('--px', x.toFixed(3));
      node.style.setProperty('--py', y.toFixed(3));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    node.addEventListener('pointermove', onPointer);
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      node.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-label="Zoomlion, YTO Tractors and Implements">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <span className="hero__ghost" aria-hidden="true">
        YTO 75
      </span>

      <svg className="hero__diagonals" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <line x1="520" y1="-60" x2="1120" y2="960" />
        <line x1="700" y1="-60" x2="1300" y2="960" />
        <line x1="-140" y1="640" x2="420" y2="1080" />
        <circle cx="1080" cy="360" r="360" />
      </svg>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Zoomlion, YTO Tractors and Implements · Agricultural Machinery</p>

          <h1 className="hero__title">
            <span className="hero__line">Powering</span>
            <span className="hero__line hero__line--accent">Agriculture.</span>
            <span className="hero__line">Driving</span>
            <span className="hero__line hero__line--outline">Progress.</span>
          </h1>

          <p className="hero__lead">
            Discover powerful tractors, dependable agricultural machinery and quality farming
            equipment designed to transform productivity and keep your farming operations moving.
          </p>

          <div className="hero__ctas">
            <Link to="/tractors" className="btn btn--primary">
              Explore Our Tractors
              <ArrowRight size={15} />
            </Link>
            <Link to="/implements" className="btn btn--ghost">
              View Agricultural Equipment
              <ArrowRight size={15} />
            </Link>
          </div>

          <ul className="hero__proof">
            <li>
              <Shield size={16} />
              <span>2-year warranty on selected tractors</span>
            </li>
            <li>
              <Tag size={16} />
              <span>Free plough with the YTO 75HP 4WD</span>
            </li>
          </ul>
        </div>

        <div className="hero__stage">
          <div className="hero__stage-inner">
            <div className="hero__photo">
              <img
                src="/images/hero-tractor.jpg"
                alt="YTO 75HP 4WD agricultural tractor presented in a dark showroom"
                width={1497}
                height={1035}
                decoding="async"
                fetchPriority="high"
              />
              <div className="hero__photo-shade" aria-hidden="true" />
              <div className="hero__photo-glow" aria-hidden="true" />

              <ul className="hotspots" aria-hidden="true">
                <li className="hotspot hotspot--power">
                  <span className="hotspot__dot" />
                  <span className="hotspot__rule" />
                  <span className="hotspot__label">
                    <strong>75 HP</strong>
                    <em>Engine power</em>
                  </span>
                </li>
                <li className="hotspot hotspot--drive">
                  <span className="hotspot__dot" />
                  <span className="hotspot__rule hotspot__rule--left" />
                  <span className="hotspot__label hotspot__label--left">
                    <strong>4WD</strong>
                    <em>Drive configuration</em>
                  </span>
                </li>
                <li className="hotspot hotspot--warranty">
                  <span className="hotspot__dot" />
                  <span className="hotspot__rule" />
                  <span className="hotspot__label">
                    <strong>2 years</strong>
                    <em>Warranty cover</em>
                  </span>
                </li>
              </ul>

              <span className="hero__badge">
                <Tag size={13} />
                Free plough included
              </span>
            </div>

            <div className="hero__frame-tag" aria-hidden="true">
              <span>Model</span>
              <strong>LF · 75 4WD</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__feature">
          <div className="hero__feature-main">
            <span className="hero__feature-kicker">Featured model</span>
            <Link to={featured.href} className="hero__feature-name">
              {featured.name}
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="hero__feature-meta">
            <span>{featured.hp}</span>
            <span className="dot" />
            <span>{featured.drive}</span>
            <span className="dot" />
            <span>2-year warranty</span>
          </div>
          <div className="hero__feature-price">
            <span>Price</span>
            <strong>{formatKsh(featured.price)}</strong>
          </div>
          <Link to={featured.href} className="hero__feature-cta" aria-label="View the featured YTO 75HP 4WD tractor">
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
