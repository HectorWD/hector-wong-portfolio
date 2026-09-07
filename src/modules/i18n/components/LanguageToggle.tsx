import { useLanguage } from '../hooks/useLanguage';
import { LOCALES, LOCALE_LABELS } from '../constants/languages';

/**
 * Conmutador EN / ES. Se dibuja como un par de pestanas cortadas en diagonal,
 * siguiendo el mismo lenguaje que el resto de las etiquetas del sitio.
 */
export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex -skew-x-6 overflow-hidden border border-outline-variant shadow-hard-sm"
      role="group"
      aria-label="Language / Idioma"
    >
      {LOCALES.map((option) => {
        const isActive = option === locale;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={isActive}
            className={[
              'px-space-xs py-1 font-display text-[12px] tracking-[0.12em] uppercase transition-colors',
              isActive
                ? 'bg-primary-container text-on-primary-container'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest',
            ].join(' ')}
          >
            <span className="inline-block skew-x-6">{LOCALE_LABELS[option]}</span>
          </button>
        );
      })}
    </div>
  );
}
