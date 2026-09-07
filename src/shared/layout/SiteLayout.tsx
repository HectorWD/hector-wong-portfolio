import type { ReactNode } from 'react';
import { HalftoneBackdrop } from '../components/ui/HalftoneBackdrop';
import { BottomNav } from './BottomNav';
import { Sidebar } from './Sidebar';
import { SiteFooter } from './SiteFooter';
import { StatusBar } from './StatusBar';
import { TopBar } from './TopBar';

/**
 * Dos disposiciones sobre el mismo contenido.
 *
 * Móvil (hasta `lg`): barra superior con la marca, contenido a ancho completo
 * y navegación inferior tipo aplicación.
 *
 * Escritorio (`lg` en adelante): columna fija de identidad y navegación a la
 * izquierda, y el contenido desplazado a su derecha bajo una franja de estado.
 */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-surface">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]">
        <HalftoneBackdrop />
      </div>

      <TopBar />
      <Sidebar />

      <div className="relative z-10 lg:ml-[420px] xl:ml-[480px]">
        <StatusBar />

        <main id="top" className="pt-20 pb-32 lg:pt-0 lg:pb-space-2xl">
          {children}
          <SiteFooter />
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
