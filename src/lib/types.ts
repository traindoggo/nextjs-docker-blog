import { z } from "zod";

export const blogSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type TBlogSchema = z.infer<typeof blogSchema>;

export const blogEditSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  content: z.string(),
});

export type TBlogEditSchema = z.infer<typeof blogEditSchema>;
