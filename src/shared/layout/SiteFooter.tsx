import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { Icon } from '../components/ui/Icon';
import { CONTACT, FOOTER } from '../constants/site.constants';

const SOCIAL_LINKS = [
  { href: CONTACT.github, icon: 'code', label: 'GitHub' },
  { href: CONTACT.linkedin, icon: 'work', label: 'LinkedIn' },
  { href: `mailto:${CONTACT.email}`, icon: 'alternate_email', label: 'Email' },
];

export function SiteFooter() {
  const { t } = useLanguage();
  const footer = t(FOOTER);

  return (
    <footer className="mx-auto w-full max-w-reading border-t border-outline-variant px-gutter-mobile py-space-xl sm:px-gutter-desktop">
      <div className="flex items-start justify-between gap-space-md">
        <h2 className="font-display text-headline-md tracking-wider text-secondary uppercase">
          {footer.title}
        </h2>
        <p className="font-code text-code-snippet text-primary-container">{footer.version}</p>
      </div>

      <p className="mt-space-xs max-w-prose font-body text-body-sm text-on-surface-variant">
        {footer.blurb}
      </p>

      <ul className="mt-space-md flex gap-space-xs">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center bg-surface-container-high text-on-surface-variant transition-colors hover:bg-primary-container hover:text-on-primary-container"
            >
              <Icon name={link.icon} className="text-[20px]" />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-space-lg font-code text-[12px] tracking-wider text-outline uppercase">
        © {new Date().getFullYear()} {CONTACT.name} · {CONTACT.location}
      </p>
    </footer>
  );
}
