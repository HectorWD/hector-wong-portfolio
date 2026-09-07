export interface ProjectLink {
  label: string;
  href: string;
  icon: string;
}

export interface Project {
  id: string;
  /** Rotulo superior de la tarjeta, ej. "TARGET: DASHBOARD". */
  target: string;
  title: string;
  description: string;
  stack: string[];
  /** Imagen opcional en `public/img`. */
  image?: string;
  imageAlt?: string;
  links: ProjectLink[];
}

export interface ProjectsContent {
  sectionTitle: string;
  sectionMeta: string;
  /** Estado vacio mientras no haya proyectos publicados. */
  placeholderBadge: string;
  placeholderTitle: string;
  placeholderHint: string;
}
