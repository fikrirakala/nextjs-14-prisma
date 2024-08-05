import PostEditor from "@/components/PostEditor";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-7xl py-20">
      <h1 className="text-4xl font-bold">All posts({posts.length})</h1>

      <ul className="mb-10 mt-10">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.slug}`}
              key={post.id}
              className="text-blue-600 hover:text-blue-700"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <PostEditor />
    </main>
  );
}
