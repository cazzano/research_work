'use server';

/**
 * @fileOverview This file defines a Genkit flow for personalizing learning paths based on user performance and engagement.
 *
 * The flow uses an LLM to dynamically adjust the difficulty and content sequence to tailor the learning experience to individual needs.
 *
 * @exports {function} personalizeLearningPath - The main function to personalize the learning path.
 * @exports {type} PersonalizedLearningPathInput - The input type for the personalizeLearningPath function.
 * @exports {type} PersonalizedLearningPathOutput - The output type for the personalizeLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  topic: z.string().describe('The topic the user is currently learning about.'),
  userPerformance: z
    .string()
    .describe(
      'A description of the users performance on the current topic, including areas of strength and weakness.'
    ),
  userEngagement: z
    .string()
    .describe('A description of the users engagement with the current topic.'),
  currentSequence: z
    .array(z.string())
    .describe('The current sequence of content the user is following.'),
});

export type PersonalizedLearningPathInput = z.infer<typeof PersonalizedLearningPathInputSchema>;

const PersonalizedLearningPathOutputSchema = z.object({
  revisedSequence: z
    .array(z.string())
    .describe(
      'A revised sequence of content tailored to the users performance and engagement.'
    ),
  difficultyAdjustment: z
    .string()
    .describe('Suggested adjustments to the difficulty level for the user.'),
});

export type PersonalizedLearningPathOutput = z.infer<typeof PersonalizedLearningPathOutputSchema>;

export async function personalizeLearningPath(
  input: PersonalizedLearningPathInput
): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an expert learning path optimizer. You will take in a users
current topic, their performance on the topic, their engagement with the topic,
and the current sequence of content they are following. You will then output a
revised sequence of content and suggest adjustments to the difficulty level
for the user, so that the learning experience is tailored to their individual
needs.

Topic: {{{topic}}}
User Performance: {{{userPerformance}}}
User Engagement: {{{userEngagement}}}
Current Sequence: {{#each currentSequence}}{{{this}}}, {{/each}}

Output a revised sequence and difficulty adjustment.`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
