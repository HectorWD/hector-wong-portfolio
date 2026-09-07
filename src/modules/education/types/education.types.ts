export interface EducationEntry {
  id: string;
  degree: string;
  school: string;
  dates: string;
  note: string;
}

export interface EducationContent {
  sectionTitle: string;
  sectionMeta: string;
  entries: EducationEntry[];
}
