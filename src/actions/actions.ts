"use server";

import { prisma } from "@/lib/db";
import { TBlogSchema, blogSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function createBlog(data: TBlogSchema) {
  const validatedBlogFormData = blogSchema.safeParse(data);

  if (!validatedBlogFormData.success) {
    console.error(validatedBlogFormData.error);
    return;
  }

  const resp = await prisma.blog.create({
    data: {
      title: validatedBlogFormData.data.title || "empty",
      content: validatedBlogFormData.data.content,
    },
  });

  // TODO: redirect to blog/edit page
  revalidatePath("/");
}
