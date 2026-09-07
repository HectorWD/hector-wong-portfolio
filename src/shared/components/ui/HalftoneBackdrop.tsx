import { useId } from 'react';

/**
 * Trama de puntos tipo comic mas rayado diagonal, el fondo caracteristico del
 * diseno. Se dibuja detras del contenido y no captura eventos.
 *
 * Los ids de los `<pattern>` se generan con `useId` para que varias instancias
 * puedan convivir en la misma pagina sin pisarse.
 */
export function HalftoneBackdrop({ className = '' }: { className?: string }) {
  const rawId = useId();
  const dotsId = `halftone-dots-${rawId}`;
  const stripesId = `diagonal-stripes-${rawId}`;

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={dotsId} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.8" fill="#e60012" />
          <circle cx="10" cy="10" r="1.2" fill="#ffffff" />
        </pattern>
        <pattern
          id={stripesId}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="20" stroke="#fde400" strokeWidth="1.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${dotsId})`} />
      <rect width="100%" height="100%" fill={`url(#${stripesId})`} />
    </svg>
  );
}
