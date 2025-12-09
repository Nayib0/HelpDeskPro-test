import { create } from 'zustand';

type Role = "client" | "agent" | null

interface User{
    id: string;
    name: string;
    email: string;
    role: Role; 
}

interface State {
    user: User | null;
    token: string | null;
    setState: (user: User, token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<State>((set) => ({
    user: null,
    token: null,
    setState: (user: User, token: string) => set({ user, token }),
    logout: () => set({ user: null, token: null }),   
}));