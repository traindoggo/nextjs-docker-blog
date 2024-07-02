import { prisma } from "@/lib/db";
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
      <header className={`flex mb-2 justify-around`}>
        <div className="text-4xl">{blog.title}</div>

        <div className="">
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
