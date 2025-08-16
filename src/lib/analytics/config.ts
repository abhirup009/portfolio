/**
 * Analytics Configuration
 * 
 * Central configuration for analytics providers.
 * Easily switch between different analytics services here.
 */

import { AnalyticsConfig } from './types';

// Environment-based configuration
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

export const analyticsConfig: AnalyticsConfig = {
  // Provider selection - easily changeable
  provider: 'vercel',
  
  // Enable analytics only in production by default
  // Can be overridden with environment variable
  enabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true' || isProduction,
  
  // Debug mode for development
  debug: isDevelopment,
  
  // Provider-specific configuration
  config: {
    // Vercel-specific settings (if any needed in future)
    vercel: {
      // No additional config needed for basic Vercel Analytics
    },
    
    // Placeholder for other providers
    google: {
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    },
    
    plausible: {
      domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
      apiHost: process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST,
    },
  },
};

// Helper function to check if analytics should be enabled
export const isAnalyticsEnabled = (): boolean => {
  return analyticsConfig.enabled && typeof window !== 'undefined';
};

// Helper function to get provider-specific config
export const getProviderConfig = (provider: string) => {
  return analyticsConfig.config?.[provider] || {};
};