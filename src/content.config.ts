import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const reviews = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reviews" }),
  schema: z.object({
    category: z.string(),      // must match a category "slug" in menu.ts, e.g. "coffee"
    subNiche: z.string(),      // must match a sub-niche name in menu.ts, e.g. "Espresso"
    slug: z.string(),          // unique product slug WITHIN this sub-niche, e.g. "15-bar-compact-machine"
    featured: z.boolean().optional(), // true = shown as the big "Editor's Pick" on the hub page
    productName: z.string(),
    title: z.string(),
    hook: z.string(),
    intro: z.string().optional(),
    whatIsIt: z.string().optional(),
    featuresIntro: z.string().optional(),
    features: z.array(z.string()).optional(),
    productDescription: z.string().optional(),
    prosConsIntro: z.string().optional(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    customerSummary: z.string().optional(),
    whyBuyIt: z.string().optional(),
    verdict: z.string().optional(),
    ctaText: z.string().optional(),
    amazonUrl: z.string().optional(),
  }),
});

export const collections = { reviews };