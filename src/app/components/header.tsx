import Link from "next/link";

export function Header() {
  return (
    <div
      className={`p-4 bg-neutral-950
    border-b-4 border-b-neutral-900`}
    >
      <Link href="/" className="text-2xl">
        Bloggier
      </Link>
    </div>
  );
}
