
'use client';

import Link from 'next/link';
import { LayoutGrid, Briefcase, Wrench } from 'lucide-react'; // Removed Home, BookOpenCheck, GraduationCap, Mail
import type { LucideIcon } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

// Updated navItemsData, removing Home, Education, Publications, and Contact
const navItemsData: NavItem[] = [
  { label: 'Projects', href: '#projects', icon: LayoutGrid },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Skills', href: '#skills', icon: Wrench },
];

export default function MobileFooterNav() {
  if (navItemsData.length === 0) {
    return null;
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-1 md:hidden">
      <nav className="flex justify-around items-stretch h-14">
        {navItemsData.map((item) => (
          <Link key={item.label} href={item.href} legacyBehavior>
            <a className="flex flex-1 flex-col items-center justify-center text-center text-[0.6rem] leading-tight text-muted-foreground hover:text-primary focus:text-primary transition-colors p-1">
              <item.icon className="h-5 w-5 mb-0.5" />
              <span className="truncate w-full">{item.label}</span>
            </a>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
