"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const PostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export async function submitPost(formData: FormData) {
  const { title, content } = PostSchema.parse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  await prisma.post.create({
    data: {
      title,
      slug: title.trim().replace(/\s+/g, "-").toLowerCase(),
      content,
    },
  });

  revalidatePath("/posts");
}
