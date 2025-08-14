
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false); // Start hidden

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) {
      return; 
    }

    let initialCheckTimeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(!entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.1, 
      }
    );

    observer.observe(contactSection);
    
    initialCheckTimeoutId = setTimeout(() => {
      if (contactSection) { 
        const rect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        let isInitiallyIntersecting = false;
        if (rect.top < windowHeight && rect.bottom > 0) { 
            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            if ((visibleHeight / rect.height) >= 0.1) { 
                isInitiallyIntersecting = true;
            }
        }
        setIsVisible(!isInitiallyIntersecting);
      }
    }, 100);


    return () => {
      clearTimeout(initialCheckTimeoutId);
      if (contactSection) { 
        observer.unobserve(contactSection);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <Button
      asChild
      size="icon"
      className={cn(
        "fixed bottom-20 right-6 z-30 md:hidden rounded-full shadow-lg h-14 w-14 transition-all duration-300 ease-in-out transform", 
        isVisible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
      )}
      aria-label="Contact Me"
    >
      <Link href="#contact">
        <Mail className="h-6 w-6" />
      </Link>
    </Button>
  );
}
