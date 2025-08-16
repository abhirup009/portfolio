/**
 * Analytics Provider Types
 * 
 * This module defines the interface for analytics providers,
 * allowing easy swapping between different analytics services.
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
}

export interface AnalyticsProvider {
  // Initialize the analytics provider
  initialize(): void;
  
  // Track page views (automatic in most providers)
  trackPageView?(path: string): void;
  
  // Track custom events
  trackEvent?(event: AnalyticsEvent): void;
  
  // Identify users (for user analytics)
  identify?(userId: string, traits?: Record<string, any>): void;
  
  // Clean up resources
  cleanup?(): void;
}

export interface AnalyticsConfig {
  provider: 'vercel' | 'google' | 'plausible' | 'custom';
  enabled: boolean;
  debug?: boolean;
  config?: Record<string, any>;
}