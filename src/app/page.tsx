import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl py-20">
      <Link href="/posts">Posts</Link>
    </main>
  );
}
