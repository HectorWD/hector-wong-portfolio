import { Reveal } from './Reveal';

/**
 * Cabecera de sección: rótulo blanco cortado en diagonal con sombra roja,
 * y a la derecha una etiqueta monoespaciada con el estado de la sección.
 *
 * El `-skew-x-6` del contenedor se compensa con `skew-x-6` en el texto para
 * que las letras queden rectas y solo se incline la caja. Al entrar en pantalla
 * un destello recorre el rótulo.
 */
export function SectionBanner({ title, meta }: { title: string; meta?: string }) {
  return (
    <Reveal className="flex -skew-x-6 items-center justify-between gap-space-xs">
      <h2 className="slash-sweep bg-secondary px-space-sm py-space-2xs text-on-secondary-fixed shadow-[3px_3px_0px_#e60012]">
        <span className="inline-block skew-x-6 font-display text-headline-md tracking-wider uppercase lg:text-headline-lg-mobile">
          {title}
        </span>
      </h2>

      {meta ? (
        <p className="bg-surface-container-high px-space-xs py-1 font-code text-code-snippet font-bold text-primary-container">
          <span className="inline-block skew-x-6">{meta}</span>
        </p>
      ) : null}
    </Reveal>
  );
}
