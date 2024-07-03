import EditBlogForm from "@/app/components/blog/edit";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function EditBlog({ params }: { params: { id: string } }) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!blog) {
    return notFound();
  }

  return (
    <main className="p-4">
      <EditBlogForm props={blog} />
    </main>
  );
}
