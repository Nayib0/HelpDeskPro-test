import { NextResponse } from "next/server";
import { connectDB } from "@/lib/database";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ ok: true, message: "DB conectada " });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err });
  }
}
