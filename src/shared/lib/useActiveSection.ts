import { useEffect, useState } from 'react';
import type { SectionId } from '../types/section.types';

/**
 * Marca cual de las secciones dadas ocupa el centro del viewport, para
 * iluminar la pestana correspondiente en la barra inferior.
 *
 * Usa IntersectionObserver con un rootMargin que reduce la zona activa a una
 * franja central; asi solo hay una seccion activa a la vez incluso cuando dos
 * son visibles.
 */
export function useActiveSection(ids: readonly SectionId[]): SectionId | null {
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(visible.target.id as SectionId);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
