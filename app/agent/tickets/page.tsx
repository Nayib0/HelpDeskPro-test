"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function AgentTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("/api/tickets").then((res) => setTickets(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Todos los Tickets</h1>

      <div className="flex flex-col gap-3">
        {tickets.map((t: any) => (
          <Link
            key={t._id}
            href={`/agent/tickets/${t._id}`}
            className="border p-3 rounded"
          >
            {t.title} — {t.status}
          </Link>
        ))}
      </div>
    </div>
  );
}
