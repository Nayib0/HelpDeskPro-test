"use client";

import { useRouter } from "next/navigation";

export default function ClientDashboard() {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Panel del Cliente 👋</h1>

      <div className="flex flex-col gap-4 mt-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => router.push("/client/tickets/create")}
        >
          Crear Ticket
        </button>

        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => router.push("/client/tickets")}
        >
          Ver Mis Tickets
        </button>
      </div>
    </div>
  );
}
