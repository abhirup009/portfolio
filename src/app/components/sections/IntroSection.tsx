
'use client'; 

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Section from '@/app/components/shared/Section';
import { ChevronsDown, Linkedin, Github, Mail, Copy, Briefcase, Home as HomeIcon } from 'lucide-react'; 
import Link from 'next/link';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast'; 

// Gmail Icon SVG Component
const GmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4H2C0.89 4 0 4.89 0 6V18C0 19.11 0.89 20 2 20H22C23.11 20 24 19.11 24 18V6C24 4.89 23.11 4 22 4ZM21.44 6L12 12.78L2.56 6H21.44Z" />
  </svg>
);

interface ContactItem {
  href: string;
  label: string;
  icon: React.ElementType;
  external: boolean;
  textToCopy: string;
}

const contactItems: ContactItem[] = [
  {
    href: "https://linkedin.com/in/abhirup-acharya",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
    textToCopy: "https://linkedin.com/in/abhirup-acharya",
  },
  {
    href: "mailto:abhirup.acharya009@gmail.com",
    label: "Email",
    icon: GmailIcon, // Replaced Mail with GmailIcon
    external: false,
    textToCopy: "abhirup.acharya009@gmail.com",
  },
];

export default function IntroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { toast } = useToast(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCopy = async (textToCopy: string, label: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast({
        title: `${label} Copied!`,
        description: `${textToCopy} copied to clipboard.`,
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast({
        title: "Copy Failed",
        description: "Could not copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Section id="intro" className="min-h-[calc(100vh-4rem)] flex items-center relative">
      <div className="w-full max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Main Headline */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Senior Backend Engineer
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            focused on <span className="text-primary">real-time systems</span> &{' '}
            <span className="text-primary">distributed infra</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-4xl">
          Designing and Delivering <br />
          Resilient, Scalable Software
        </p>

        {/* Project Showcases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          <Link href="/projects/realtime-event-push-platform" className="group">
            <div className="border border-border/40 rounded-xl p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Realtime Event Push Platform</h3>
              <p className="text-muted-foreground text-lg">
                Event broadcast to 50K sockets on p99 &lt;300ms latency
              </p>
            </div>
          </Link>
          <Link href="/projects/dynaq-distributed-event-scheduler" className="group">
            <div className="border border-border/40 rounded-xl p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Distributed Task Scheduling Platform</h3>
              <p className="text-muted-foreground text-lg">
                Fault-tolerant task engine handling finance workflows at 300k+ events/day
              </p>
            </div>
          </Link>
          <Link href="/projects/mandates-automatic-payments-platform" className="group">
            <div className="border border-border/40 rounded-xl p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Mandates - Automatic Payments Platform</h3>
              <p className="text-muted-foreground text-lg">
                High-throughput financial mandate system handling 250k+ executions/day
              </p>
            </div>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="text-lg px-10 py-4 h-auto bg-primary/80 hover:bg-primary/70 text-primary-foreground font-medium">
            <Link href="#projects">
              Explore System Architectures
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-10 py-4 h-auto">
            <Link href="#contact">
              Contact
            </Link>
          </Button>
        </div>
      </div>
      {showScrollIndicator && (
        <div className="absolute bottom-20 right-4 md:bottom-16 md:right-8">
          <Link href="#projects" aria-label="Scroll to projects">
            <ChevronsDown className="h-10 w-10 text-primary animate-bounce hover:text-accent transition-colors drop-shadow-[0_0_8px_hsl(var(--primary))]" />
          </Link>
        </div>
      )}
    </Section>
  );
}
