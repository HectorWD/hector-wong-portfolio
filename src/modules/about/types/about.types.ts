export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutContent {
  sectionTitle: string;
  sectionMeta: string;
  cardTitle: string;
  /** Perfil profesional, tomado tal cual del CV. */
  profile: string;
  footnote: string;
  stats: AboutStat[];
  /** Descarga del CV en el idioma activo. */
  cvLabel: string;
  /** Enlace a la otra version, ej. "También en inglés". */
  cvAltLabel: string;
}
