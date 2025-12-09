"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: ReactNode;
  role: "client" | "agent";
}) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
    else if (user.role !== role) router.push("/login");
  }, [user, role, router]);

  return <>{user && children}</>;
}
