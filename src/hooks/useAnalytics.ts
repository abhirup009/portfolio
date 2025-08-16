/**
 * Analytics Hook
 * 
 * Convenient hook for using analytics throughout the application.
 * Provides easy access to tracking functions with type safety.
 */

import { useAnalytics as useAnalyticsContext } from '@/app/components/analytics';
import { AnalyticsEvent } from '@/lib/analytics';

export interface UseAnalyticsReturn {
  /**
   * Track a custom event
   */
  trackEvent: (eventName: string, properties?: Record<string, string | number | boolean>) => void;
  
  /**
   * Track a page view (usually automatic)
   */
  trackPageView: (path: string) => void;
  
  /**
   * Identify a user (for user analytics)
   */
  identify: (userId: string, traits?: Record<string, any>) => void;
  
  /**
   * Check if analytics is enabled
   */
  isEnabled: boolean;
}

export function useAnalytics(): UseAnalyticsReturn {
  const { trackEvent: contextTrackEvent, trackPageView, identify, isEnabled } = useAnalyticsContext();

  const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean>) => {
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
    };
    contextTrackEvent(event);
  };

  return {
    trackEvent,
    trackPageView,
    identify,
    isEnabled,
  };
}

// Pre-defined event tracking functions for common portfolio actions
export const usePortfolioAnalytics = () => {
  const { trackEvent } = useAnalytics();

  return {
    // Project interactions
    trackProjectView: (projectSlug: string) => {
      trackEvent('project_view', { project: projectSlug });
    },
    
    trackProjectClick: (projectSlug: string, source: string) => {
      trackEvent('project_click', { project: projectSlug, source });
    },

    // Contact interactions
    trackContactClick: (method: 'email' | 'linkedin' | 'github') => {
      trackEvent('contact_click', { method });
    },
    
    trackContactCopy: (contactType: string) => {
      trackEvent('contact_copy', { type: contactType });
    },

    // Navigation
    trackSectionView: (section: string) => {
      trackEvent('section_view', { section });
    },

    // Downloads/External links
    trackExternalClick: (url: string, type: string) => {
      trackEvent('external_click', { url, type });
    },

    // Skills/Education interactions
    trackSkillInteraction: (skill: string) => {
      trackEvent('skill_interaction', { skill });
    },

    // General engagement
    trackEngagement: (action: string, context?: string) => {
      trackEvent('engagement', { action, context });
    },
  };
};