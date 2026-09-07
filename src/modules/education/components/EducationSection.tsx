import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { MetaText } from '@/shared/components/ui/Chip';
import { Icon } from '@/shared/components/ui/Icon';
import { Section } from '@/shared/components/ui/Section';
import { SectionBanner } from '@/shared/components/ui/SectionBanner';
import { SlashCard } from '@/shared/components/ui/SlashCard';
import { EDUCATION_CONTENT } from '../constants/education.content';

export function EducationSection() {
  const { t } = useLanguage();
  const education = t(EDUCATION_CONTENT);

  return (
    <Section id="education">
      <SectionBanner title={education.sectionTitle} meta={education.sectionMeta} />

      {education.entries.map((entry) => (
        <SlashCard key={entry.id} accent="cyan">
          <div className="flex flex-wrap items-center justify-between gap-space-2xs">
            <h3 className="flex items-center gap-space-xs font-display text-headline-md tracking-wide text-secondary uppercase">
              <Icon name="school" className="text-[22px] text-tertiary" />
              {entry.degree}
            </h3>
            <MetaText>{entry.dates}</MetaText>
          </div>

          <p className="font-body text-body-md text-on-surface-variant">{entry.school}</p>
          <p className="font-code text-[12px] tracking-wide text-outline">{entry.note}</p>
        </SlashCard>
      ))}
    </Section>
  );
}
