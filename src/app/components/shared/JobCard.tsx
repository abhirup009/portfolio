import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Briefcase, BarChart } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
  jobTitle: string;
  company: string;
  description: string;
  relevanceScore: number;
}

export default function JobCard({ jobTitle, company, description, relevanceScore }: JobCardProps) {
  const scorePercentage = (relevanceScore * 100).toFixed(0);
  let scoreColor = 'bg-green-500';
  if (relevanceScore < 0.7) scoreColor = 'bg-yellow-500';
  if (relevanceScore < 0.4) scoreColor = 'bg-red-500';

  return (
    <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{jobTitle}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
            <Briefcase className="mr-1.5 h-4 w-4"/> {company}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm mb-3 min-h-[4.5em] line-clamp-3">{description}</CardDescription>
        <div className="flex items-center gap-2">
            <BarChart className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Relevance:</span>
            <Badge style={{ backgroundColor: scoreColor }} className="text-primary-foreground">{scorePercentage}%</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" asChild>
          {/* This would ideally link to the job posting if a URL was available */}
          <Link href={`https://www.google.com/search?q=${encodeURIComponent(jobTitle + " at " + company)}`} target="_blank" rel="noopener noreferrer"> 
            <ExternalLink className="mr-2 h-4 w-4" />
            Find Job
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
