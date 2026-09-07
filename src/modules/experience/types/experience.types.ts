export interface ExperienceEntry {
  id: string;
  /** Rotulo de la tarjeta, en el tono del diseno. */
  badge: string;
  company: string;
  dates: string;
  location: string;
  /** Que es el producto o la empresa. Opcional. */
  context: string;
  bullets: string[];
  stack: string[];
  /** La primera tarjeta marca el puesto actual. */
  current: boolean;
}

export interface ExperienceContent {
  sectionTitle: string;
  sectionMeta: string;
  entries: ExperienceEntry[];
}
