/** Idiomas soportados por el sitio. */
export type Locale = 'en' | 'es';

/**
 * Contenido que existe en los dos idiomas.
 * Cada modulo declara su copy con esta forma y el consumidor resuelve
 * el idioma activo con `useLanguage()`.
 */
export type Localized<T> = Record<Locale, T>;

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Resuelve un bloque bilingue al idioma activo. */
  t: <T>(content: Localized<T>) => T;
}
