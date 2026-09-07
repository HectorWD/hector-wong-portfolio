import { AboutSection } from '@/modules/about/components/AboutSection';
import { ContactSection } from '@/modules/contact/components/ContactSection';
import { EducationSection } from '@/modules/education/components/EducationSection';
import { ExperienceSection } from '@/modules/experience/components/ExperienceSection';
import { HeroSection } from '@/modules/hero/components/HeroSection';
import { ProjectsSection } from '@/modules/projects/components/ProjectsSection';
import { SkillsSection } from '@/modules/skills/components/SkillsSection';
import { SHOW_PROJECTS } from '@/shared/constants/site.constants';
import { SiteLayout } from '@/shared/layout/SiteLayout';

/**
 * Pagina unica del portafolio. El orden de las secciones es el del diseno,
 * con formacion anadida antes del contacto.
 */
export function PortfolioPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      {SHOW_PROJECTS ? <ProjectsSection /> : null}
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </SiteLayout>
  );
}
