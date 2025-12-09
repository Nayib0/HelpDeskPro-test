"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="w-full bg-blue-600 text-white p-4 flex justify-between">
      <span className="font-semibold">
        HelpDeskPro • {user?.role === "agent" ? "Agente" : "Cliente"}
      </span>

      <div className="flex items-center gap-4">
        <span>{user?.email}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Salir
        </button>
      </div>
    </div>
  );
}
