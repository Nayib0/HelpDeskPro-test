import { create } from "zustand";

type Role = "client" | "agent" | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

interface State {
  user: User | null;
  setUser: (data: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<State>((set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
  logout: () => set({ user: null }),
}));
