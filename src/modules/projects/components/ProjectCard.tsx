import { Badge, TechChip } from '@/shared/components/ui/Chip';
import { Icon } from '@/shared/components/ui/Icon';
import { SlashCard } from '@/shared/components/ui/SlashCard';
import type { Project } from '../types/projects.types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <SlashCard accent="cyan">
      {project.image ? (
        <div className="aspect-[16/9] w-full overflow-hidden border border-outline-variant bg-surface-container-lowest">
          <img
            src={project.image}
            alt={project.imageAlt ?? ''}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}

      <Badge tone="accent">{project.target}</Badge>

      <h3 className="font-display text-headline-md tracking-wide text-secondary uppercase">
        {project.title}
      </h3>

      <p className="font-body text-body-sm text-on-surface-variant">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <TechChip key={tech}>{tech}</TechChip>
        ))}
      </div>

      {project.links.length > 0 ? (
        <div className="flex flex-wrap gap-space-xs pt-space-2xs">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 border border-outline-variant px-space-xs py-1 font-display text-[12px] tracking-[0.08em] text-on-surface uppercase transition-colors hover:bg-primary-container hover:text-on-primary-container"
            >
              <Icon name={link.icon} className="text-[16px]" />
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </SlashCard>
  );
}
