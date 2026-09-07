export interface SkillGroup {
  id: string;
  icon: string;
  label: string;
  items: string[];
}

export interface SkillsContent {
  sectionTitle: string;
  sectionMeta: string;
  groups: SkillGroup[];
}
