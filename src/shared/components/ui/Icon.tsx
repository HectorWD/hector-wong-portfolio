/**
 * Icono de Material Symbols Outlined.
 * La fuente se carga en `index.html` y la utilidad `icon` vive en el CSS base.
 */
export function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={`icon ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
