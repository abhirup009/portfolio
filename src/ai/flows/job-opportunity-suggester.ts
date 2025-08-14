// 'use server';

/**
 * @fileOverview Job opportunity suggestion flow.
 *
 * - suggestJobs - A function that suggests relevant job opportunities.
 * - JobSuggestionInput - The input type for the suggestJobs function.
 * - JobSuggestionOutput - The return type for the suggestJobs function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobSuggestionInputSchema = z.object({
  userSkills: z
    .string()
    .describe('A comma separated list of the user skills.'),
  userExperience: z.string().describe('Description of the user experience.'),
  portfolioContent: z.string().describe('Content from the user portfolio.'),
});

export type JobSuggestionInput = z.infer<typeof JobSuggestionInputSchema>;

const JobSuggestionOutputSchema = z.object({
  jobTitle: z.string().describe('The suggested job title.'),
  company: z.string().describe('The company offering the job.'),
  description: z.string().describe('A brief description of the job.'),
  relevanceScore: z.number().describe('A score indicating the relevance of the job to the user (0-1).'),
});

export type JobSuggestionOutput = z.infer<typeof JobSuggestionOutputSchema>;

export async function suggestJobs(input: JobSuggestionInput): Promise<JobSuggestionOutput[]> {
  return jobSuggestionFlow(input);
}

const jobSuggestionPrompt = ai.definePrompt({
  name: 'jobSuggestionPrompt',
  input: {schema: JobSuggestionInputSchema},
  output: {schema: z.array(JobSuggestionOutputSchema)},
  prompt: `You are an expert career advisor specializing in FAANG+ companies.

  Based on the user's skills, experience, and portfolio content, suggest relevant job opportunities at FAANG+ companies.

  Skills: {{{userSkills}}}
  Experience: {{{userExperience}}}
  Portfolio Content: {{{portfolioContent}}}

  Provide a list of job suggestions, including the job title, company, a brief description, and a relevance score (0-1).
  Format the output as a JSON array.`,
});

const jobSuggestionFlow = ai.defineFlow(
  {
    name: 'jobSuggestionFlow',
    inputSchema: JobSuggestionInputSchema,
    outputSchema: z.array(JobSuggestionOutputSchema),
  },
  async input => {
    const {output} = await jobSuggestionPrompt(input);
    return output!;
  }
);
