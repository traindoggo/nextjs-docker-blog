import { deleteBlog } from "@/actions/actions";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function DeleteBlog({
  params,
}: {
  params: { id: string };
}) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!blog) {
    return notFound();
  }

  const deleteBlogWithId = deleteBlog.bind(null, params.id);

  return (
    <form className={`p-4 flex flex-col gap-6 mx-20`} action={deleteBlogWithId}>
      <header className="flex justify-between items-baseline">
        <h1 className={`text-2xl text-center`}>Delete Blog</h1>
        <button
          type="submit"
          className={`bg-red-900 px-2 rounded
          hover:bg-red-600`}
        >
          Delete
        </button>
      </header>

      <div
        className={`flex flex-col gap-4 bg-neutral-900
        text-xl`}
      >
        <p className={`border border-neutral-500 rounded px-2`}>{blog.title}</p>
        <p className={`border border-neutral-500 rounded px-2`}>
          {blog.content.length == 0 ? "no body D:" : blog.content}
        </p>
      </div>
    </form>
  );
}
