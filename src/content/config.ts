import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    description: z.string().optional(),
    categories: z.array(z.string()).optional(),
  }),
});

const likes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, likes };