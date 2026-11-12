import { Link } from 'react-router-dom';

interface BrandProps {
  onClick?: () => void;
  className?: string;
}

export function Brand({ onClick, className = '' }: BrandProps) {
  return (
    <Link to="/" className={`brand ${className}`} onClick={onClick} aria-label="Zoomilion Tractors — home">
      <svg className="brand__mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect x="0.75" y="0.75" width="38.5" height="38.5" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        <path d="M10 9.5h20v5.4H20.6L30 24.6v5.9H10v-5.4h9.4L10 15.4V9.5Z" fill="#F47732" />
        <path d="M30 5.5h4.5V10" fill="none" stroke="#B8B8B8" strokeWidth="1.5" />
      </svg>
      <span className="brand__text">
        <span className="brand__name">Zoomilion</span>
        <span className="brand__sub">Tractors</span>
      </span>
    </Link>
  );
}
