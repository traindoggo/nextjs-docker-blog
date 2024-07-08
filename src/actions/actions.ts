"use server";

import { prisma } from "@/lib/db";
import {
  TBlogEditSchema,
  TBlogSchema,
  blogEditSchema,
  blogSchema,
} from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

  redirect(`/blogs/edit/${resp.id}`);
}

export async function editBlog(data: TBlogEditSchema) {
  const validatedBlogEditFormdata = blogEditSchema.safeParse(data);

  if (!validatedBlogEditFormdata.success) {
    console.error(validatedBlogEditFormdata.error);
    return;
  }

  const resp = await prisma.blog.update({
    where: {
      id: validatedBlogEditFormdata.data.id,
    },
    data: {
      title: validatedBlogEditFormdata.data.title,
      content: validatedBlogEditFormdata.data.content,
    },
  });

  revalidatePath(`/blogs/edit/${resp.id}`);
}

export async function deleteBlog(blogId: string, formData: FormData) {
  const resp = await prisma.blog.delete({
    where: {
      id: parseInt(blogId),
    },
  });

  redirect(`/`);
}
