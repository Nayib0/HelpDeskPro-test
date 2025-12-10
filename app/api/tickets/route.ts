import { NextResponse } from "next/server";
import { connectDB } from "@/lib/database";
import Ticket from "@/app/api/models/Ticket";

export async function GET() {
  await connectDB();
  const tickets = await Ticket.find()
    .populate("createdBy assignedTo", "name email role");
  return NextResponse.json(tickets);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const ticket = await Ticket.create(body);
  return NextResponse.json(ticket, { status: 201 });
}

export async function PATCH(req: Request) {
  await connectDB();
  const { id, ...update } = await req.json();
  const updated = await Ticket.findByIdAndUpdate(id, update, { new: true });
  return NextResponse.json(updated);
}
