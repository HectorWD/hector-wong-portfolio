import type { Localized } from '@/modules/i18n/types/i18n.types';
import type { HeroContent } from '../types/hero.types';

/**
 * Portada. Los datos duros (rol, stack, ubicacion) salen de `cv/cv-data.json`;
 * el tono de Persona 5 es la capa de estilo del diseno.
 */
export const HERO_CONTENT: Localized<HeroContent> = {
  en: {
    statusChip: 'STATUS: OPEN TO WORK',
    levelChip: 'LVL 99 // WILD CARD',
    nameBanner: 'HECTOR WONG // FRONTEND DEV',
    roleLabel: 'FRONTEND DEVELOPER · REACT / REACT NATIVE',
    tagline: 'WE STEAL BLAND SITES & AWAKEN HEARTS.',
    badges: [
      { icon: 'code', label: 'TYPESCRIPT' },
      { icon: 'bolt', label: 'REACT' },
      { icon: 'smartphone', label: 'REACT NATIVE' },
      { icon: 'layers', label: 'NEXT.JS' },
    ],
    primaryCta: 'VIEW WORK',
    secondaryCta: 'SEND NOTICE',
  },
  es: {
    statusChip: 'ESTADO: ABIERTO A PROPUESTAS',
    levelChip: 'NVL 99 // COMODÍN',
    nameBanner: 'HECTOR WONG // FRONTEND DEV',
    roleLabel: 'DESARROLLADOR FRONTEND · REACT / REACT NATIVE',
    tagline: 'ROBAMOS INTERFACES GRISES Y DESPERTAMOS CORAZONES.',
    badges: [
      { icon: 'code', label: 'TYPESCRIPT' },
      { icon: 'bolt', label: 'REACT' },
      { icon: 'smartphone', label: 'REACT NATIVE' },
      { icon: 'layers', label: 'NEXT.JS' },
    ],
    primaryCta: 'VER TRABAJO',
    secondaryCta: 'ENVIAR AVISO',
  },
};
