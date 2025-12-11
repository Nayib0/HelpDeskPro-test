import { NextResponse } from "next/server";
import { connectDB } from "@/lib/database";
import { Users } from "@/app/api/models/User";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export async function POST(req: Request) {
  try {
    await connectDB();

    console.log("🔌 Connected to DB:", mongoose.connection.name);
    console.log("📦 Using collection:", Users.collection.collectionName);

    const allUsers = await Users.find({});
    console.log("👀 Users found in DB:", allUsers);

    const { email, password } = await req.json();

    console.log("📥 Email recibido EXACTO:", JSON.stringify(email));
    const emailNormalized = String(email || '').toLowerCase().trim();
    console.log("📥 Email normalizado:", emailNormalized);
    console.log("📦 Emails en BD:", allUsers.map((u) => JSON.stringify(u.email)));

    console.log("📥 Login attempt for:", emailNormalized);

    const user = await Users.findOne({ email: emailNormalized });
    console.log("🔍 User returned by findOne:", user);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    console.log("🔐 Password valid:", isValid);

    if (!isValid) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const safeUser = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return NextResponse.json({ user: safeUser });

  } catch (error) {
    console.error("❌ LOGIN ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
