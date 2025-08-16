/**
 * Analytics Module
 * 
 * Main entry point for the analytics system.
 * Provides a clean API for the rest of the application.
 */

export { type AnalyticsProvider, type AnalyticsEvent, type AnalyticsConfig } from './types';
export { AnalyticsFactory, createAnalyticsProvider } from './factory';
export { analyticsConfig, isAnalyticsEnabled, getProviderConfig } from './config';
export { VercelAnalyticsProvider } from './providers/vercel';

// Re-export for convenience
export * from './types';
export * from './config';