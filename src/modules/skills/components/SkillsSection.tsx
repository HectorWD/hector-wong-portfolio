import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { TechChip } from '@/shared/components/ui/Chip';
import { Icon } from '@/shared/components/ui/Icon';
import { Section } from '@/shared/components/ui/Section';
import { Reveal } from '@/shared/components/ui/Reveal';
import { SectionBanner } from '@/shared/components/ui/SectionBanner';
import { SKILLS_CONTENT } from '../constants/skills.content';

export function SkillsSection() {
  const { t } = useLanguage();
  const skills = t(SKILLS_CONTENT);

  return (
    <Section id="skills">
      <SectionBanner title={skills.sectionTitle} meta={skills.sectionMeta} />

      <Reveal delay={60} className="-skew-x-3 border border-outline-variant bg-surface-container p-space-md shadow-hard">
        <dl className="skew-x-3 lg:grid lg:grid-cols-2 lg:gap-x-space-lg">
          {skills.groups.map((group) => (
            <div key={group.id} className="flex flex-col gap-space-xs border-t border-outline-variant py-space-sm first:border-t-0 first:pt-0 lg:border-t lg:first:border-t lg:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+2)]:pt-0">
              <dt className="flex items-center gap-space-xs">
                <Icon name={group.icon} className="text-[18px] text-primary-container" />
                <span className="font-display text-[14px] tracking-[0.08em] text-secondary uppercase">
                  {group.label}
                </span>
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TechChip key={item}>{item}</TechChip>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
