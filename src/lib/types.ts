import { z } from "zod";

export const blogSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type TBlogSchema = z.infer<typeof blogSchema>;
