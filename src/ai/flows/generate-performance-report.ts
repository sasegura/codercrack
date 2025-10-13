'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a performance report for a given website URL.
 *
 * The flow takes a URL as input and returns a detailed performance report, leveraging an LLM to identify bottlenecks and areas for improvement.
 *
 * @interface GeneratePerformanceReportInput - The input schema for the generatePerformanceReport function.
 * @interface GeneratePerformanceReportOutput - The output schema for the generatePerformanceReport function.
 * @function generatePerformanceReport - The exported function to trigger the performance report generation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePerformanceReportInputSchema = z.object({
  url: z.string().url().describe('The URL of the website to analyze.'),
});
export type GeneratePerformanceReportInput = z.infer<typeof GeneratePerformanceReportInputSchema>;

const GeneratePerformanceReportOutputSchema = z.object({
  report: z.string().describe('A detailed performance report of the website.'),
});
export type GeneratePerformanceReportOutput = z.infer<typeof GeneratePerformanceReportOutputSchema>;

export async function generatePerformanceReport(input: GeneratePerformanceReportInput): Promise<GeneratePerformanceReportOutput> {
  return generatePerformanceReportFlow(input);
}

const performanceReportPrompt = ai.definePrompt({
  name: 'performanceReportPrompt',
  input: {schema: GeneratePerformanceReportInputSchema},
  output: {schema: GeneratePerformanceReportOutputSchema},
  prompt: `You are an expert web performance analyst. Your task is to generate a detailed performance report for a given website URL.

  Analyze the website at the following URL: {{{url}}}

  Your report should include:
  - An overview of the website's performance.
  - Identification of key performance bottlenecks.
  - Specific recommendations for improvement.
  - SEO optimization suggestions
  - Accessibility improvements suggestions.
  - Prioritize improvements that can be made specifically for React-based pages.

  The report should be detailed and actionable.
  `,
});

const generatePerformanceReportFlow = ai.defineFlow(
  {
    name: 'generatePerformanceReportFlow',
    inputSchema: GeneratePerformanceReportInputSchema,
    outputSchema: GeneratePerformanceReportOutputSchema,
  },
  async input => {
    const {output} = await performanceReportPrompt(input);
    return output!;
  }
);
