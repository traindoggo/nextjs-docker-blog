import { prisma } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!blog) {
    return notFound();
  }

  return (
    <main className="px-32 py-4 flex flex-col">
      <header className={`flex mb-2 justify-around text-center`}>
        <div className="flex justify-around">
          <p className="text-3xl mb-2">{blog.title}</p>
        </div>

        <div className="flex flex-col justify-around text-sm">
          <div className={`flex gap-4 mb-2`}>
            <Link
              href={`/blogs/edit/${blog.id}`}
              className={`border text-xl px-2 rounded
                bg-yellow-900 border-yellow-900 hover:bg-yellow-700
                duration-100`}
            >
              edit
            </Link>

            <Link
              href={`/blogs/delete/${blog.id}`}
              className={`border text-xl px-2 rounded
                bg-red-900 border-red-900 hover:bg-red-700
                duration-100`}
            >
              delete
            </Link>
          </div>
          <p className="text-neutral-500">
            Created At :{blog.createdAt.toLocaleDateString()}
          </p>
          <p className="text-neutral-500">
            Updated At :{blog.updatedAt.toLocaleDateString()}
          </p>
        </div>
      </header>

      <hr className="border-neutral-500" />

      <div className={`mt-10 px-4`}>
        <p className="text-xl">{blog.content}</p>
      </div>
    </main>
  );
}
