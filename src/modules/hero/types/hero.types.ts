export interface HeroBadge {
  icon: string;
  label: string;
}

export interface HeroContent {
  statusChip: string;
  levelChip: string;
  nameBanner: string;
  roleLabel: string;
  /** Titular grande de la portada. */
  tagline: string;
  badges: HeroBadge[];
  primaryCta: string;
  secondaryCta: string;
}
