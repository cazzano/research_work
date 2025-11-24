'use server';

/**
 * @fileOverview Flow for adjusting the technical depth of an explanation.
 *
 * - adjustTechnicalDepth - A function that adjusts the technical depth of an explanation.
 * - AdjustTechnicalDepthInput - The input type for the adjustTechnicalDepth function.
 * - AdjustTechnicalDepthOutput - The return type for the adjustTechnicalDepth function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdjustTechnicalDepthInputSchema = z.object({
  text: z.string().describe('The text to adjust the technical depth of.'),
  depth: z.enum(['Beginner', 'Intermediate', 'Advanced']).describe('The desired level of technical depth.'),
});
export type AdjustTechnicalDepthInput = z.infer<typeof AdjustTechnicalDepthInputSchema>;

const AdjustTechnicalDepthOutputSchema = z.object({
  adjustedText: z.string().describe('The text adjusted to the specified technical depth.'),
});
export type AdjustTechnicalDepthOutput = z.infer<typeof AdjustTechnicalDepthOutputSchema>;

export async function adjustTechnicalDepth(input: AdjustTechnicalDepthInput): Promise<AdjustTechnicalDepthOutput> {
  return adjustTechnicalDepthFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adjustTechnicalDepthPrompt',
  input: {schema: AdjustTechnicalDepthInputSchema},
  output: {schema: AdjustTechnicalDepthOutputSchema},
  prompt: `You are an expert at explaining technical concepts at different levels of depth.

You will be provided with a text and a desired level of technical depth.

Your task is to rewrite the text to match the specified depth. Here are some guidelines:

- Beginner: Use simple language, analogies, and avoid jargon. Explain concepts in a way that someone with no technical background can understand.
- Intermediate: Use technical terms, but explain them clearly. Provide more details than the beginner level, but avoid overly complex explanations.
- Advanced: Use deep protocol details, RFCs, and code examples. Assume the reader has a strong technical background.

Text: {{{text}}}

Desired Depth: {{{depth}}}

Adjusted Text:`, // Ensure the output is named 'Adjusted Text'
});

const adjustTechnicalDepthFlow = ai.defineFlow(
  {
    name: 'adjustTechnicalDepthFlow',
    inputSchema: AdjustTechnicalDepthInputSchema,
    outputSchema: AdjustTechnicalDepthOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      adjustedText: output!.adjustedText,
    };
  }
);
