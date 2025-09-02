// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blogg-samling
const blog = defineCollection({
  // Ladda alla .md och .mdx i src/content/blog
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

  // Validering av frontmatter
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),              // krävs
      updatedDate: z.coerce.date().optional(), // frivillig
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),     // döljer i produktion om true
    }),
});

export const collections = { blog };
