import { useLanguage } from '@/modules/i18n/hooks/useLanguage';
import { Icon } from '../components/ui/Icon';
import { ScrollProgress } from './ScrollProgress';

/**
 * Franja de estado sobre la columna de contenido en escritorio.
 * Donde el diseño ponía un rótulo decorativo, aquí va el progreso de lectura,
 * que ocupa el mismo hueco y además sirve para algo.
 */
export function StatusBar() {
  const { locale } = useLanguage();

  return (
    <div className="sticky top-0 z-30 hidden items-center justify-between gap-space-md border-b border-outline-variant bg-surface/90 px-gutter-desktop py-space-xs backdrop-blur-sm lg:flex">
      <p className="flex items-center gap-space-xs font-code text-[11px] tracking-wider text-outline uppercase">
        <Icon name="terminal" className="text-[14px] text-primary-container" />
        {locale === 'en' ? 'PHANTOM DEV // PORTFOLIO' : 'PHANTOM DEV // PORTAFOLIO'}
      </p>

      <ScrollProgress />
    </div>
  );
}
