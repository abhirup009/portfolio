import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, subtitle, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('container max-w-7xl', className)} {...props}>
      {title && (
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
