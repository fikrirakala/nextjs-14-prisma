import prisma from "@/lib/prisma";
import React from "react";

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const postSlug = params.slug;

  const post = await prisma.post.findUnique({
    where: {
      slug: postSlug,
    },
  });

  return (
    <main className="mx-auto max-w-7xl py-20">
      <h1 className="mb-10 text-3xl font-bold">{post?.title}</h1>

      <p>{post?.content}</p>
    </main>
  );
}
