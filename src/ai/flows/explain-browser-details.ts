'use server';

/**
 * @fileOverview A flow to explain complicated details of a selected section of content about web browsers.
 *
 * - explainBrowserDetails - A function that handles the explanation process.
 * - ExplainBrowserDetailsInput - The input type for the explainBrowserDetails function.
 * - ExplainBrowserDetailsOutput - The return type for the explainBrowserDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainBrowserDetailsInputSchema = z.object({
  content: z
    .string()
    .describe('The content to explain in more detail.'),
});
export type ExplainBrowserDetailsInput = z.infer<typeof ExplainBrowserDetailsInputSchema>;

const ExplainBrowserDetailsOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of the content.'),
});
export type ExplainBrowserDetailsOutput = z.infer<typeof ExplainBrowserDetailsOutputSchema>;

export async function explainBrowserDetails(input: ExplainBrowserDetailsInput): Promise<ExplainBrowserDetailsOutput> {
  return explainBrowserDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainBrowserDetailsPrompt',
  input: {schema: ExplainBrowserDetailsInputSchema},
  output: {schema: ExplainBrowserDetailsOutputSchema},
  prompt: `You are an expert in web browsers and related technologies.  A user has provided you with the following content, and has asked you to explain it in more detail, so that they can understand it better.  Provide the explanation in a clear and concise manner.

Content: {{{content}}}`,
});

const explainBrowserDetailsFlow = ai.defineFlow(
  {
    name: 'explainBrowserDetailsFlow',
    inputSchema: ExplainBrowserDetailsInputSchema,
    outputSchema: ExplainBrowserDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
