interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
});

export function ArrowRight({ size = 16, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function WhatsApp({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.15 8.15 0 0 1-1.25-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.2-8.24 8.2Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.8.97-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function Phone({ size = 16, className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13.1 10.9 21 19.4 21A1.5 1.5 0 0 0 21 19.5v-2a1 1 0 0 0-.76-.97l-3.2-.8a1 1 0 0 0-1 .36l-1.1 1.4a13.6 13.6 0 0 1-5.4-5.4l1.4-1.1a1 1 0 0 0 .36-1l-.8-3.2A1 1 0 0 0 6.5 3Z" />
    </svg>
  );
}

export function Mail({ size = 16, className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
      <path d="m3 6 9 6.5L21 6" />
    </svg>
  );
}

export function Pin({ size = 16, className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Clock({ size = 16, className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Search({ size = 18, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
    </svg>
  );
}

export function Shield({ size = 18, className, strokeWidth = 1.4 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M12 2.8 4.5 5.7v5.6c0 4.6 3.1 8.4 7.5 9.9 4.4-1.5 7.5-5.3 7.5-9.9V5.7L12 2.8Z" />
      <path d="m8.8 11.8 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function Gauge({ size = 18, className, strokeWidth = 1.4 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M3.5 18a8.5 8.5 0 1 1 17 0" />
      <path d="m12 14 4-4.5" />
      <circle cx="12" cy="15" r="1.6" />
    </svg>
  );
}

export function Cog({ size = 18, className, strokeWidth = 1.4 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v2.7M12 18.8v2.7M4.6 4.6l1.9 1.9M17.5 17.5l1.9 1.9M2.5 12h2.7M18.8 12h2.7M4.6 19.4l1.9-1.9M17.5 6.5l1.9-1.9" />
    </svg>
  );
}

export function Tag({ size = 18, className, strokeWidth = 1.4 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M20.5 13.2 13 20.7a2 2 0 0 1-2.8 0L3.3 13.8a2 2 0 0 1-.6-1.5l.3-8A1.6 1.6 0 0 1 4.6 2.7l8-.3a2 2 0 0 1 1.5.6l6.9 6.9a2 2 0 0 1 0 2.8Z" />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  );
}

export function Layers({ size = 18, className, strokeWidth = 1.4 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m4 12 8 4.3 8-4.3" />
      <path d="m4 16.5 8 4.3 8-4.3" />
    </svg>
  );
}

export function Wrench({ size = 18, className, strokeWidth = 1.4 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M14.2 6.3a4.3 4.3 0 0 0 5.5 5.5l-1.9-1.9 1.6-3.6-3.6 1.6-1.6-1.6Z" />
      <path d="m13.1 8.6-8.4 8.4a2.1 2.1 0 0 0 3 3l8.4-8.4" />
    </svg>
  );
}

export function Check({ size = 16, className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function Plus({ size = 16, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Close({ size = 18, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronLeft({ size = 18, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="m14 5-7 7 7 7" />
    </svg>
  );
}

export function ChevronRight({ size = 18, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth}>
      <path d="m10 5 7 7-7 7" />
    </svg>
  );
}

export function Facebook({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3 0-1.3-.1-2.45-.1-2.43 0-4.1 1.48-4.1 4.2v2.2H7.4V13h2.75v8h3.35Z" />
    </svg>
  );
}

export function Instagram({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedIn({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.8 8.5H3.6V21h3.2V8.5ZM5.2 3a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM21 21h-3.2v-6.5c0-1.6-.6-2.6-2-2.6-1.1 0-1.75.75-2.03 1.47-.1.26-.13.62-.13.98V21H10.4V8.5h3.2v1.7a3.3 3.3 0 0 1 2.95-1.6c2.2 0 3.85 1.44 3.85 4.53V21Z" />
    </svg>
  );
}

export function Quote({ size = 32, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 6.5c-4.4 1.8-7 5.6-7 10.6V26h9v-9H9.8c.2-3.2 1.6-5.3 4.2-6.6L13 6.5Zm13 0c-4.4 1.8-7 5.6-7 10.6V26h9v-9h-5.2c.2-3.2 1.6-5.3 4.2-6.6L26 6.5Z" />
    </svg>
  );
}

export const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn,
};
