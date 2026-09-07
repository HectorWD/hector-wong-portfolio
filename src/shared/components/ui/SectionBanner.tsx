/**
 * Cabecera de seccion: rotulo blanco cortado en diagonal con sombra roja,
 * y a la derecha una etiqueta monoespaciada con el estado de la seccion.
 *
 * El `-skew-x-6` del contenedor se compensa con `skew-x-6` en el texto para
 * que las letras queden rectas y solo se incline la caja.
 */
export function SectionBanner({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="flex -skew-x-6 items-center justify-between gap-space-xs">
      <h2 className="bg-secondary px-space-sm py-space-2xs text-on-secondary-fixed shadow-[3px_3px_0px_#e60012]">
        <span className="inline-block skew-x-6 font-display text-headline-md tracking-wider uppercase">
          {title}
        </span>
      </h2>

      {meta ? (
        <p className="bg-surface-container-high px-space-xs py-1 font-code text-code-snippet font-bold text-primary-container">
          <span className="inline-block skew-x-6">{meta}</span>
        </p>
      ) : null}
    </div>
  );
}
