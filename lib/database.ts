import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL!;

if (!MONGO_URL) throw new Error("❌ MONGO_URL not found in .env");

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URL);
    isConnected = db.connection.readyState === 1;

    console.log("MongoDB connected:", db.connection.name);
  } catch (error) {
    console.error("❌ DB Connection Error:", error);
  }
}
