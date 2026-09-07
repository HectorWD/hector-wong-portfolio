/** Anclas de navegacion del sitio. Cada seccion registra su id aqui. */
export type SectionId =
  | 'top'
  | 'about'
  | 'experience'
  | 'work'
  | 'skills'
  | 'education'
  | 'contact';

export interface NavItem {
  id: SectionId;
  /** Nombre del icono en Material Symbols Outlined. */
  icon: string;
}
