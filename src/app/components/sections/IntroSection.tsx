
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
      <div className="text-center w-full max-w-3xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Hello, I&apos;m <span className="text-primary">Abhirup Acharya</span>
          </h1>
          <div className="flex items-center justify-center gap-1 text-xl md:text-2xl text-muted-foreground">
            <span>SDE III at</span>
            <Image
              src="/jupiter-logo-full.png"
              alt="Jupiter Money Logo"
              width={400} 
              height={100} 
              className="h-[100px] w-auto rounded-sm ml-1.5 inline-block object-contain" 
              data-ai-hint="company logo"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#projects">
                View My Work <Briefcase className="ml-2 h-5 w-5 hover:text-accent transition-colors" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Contact Icons & Links */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-start justify-center gap-4 sm:gap-6">
            {contactItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-md hover:bg-secondary/70 transition-colors group w-full sm:w-auto text-center sm:text-left"
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 flex-grow" 
                  >
                    <IconComponent className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5 hover:text-accent" />
                    <div className="flex-grow"> 
                      <span className="block text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                      <p className="text-sm text-primary/80 group-hover:text-primary cursor-text break-all">
                        {item.textToCopy}
                      </p>
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2 p-1 h-auto w-auto flex-shrink-0 transition-opacity duration-200"
                    onClick={() => handleCopy(item.textToCopy, item.label)}
                    aria-label={`Copy ${item.label}`}
                  >
                    <Copy className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                  </Button>
                </div>
              );
            })}
          </div>

        </div>
      </div>
      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:bottom-6">
          <Link href="#projects" aria-label="Scroll to projects">
            <ChevronsDown className="h-10 w-10 text-primary animate-bounce hover:text-accent transition-colors drop-shadow-[0_0_8px_hsl(var(--primary))]" />
          </Link>
        </div>
      )}
    </Section>
  );
}
