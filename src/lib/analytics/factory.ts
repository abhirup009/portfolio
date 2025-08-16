/**
 * Analytics Provider Factory
 * 
 * Factory pattern for creating analytics provider instances.
 * Makes it easy to add new providers and switch between them.
 */

import { AnalyticsProvider, AnalyticsConfig } from './types';
import { VercelAnalyticsProvider } from './providers/vercel';

export class AnalyticsFactory {
  static createProvider(config: AnalyticsConfig): AnalyticsProvider {
    switch (config.provider) {
      case 'vercel':
        return new VercelAnalyticsProvider(config.debug);
      
      case 'google':
        // Placeholder for Google Analytics implementation
        throw new Error('Google Analytics provider not implemented yet');
      
      case 'plausible':
        // Placeholder for Plausible Analytics implementation
        throw new Error('Plausible Analytics provider not implemented yet');
      
      case 'custom':
        // Placeholder for custom analytics implementation
        throw new Error('Custom analytics provider not implemented yet');
      
      default:
        throw new Error(`Unknown analytics provider: ${config.provider}`);
    }
  }
}

// Convenience function to create provider from config
export const createAnalyticsProvider = (config: AnalyticsConfig): AnalyticsProvider => {
  return AnalyticsFactory.createProvider(config);
};