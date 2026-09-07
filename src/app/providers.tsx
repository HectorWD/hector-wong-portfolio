import type { ReactNode } from 'react';
import { LanguageProvider } from '@/modules/i18n/context/LanguageContext';

/**
 * Proveedores globales. Por ahora solo el idioma; el sitio no consume datos
 * remotos, asi que no hay cliente de queries ni router.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
