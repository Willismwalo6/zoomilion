import { Link } from 'react-router-dom';
import { site, waLink, isPlaceholder } from '../data/site';
import { Brand } from './Brand';
import { Mail, Phone, Pin, WhatsApp, socialIcons } from './Icons';

const quickLinks = site.nav;
const categories = [
  { label: 'Our Tractors', to: '/tractors' },
  { label: 'Implements & Equipment', to: '/implements' },
  { label: 'Spare Parts', to: '/spare-parts' },
  { label: 'All Products', to: '/catalogue' },
  { label: 'Special Offer', to: '/tractors/yto-75hp-4wd-tractor' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Brand />
            <p>
              Tractors, agricultural implements and farming equipment supplied to farmers and
              agricultural businesses. Built to keep your operations moving.
            </p>
            <div className="footer__social">
              {site.social.map((item) => {
                const Icon = socialIcons[item.icon as keyof typeof socialIcons];
                return (
                  <a key={item.label} href={item.href} aria-label={`${item.label} — social link placeholder`}>
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer__col">
            <h4>Navigate</h4>
            <ul>
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Products</h4>
            <ul>
              {categories.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>
                <Phone size={14} />
                {isPlaceholder(site.contact.callPhone) ? (
                  <span>Phone number to be confirmed</span>
                ) : (
                  <a href={`tel:${site.contact.callPhone.replace(/\s/g, '')}`}>{site.contact.callPhone}</a>
                )}
              </li>
              <li>
                <WhatsApp size={14} />
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp enquiry
                </a>
              </li>
              <li>
                <Mail size={14} />
                {isPlaceholder(site.contact.email) ? (
                  <span>Email address to be confirmed</span>
                ) : (
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                )}
              </li>
              <li>
                <Pin size={14} />
                {isPlaceholder(site.contact.location) ? (
                  <span>Location to be confirmed</span>
                ) : (
                  <span>{site.contact.location}</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Zoomlion, YTO Tractors and Implements. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/credits">Photography credits</Link>
            <Link to="/contact">Enquiries</Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
