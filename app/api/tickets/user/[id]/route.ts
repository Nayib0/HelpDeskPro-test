import { NextResponse } from "next/server";
import { connectDB } from "@/lib/database";
import Ticket from "@/app/api/models/Ticket";

export async function GET(_: any, { params }: any) {
  await connectDB();
  const tickets = await Ticket.find({ createdBy: params.id });
  return NextResponse.json(tickets);
}
