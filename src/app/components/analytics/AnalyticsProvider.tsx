/**
 * Analytics Provider Component
 * 
 * React component that provides analytics functionality to the app.
 * Handles initialization and provides context for analytics throughout the app.
 */

'use client';

import { createContext, useContext, useEffect, ReactNode } from 'react';
import { AnalyticsProvider as IAnalyticsProvider, AnalyticsEvent } from '@/lib/analytics/types';
import { createAnalyticsProvider, analyticsConfig, isAnalyticsEnabled } from '@/lib/analytics';

interface AnalyticsContextType {
  provider: IAnalyticsProvider | null;
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (path: string) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  provider: null,
  trackEvent: () => {},
  trackPageView: () => {},
  identify: () => {},
  isEnabled: false,
});

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const enabled = isAnalyticsEnabled();
  const provider = enabled ? createAnalyticsProvider(analyticsConfig) : null;

  useEffect(() => {
    if (provider) {
      provider.initialize();
      
      // Cleanup on unmount
      return () => {
        provider.cleanup?.();
      };
    }
  }, [provider]);

  const trackEvent = (event: AnalyticsEvent) => {
    if (provider && enabled) {
      provider.trackEvent?.(event);
    }
  };

  const trackPageView = (path: string) => {
    if (provider && enabled) {
      provider.trackPageView?.(path);
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (provider && enabled) {
      provider.identify?.(userId, traits);
    }
  };

  const contextValue: AnalyticsContextType = {
    provider,
    trackEvent,
    trackPageView,
    identify,
    isEnabled: enabled,
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
}

// Custom hook to use analytics
export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}