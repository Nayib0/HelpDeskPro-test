import { NextResponse } from "next/server";
import { connectDB } from "@/lib/database";
import TicketSchema from "@/app/api/models/Ticket";

export async function GET() {
  try {
    await connectDB();
    const tickets = await TicketSchema.find().populate("createdBy assignedTo");
    return NextResponse.json(tickets);
  } catch {
    return NextResponse.json({ error: "Error fetching tickets" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, description, createdBy, priority } = body;

    if (!title || !description || !createdBy) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newTicket = await TicketSchema.create({
      title,
      description,
      createdBy,
      priority: priority || "medium",
    });

    return NextResponse.json(newTicket, { status: 201 });

  } catch (error) {
    console.log("Error creating ticket:", error);
    return NextResponse.json(
      { error: "Error creating ticket" },
      { status: 500 }
    );
  }
}
