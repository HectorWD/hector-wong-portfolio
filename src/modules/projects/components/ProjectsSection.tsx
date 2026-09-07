import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { Section } from '@/shared/components/ui/Section';
import { Reveal } from '@/shared/components/ui/Reveal';
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
          ? projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))
          : Array.from({ length: PLACEHOLDER_SLOTS }, (_, index) => (
              <Reveal key={index} delay={index * 70}>
                <ProjectPlaceholderCard content={content} />
              </Reveal>
            ))}
      </div>
    </Section>
  );
}
