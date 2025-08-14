
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProjectCardProps {
  title: string;
  slug: string;
  shortDescription: string;
  summary: string;
  keyContributions: string[];
  impact: string[];
  technologies?: string[];
  frameworks?: string[];
  primaryProtocols?: string[];
  databases?: string[];
  pubSub?: string[];
  numbers?: string[];
  icon?: LucideIcon;
  githubUrl?: string;
  demoUrl?: string;
}

export default function ProjectCard({ 
  title, 
  slug,
  shortDescription, 
  summary, 
  keyContributions, 
  impact, 
  technologies,
  frameworks,
  primaryProtocols,
  databases,
  pubSub,
  numbers, 
  icon: IconComponent, 
  githubUrl, 
  demoUrl 
}: ProjectCardProps) {
  
  const hasCategorizedTech = frameworks || primaryProtocols || databases || pubSub;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out bg-card transform hover:scale-[1.03]">
      <CardHeader>
        <div className="flex items-start gap-3 mb-2">
          {IconComponent && <IconComponent className="h-8 w-8 text-primary mt-1 hover:text-accent transition-colors" />}
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground min-h-[2em] line-clamp-2">{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm hover:no-underline">
              <div className="flex items-center">
                View Details
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-2">
              <div>
                <h4 className="text-md font-semibold mb-2 text-foreground">Summary</h4>
                <pre className="whitespace-pre-wrap break-words font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {summary}
                </pre>
              </div>
              
              <div>
                <h4 className="text-md font-semibold mb-2 text-foreground">Key Contributions</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground pl-4">
                  {keyContributions.map((contribution, index) => (
                    <li key={index}>{contribution}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-2 text-foreground">Impact</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground pl-4">
                  {impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {numbers && numbers.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold mb-2 text-foreground">Numbers</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground pl-4">
                    {numbers.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-auto pt-4">
          {hasCategorizedTech ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-3"> 
              {frameworks && frameworks.length > 0 && (
                <div>
                  <h5 className="text-xs font-medium mb-1 text-muted-foreground uppercase tracking-wider">Frameworks:</h5>
                  <div className="flex flex-wrap gap-1">
                    {frameworks.map((fw) => (
                       <Badge 
                        key={fw} 
                        className="text-xs px-2 py-0.5 border-transparent bg-primary/70 text-primary-foreground hover:bg-accent/20 hover:text-primary transition-colors"
                      >
                        {fw}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {primaryProtocols && primaryProtocols.length > 0 && (
                <div>
                  <h5 className="text-xs font-medium mb-1 text-muted-foreground uppercase tracking-wider">Primary Protocols:</h5>
                  <div className="flex flex-wrap gap-1">
                    {primaryProtocols.map((protocol) => (
                      <Badge 
                        key={protocol} 
                        className="text-xs px-2 py-0.5 border-transparent bg-primary/70 text-primary-foreground hover:bg-accent/20 hover:text-primary transition-colors"
                      >
                        {protocol}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {databases && databases.length > 0 && (
                <div>
                  <h5 className="text-xs font-medium mb-1 text-muted-foreground uppercase tracking-wider">Databases:</h5>
                  <div className="flex flex-wrap gap-1">
                    {databases.map((db) => (
                      <Badge 
                        key={db} 
                        className="text-xs px-2 py-0.5 border-transparent bg-primary/70 text-primary-foreground hover:bg-accent/20 hover:text-primary transition-colors"
                      >
                        {db}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {pubSub && pubSub.length > 0 && (
                <div>
                  <h5 className="text-xs font-medium mb-1 text-muted-foreground uppercase tracking-wider">PubSub:</h5>
                  <div className="flex flex-wrap gap-1">
                    {pubSub.map((ps) => (
                      <Badge 
                        key={ps} 
                        className="text-xs px-2 py-0.5 border-transparent bg-primary/70 text-primary-foreground hover:bg-accent/20 hover:text-primary transition-colors"
                      >
                        {ps}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            technologies && technologies.length > 0 && (
              <div> 
                <h4 className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      className="border-transparent bg-primary/70 text-primary-foreground hover:bg-accent/20 hover:text-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 pt-4">
        <Button asChild>
          <Link href={`/projects/${slug}`}>
            View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {demoUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
