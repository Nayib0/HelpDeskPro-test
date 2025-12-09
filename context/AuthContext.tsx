"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "client" | "agent";
}

interface AuthContextType {
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (userData: IUser) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
