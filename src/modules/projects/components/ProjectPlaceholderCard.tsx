import { Icon } from '@/shared/components/ui/Icon';
import type { ProjectsContent } from '../types/projects.types';

/**
 * Hueco reservado. Se dibuja con borde punteado y sin sombra para que se lea
 * como un espacio a llenar y no como una tarjeta rota.
 */
export function ProjectPlaceholderCard({ content }: { content: ProjectsContent }) {
  return (
    <div className="-skew-x-3 border-2 border-dashed border-outline-variant bg-surface-container-low p-space-md">
      <div className="flex skew-x-3 flex-col gap-space-xs">
        <span className="w-fit bg-surface-container-highest px-space-xs py-0.5 font-display text-[12px] tracking-[0.08em] text-outline uppercase">
          {content.placeholderBadge}
        </span>

        <h3 className="flex items-center gap-space-xs font-display text-headline-md tracking-wide text-outline uppercase">
          <Icon name="add_box" className="text-[22px]" />
          {content.placeholderTitle}
        </h3>

        <p className="font-body text-body-sm text-outline">{content.placeholderHint}</p>
      </div>
    </div>
  );
}
