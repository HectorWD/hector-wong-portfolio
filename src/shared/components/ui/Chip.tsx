import type { ReactNode } from 'react';

/** Chip monoespaciado para stacks tecnicos. */
export function TechChip({ children }: { children: ReactNode }) {
  return (
    <span className="bg-surface-container-lowest px-2 py-0.5 font-code text-[12px] text-on-surface">
      {children}
    </span>
  );
}

export type BadgeTone = 'primary' | 'muted' | 'accent';

const BADGE_TONE: Record<BadgeTone, string> = {
  primary: 'bg-primary-container text-on-primary-container',
  muted: 'bg-surface-container-highest text-secondary',
  accent: 'bg-secondary-container text-on-secondary-fixed',
};

/** Etiqueta corta en mayusculas, la que rotula cada tarjeta. */
export function Badge({ children, tone = 'primary' }: { children: ReactNode; tone?: BadgeTone }) {
  return (
    <span
      className={`${BADGE_TONE[tone]} px-space-xs py-0.5 font-display text-[12px] tracking-[0.08em] uppercase`}
    >
      {children}
    </span>
  );
}

/** Metadato a la derecha de una tarjeta: fechas, estado, empresa. */
export function MetaText({ children, tone = 'muted' }: { children: ReactNode; tone?: 'muted' | 'accent' }) {
  return (
    <span
      className={`font-code text-code-snippet font-bold ${
        tone === 'accent' ? 'text-secondary-container' : 'text-outline'
      }`}
    >
      {children}
    </span>
  );
}
