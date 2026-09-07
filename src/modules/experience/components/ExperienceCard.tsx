import { Badge, MetaText, TechChip } from '@/shared/components/ui/Chip';
import { SlashCard } from '@/shared/components/ui/SlashCard';
import type { ExperienceEntry } from '../types/experience.types';

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <SlashCard accent={entry.current ? 'red' : 'yellow'}>
      <div className="flex flex-wrap items-center justify-between gap-space-2xs">
        <Badge tone={entry.current ? 'primary' : 'muted'}>{entry.badge}</Badge>
        <MetaText tone={entry.current ? 'accent' : 'muted'}>{entry.dates}</MetaText>
      </div>

      <div>
        <h3 className="font-display text-headline-md tracking-wide text-secondary uppercase">
          {entry.company}
        </h3>
        {entry.location ? (
          <p className="font-code text-[12px] tracking-wide text-outline">{entry.location}</p>
        ) : null}
      </div>

      {entry.context ? (
        <p className="border-l-2 border-tertiary-container pl-space-xs font-body text-body-sm text-outline italic">
          {entry.context}
        </p>
      ) : null}

      <ul className="flex flex-col gap-space-2xs">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-space-xs font-body text-body-sm text-on-surface-variant">
            <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-primary-container" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-space-2xs">
        {entry.stack.map((tech) => (
          <TechChip key={tech}>{tech}</TechChip>
        ))}
      </div>
    </SlashCard>
  );
}
