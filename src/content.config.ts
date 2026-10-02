import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(["सिकाइ", "यात्रा", "अनुभव"]),
      cover: z.string().startsWith("/images/"),
      coverAlt: z.string(),
      draft: z.boolean().default(false),
      sample: z.boolean().default(false),
    }),
  }),
};
