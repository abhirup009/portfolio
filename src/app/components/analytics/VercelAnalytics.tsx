/**
 * Vercel Analytics Component
 * 
 * Wrapper component for Vercel Analytics that integrates with our modular system.
 * This component handles the actual Vercel Analytics initialization.
 */

'use client';

import { Analytics } from '@vercel/analytics/next';
import { isAnalyticsEnabled, analyticsConfig } from '@/lib/analytics';

export function VercelAnalytics() {
  // Only render if analytics is enabled and provider is Vercel
  if (!isAnalyticsEnabled() || analyticsConfig.provider !== 'vercel') {
    return null;
  }

  if (analyticsConfig.debug) {
    console.log('[Analytics] Vercel Analytics component rendered');
  }

  return <Analytics />;
}