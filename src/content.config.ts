import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Files live in YYYY/MM folders for organization only; the id (and slug) is the bare filename.
	loader: glob({
		pattern: '**/*.mdx',
		base: './src/content/blog',
		generateId: ({ entry }) => entry.replace(/\.mdx$/, '').split('/').pop()!,
	}),
	schema: z.object({
		title: z.string(),
		publishedAt: z.string(),
		updatedAt: z.string().optional(),
		author: z.string().optional(),
		summary: z.string(),
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
