
'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

export default function Header({ navItems }: HeaderProps) {
  // Filter out the "Home" item if it exists, as it's now handled by the top-left icon
  const desktopNavItems = navItems.filter(item => item.label !== 'Home');

  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Left side: Home Icon Branding */}
        <Link href="/" className="flex items-center group" aria-label="Home">
          <Home className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
        </Link>

        {/* Center: Desktop Navigation Links (excluding Home) */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {desktopNavItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <Link href={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Right side: Empty space for future controls */}
        <div className="flex items-center">
          {/* Theme toggle removed */}
        </div>
      </div>
    </header>
  );
}
