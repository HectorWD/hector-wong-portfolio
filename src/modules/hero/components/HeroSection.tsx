import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { Icon } from '@/shared/components/ui/Icon';
import { PRIMARY_CTA_TARGET } from '@/shared/constants/site.constants';
import { HERO_CONTENT } from '../constants/hero.content';
import { HeroBanner } from './HeroBanner';

/**
 * Portada: banda de estado, ilustracion recortada en diagonal con el nombre
 * encima, titular grande, resumen y llamadas a la accion.
 */
export function HeroSection() {
  const { t } = useLanguage();
  const hero = t(HERO_CONTENT);

  return (
    <section className="relative z-10 mx-auto flex w-full max-w-reading flex-col gap-space-md px-gutter-mobile py-space-lg sm:px-gutter-desktop lg:max-w-none lg:pt-space-xl">
      {/* Banda de estado */}
      <div className="flex -skew-x-6 items-center justify-between gap-space-xs">
        <p className="border-l-4 border-primary-container bg-surface-container-high px-space-xs py-1">
          <span className="inline-block skew-x-6 font-code text-code-snippet font-bold tracking-wider text-on-surface">
            {hero.statusChip}
          </span>
        </p>
        <p className="bg-secondary-container px-space-xs py-1 text-on-secondary-fixed">
          <span className="inline-block skew-x-6 font-display text-[13px] tracking-[0.08em] uppercase">
            {hero.levelChip}
          </span>
        </p>
      </div>

      {/* Ilustracion + nombre */}
      <div className="relative border-2 border-primary-container shadow-hard">
        <div className="aspect-[1408/577] w-full overflow-hidden bg-surface-container-lowest">
          <HeroBanner className="h-full w-full" />
        </div>

        <h1 className="absolute bottom-space-sm -left-1 -skew-x-6 bg-primary-container lg:hidden px-space-sm py-space-2xs text-on-primary-container shadow-hard-sm">
          <span className="inline-block skew-x-6 font-display text-headline-lg-mobile tracking-wide uppercase">
            {hero.nameBanner}
          </span>
        </h1>
      </div>

      {/* Rol + titular */}
      <div className="flex flex-col gap-space-xs">
        <p className="w-fit -skew-x-6 bg-surface-container-high px-space-xs py-1 lg:hidden">
          <span className="inline-block skew-x-6 font-code text-code-snippet font-bold tracking-wider text-tertiary">
            {hero.roleLabel}
          </span>
        </p>

        <p className="font-display text-display-hero-mobile text-secondary uppercase sm:text-headline-xl lg:text-display-hero">
          {hero.tagline}
        </p>
      </div>

      {/* Stack destacado */}
      <ul className="flex flex-wrap gap-space-xs">
        {hero.badges.map((badge) => (
          <li
            key={badge.label}
            className="flex items-center gap-1.5 border border-outline-variant bg-surface-container px-space-xs py-1"
          >
            <Icon name={badge.icon} className="text-[16px] text-primary-container" />
            <span className="font-code text-[12px] tracking-wider text-on-surface">
              {badge.label}
            </span>
          </li>
        ))}
      </ul>

      {/* Acciones */}
      <div className="flex flex-col gap-space-xs sm:flex-row">
        <a
          href={PRIMARY_CTA_TARGET}
          className="flex flex-1 -skew-x-6 items-center justify-center gap-space-xs bg-primary-container px-space-md py-space-sm text-on-primary-container shadow-[4px_4px_0px_#fde400] transition-transform hover:-translate-y-0.5"
        >
          <span className="inline-flex skew-x-6 items-center gap-space-xs font-display text-[15px] tracking-[0.08em] uppercase">
            <Icon name="military_tech" className="text-[18px]" />
            {hero.primaryCta}
          </span>
        </a>

        <a
          href="#contact"
          className="flex flex-1 -skew-x-6 items-center justify-center gap-space-xs border border-outline-variant bg-surface-container-high px-space-md py-space-sm text-on-surface transition-colors hover:bg-surface-container-highest"
        >
          <span className="inline-flex skew-x-6 items-center gap-space-xs font-display text-[15px] tracking-[0.08em] uppercase">
            <Icon name="send" className="text-[18px]" />
            {hero.secondaryCta}
          </span>
        </a>
      </div>
    </section>
  );
}
