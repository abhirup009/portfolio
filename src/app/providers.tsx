
'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { AnalyticsProvider } from './components/analytics';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="portfolio-theme">
      <AnalyticsProvider>
        {children}
      </AnalyticsProvider>
    </ThemeProvider>
  );
}

