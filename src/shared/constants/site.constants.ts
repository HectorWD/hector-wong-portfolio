import type { Localized } from '@/modules/i18n/types/i18n.types';
import type { NavItem } from '../types/section.types';

/**
 * Datos de contacto. Espejo de `cv/cv-data.json`.
 * El telefono vive solo en el CV en PDF: no se publica en el sitio.
 */
export const CONTACT = {
  name: 'Hector Wong',
  email: 'hectorwong2110@gmail.com',
  location: 'Monterrey, México',
  github: 'https://github.com/HectorWD',
  githubLabel: 'github.com/HectorWD',
  linkedin: 'https://linkedin.com/in/wongduranhector',
  linkedinLabel: 'linkedin.com/in/wongduranhector',
} as const;

/**
 * CV en PDF por idioma. Los archivos de `public/cv/` son los que genera
 * `cv/build.js`; si se regenera el CV hay que volver a copiarlos.
 */
export const CV_FILES: Localized<string> = {
  en: '/cv/Hector-Wong-CV-EN.pdf',
  es: '/cv/Hector-Wong-CV-ES.pdf',
};

export const BRAND: Localized<{ mark: string; tagline: string }> = {
  en: { mark: 'PHANTOM DEV', tagline: 'TAKE YOUR TIME' },
  es: { mark: 'PHANTOM DEV', tagline: 'TOMA TU TIEMPO' },
};

/**
 * Sección de proyectos.
 *
 * Apagada mientras no haya proyectos propios que enseñar: una sección con
 * huecos marcados resta más de lo que suma en un portafolio publicado.
 * Al ponerla en `true` reaparece en la página y en la navegación, y las
 * tarjetas salen de `src/modules/projects/constants/projects.content.ts`.
 */
export const SHOW_PROJECTS = false;

const ALL_NAV_ITEMS: readonly NavItem[] = [
  { id: 'about', icon: 'person' },
  { id: 'experience', icon: 'work_history' },
  { id: 'work', icon: 'stars' },
  { id: 'skills', icon: 'bolt' },
  { id: 'contact', icon: 'mail' },
];

export const NAV_ITEMS: readonly NavItem[] = ALL_NAV_ITEMS.filter(
  (item) => item.id !== 'work' || SHOW_PROJECTS,
);

/** Destino del botón principal de la portada. */
export const PRIMARY_CTA_TARGET = SHOW_PROJECTS ? '#work' : '#experience';

export const NAV_LABELS: Localized<Record<string, string>> = {
  en: {
    about: 'ABOUT',
    experience: 'EXP',
    work: 'WORK',
    skills: 'SKILLS',
    contact: 'CONTACT',
  },
  es: {
    about: 'PERFIL',
    experience: 'EXP',
    work: 'OBRA',
    skills: 'SKILLS',
    contact: 'CONTACTO',
  },
};

export const FOOTER: Localized<{ title: string; blurb: string; version: string }> = {
  en: {
    title: 'CALLING CARD',
    blurb:
      'Frontend engineering for production software. Built with React, TypeScript and Tailwind.',
    version: 'VER 1.0 // STEAL THE HEART',
  },
  es: {
    title: 'TARJETA DE PRESENTACIÓN',
    blurb:
      'Ingeniería frontend para software en producción. Hecho con React, TypeScript y Tailwind.',
    version: 'VER 1.0 // ROBA EL CORAZÓN',
  },
};
