"use client";

import Link from "next/link";

export default function AgentDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Panel del Agente </h1>

      <Link
        href="/agent/tickets"
        className="bg-blue-500 text-white px-4 py-2 rounded inline-block"
      >
        Ver todos los tickets
      </Link>
    </div>
  );
}
