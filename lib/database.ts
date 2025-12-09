import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "";

if (!MONGO_URL) {
  throw new Error("MONGO_URL environment variable is not defined in .env");
}

let isConnected = false; 

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URL);
    isConnected = db.connections[0].readyState === 1;

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
