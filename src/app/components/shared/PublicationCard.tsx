
'use client';

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PublicationCardProps {
  title: string;
  description: string;
  researchGateUrl: string;
}

export default function PublicationCard({ title, description, researchGateUrl }: PublicationCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-out bg-card transform hover:scale-102">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm hover:no-underline">
              View Abstract
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="pt-4 mt-auto"> {/* Added mt-auto to push footer down */}
        <Button variant="outline" size="sm" asChild className="w-full sm:w-auto group/button">
          <Link href={researchGateUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4 group-hover/button:text-accent transition-colors" />
            View on ResearchGate
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
