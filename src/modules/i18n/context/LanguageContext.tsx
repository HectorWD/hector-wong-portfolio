import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { LanguageContextValue, Locale, Localized } from '../types/i18n.types';
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, isLocale } from '../constants/languages';

export const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Lee la preferencia guardada y, si no hay ninguna, usa el idioma del
 * navegador. Se ejecuta de forma perezosa para no tocar `localStorage`
 * en cada render.
 */
function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Navegacion privada o storage bloqueado: seguimos con el fallback.
  }

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Si no se puede persistir, el idioma sigue vivo en memoria.
    }
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((current) => (current === 'en' ? 'es' : 'en'));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: <T,>(content: Localized<T>) => content[locale],
    }),
    [locale, toggleLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
