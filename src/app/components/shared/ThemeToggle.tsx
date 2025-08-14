
'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null during SSR/initial client render to avoid hydration mismatch
    return <div className="h-10 w-10" />; // Placeholder for switch size
  }

  const isDarkTheme = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 ${isDarkTheme ? 'text-muted-foreground' : 'text-primary transition-colors group-hover:text-accent'}`} />
      <Switch
        id="theme-switcher"
        checked={isDarkTheme}
        onCheckedChange={toggleTheme}
        aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} mode`}
      />
      <Moon className={`h-5 w-5 ${isDarkTheme ? 'text-primary transition-colors group-hover:text-accent' : 'text-muted-foreground'}`} />
      <Label htmlFor="theme-switcher" className="sr-only">
        Toggle theme
      </Label>
    </div>
  );
}

