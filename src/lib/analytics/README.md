# Analytics System

A modular analytics system that allows easy switching between different analytics providers.

## Features

- 🔄 **Provider Agnostic**: Easy to swap between Vercel, Google Analytics, Plausible, etc.
- 🎯 **Type Safe**: Full TypeScript support with proper interfaces
- ⚙️ **Configurable**: Environment-based configuration
- 🪝 **React Hooks**: Convenient hooks for component usage
- 🔒 **Privacy Focused**: Only enabled in production by default
- 🐛 **Debug Mode**: Development-friendly debugging

## Current Implementation

Currently implements **Vercel Analytics** which provides:
- Automatic page view tracking
- Performance metrics
- Geographic insights
- Device and browser analytics

## Quick Start

The analytics system is already integrated into the app. No additional setup needed for basic usage.

### Basic Usage in Components

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const { trackEvent, isEnabled } = useAnalytics();

  const handleClick = () => {
    trackEvent('button_click', { 
      component: 'MyComponent',
      action: 'submit' 
    });
  };

  return (
    <button onClick={handleClick}>
      Click me {isEnabled && '(tracked)'}
    </button>
  );
}
```

### Portfolio-Specific Analytics

```typescript
import { usePortfolioAnalytics } from '@/hooks/useAnalytics';

function ProjectCard({ project }) {
  const { trackProjectView, trackProjectClick } = usePortfolioAnalytics();

  useEffect(() => {
    trackProjectView(project.slug);
  }, [project.slug]);

  return (
    <div onClick={() => trackProjectClick(project.slug, 'card')}>
      {project.title}
    </div>
  );
}
```

## Configuration

### Environment Variables

```bash
# Enable/disable analytics (auto-enabled in production)
NEXT_PUBLIC_ANALYTICS_ENABLED=true

# For future Google Analytics implementation
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# For future Plausible implementation
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
NEXT_PUBLIC_PLAUSIBLE_API_HOST=plausible.io
```

### Provider Configuration

Edit `src/lib/analytics/config.ts`:

```typescript
export const analyticsConfig: AnalyticsConfig = {
  provider: 'vercel', // Change to 'google', 'plausible', etc.
  enabled: isProduction,
  debug: isDevelopment,
};
```

## Adding New Providers

### 1. Create Provider Class

```typescript
// src/lib/analytics/providers/google.ts
import { AnalyticsProvider } from '../types';

export class GoogleAnalyticsProvider implements AnalyticsProvider {
  initialize() {
    // Initialize Google Analytics
  }

  trackEvent(event: AnalyticsEvent) {
    // Track custom events
  }

  // ... implement other methods
}
```

### 2. Update Factory

```typescript
// src/lib/analytics/factory.ts
case 'google':
  return new GoogleAnalyticsProvider(config.debug);
```

### 3. Create Component (if needed)

```typescript
// src/app/components/analytics/GoogleAnalytics.tsx
export function GoogleAnalytics() {
  // Component-specific implementation
}
```

### 4. Update Configuration

```typescript
// src/lib/analytics/config.ts
provider: 'google',
```

## Provider Status

| Provider | Status | Features |
|----------|--------|----------|
| Vercel | ✅ Implemented | Page views, performance |
| Google Analytics | 🚧 Planned | Events, conversions, custom dimensions |
| Plausible | 🚧 Planned | Privacy-focused, lightweight |
| Custom | 🚧 Planned | Your own analytics service |

## Debugging

Enable debug mode in development:

```typescript
// src/lib/analytics/config.ts
debug: true,
```

This will log analytics events to the console:

```
[Analytics] Vercel Analytics initialized
[Analytics] Event tracked: { name: 'project_view', properties: { project: 'dynaq' } }
```

## Privacy Considerations

- Analytics is **disabled by default in development**
- Only basic page views are tracked by default
- No personal information is collected
- Vercel Analytics is GDPR compliant
- Users can disable analytics in their browser

## Performance

- Zero runtime overhead when disabled
- Vercel Analytics is optimized for performance
- Lazy loading of analytics scripts
- No impact on Core Web Vitals

## Testing

Analytics can be tested in development by setting:

```bash
NEXT_PUBLIC_ANALYTICS_ENABLED=true
```

Check browser network tab for `/_vercel/insights/view` requests.