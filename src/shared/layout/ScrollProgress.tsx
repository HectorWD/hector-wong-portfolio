import { useEffect, useState } from 'react';

/**
 * Barra de progreso de lectura con lectura numérica, el HUD del diseño.
 *
 * El listener va en `passive` y toda la escritura ocurre dentro de un
 * `requestAnimationFrame`, así el scroll nunca se bloquea por esto.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(100, Math.max(0, Math.round(ratio * 100))));
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="flex items-center gap-space-xs">
      <div
        className="h-1 w-24 bg-surface-container-highest lg:w-40"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-primary-container transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="font-code text-[11px] tabular-nums text-outline">
        {String(progress).padStart(3, '0')}%
      </span>
    </div>
  );
}
