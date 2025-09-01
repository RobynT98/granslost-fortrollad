import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blogg-samling
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Publiceringsdatum (obligatoriskt)
      pubDate: z.coerce.date(),
      // Senast uppdaterad (frivillig)
      updatedDate: z.coerce.date().optional(),
      // Hero-bild (frivillig)
      heroImage: image().optional(),
      // Alt-text för hero-bilden (bra för SEO och tillgänglighet)
      heroAlt: z.string().optional(),
      // Taggar/kategorier för sortering
      tags: z.array(z.string()).optional(),
      // Draft-flagga → exkludera från produktion
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
