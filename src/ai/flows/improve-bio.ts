// Implemented the improveBio flow.
'use server';

/**
 * @fileOverview An AI agent to generate alternative bios.
 *
 * - improveBio - A function that generates alternative bios.
 * - ImproveBioInput - The input type for the improveBio function.
 * - ImproveBioOutput - The return type for the improveBio function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ImproveBioInputSchema = z.object({
  existingBio: z.string().describe('The existing bio to improve.'),
  numAlternatives: z.number().default(3).describe('The number of alternative bios to generate.'),
});
export type ImproveBioInput = z.infer<typeof ImproveBioInputSchema>;

const ImproveBioOutputSchema = z.object({
  alternativeBios: z.array(z.string()).describe('The generated alternative bios.'),
});
export type ImproveBioOutput = z.infer<typeof ImproveBioOutputSchema>;

export async function improveBio(input: ImproveBioInput): Promise<ImproveBioOutput> {
  return improveBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveBioPrompt',
  input: {
    schema: z.object({
      existingBio: z.string().describe('The existing bio to improve.'),
      numAlternatives: z.number().describe('The number of alternative bios to generate.'),
    }),
  },
  output: {
    schema: z.object({
      alternativeBios: z.array(z.string()).describe('The generated alternative bios.'),
    }),
  },
  prompt: `You are a professional bio writer. Given an existing bio, generate {{numAlternatives}} alternative bios that are creative and engaging.

Existing Bio: {{{existingBio}}}

Alternative Bios:`,
});

const improveBioFlow = ai.defineFlow<
  typeof ImproveBioInputSchema,
  typeof ImproveBioOutputSchema
>({
  name: 'improveBioFlow',
  inputSchema: ImproveBioInputSchema,
  outputSchema: ImproveBioOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
