import { useId } from 'react';

/**
 * Portada original dibujada en SVG: ráfaga de círculos concéntricos, tajos
 * diagonales y trama de puntos, el vocabulario gráfico del design system sin
 * depender de ninguna ilustración con derechos de autor.
 *
 * Va en SVG y no en mapa de bits por tres razones: pesa ~3 KB en vez de 180 KB,
 * se ve nítida en cualquier densidad de pantalla, y toma los colores de los
 * mismos tokens que el resto del sitio.
 *
 * El tercio izquierdo se deja despejado a propósito: ahí cae el banner con el
 * nombre que dibuja `HeroSection`.
 */
export function HeroBanner({ className = '' }: { className?: string }) {
  const rawId = useId();
  const id = (name: string) => `${name}-${rawId}`;

  return (
    <svg
      viewBox="0 0 1408 577"
      className={className}
      role="img"
      aria-label="Composición gráfica de círculos concéntricos y tajos diagonales en rojo sobre negro"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Trama de medios tonos, más densa hacia los bordes. */}
        <pattern id={id('dots')} width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="#e60012" />
        </pattern>

        {/* Degradado que apaga la trama en el centro. */}
        <radialGradient id={id('dotsMask')} cx="66%" cy="45%" r="62%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="55%" stopColor="#555555" />
          <stop offset="100%" stopColor="#ffffff" />
        </radialGradient>
        <mask id={id('fade')}>
          <rect width="1408" height="577" fill={`url(#${id('dotsMask')})`} />
        </mask>

        {/* Fondo: rojo profundo que se apaga hacia la izquierda. */}
        <radialGradient id={id('glow')} cx="70%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#4a0007" />
          <stop offset="60%" stopColor="#1a0206" />
          <stop offset="100%" stopColor="#0e0e12" />
        </radialGradient>

        {/* Degradado de los tajos, para que no queden planos. */}
        <linearGradient id={id('slash')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff2233" />
          <stop offset="100%" stopColor="#a3000c" />
        </linearGradient>

        {/* Viñeta que oscurece el borde izquierdo bajo el nombre. */}
        <linearGradient id={id('vignette')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0e0e12" stopOpacity="0.95" />
          <stop offset="38%" stopColor="#0e0e12" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0e0e12" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1408" height="577" fill={`url(#${id('glow')})`} />

      {/* Ráfaga de círculos concéntricos. */}
      <g stroke="#e60012" fill="none" transform="translate(1015 232)" strokeLinecap="round">
        <circle r="46" strokeWidth="34" opacity="0.95" />
        <circle r="104" strokeWidth="18" opacity="0.8" />
        <circle r="162" strokeWidth="40" opacity="0.55" />
        <circle r="238" strokeWidth="12" opacity="0.62" />
        <circle r="304" strokeWidth="48" opacity="0.32" />
        <circle r="398" strokeWidth="16" opacity="0.4" />
        <circle r="478" strokeWidth="58" opacity="0.18" />
      </g>

      {/* Trama de puntos por encima, difuminada al centro. */}
      <rect
        width="1408"
        height="577"
        fill={`url(#${id('dots')})`}
        mask={`url(#${id('fade')})`}
        opacity="0.85"
      />

      {/* Tajos diagonales. Los negros dan profundidad, los rojos el acento. */}
      <g>
        {/* Cuña oscura que ancla la esquina inferior izquierda bajo el nombre. */}
        <polygon points="0,300 430,620 0,620" fill="#0b0b0e" opacity="0.9" />
        <polygon points="330,-40 470,-40 240,620 120,620" fill="#0b0b0e" opacity="0.9" />
        <polygon points="520,-40 596,-40 360,620 296,620" fill={`url(#${id('slash')})`} />
        <polygon points="742,-40 826,-40 596,620 528,620" fill="#0b0b0e" opacity="0.8" />
        <polygon points="1180,-40 1330,-40 1090,620 970,620" fill="#0b0b0e" opacity="0.65" />
        <polygon points="1338,-40 1384,-40 1186,620 1148,620" fill={`url(#${id('slash')})`} />
      </g>

      {/* Astillas finas: ruido controlado, como esquirlas de vidrio. */}
      <g fill="#ff3344" opacity="0.85">
        <polygon points="646,120 690,96 604,286 588,262" />
        <polygon points="880,382 918,366 846,512 830,488" />
        <polygon points="1042,74 1070,60 1006,196 992,178" />
      </g>

      {/* Acentos en amarillo ácido y cian: barras de glitch. */}
      <g>
        <rect x="596" y="206" width="232" height="11" fill="#fde400" />
        <rect x="656" y="228" width="96" height="5" fill="#fde400" opacity="0.6" />
        <rect x="906" y="424" width="176" height="8" fill="#00daf3" opacity="0.9" />
        <rect x="948" y="442" width="66" height="4" fill="#00daf3" opacity="0.5" />
      </g>

      <rect width="1408" height="577" fill={`url(#${id('vignette')})`} />
    </svg>
  );
}
