import type { ReactNode } from 'react';
import { HalftoneBackdrop } from '../components/ui/HalftoneBackdrop';
import { BottomNav } from './BottomNav';
import { SiteFooter } from './SiteFooter';
import { TopBar } from './TopBar';

/**
 * Estructura de la pagina: trama de fondo a sangre, barra superior fija,
 * contenido y barra de navegacion inferior.
 *
 * El padding inferior deja sitio a la barra fija para que la ultima seccion
 * no quede tapada.
 */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-surface">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]">
        <HalftoneBackdrop />
      </div>

      <TopBar />

      <main id="top" className="relative z-10 pt-20 pb-32">
        {children}
        <SiteFooter />
      </main>

      <BottomNav />
    </div>
  );
}
