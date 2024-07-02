import { prisma } from "@/lib/db";
import { truncate } from "@/lib/string";
import Link from "next/link";

export default async function Home() {
  const blogs = await prisma.blog.findMany();

  return (
    <main className="flex flex-col mt-4">
      <h1 className="text-2xl text-center mb-10">Top Page</h1>

      {/* TODO: flex 2 columns */}
      <div className={`grid grid-cols-2 mx-4 gap-4`}>
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className={` px-4 py-2 h-52 border rounded
            border-neutral-500 hover:border-neutral-200
            hover:bg-neutral-900
            duration-100`}
          >
            <header className="text-xl">{blog.title}</header>

            <hr className="my-2" />

            <p>{truncate(blog.content, 350)}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
