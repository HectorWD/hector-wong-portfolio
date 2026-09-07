import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { Icon } from '@/shared/components/ui/Icon';
import { Section } from '@/shared/components/ui/Section';
import { SectionBanner } from '@/shared/components/ui/SectionBanner';
import { SlashCard } from '@/shared/components/ui/SlashCard';
import { CV_FILES } from '@/shared/constants/site.constants';
import { ABOUT_CONTENT } from '../constants/about.content';

export function AboutSection() {
  const { t, locale } = useLanguage();
  const about = t(ABOUT_CONTENT);

  // El boton entrega el CV del idioma activo; el enlace pequeno ofrece el otro.
  const altLocale = locale === 'en' ? 'es' : 'en';

  return (
    <Section id="about">
      <SectionBanner title={about.sectionTitle} meta={about.sectionMeta} />

      <SlashCard accent="red">
        <h3 className="flex items-center gap-space-xs font-display text-headline-md tracking-wide text-secondary uppercase">
          <Icon name="psychology" className="text-[22px] text-secondary-container" />
          {about.cardTitle}
        </h3>

        <p className="font-body text-body-md text-on-surface-variant">{about.profile}</p>

        <p className="border-t border-outline-variant pt-space-xs font-code text-[12px] tracking-wide text-outline">
          {about.footnote}
        </p>

        <div className="flex flex-wrap items-center gap-space-sm pt-space-2xs">
          <a
            href={CV_FILES[locale]}
            download
            className="flex items-center gap-space-xs bg-secondary-container px-space-md py-space-xs text-on-secondary-fixed shadow-hard-sm transition-transform hover:-translate-y-0.5"
          >
            <Icon name="download" className="text-[18px]" />
            <span className="font-display text-[14px] tracking-[0.08em] uppercase">
              {about.cvLabel}
            </span>
          </a>

          <a
            href={CV_FILES[altLocale]}
            download
            className="font-code text-[12px] text-outline underline underline-offset-4 transition-colors hover:text-tertiary"
          >
            {about.cvAltLabel}
          </a>
        </div>
      </SlashCard>

      <ul className="grid grid-cols-3 gap-space-xs">
        {about.stats.map((stat) => (
          <li
            key={stat.label}
            className="flex flex-col justify-center gap-1 bg-surface-container-high p-space-xs text-center"
          >
            <span className="font-display text-headline-md text-tertiary">{stat.value}</span>
            <span className="font-display text-[11px] tracking-[0.08em] text-on-surface-variant uppercase">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
