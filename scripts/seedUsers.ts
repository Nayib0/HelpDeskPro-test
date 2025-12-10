import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Users } from "@/app/api/models/User";
import { connectDB } from "@/lib/database";

const seedUsers = [
  {
    name: "Cliente Demo",
    email: "client@example.com",
    password: "client123",
    role: "client",
  },
  {
    name: "Agente Demo",
    email: "agent@example.com",
    password: "agent123",
    role: "agent",
  },
];

async function run() {
  try {
    console.log("Conectando a MongoDB...");
    await connectDB();

    console.log("Borrando usuarios anteriores...");
    await Users.deleteMany({}); 

    console.log("Insertando usuarios...");

    for (const user of seedUsers) {
      const hash = await bcrypt.hash(user.password, 10);

      await Users.create({
        name: user.name,
        email: user.email,
        password: hash,
        role: user.role,
      });

      console.log(`✔ Usuario creado: ${user.email}`);
    }
    }
    console.log("✔ Seed de usuarios completado.");
  } catch (error) {
    console.error("Error durante el seed de usuarios:", error);
  } finally {
    mongoose.connection.close();
    console.log("Conexión a MongoDB cerrada.");
  }

run();
