"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "@/store/store";
import { useParams } from "next/navigation";

export default function ClientTicketDetail() {
  const { id } = useParams();
  const user = useAuthStore((s) => s.user);

  const [ticket, setTicket] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("/api/tickets").then((res) => {
      setTicket(res.data.find((t: any) => t._id === id));
    });

    axios.get(`/api/comments/${id}`).then((res) => {
      setComments(res.data);
    });
  }, []);

  const sendComment = async () => {
    await axios.post(`/api/comments/${id}`, {
      author: user?.id,
      message: text,
    });

    setComments([...comments, { message: text, author: { name: user?.name } }]);
    setText("");
  };

  if (!ticket) return <p className="p-6">Cargando...</p>;

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-xl font-bold">{ticket.title}</h1>
      <p>{ticket.description}</p>

      <h2 className="text-lg font-semibold mt-6">Comentarios</h2>

      <div className="flex flex-col gap-3">
        {comments.map((c, i) => (
          <div key={i} className="border p-2 rounded">
            <strong>{c.author?.name}:</strong> {c.message}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          className="border p-2 flex-1 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4" onClick={sendComment}>
          ➤
        </button>
      </div>
    </div>
  );
}
