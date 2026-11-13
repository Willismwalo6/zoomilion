import { NavLink } from 'react-router-dom';
import { site, waLink } from '../data/site';
import { Brand } from './Brand';
import { WhatsApp, Phone, Pin } from './Icons';

export function Header() {
  const tel = (n: string) => `tel:${n.replace(/\s/g, '')}`;

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__item topbar__loc">
            <Pin size={13} />
            {site.contact.location}
          </span>
          <span className="topbar__group">
            <span className="topbar__label">Calls</span>
            <a className="topbar__item topbar__link" href={tel(site.contact.callPhone)}>
              <Phone size={13} />
              {site.contact.callPhone}
            </a>
            <span className="topbar__label">Inquiries &amp; WhatsApp</span>
            <a className="topbar__item topbar__link" href={tel(site.contact.phone)}>
              <Phone size={13} />
              {site.contact.phone}
            </a>
          </span>
        </div>
      </div>

      <div className="container site-header__inner">
        <Brand />

        <nav className="nav" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <a
            className="wa-link"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Zoomilion Tractors on WhatsApp"
          >
            <WhatsApp size={17} />
            <span className="wa-link__label">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
