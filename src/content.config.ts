import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const source = z.object({
  label: z.string(),
  url: z.string().url().optional(),
});

/** The public record, from the center's opening to today. */
const timeline = defineCollection({
  loader: file('src/content/timeline.json'),
  schema: z.object({
    /** Sortable date. Use the first of the month/year when only that is known. */
    sort: z.coerce.date(),
    /** How the date should read on the page, e.g. "Late 1950s" or "June 24, 2026". */
    when: z.string(),
    title: z.string(),
    body: z.string(),
    kind: z.enum(['history', 'process', 'community']),
    sources: z.array(source).default([]),
  }),
});

/** Milestones in the current RFP and public-records process. */
const milestones = defineCollection({
  loader: file('src/content/milestones.json'),
  schema: z.object({
    order: z.number(),
    track: z.enum(['rfp', 'records']),
    title: z.string(),
    when: z.string(),
    status: z.enum(['done', 'in-progress', 'upcoming', 'ruled-against', 'asking']),
    detail: z.string(),
    sources: z.array(source).default([]),
  }),
});

/** Short, sourced facts used across the site. */
const facts = defineCollection({
  loader: file('src/content/facts.json'),
  schema: z.object({
    figure: z.string(),
    label: z.string(),
    source: z.string().optional(),
  }),
});

export const collections = { timeline, milestones, facts };
