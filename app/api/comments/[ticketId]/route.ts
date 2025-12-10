import { NextResponse } from "next/server";
import { connectDB } from "@/lib/database";
import Comment from "@/app/api/models/Comment";

export async function GET(_: any, { params }: any) {
  await connectDB();
  const comments = await Comment.find({ ticketId: params.ticketId })
    .populate("author", "name email role");

  return NextResponse.json(comments);
}

export async function POST(req: Request, { params }: any) {
  await connectDB();
  const body = await req.json();

  const comment = await Comment.create({
    ticketId: params.ticketId,
    ...body,
  });

  return NextResponse.json(comment, { status: 201 });
}
