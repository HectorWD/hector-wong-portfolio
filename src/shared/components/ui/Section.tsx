import type { ReactNode } from 'react';
import type { SectionId } from '../../types/section.types';

/**
 * Envoltura comun de las secciones: ancla de navegacion, ancho de lectura
 * centrado y respiracion vertical consistente.
 */
export function Section({
  id,
  children,
  className = '',
}: {
  id: SectionId;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 mx-auto flex w-full max-w-reading flex-col gap-space-md px-gutter-mobile py-space-xl sm:px-gutter-desktop ${className}`}
    >
      {children}
    </section>
  );
}
