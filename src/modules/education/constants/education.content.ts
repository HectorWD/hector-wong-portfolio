import type { Localized } from '@/modules/i18n/types/i18n.types';
import type { EducationContent } from '../types/education.types';

/**
 * Formacion. El diseno de Stitch no traia esta seccion; se agrego porque el
 * CV si la tiene y es informacion que un reclutador busca.
 */
export const EDUCATION_CONTENT: Localized<EducationContent> = {
  en: {
    sectionTitle: '05 // STUDY RECORDS',
    sectionMeta: 'CERTIFIED',
    entries: [
      {
        id: 'ues',
        degree: 'B.Eng. in Software Engineering',
        school: 'Universidad Estatal de Sonora',
        dates: 'Aug 2017 — Jun 2021',
        note: 'Degree completed; professional certification obtained.',
      },
    ],
  },
  es: {
    sectionTitle: '05 // EXPEDIENTE ACADÉMICO',
    sectionMeta: 'TITULADO',
    entries: [
      {
        id: 'ues',
        degree: 'Ingeniería en Software',
        school: 'Universidad Estatal de Sonora',
        dates: 'Ago 2017 — Jun 2021',
        note: 'Carrera concluida y titulado.',
      },
    ],
  },
};
