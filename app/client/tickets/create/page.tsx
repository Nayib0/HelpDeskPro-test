"use client";

import { useState } from "react";
import axios from "axios";
import { useAuthStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function CreateTicket() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);

  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const create = async () => {
    await axios.post("/api/tickets", {
      ...data,
      createdBy: user?.id,
    });

    router.push("/client/tickets");
  };

  return (
    <div className="max-w-md mx-auto p-6 flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Crear Ticket</h1>

      <input
        className="border p-2 rounded"
        placeholder="Título"
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />

      <textarea
        className="border p-2 rounded"
        placeholder="Descripción"
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />

      <select
        className="border p-2 rounded"
        onChange={(e) => setData({ ...data, priority: e.target.value })}
      >
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>

      <button className="bg-blue-600 text-white p-2" onClick={create}>
        Guardar
      </button>
    </div>
  );
}
