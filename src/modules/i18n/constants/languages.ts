import type { Locale } from '../types/i18n.types';

export const LOCALES = ['en', 'es'] as const;

export const DEFAULT_LOCALE: Locale = 'en';

/** Clave de localStorage donde se recuerda el idioma elegido. */
export const LOCALE_STORAGE_KEY = 'portfolio:locale';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}
