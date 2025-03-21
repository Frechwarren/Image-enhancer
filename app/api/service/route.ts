import { createPost, getPosts } from "@/lib/query";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const posts = await getPosts();
    return NextResponse.json(
      { message: "Ok", posts },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting post", error },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: Request, res: Response) => {
  const { todo, description } = await req.json();
  try {
    const post = {
      todo,
      description,
      date: new Date(),
      id: new Date().getTime().toString(),
    };
    createPost(post);
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting post", error },
      {
        status: 500,
      }
    );
  }
};
