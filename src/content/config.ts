import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string(),
        tag: z.string(),
        image: z.string().optional(),
    }),
});

const tutorials = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tag: z.string(), // Usually 'Tutorial', 'Feature', etc.
        videoUrl: z.string().optional(),
        image: z.string().optional(),
    }),
});

const team = defineCollection({
    schema: z.object({
        name: z.string(),
        role: z.string(),
        image: z.string(),
        github: z.string().optional(),
        twitter: z.string().optional(),
        linkedin: z.string().optional(),
    }),
});

export const collections = { blog, tutorials, team };
