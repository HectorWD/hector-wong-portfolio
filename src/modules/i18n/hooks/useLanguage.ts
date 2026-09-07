import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import type { LanguageContextValue } from '../types/i18n.types';

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>.');
  }

  return context;
}
