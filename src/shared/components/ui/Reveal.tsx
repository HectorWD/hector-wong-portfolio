import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

/** Si el observador no da señales en este tiempo, mostramos el contenido igual. */
const FAILSAFE_MS = 1200;

/**
 * Revela su contenido cuando entra en pantalla, con el corte diagonal del
 * diseño. Solo se dispara una vez: reanimar al volver a subir marea.
 *
 * El contenido parte de `opacity: 0`, así que la animación no puede ser el
 * único camino hacia el estado visible. Hay dos redes de seguridad: si el
 * navegador no trae `IntersectionObserver` se muestra de inmediato, y si el
 * observador existe pero nunca entrega una primera notificación —pasa con
 * algunos navegadores embebidos y extensiones de privacidad— un temporizador
 * lo destapa. Un portafolio en blanco es mucho peor que perder una transición.
 *
 * `delay` escalona elementos hermanos; conviene mantenerlo por debajo de unos
 * 150 ms para que la página no se sienta lenta al recorrerla rápido.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    // Una primera notificación, aunque diga que no intersecta, confirma que el
    // observador funciona y que podemos confiar en él para el resto.
    let responded = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        responded = true;
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    observer.observe(node);

    const failsafe = window.setTimeout(() => {
      if (!responded) setShown(true);
    }, FAILSAFE_MS);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
