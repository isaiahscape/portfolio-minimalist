// The AI flow in this file generates a bio based on user provided skills and experience.
// - generateBio - A function that handles the bio generation process.
// - GenerateBioInput - The input type for the generateBio function.
// - GenerateBioOutput - The return type for the generateBio function.

'use server';

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateBioInputSchema = z.object({
  skills: z.string().describe('A comma-separated list of skills.'),
  experience: z.string().describe('A description of your experience.'),
});
export type GenerateBioInput = z.infer<typeof GenerateBioInputSchema>;

const GenerateBioOutputSchema = z.object({
  bio: z.string().describe('A generated bio based on the provided skills and experience.'),
});
export type GenerateBioOutput = z.infer<typeof GenerateBioOutputSchema>;

export async function generateBio(input: GenerateBioInput): Promise<GenerateBioOutput> {
  return generateBioFlow(input);
}

const generateBioPrompt = ai.definePrompt({
  name: 'generateBioPrompt',
  input: {
    schema: z.object({
      skills: z.string().describe('A comma-separated list of skills.'),
      experience: z.string().describe('A description of your experience.'),
    }),
  },
  output: {
    schema: z.object({
      bio: z.string().describe('A generated bio based on the provided skills and experience.'),
    }),
  },
  prompt: `You are a professional bio writer. Based on the provided skills and experience, generate a compelling bio.

Skills: {{{skills}}}
Experience: {{{experience}}}

Bio:`,
});

const generateBioFlow = ai.defineFlow<
  typeof GenerateBioInputSchema,
  typeof GenerateBioOutputSchema
>({
  name: 'generateBioFlow',
  inputSchema: GenerateBioInputSchema,
  outputSchema: GenerateBioOutputSchema,
},
async input => {
  const {output} = await generateBioPrompt(input);
  return output!;
});
