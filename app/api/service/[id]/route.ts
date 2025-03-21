import { getPostById, updatePost } from "@/lib/query";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("service/")[1];
    const post = getPostById(id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "ok", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting post by id", error },
      { status: 500 }
    );
  }
};

export const PUT = async (req: Request) => {
  const id = req.url.split("service/")[1];
  const { todo, description } = await req.json();
  try {
    const updatedPost = updatePost(id, todo, description);
    if (!updatedPost)
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    return NextResponse.json({ message: "ok", updatedPost }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting post by id", error },
      { status: 500 }
    );
  }
};
