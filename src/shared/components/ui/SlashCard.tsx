import type { ReactNode } from 'react';

/** Color de la sombra que aparece al pasar el puntero. */
export type SlashAccent = 'red' | 'yellow' | 'cyan' | 'none';

const HOVER_SHADOW: Record<SlashAccent, string> = {
  red: 'hover:shadow-[6px_6px_0px_#e60012]',
  yellow: 'hover:shadow-[6px_6px_0px_#fde400]',
  cyan: 'hover:shadow-[6px_6px_0px_#00daf3]',
  none: '',
};

/**
 * Tarjeta base del diseno: caja inclinada con sombra dura sin blur.
 * El contenido se contra-inclina para que el texto quede legible.
 */
export function SlashCard({
  children,
  accent = 'red',
  className = '',
}: {
  children: ReactNode;
  accent?: SlashAccent;
  className?: string;
}) {
  return (
    <div
      className={[
        '-skew-x-3 bg-surface-container p-space-md shadow-hard transition-shadow duration-200',
        HOVER_SHADOW[accent],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="flex skew-x-3 flex-col gap-space-xs">{children}</div>
    </div>
  );
}
