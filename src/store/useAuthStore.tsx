import type { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

// Unified interface for the user
export interface User {
    id?: string;
    id_usuario?: number;
    email: string;
    fullName?: string;
    nombre?: string;
    isActive?: boolean;
    rol?: string;
    user_metadata?: {
        avatar_url?: string;
        full_name?: string;
    };
}


export interface AuthState {
    session: Session | null;
    setSession: (session: Session | null) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
}

// Creation of a Zustand store to manage authentication state
export const useAuthStore = create<AuthState>((set) => ({
    session: null,
    setSession: (session) => set({ session }),
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    isLoading: true,
    setIsLoading: (isLoading) => set({ isLoading }),
    error: null,
    setError: (error) => set({ error }),
}));