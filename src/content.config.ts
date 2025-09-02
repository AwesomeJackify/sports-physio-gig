import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const hotTips = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/hotTips" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { hotTips };