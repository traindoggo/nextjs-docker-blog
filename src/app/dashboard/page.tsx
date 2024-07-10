import { prisma } from "@/lib/db";
import { truncate } from "@/lib/string";
import Link from "next/link";

const border_class = `border border-collapse border-neutral-500
px-2 text-center`;

export default async function DashboardPage() {
  const blogs = await prisma.blog.findMany();

  return (
    <main className="flex flex-col flex-1 gap-4">
      <h1>Dashboard</h1>

      <table className={`table-auto border-collapse mx-2`}>
        <thead>
          <tr>
            <th className={border_class}>id</th>
            <th className={border_class}>Title</th>
            <th className={border_class}>Content</th>
            <th className={border_class}>Created At</th>
            <th className={border_class}>Edit</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className={``}>
              <td className={border_class}>{blog.id}</td>
              <td className={border_class}>{blog.title}</td>
              <td className={border_class}>{truncate(blog.content, 30)}</td>
              <td className={border_class}>
                {blog.createdAt.toLocaleDateString()}
              </td>
              <td className={`${border_class} flex gap-2 justify-around`}>
                <Link
                  href={`/blogs/edit/${blog.id}`}
                  className={`px-1 border border-neutral-800 rounded bg-yellow-800`}
                >
                  Edit
                </Link>
                <Link
                  href={`/blogs/delete/${blog.id}`}
                  className={`px-1 border border-neutral-800 rounded bg-red-800`}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
