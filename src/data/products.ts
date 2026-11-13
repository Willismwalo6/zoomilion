/**
 * ZOOMILION TRACTORS — product catalogue.
 *
 * Add, remove or edit products here. Every card, detail page, filter and
 * search result is generated from this file. Prices are in Kenyan Shillings.
 *
 * Only the products, prices and specifications supplied by the business are
 * listed below — do not add invented figures.
 */

export type Category = 'tractors' | 'implements';

export interface Spec {
  label: string;
  value: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  /** Sub-category used by the catalogue filters, e.g. 'Ploughs'. */
  group: string;
  brand?: string;
  horsepower?: string;
  drive?: string;
  price: number;
  warranty?: string;
  /** Short promotional line shown on cards and detail pages. */
  offer?: string;
  /** Ribbon shown over the product image. */
  badge?: string;
  summary: string;
  description: string[];
  specs: Spec[];
  images: ProductImage[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: '110hp-tractor',
    name: '110HP Tractor',
    category: 'tractors',
    group: 'Tractors',
    horsepower: '110 HP',
    price: 3_800_000,
    warranty: '2 years',
    badge: '2-YEAR WARRANTY',
    summary:
      'A 110 horsepower agricultural tractor, supplied with a two-year warranty.',
    description: [
      'The 110HP Tractor is built for serious field work. With 110 horsepower on tap, it is suited to primary tillage, haulage and general farm operations where consistent power and long working days matter.',
      'Every unit is supplied by Zoomilion Tractors with a two-year warranty, so the machine you put to work is one you can depend on season after season.',
      'Talk to our team about the implement package that matches the work you need to do — ploughs, harrows and rotavators can be supplied alongside the tractor.',
    ],
    specs: [
      { label: 'Horsepower', value: '110 HP' },
      { label: 'Warranty', value: '2 years' },
    ],
    images: [
      { src: '/images/products/110hp-tractor-1.jpg', alt: '110HP agricultural tractor supplied by Zoomilion Tractors' },
      { src: '/images/products/110hp-tractor-2.jpg', alt: 'Detail view of the 110HP tractor' },
      { src: '/images/products/110hp-tractor-3.jpg', alt: '110HP tractor in field conditions' },
      { src: '/images/products/110hp-tractor-4.jpg', alt: 'Tractor fitted with a disc plough' },
    ],
    featured: true,
  },
  {
    slug: 'yto-75hp-4wd-tractor',
    name: 'YTO Tractor',
    category: 'tractors',
    group: 'Tractors',
    brand: 'YTO',
    horsepower: '75 HP',
    drive: '4WD',
    price: 2_800_000,
    warranty: '2 years',
    offer: 'FREE 3DSCS BALDAN PLOUGH',
    badge: 'FREE PLOUGH INCLUDED',
    summary:
      'YTO 75HP 4WD tractor with a free 3DSCS Baldan plough and a two-year warranty.',
    description: [
      'The YTO 75HP 4WD is a versatile four-wheel-drive tractor for mixed farming operations. At 75 horsepower with drive to all four wheels, it handles cultivation, planting and haulage through the working season.',
      'Order this tractor at Zoomilion Tractors and it comes with a 3DSCS Baldan plough at no extra cost — a complete primary tillage package at one price, backed by a two-year warranty.',
      'Our team can advise on matching implements such as harrow ploughs, mould boards and rotavators to your land and operation.',
    ],
    specs: [
      { label: 'Brand', value: 'YTO' },
      { label: 'Horsepower', value: '75 HP' },
      { label: 'Drive', value: '4WD' },
      { label: 'Warranty', value: '2 years' },
      { label: 'Special offer', value: 'Free 3DSCS Baldan Plough' },
    ],
    images: [
      { src: '/images/products/yto-75hp-1.jpg', alt: 'YTO 75HP 4WD tractor with free Baldan plough' },
      { src: '/images/products/yto-75hp-2.jpg', alt: 'YTO 75HP 4WD tractor side profile' },
      { src: '/images/products/yto-75hp-3.jpg', alt: 'YTO tractor working in the field' },
      { src: '/images/products/yto-75hp-4.jpg', alt: 'YTO tractor, front three-quarter view' },
    ],
    featured: true,
  },
  {
    slug: '3dscs-baldan-plough',
    name: '3DSCS Baldan Plough',
    category: 'implements',
    group: 'Ploughs',
    price: 250_000,
    badge: 'INCLUDED FREE WITH YTO 75HP',
    summary:
      'Primary tillage plough, available on its own or free with the YTO 75HP 4WD tractor.',
    description: [
      'The 3DSCS Baldan plough is a robust primary tillage implement that turns and breaks soil ahead of planting. It is the plough supplied free with every YTO 75HP 4WD tractor purchased from Zoomilion Tractors.',
      'Available as a standalone purchase or as part of the YTO 75HP tractor package, it pairs naturally with the harrow ploughs and mould boards in our range.',
      'Contact our team on WhatsApp to confirm the configuration that suits your tractor and land preparation programme.',
    ],
    specs: [],
    images: [
      { src: '/images/products/baldan-plough-1.jpg', alt: '3DSCS Baldan plough' },
      { src: '/images/products/baldan-plough-2.jpg', alt: 'Baldan plough working the soil' },
      { src: '/images/products/baldan-plough-3.jpg', alt: '3DSCS Baldan plough, side view' },
    ],
  },
  {
    slug: 'rotavators',
    name: 'Rotavators',
    category: 'implements',
    group: 'Tillage',
    price: 450_000,
    summary: 'Rotary tillage equipment for seedbed preparation.',
    description: [
      'Rotavators break down and mix soil into a fine seedbed in a single pass, making them a practical choice for consistent planting depth and good seed-to-soil contact.',
      'Supplied by Zoomilion Tractors as part of our agricultural implement range, with the support of our team to match the unit to your tractor.',
      'Send us a WhatsApp enquiry with your tractor details and we will confirm availability and pricing.',
    ],
    specs: [],
    images: [
      { src: '/images/products/rotavator-1.jpg', alt: 'Rotavator implement for seedbed preparation' },
      { src: '/images/products/rotavator-2.jpg', alt: 'Rotavator detail' },
      { src: '/images/products/rotavator-3.jpg', alt: 'Rotavator, side view' },
    ],
  },
  {
    slug: 'reversible-mould-board',
    name: 'Reversible Mould Board',
    category: 'implements',
    group: 'Ploughs',
    price: 550_000,
    summary: 'Reversible mould board plough for primary tillage.',
    description: [
      'A reversible mould board plough turns soil in either direction, allowing continuous ploughing across the field without leaving dead furrows.',
      'It is suited to farms that want an even finish and efficient use of working time during land preparation.',
      'Enquire on WhatsApp for availability and delivery arrangements.',
    ],
    specs: [],
    images: [
      { src: '/images/products/reversible-mouldboard-1.jpg', alt: 'Reversible mould board plough' },
      { src: '/images/products/reversible-mouldboard-2.jpg', alt: 'Reversible mould board on a tractor' },
      { src: '/images/products/reversible-mouldboard-3.jpg', alt: 'Reversible mould board plough, side view' },
    ],
  },
  {
    slug: 'normal-mould-board',
    name: 'Normal Mould Board',
    category: 'implements',
    group: 'Ploughs',
    price: 450_000,
    summary: 'Standard mould board plough for land preparation.',
    description: [
      'The normal mould board plough is a straightforward, dependable implement for turning soil and burying crop residue ahead of the next season.',
      'A practical match for routine land preparation on mixed farms, supplied as part of the Zoomilion Tractors implement range.',
      'Contact us on WhatsApp for more information on this implement.',
    ],
    specs: [],
    images: [
      { src: '/images/products/normal-mouldboard-1.jpg', alt: 'Normal mould board plough' },
      { src: '/images/products/normal-mouldboard-2.jpg', alt: 'Normal mould board plough in the field' },
      { src: '/images/products/normal-mouldboard-3.jpg', alt: 'Normal mould board plough, side view' },
    ],
  },
  {
    slug: 'harrow-ploughs-18-plates',
    name: 'Harrow Ploughs — 18 Plates',
    category: 'implements',
    group: 'Harrows',
    price: 280_000,
    summary: '18-plate harrow plough for secondary tillage and seedbed finishing.',
    description: [
      'An 18-plate harrow plough that breaks clods and levels the soil surface after primary tillage, preparing the field for planting.',
      'Supplied by Zoomilion Tractors as part of our agricultural implement range.',
      'Ask our team about matching this harrow to your tractor on WhatsApp.',
    ],
    specs: [{ label: 'Plates', value: '18' }],
    images: [
      { src: '/images/products/harrow-18-1.jpg', alt: '18 plate harrow plough' },
      { src: '/images/products/harrow-18-2.jpg', alt: '18 plate harrow working in soil' },
      { src: '/images/products/harrow-18-3.jpg', alt: '18 plate disc harrow, side view' },
    ],
  },
  {
    slug: 'harrow-ploughs-20-plates',
    name: 'Harrow Ploughs — 20 Plates',
    category: 'implements',
    group: 'Harrows',
    price: 860_000,
    summary: '20-plate harrow plough with a wider working coverage.',
    description: [
      'The 20-plate harrow plough offers a wider working width than the 18-plate unit, covering more ground per pass during seedbed preparation.',
      'A strong option for larger fields and operations that need to keep land preparation on schedule.',
      'Contact Zoomilion Tractors on WhatsApp to discuss availability and pricing.',
    ],
    specs: [{ label: 'Plates', value: '20' }],
    images: [
      { src: '/images/products/harrow-20-1.jpg', alt: '20 plate harrow plough' },
      { src: '/images/products/harrow-20-2.jpg', alt: '20 plate harrow plough in field use' },
    ],
  },
  {
    slug: 'walking-tractors',
    name: 'Walking Tractors',
    category: 'implements',
    group: 'Walking Tractors',
    horsepower: '16 HP',
    price: 360_000,
    summary: '16HP walking tractor for smallholder and intensive farming.',
    description: [
      'A 16 horsepower walking tractor for smallholder plots, horticulture and intensive farming where a compact, manoeuvrable machine works best.',
      'It brings powered tillage to smaller fields, terraces and rows that are difficult to reach with a full-size tractor.',
      'Talk to our team on WhatsApp about availability and suitable implements.',
    ],
    specs: [{ label: 'Horsepower', value: '16 HP' }],
    images: [
      { src: '/images/products/walking-tractor-1.jpg', alt: '16HP walking tractor' },
      { src: '/images/products/walking-tractor-2.jpg', alt: 'Walk-behind tractor working soil' },
      { src: '/images/products/walking-tractor-3.jpg', alt: 'Walking tractor with attached implement' },
    ],
  },
];

export const tractors = products.filter((p) => p.category === 'tractors');
export const implementsList = products.filter((p) => p.category === 'implements');

export const tractorGroups = ['All', ...Array.from(new Set(tractors.map((p) => p.group)))];
export const implementGroups = ['All', ...Array.from(new Set(implementsList.map((p) => p.group)))];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, limit = 3) {
  const sameGroup = products.filter((p) => p.slug !== product.slug && p.group === product.group);
  const others = products.filter((p) => p.slug !== product.slug && p.group !== product.group);
  return [...sameGroup, ...others].slice(0, limit);
}
