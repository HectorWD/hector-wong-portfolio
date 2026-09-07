import type { Localized } from '@/modules/i18n/types/i18n.types';
import type { ExperienceContent } from '../types/experience.types';

/**
 * Trayectoria real, espejo de `cv/cv-data.json`.
 * Si cambia el CV, este archivo es el unico sitio que hay que tocar.
 */
export const EXPERIENCE_CONTENT: Localized<ExperienceContent> = {
  en: {
    sectionTitle: '02 // MISSION ARCHIVE',
    sectionMeta: 'ACTIVE DEPLOYMENTS',
    entries: [
      {
        id: 'ambit',
        badge: 'MISSION: FRONTEND DEVELOPER',
        company: 'Directo Group',
        dates: 'Oct 2022 — Present',
        location: 'Monterrey, Mexico',
        context:
          'Ambit One is a cloud restaurant-management suite — point of sale, inventory, kitchen display and e-invoicing — used across Latin America, integrated with Rappi, Uber Eats and DiDi Food, and currently expanding into Argentina and Peru.',
        bullets: [
          'Develop and maintain the frontend across the full product ecosystem: the cloud point-of-sale system, the e-commerce storefront, and reporting interfaces that surface sales and operational data to restaurant operators.',
          'Build Ambit Driver in React Native, a delivery-fleet application with more than 50,000 downloads on Google Play, supporting live order assignment, real-time delivery tracking and multi-branch administration.',
          'Improve organic search visibility of the public product site through semantic HTML structure and meta tag optimisation.',
          'Work in TypeScript with Jest and Vitest coverage, applying SOLID principles to keep component architecture scalable and maintainable.',
        ],
        stack: ['TypeScript', 'React', 'React Native', 'Next.js', 'Jest', 'Vitest'],
        current: true,
      },
      {
        id: 'specialisation',
        badge: 'MISSION: FRONTEND SPECIALISATION',
        company: 'Self-directed',
        dates: '2021 — 2022',
        location: '',
        context: '',
        bullets: [
          'Advanced React bootcamp and a self-built portfolio of applications — custom hooks, API-driven SPAs and Next.js projects — while moving from desktop and backend development into frontend engineering.',
        ],
        stack: ['React', 'Next.js', 'JavaScript'],
        current: false,
      },
      {
        id: 'hancarsoft',
        badge: 'MISSION: PROGRAMMER',
        company: 'Hancarsoft',
        dates: 'Jan 2021 — Apr 2021',
        location: 'Sonora, Mexico',
        context: '',
        bullets: [
          'Developed nomenclature-management software: application logic and user interfaces in C#, with database design and administration in SQL Server.',
        ],
        stack: ['C#', 'SQL Server'],
        current: false,
      },
    ],
  },
  es: {
    sectionTitle: '02 // ARCHIVO DE MISIONES',
    sectionMeta: 'DESPLIEGUES ACTIVOS',
    entries: [
      {
        id: 'ambit',
        badge: 'MISIÓN: DESARROLLADOR FRONTEND',
        company: 'Directo Group',
        dates: 'Oct 2022 — Actualidad',
        location: 'Monterrey, México',
        context:
          'Ambit One es una suite en la nube para restaurantes —punto de venta, inventarios, pantalla de cocina y facturación electrónica— usada en toda Latinoamérica, integrada con Rappi, Uber Eats y DiDi Food, y en expansión hacia Argentina y Perú.',
        bullets: [
          'Desarrollo y mantengo el frontend de todo el ecosistema: el punto de venta en la nube, la tienda en línea y las interfaces de reportería con datos de ventas y operación para los administradores de restaurantes.',
          'Construyo Ambit Driver en React Native, una aplicación de gestión de flotillas de reparto con más de 50 000 descargas en Google Play, con asignación de pedidos en vivo, seguimiento de entregas en tiempo real y administración de múltiples sucursales.',
          'Mejoré la visibilidad en buscadores del sitio público de producto mediante estructura HTML semántica y optimización de meta etiquetas.',
          'Trabajo con TypeScript y pruebas en Jest y Vitest, aplicando principios SOLID para mantener una arquitectura de componentes escalable y mantenible.',
        ],
        stack: ['TypeScript', 'React', 'React Native', 'Next.js', 'Jest', 'Vitest'],
        current: true,
      },
      {
        id: 'specialisation',
        badge: 'MISIÓN: ESPECIALIZACIÓN FRONTEND',
        company: 'Formación autodirigida',
        dates: '2021 — 2022',
        location: '',
        context: '',
        bullets: [
          'Bootcamp de React avanzado y portafolio propio de aplicaciones —hooks personalizados, SPAs con APIs y proyectos en Next.js— para migrar del desarrollo de escritorio y backend a la ingeniería frontend.',
        ],
        stack: ['React', 'Next.js', 'JavaScript'],
        current: false,
      },
      {
        id: 'hancarsoft',
        badge: 'MISIÓN: PROGRAMADOR',
        company: 'Hancarsoft',
        dates: 'Ene 2021 — Abr 2021',
        location: 'Sonora, México',
        context: '',
        bullets: [
          'Desarrollo de software de gestión de nomenclaturas: lógica de aplicación e interfaces de usuario en C#, con diseño y administración de bases de datos en SQL Server.',
        ],
        stack: ['C#', 'SQL Server'],
        current: false,
      },
    ],
  },
};
