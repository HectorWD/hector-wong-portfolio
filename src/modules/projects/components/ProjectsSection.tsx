import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { Section } from '@/shared/components/ui/Section';
import { SectionBanner } from '@/shared/components/ui/SectionBanner';
import { PLACEHOLDER_SLOTS, PROJECTS, PROJECTS_CONTENT } from '../constants/projects.content';
import { ProjectCard } from './ProjectCard';
import { ProjectPlaceholderCard } from './ProjectPlaceholderCard';

export function ProjectsSection() {
  const { t } = useLanguage();
  const content = t(PROJECTS_CONTENT);
  const projects = t(PROJECTS);

  const hasProjects = projects.length > 0;

  return (
    <Section id="work">
      <SectionBanner title={content.sectionTitle} meta={content.sectionMeta} />

      <div className="flex flex-col gap-space-md">
        {hasProjects
          ? projects.map((project) => <ProjectCard key={project.id} project={project} />)
          : Array.from({ length: PLACEHOLDER_SLOTS }, (_, index) => (
              <ProjectPlaceholderCard key={index} content={content} />
            ))}
      </div>
    </Section>
  );
}
