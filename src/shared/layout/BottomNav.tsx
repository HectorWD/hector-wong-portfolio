import { useMemo } from 'react';
import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { Icon } from '../components/ui/Icon';
import { NAV_ITEMS, NAV_LABELS } from '../constants/site.constants';
import { useActiveSection } from '../lib/useActiveSection';

/**
 * Barra de navegacion inferior tipo aplicacion movil, tal como la plantea el
 * diseno. La pestana activa se deduce de la seccion visible.
 */
export function BottomNav() {
  const { t } = useLanguage();
  const labels = t(NAV_LABELS);

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-outline-variant bg-surface-container-lowest pb-safe"
      aria-label="Section navigation"
    >
      <ul className="mx-auto flex max-w-reading items-stretch justify-between px-space-xs py-space-xs">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id} className="flex-1">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={[
                  'flex flex-col items-center gap-1 px-1 py-1.5 transition-colors',
                  isActive
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:text-secondary',
                ].join(' ')}
              >
                <Icon name={item.icon} className="text-[20px]" />
                <span className="font-display text-[11px] tracking-[0.08em] uppercase">
                  {labels[item.id]}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
