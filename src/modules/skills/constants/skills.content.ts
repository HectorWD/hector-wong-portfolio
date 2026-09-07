import type { Localized } from '@/modules/i18n/types/i18n.types';
import type { SkillsContent } from '../types/skills.types';

/**
 * Competencias tal como estan en el CV.
 *
 * El diseno original traia barras con porcentajes (98/100, 95/100...) que no
 * corresponden a ninguna medicion real, asi que se sustituyeron por los
 * grupos del CV. Se conserva el ritmo visual de filas etiquetadas.
 */
export const SKILLS_CONTENT: Localized<SkillsContent> = {
  en: {
    sectionTitle: '04 // SKILLS',
    sectionMeta: 'LOADOUT',
    groups: [
      {
        id: 'core',
        icon: 'code',
        label: 'CORE',
        items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'C#'],
      },
      {
        id: 'frameworks',
        icon: 'bolt',
        label: 'FRAMEWORKS',
        items: ['React', 'React Native', 'Next.js', 'Node.js'],
      },
      {
        id: 'testing',
        icon: 'science',
        label: 'TESTING & TOOLS',
        items: ['Jest', 'Vitest', 'Git', 'GitHub', 'SQL Server'],
      },
      {
        id: 'practices',
        icon: 'architecture',
        label: 'PRACTICES',
        items: [
          'Responsive design',
          'User interface design',
          'SOLID principles',
          'SEO fundamentals',
        ],
      },
      {
        id: 'languages',
        icon: 'translate',
        label: 'LANGUAGES',
        items: ['Spanish (native)', 'English (B2)'],
      },
    ],
  },
  es: {
    sectionTitle: '04 // SKILLS',
    sectionMeta: 'EQUIPAMIENTO',
    groups: [
      {
        id: 'core',
        icon: 'code',
        label: 'LENGUAJES',
        items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'C#'],
      },
      {
        id: 'frameworks',
        icon: 'bolt',
        label: 'FRAMEWORKS',
        items: ['React', 'React Native', 'Next.js', 'Node.js'],
      },
      {
        id: 'testing',
        icon: 'science',
        label: 'PRUEBAS Y TOOLS',
        items: ['Jest', 'Vitest', 'Git', 'GitHub', 'SQL Server'],
      },
      {
        id: 'practices',
        icon: 'architecture',
        label: 'PRÁCTICAS',
        items: [
          'Diseño responsivo',
          'Diseño de interfaces',
          'Principios SOLID',
          'Fundamentos de SEO',
        ],
      },
      {
        id: 'languages',
        icon: 'translate',
        label: 'IDIOMAS',
        items: ['Español (nativo)', 'Inglés (B2)'],
      },
    ],
  },
};
