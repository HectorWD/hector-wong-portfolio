import { PortfolioPage } from '@/modules/portfolio/pages/PortfolioPage';
import { AppProviders } from './providers';

export function App() {
  return (
    <AppProviders>
      <PortfolioPage />
    </AppProviders>
  );
}
