import type { Localized } from '@/modules/i18n/types/i18n.types';
import type { AboutContent } from '../types/about.types';

/** Perfil. El texto largo es el mismo del CV, sin adornos anadidos. */
export const ABOUT_CONTENT: Localized<AboutContent> = {
  en: {
    sectionTitle: '01 // CONFIDANT PROTOCOL',
    sectionMeta: 'RANK MAX',
    cardTitle: 'THE ARCHITECT BEHIND THE MASK',
    profile:
      'Frontend Developer with over four years of production experience in React, React Native and Next.js. At Ambit.la I build across a full restaurant-management SaaS ecosystem — cloud point of sale, reporting, e-commerce, and a fleet-management mobile application with more than 50,000 downloads on Google Play. I work in TypeScript with automated test coverage, and care about interfaces that stay maintainable long after they ship.',
    footnote:
      'Based in Monterrey, Mexico · Spanish (native), English (B2 — professional working proficiency).',
    stats: [
      { value: '4+ YRS', label: 'PRODUCTION EXPERIENCE' },
      { value: '50K+', label: 'APP DOWNLOADS' },
      { value: 'AMBIT.LA', label: 'POS · E-COMMERCE · FLEET' },
    ],
    cvLabel: 'DOWNLOAD CV (PDF)',
    cvAltLabel: 'También en español',
  },
  es: {
    sectionTitle: '01 // PROTOCOLO CONFIDENTE',
    sectionMeta: 'RANGO MAX',
    cardTitle: 'EL ARQUITECTO DETRÁS DE LA MÁSCARA',
    profile:
      'Desarrollador Frontend con más de cuatro años de experiencia en producción con React, React Native y Next.js. En Ambit.la desarrollo sobre un ecosistema SaaS de gestión de restaurantes: punto de venta en la nube, reportería, tienda en línea y una app móvil de flotillas con más de 50 000 descargas en Google Play. Trabajo con TypeScript y pruebas automatizadas, con foco en interfaces que siguen siendo mantenibles mucho después de publicarse.',
    footnote:
      'Radicado en Monterrey, México · Español (nativo), inglés (B2 — competencia profesional de trabajo).',
    stats: [
      { value: '4+ AÑOS', label: 'EXPERIENCIA EN PRODUCCIÓN' },
      { value: '50K+', label: 'DESCARGAS DE LA APP' },
      { value: 'AMBIT.LA', label: 'POS · E-COMMERCE · FLOTILLAS' },
    ],
    cvLabel: 'DESCARGAR CV (PDF)',
    cvAltLabel: 'Also available in English',
  },
};
