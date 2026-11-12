/**
 * ZOOMILION TRACTORS — single source of truth for business details.
 *
 * EDIT THIS FILE to add the company's real phone number, WhatsApp number,
 * email address and physical location. Empty strings are deliberately shown
 * as "To be confirmed" on the site — no contact details have been invented.
 *
 * The WhatsApp number must be in international format, digits only,
 * e.g. '254712345678' (no +, no spaces).
 */
export const site = {
  name: 'Zoomilion Tractors',
  shortName: 'Zoomilion',
  tagline: 'Agricultural machinery',
  established: '', // e.g. '2014' — leave empty until confirmed by the company
  contact: {
    phone: '0726 172 601',
    whatsapp: '254726172601',
    email: '', // e.g. 'sales@zoomiliontractors.co.ke'
    location: 'Obote Road, near Swan Centre Building, Kisumu City',
    hours: '', // e.g. 'Mon – Sat, 8:00 – 18:00'
  },
  social: [
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  ],
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Our Tractors', to: '/tractors' },
    { label: 'Implements & Equipment', to: '/implements' },
    { label: 'Spare Parts', to: '/spare-parts' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
};

export const DEFAULT_WA_MESSAGE =
  'Hello Zoomilion Tractors, I would like more information about your tractors and agricultural equipment.';

export function productWaMessage(productName: string) {
  return `Hello Zoomilion Tractors, I am interested in ${productName}. Kindly provide more information and details about purchasing.`;
}

/** Builds a WhatsApp link. Falls back to WhatsApp's share sheet until a
 *  business number is configured in site.contact.whatsapp. */
export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  const number = site.contact.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function formatKsh(value: number) {
  return `KSh ${value.toLocaleString('en-KE')}`;
}

export const isPlaceholder = (value: string) => value.trim().length === 0;
