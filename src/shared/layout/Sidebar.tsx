import { useMemo } from 'react';
import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { LanguageToggle } from '@/modules/i18n/components/LanguageToggle';
import { HERO_CONTENT } from '@/modules/hero/constants/hero.content';
import { Icon } from '../components/ui/Icon';
import { BRAND, CONTACT, CV_FILES, NAV_ITEMS, NAV_LABELS } from '../constants/site.constants';
import { useActiveSection } from '../lib/useActiveSection';

/**
 * Columna fija de escritorio: identidad, contacto y navegación numerada.
 *
 * Solo existe a partir de `lg`. Por debajo de ese ancho manda la barra
 * superior más la navegación inferior, que es el diseño móvil original.
 */
export function Sidebar() {
  const { t, locale } = useLanguage();
  const brand = t(BRAND);
  const hero = t(HERO_CONTENT);
  const labels = t(NAV_LABELS);

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <aside className="fixed top-0 left-0 z-40 hidden h-screen w-[420px] flex-col justify-between border-r border-outline-variant bg-surface-container-lowest px-space-lg py-space-xl lg:flex xl:w-[480px]">
      <div className="flex flex-col gap-space-lg">
        {/* Marca */}
        <div className="flex -skew-x-6 items-center self-start">
          <p className="bg-primary-container px-space-xs py-1 text-on-primary-container shadow-hard-sm">
            <span className="inline-block skew-x-6 font-display text-[13px] tracking-[0.08em] uppercase">
              {brand.mark}
            </span>
          </p>
          <p className="bg-secondary px-space-xs py-1 text-on-secondary-fixed">
            <span className="inline-block skew-x-6 font-display text-[12px] tracking-[0.08em] uppercase">
              {brand.tagline}
            </span>
          </p>
        </div>

        {/* Identidad */}
        <div className="border-2 border-primary-container bg-surface-container p-space-md shadow-hard">
          <h1 className="font-display text-headline-lg text-secondary uppercase">{CONTACT.name}</h1>
          <p className="mt-1 w-fit bg-secondary-container px-space-xs py-0.5 font-display text-[13px] tracking-[0.08em] text-on-secondary-fixed uppercase">
            {locale === 'en' ? 'FRONTEND DEVELOPER' : 'DESARROLLADOR FRONTEND'}
          </p>
          <p className="mt-space-xs font-code text-[11px] tracking-wide text-tertiary">
            {hero.roleLabel}
          </p>
        </div>

        {/* Contacto. El teléfono vive solo en el CV en PDF. */}
        <ul className="flex flex-col gap-space-2xs bg-surface-container-low p-space-sm">
          <li className="flex items-center gap-space-xs font-code text-[12px] text-on-surface-variant">
            <Icon name="location_on" className="text-[16px] text-primary-container" />
            {CONTACT.location}
          </li>
          <li>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-space-xs font-code text-[12px] text-on-surface-variant transition-colors hover:text-tertiary"
            >
              <Icon name="alternate_email" className="text-[16px] text-primary-container" />
              {CONTACT.email}
            </a>
          </li>
          <li>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-space-xs font-code text-[12px] text-on-surface-variant transition-colors hover:text-tertiary"
            >
              <Icon name="code" className="text-[16px] text-primary-container" />
              {CONTACT.githubLabel}
            </a>
          </li>
          <li>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-space-xs font-code text-[12px] text-on-surface-variant transition-colors hover:text-tertiary"
            >
              <Icon name="work" className="text-[16px] text-primary-container" />
              {CONTACT.linkedinLabel}
            </a>
          </li>
        </ul>

        {/* Navegación numerada */}
        <nav aria-label="Section navigation">
          <ul className="flex flex-col gap-space-2xs">
            {NAV_ITEMS.map((item, index) => {
              const isActive = item.id === activeId;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'flex items-center gap-space-xs px-space-sm py-space-xs transition-all duration-200',
                      isActive
                        ? 'translate-x-2 -skew-x-6 bg-primary-container text-on-primary-container shadow-[5px_5px_0px_#fde400]'
                        : 'text-on-surface-variant hover:translate-x-1 hover:text-secondary',
                    ].join(' ')}
                  >
                    <span className="inline-flex skew-x-0 items-center gap-space-xs">
                      <span className="font-code text-[11px] opacity-70">
                        // {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-[16px] tracking-[0.08em] uppercase">
                        {labels[item.id]}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Pie del sidebar */}
      <div className="flex flex-col gap-space-sm">
        <a
          href={CV_FILES[locale]}
          download
          className="flex items-center justify-center gap-space-xs bg-secondary-container px-space-sm py-space-xs text-on-secondary-fixed shadow-hard-sm transition-transform hover:-translate-y-0.5"
        >
          <Icon name="download" className="text-[16px]" />
          <span className="font-display text-[13px] tracking-[0.08em] uppercase">
            {locale === 'en' ? 'DOWNLOAD CV' : 'DESCARGAR CV'}
          </span>
        </a>

        <div className="flex items-center justify-between">
          <LanguageToggle />
          <p className="font-code text-[10px] tracking-wider text-outline uppercase">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </aside>
  );
}
