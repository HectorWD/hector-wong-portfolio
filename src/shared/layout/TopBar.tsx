import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { LanguageToggle } from '@/modules/i18n/components/LanguageToggle';
import { BRAND } from '../constants/site.constants';

/** Barra superior fija: marca, lema y conmutador de idioma. */
export function TopBar() {
  const { t } = useLanguage();
  const brand = t(BRAND);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-safe">
      <div className="mx-auto flex max-w-reading items-center justify-between gap-space-xs bg-surface/90 px-gutter-mobile py-space-xs backdrop-blur-sm sm:px-gutter-desktop">
        <div className="flex -skew-x-6 items-center">
          <a
            href="#top"
            className="bg-primary-container px-space-xs py-1 text-on-primary-container shadow-hard-sm"
          >
            <span className="inline-block skew-x-6 font-display text-[14px] tracking-[0.08em] uppercase">
              {brand.mark}
            </span>
          </a>
          <p className="bg-secondary px-space-xs py-1 text-on-secondary-fixed">
            <span className="inline-block skew-x-6 font-display text-[13px] tracking-[0.08em] uppercase">
              {brand.tagline}
            </span>
          </p>
        </div>

        <LanguageToggle />
      </div>
    </header>
  );
}
