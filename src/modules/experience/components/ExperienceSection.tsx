import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { Section } from '@/shared/components/ui/Section';
import { Reveal } from '@/shared/components/ui/Reveal';
import { SectionBanner } from '@/shared/components/ui/SectionBanner';
import { EXPERIENCE_CONTENT } from '../constants/experience.content';
import { ExperienceCard } from './ExperienceCard';

export function ExperienceSection() {
  const { t } = useLanguage();
  const experience = t(EXPERIENCE_CONTENT);

  return (
    <Section id="experience">
      <SectionBanner title={experience.sectionTitle} meta={experience.sectionMeta} />

      <div className="flex flex-col gap-space-md">
        {experience.entries.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 70}>
            <ExperienceCard entry={entry} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
