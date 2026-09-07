import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { TechChip } from '@/shared/components/ui/Chip';
import { Icon } from '@/shared/components/ui/Icon';
import { Section } from '@/shared/components/ui/Section';
import { SectionBanner } from '@/shared/components/ui/SectionBanner';
import { SKILLS_CONTENT } from '../constants/skills.content';

export function SkillsSection() {
  const { t } = useLanguage();
  const skills = t(SKILLS_CONTENT);

  return (
    <Section id="skills">
      <SectionBanner title={skills.sectionTitle} meta={skills.sectionMeta} />

      <div className="-skew-x-3 border border-outline-variant bg-surface-container p-space-md shadow-hard">
        <dl className="flex skew-x-3 flex-col divide-y divide-outline-variant">
          {skills.groups.map((group) => (
            <div key={group.id} className="flex flex-col gap-space-xs py-space-sm first:pt-0 last:pb-0">
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
      </div>
    </Section>
  );
}
