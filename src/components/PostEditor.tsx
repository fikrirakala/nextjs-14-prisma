import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitPost } from "@/app/actions/actions";

export default function PostEditor() {
  return (
    <form action={submitPost} className="flex flex-col gap-6">
      <Input name="title" type="text" placeholder="Title" required />
      <Input name="content" type="text" placeholder="Content" required />
      <Button type="submit">Submit</Button>
    </form>
  );
}
