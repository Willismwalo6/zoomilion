import { useState, type FormEvent } from 'react';
import { products } from '../data/products';
import { site, waLink, isPlaceholder } from '../data/site';
import { ArrowRight, Check, Mail, WhatsApp } from './Icons';

interface EnquiryFormProps {
  defaultProduct?: string;
  heading?: string;
  intro?: string;
  compact?: boolean;
}

interface Values {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const emptyValues: Values = { name: '', phone: '', email: '', interest: '', message: '' };

export function EnquiryForm({ defaultProduct = '', heading = 'Send an enquiry', intro, compact = false }: EnquiryFormProps) {
  const [values, setValues] = useState<Values>({ ...emptyValues, interest: defaultProduct });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sentMessage, setSentMessage] = useState<string | null>(null);

  const update = (field: keyof Values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) next.name = 'Please enter your name.';
    const digits = values.phone.replace(/\D/g, '');
    if (digits.length < 7) next.phone = 'Please enter a phone number we can reach you on.';
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
      next.email = 'Please check the email address.';
    }
    if (values.message.trim().length < 10) next.message = 'Please add a little more detail about your enquiry.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMessage = () => {
    const lines = [
      'Hello Zoomlion, YTO Tractors and Implements,',
      '',
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
    ];
    if (values.email.trim()) lines.push(`Email: ${values.email.trim()}`);
    if (values.interest) lines.push(`Interest: ${values.interest}`);
    lines.push('', values.message.trim(), '', 'Kindly provide more information and details about purchasing.');
    return lines.join('\n');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    const message = buildMessage();
    setSentMessage(message);
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  if (sentMessage) {
    return (
      <div className={`enquiry enquiry--sent${compact ? ' enquiry--compact' : ''}`}>
        <div className="enquiry__sent-icon">
          <Check size={22} />
        </div>
        <h3>Your enquiry is ready to send</h3>
        <p>
          We have prepared your enquiry for WhatsApp. If a new window did not open, use the button below to
          send it straight to our team.
        </p>
        <div className="enquiry__sent-actions">
          <a className="btn btn--primary" href={waLink(sentMessage)} target="_blank" rel="noopener noreferrer">
            <WhatsApp size={16} />
            Send on WhatsApp
          </a>
          {!isPlaceholder(site.contact.email) && (
            <a
              className="btn btn--ghost"
              href={`mailto:${site.contact.email}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(sentMessage)}`}
            >
              <Mail size={15} />
              Send by email
            </a>
          )}
        </div>
        <button
          type="button"
          className="enquiry__reset"
          onClick={() => {
            setSentMessage(null);
            setValues({ ...emptyValues, interest: defaultProduct });
          }}
        >
          Start another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className={`enquiry${compact ? ' enquiry--compact' : ''}`} onSubmit={onSubmit} noValidate>
      <div className="enquiry__head">
        <p className="eyebrow">Enquiries</p>
        <h2 className="section-title section-title--sm">{heading}</h2>
        {intro && <p className="enquiry__intro">{intro}</p>}
      </div>

      <div className="enquiry__grid">
        <label className="field">
          <span>Name *</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
          />
          {errors.name && <em className="field__error">{errors.name}</em>}
        </label>

        <label className="field">
          <span>Phone *</span>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            placeholder="07xx xxx xxx"
            aria-invalid={Boolean(errors.phone)}
            autoComplete="tel"
          />
          {errors.phone && <em className="field__error">{errors.phone}</em>}
        </label>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
          />
          {errors.email && <em className="field__error">{errors.email}</em>}
        </label>

        <label className="field">
          <span>Product of interest</span>
          <select name="interest" value={values.interest} onChange={(event) => update('interest', event.target.value)}>
            <option value="">General enquiry</option>
            <optgroup label="Tractors">
              {products
                .filter((product) => product.category === 'tractors')
                .map((product) => (
                  <option key={product.slug} value={product.name}>
                    {product.brand ? `${product.brand} — ` : ''}
                    {product.name}
                  </option>
                ))}
            </optgroup>
            <optgroup label="Implements &amp; Equipment">
              {products
                .filter((product) => product.category === 'implements')
                .map((product) => (
                  <option key={product.slug} value={product.name}>
                    {product.name}
                  </option>
                ))}
            </optgroup>
            <option value="Spare parts">Spare parts</option>
          </select>
        </label>

        <label className="field field--full">
          <span>Message *</span>
          <textarea
            name="message"
            rows={compact ? 3 : 4}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            placeholder="Tell us what you need — model, implements, land size or the parts you are looking for."
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <em className="field__error">{errors.message}</em>}
        </label>
      </div>

      <div className="enquiry__foot">
        <button type="submit" className="btn btn--primary">
          Send Enquiry
          <ArrowRight size={15} />
        </button>
        <p className="enquiry__note">
          Your details are used only to respond to this enquiry.
          {isPlaceholder(site.contact.whatsapp) && ' Your message opens in WhatsApp, ready to send.'}
        </p>
      </div>
    </form>
  );
}
