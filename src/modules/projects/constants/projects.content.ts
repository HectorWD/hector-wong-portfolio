import type { Localized } from '@/modules/i18n/types/i18n.types';
import type { Project, ProjectsContent } from '../types/projects.types';

/**
 * PARA LLENAR.
 *
 * Los proyectos que traia el diseno de Stitch eran inventados, asi que se
 * quitaron. En cuanto haya proyectos reales, se agregan aqui y la seccion
 * cambia sola: si el arreglo tiene elementos se pintan las tarjetas reales,
 * si esta vacio se pintan los huecos marcados.
 *
 * Ejemplo de entrada:
 *
 * {
 *   id: 'mi-proyecto',
 *   target: 'TARGET: DASHBOARD',
 *   title: 'NOMBRE DEL PROYECTO',
 *   description: 'Que resuelve y cual fue tu aporte.',
 *   stack: ['React', 'TypeScript'],
 *   image: '/img/mi-proyecto.jpg',
 *   imageAlt: 'Captura del proyecto',
 *   links: [{ label: 'LIVE', href: 'https://...', icon: 'open_in_new' }],
 * }
 */
export const PROJECTS: Localized<Project[]> = {
  en: [],
  es: [],
};

/** Cuantos huecos dibujar mientras no haya proyectos cargados. */
export const PLACEHOLDER_SLOTS = 2;

export const PROJECTS_CONTENT: Localized<ProjectsContent> = {
  en: {
    sectionTitle: '03 // FEATURED HEISTS',
    sectionMeta: 'TREASURES SECURED',
    placeholderBadge: 'SLOT OPEN',
    placeholderTitle: 'HEIST IN PREPARATION',
    placeholderHint:
      'Reserved for a personal project. Add it in src/modules/projects/constants/projects.content.ts and this slot turns into a real card.',
  },
  es: {
    sectionTitle: '03 // GOLPES DESTACADOS',
    sectionMeta: 'TESOROS ASEGURADOS',
    placeholderBadge: 'ESPACIO LIBRE',
    placeholderTitle: 'GOLPE EN PREPARACIÓN',
    placeholderHint:
      'Reservado para un proyecto propio. Agrégalo en src/modules/projects/constants/projects.content.ts y este hueco se convierte en una tarjeta real.',
  },
};
