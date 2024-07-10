"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Create",
    href: "/blogs/create",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
];

export function Header() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div
      className={`p-4 flex items-baseline bg-neutral-950
    border-b-4 border-b-neutral-900`}
    >
      <Link href="/" className="text-2xl mr-10">
        Bloggier
      </Link>

      <div className={`flex gap-4`}>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.title}
            className={`${
              pathname == link.href ? "text-neutral-200" : "text-neutral-600"
            } duration-150 text-xl`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
