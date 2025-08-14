'use client';

import { useState } from 'react';
import Section from '@/app/components/shared/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { generateCoverLetterAction } from '@/app/actions';
import type { CoverLetterInput } from '@/ai/flows/ai-cover-letter-generator';
import { Loader2, Wand2 } from 'lucide-react';

const defaultPortfolioData = `Skills:
- Programming Languages: Java, Python, JavaScript, TypeScript, Go
- Frameworks/Libraries: Spring Boot, React, Next.js, Node.js, Express.js, Flask, Django
- Databases: PostgreSQL, MySQL, MongoDB, Redis, Cassandra
- Cloud & DevOps: AWS (EC2, S3, Lambda, RDS, DynamoDB), Docker, Kubernetes, Terraform, Jenkins, Git, CI/CD
- Architecture: Microservices, RESTful APIs, Event-Driven Architecture, System Design

Experience:
- SDE3 at Jupiter Money (Jan 2021 - Present): Led feature development, mentored juniors, improved system performance.
- SDE2 at Tech Solutions Inc. (Jun 2018 - Dec 2020): Developed microservices, API design, cloud tech.

Projects:
- AI Portfolio Assistant: Web app using AI for cover letters and job suggestions (Next.js, Genkit AI).
- Cloud Analytics Platform: Scalable data processing and visualization (AWS, Python, Spark).
`;

export default function CoverLetterTool() {
  const [jobDescription, setJobDescription] = useState('');
  const [portfolioData, setPortfolioData] = useState(defaultPortfolioData);
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription.trim()) {
      toast({
        title: "Job Description Missing",
        description: "Please provide a job description.",
        variant: "destructive",
      });
      return;
    }
    if (!portfolioData.trim()) {
      toast({
        title: "Portfolio Data Missing",
        description: "Please provide your portfolio data.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setGeneratedCoverLetter('');

    try {
      const input: CoverLetterInput = { jobDescription, portfolioData };
      const result = await generateCoverLetterAction(input);
      if (result && result.coverLetter) {
        setGeneratedCoverLetter(result.coverLetter);
        toast({
          title: "Cover Letter Generated!",
          description: "Your personalized cover letter is ready.",
        });
      } else {
        throw new Error("Received empty or invalid response from AI.");
      }
    } catch (error) {
      console.error("Cover letter generation error:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      toast({
        title: "Generation Failed",
        description: `Could not generate cover letter: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="cover-letter-tool" title="AI Cover Letter Generator" subtitle="Tailor your cover letter to specific job descriptions using AI.">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Generate Your Cover Letter</CardTitle>
          <CardDescription>Paste a job description and refine your portfolio details to create a personalized cover letter.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="jobDescription" className="text-base font-medium">Job Description</Label>
              <Textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the full job description here..."
                rows={8}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="portfolioData" className="text-base font-medium">Your Portfolio Data</Label>
              <Textarea
                id="portfolioData"
                value={portfolioData}
                onChange={(e) => setPortfolioData(e.target.value)}
                placeholder="Your skills, experience, projects summary..."
                rows={12}
                className="mt-1"
                required
              />
               <p className="text-xs text-muted-foreground mt-1">
                Adjust this pre-filled data with your most relevant skills and experiences.
              </p>
            </div>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Cover Letter
                </>
              )}
            </Button>
          </form>

          {generatedCoverLetter && (
            <div className="mt-8 p-6 border rounded-md bg-secondary/30">
              <h3 className="text-xl font-semibold mb-3">Generated Cover Letter:</h3>
              <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed">
                {generatedCoverLetter}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </Section>
  );
}
