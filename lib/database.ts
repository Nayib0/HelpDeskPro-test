import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "";

if (!MONGO_URL) {
  throw new Error(" No existe la variable MONGO_URL en el .env");
}

let isConnected = false; 

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URL);
    isConnected = db.connections[0].readyState === 1;

    console.log(" MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    throw error;
  }
};
