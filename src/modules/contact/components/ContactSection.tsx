import { useState, type FormEvent } from 'react';
import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { Icon } from '@/shared/components/ui/Icon';
import { Section } from '@/shared/components/ui/Section';
import { SectionBanner } from '@/shared/components/ui/SectionBanner';
import { CONTACT } from '@/shared/constants/site.constants';
import { CONTACT_CONTENT } from '../constants/contact.content';

const DIRECT_LINKS = [
  { href: `mailto:${CONTACT.email}`, icon: 'alternate_email', label: CONTACT.email },
  { href: CONTACT.github, icon: 'code', label: CONTACT.githubLabel },
  { href: CONTACT.linkedin, icon: 'work', label: CONTACT.linkedinLabel },
];

/**
 * Tarjeta de contacto. No hay backend: el formulario compone un `mailto:` y
 * abre el cliente de correo del visitante con el mensaje ya escrito, asi que
 * nada se envia a un tercero ni se pierde en el vacio.
 */
export function ContactSection() {
  const { t } = useLanguage();
  const content = t(CONTACT_CONTENT);

  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = from ? `${message}\n\n—\n${from}` : message;
    const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      content.mailSubject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  }

  return (
    <Section id="contact">
      <SectionBanner title={content.sectionTitle} meta={content.sectionMeta} />

      <div className="-skew-x-3 bg-primary-container p-space-md shadow-[6px_6px_0px_#fde400]">
        <div className="flex skew-x-3 flex-col gap-space-sm">
          <h3 className="font-display text-headline-lg-mobile text-on-primary-container uppercase">
            {content.headline}
          </h3>

          <p className="font-body text-body-sm text-on-primary-container/90">{content.body}</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-space-sm">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-from"
                className="font-display text-[12px] tracking-[0.08em] text-on-primary-container uppercase"
              >
                {content.fromLabel}
              </label>
              <input
                id="contact-from"
                type="email"
                required
                value={from}
                onChange={(event) => setFrom(event.target.value)}
                placeholder={content.fromPlaceholder}
                className="border border-on-primary-container/40 bg-surface-container-lowest px-space-xs py-space-xs font-code text-code-snippet text-on-surface placeholder:text-outline"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-message"
                className="font-display text-[12px] tracking-[0.08em] text-on-primary-container uppercase"
              >
                {content.messageLabel}
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={content.messagePlaceholder}
                className="resize-y border border-on-primary-container/40 bg-surface-container-lowest px-space-xs py-space-xs font-code text-code-snippet text-on-surface placeholder:text-outline"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-space-xs bg-secondary-container px-space-md py-space-sm text-on-secondary-fixed shadow-hard transition-transform hover:-translate-y-0.5"
            >
              <Icon name="local_fire_department" className="text-[18px]" />
              <span className="font-display text-[15px] tracking-[0.08em] uppercase">
                {content.submitLabel}
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-space-xs">
        <p className="font-display text-[12px] tracking-[0.08em] text-outline uppercase">
          {content.directLabel}
        </p>
        <ul className="flex flex-col gap-space-2xs">
          {DIRECT_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
                className="flex items-center gap-space-xs font-code text-code-snippet text-on-surface transition-colors hover:text-tertiary"
              >
                <Icon name={link.icon} className="text-[16px] text-primary-container" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
