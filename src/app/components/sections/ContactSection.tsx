'use client';

import Section from '@/app/components/shared/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Github, Copy } from 'lucide-react';
import Link from 'next/link';

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

interface ContactInfoItem {
  label: string;
  icon: React.ElementType;
  href: string;
  textToDisplay: string;
  textToCopy: string;
  external: boolean;
}

const contactInfo: ContactInfoItem[] = [
  {
    label: 'Email',
    icon: GmailIcon,
    href: 'mailto:abhirup.acharya009@gmail.com',
    textToDisplay: 'abhirup.acharya009@gmail.com',
    textToCopy: 'abhirup.acharya009@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/abhirup-acharya',
    textToDisplay: 'linkedin.com/in/abhirup-acharya',
    textToCopy: 'https://linkedin.com/in/abhirup-acharya',
    external: true,
  },
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/abhirup009',
    textToDisplay: 'github.com/abhirup009',
    textToCopy: 'https://github.com/abhirup009',
    external: true,
  },
];

export default function ContactSection() {
  const { toast } = useToast();

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
    <Section id="contact" title="Get In Touch" subtitle="I'm open to new opportunities and collaborations. Let's connect!">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>You can reach me through these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.label}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-secondary transition-colors group"
                  >
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 flex-grow"
                    >
                      <IconComponent className="h-6 w-6 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                      <div className="flex-grow">
                        <p className="font-medium group-hover:text-primary transition-colors">{item.label}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors break-all">{item.textToDisplay}</p>
                      </div>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-2 p-1 h-auto w-auto flex-shrink-0"
                      onClick={() => handleCopy(item.textToCopy, item.label)}
                      aria-label={`Copy ${item.label}`}
                    >
                      <Copy className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}