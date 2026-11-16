# ZOOMLION, YTO TRACTORS AND IMPLEMENTS — website

A premium, cinematic agricultural machinery website for Zoomlion, YTO Tractors and Implements, built with
React + TypeScript + Vite.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build
```

## Where to edit things

| What | File |
| --- | --- |
| Products, prices, specs, photographs | `src/data/products.ts` |
| Phone / WhatsApp / email / location placeholders | `src/data/site.ts` |
| About copy, why-choose points, spare-parts copy | `src/data/content.ts` |
| Photography credits (required by the image licences) | `src/data/credits.ts` |
| Design tokens (colours, type, spacing) | `src/styles/global.css` |

Every card, filter, search result and detail page is generated from
`src/data/products.ts`. Add a product there and it appears in the catalogue,
search, filters and its own page at `/products/<slug>` automatically.

### Contact details

`src/data/site.ts` ships with **empty** contact fields — no phone number,
WhatsApp number, email or location has been invented. Empty values display as
“to be confirmed” on the site. Add the real details:

```ts
contact: {
  phone: '+254 ...',      // shown on the contact page and in the mobile menu
  whatsapp: '254...',     // digits only, no + or spaces — makes all WhatsApp links target the business
  email: 'sales@...',     // adds an email button to enquiry confirmations
  location: '...',
  hours: '...',           // optional
}
```

Until `whatsapp` is set, every WhatsApp button opens WhatsApp with the enquiry
message pre-filled, ready to send to the chosen contact.

### Product photography

Images in `public/images/` are illustrative machinery photographs (Wikimedia
Commons, CC licences — see `/credits`). Replace each file with the dealership's
own product photography, keeping the same filename, and the catalogue picks it
up with no code changes.

## Enquiries

There is no backend. The enquiry and quotation forms validate input, then
prepare a formatted enquiry and hand it to WhatsApp (with an email option once
`contact.email` is set). Product buttons use the exact message:

> Hello Zoomlion, YTO Tractors and Implements, I am interested in [PRODUCT NAME]. Kindly provide
> more information and details about purchasing.

## Deployment

The app uses client-side routing. Any static host needs an SPA fallback
(`/* → /index.html`) so that routes such as `/products/<slug>` resolve.
