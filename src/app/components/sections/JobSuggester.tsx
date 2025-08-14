'use client';

import { useState, useEffect } from 'react';
import Section from '@/app/components/shared/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { suggestJobsAction } from '@/app/actions';
import type { JobSuggestionInput, JobSuggestionOutput } from '@/ai/flows/job-opportunity-suggester';
import JobCard from '@/app/components/shared/JobCard';
import { Loader2, Search } from 'lucide-react';

const defaultSkills = "Java, Python, JavaScript, TypeScript, Spring Boot, React, Next.js, Node.js, AWS, Docker, Kubernetes, Microservices, System Design";
const defaultExperience = `SDE3 at Jupiter Money (Jan 2021 - Present): Led feature development, mentored juniors, improved system performance.
SDE2 at Tech Solutions Inc. (Jun 2018 - Dec 2020): Developed microservices, API design, cloud tech.`;
const defaultPortfolioContent = `Projects:
- AI Portfolio Assistant: Web app using AI for cover letters and job suggestions (Next.js, Genkit AI).
- Cloud Analytics Platform: Scalable data processing and visualization (AWS, Python, Spark).
Focus on FAANG+ companies, interested in roles involving large-scale systems, distributed computing, and AI/ML applications.`;


export default function JobSuggester() {
  const [userSkills, setUserSkills] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [portfolioContent, setPortfolioContent] = useState('');
  const [suggestedJobs, setSuggestedJobs] = useState<JobSuggestionOutput[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setUserSkills(defaultSkills);
    setUserExperience(defaultExperience);
    setPortfolioContent(defaultPortfolioContent);
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userSkills.trim() || !userExperience.trim() || !portfolioContent.trim()) {
      toast({
        title: "Missing Information",
        description: "Please ensure all fields (skills, experience, portfolio) are filled.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSuggestedJobs([]);

    try {
      const input: JobSuggestionInput = { userSkills, userExperience, portfolioContent };
      const result = await suggestJobsAction(input);
      if (result && result.length > 0) {
        setSuggestedJobs(result);
        toast({
          title: "Jobs Suggested!",
          description: "Here are some job opportunities based on your profile.",
        });
      } else {
         setSuggestedJobs([]); // Ensure it's an empty array for no results
        toast({
          title: "No Jobs Found",
          description: "AI couldn't find specific job matches at this time. Try refining your input.",
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Job suggestion error:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      toast({
        title: "Suggestion Failed",
        description: `Could not suggest jobs: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="job-suggester" title="AI Job Opportunity Suggester" subtitle="Discover relevant FAANG+ job opportunities based on your profile.">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Find Your Next Role</CardTitle>
          <CardDescription>Provide your skills, experience, and portfolio highlights to get AI-powered job suggestions.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="userSkills" className="text-base font-medium">Your Skills</Label>
              <Input
                id="userSkills"
                value={userSkills}
                onChange={(e) => setUserSkills(e.target.value)}
                placeholder="e.g., Java, Python, React, AWS, System Design"
                className="mt-1"
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Comma-separated list of your key technical skills.
              </p>
            </div>
            <div>
              <Label htmlFor="userExperience" className="text-base font-medium">Your Experience Summary</Label>
              <Textarea
                id="userExperience"
                value={userExperience}
                onChange={(e) => setUserExperience(e.target.value)}
                placeholder="Brief summary of your professional experience and key achievements."
                rows={5}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="portfolioContent" className="text-base font-medium">Portfolio Highlights / Career Interests</Label>
              <Textarea
                id="portfolioContent"
                value={portfolioContent}
                onChange={(e) => setPortfolioContent(e.target.value)}
                placeholder="Key projects, accomplishments, and specific interests (e.g., FAANG+, AI/ML roles)."
                rows={5}
                className="mt-1"
                required
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Suggest Jobs
                </>
              )}
            </Button>
          </form>

          {suggestedJobs.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Suggested Job Opportunities:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestedJobs.map((job, index) => (
                  <JobCard key={index} {...job} />
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Section>
  );
}
