"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'Consumer' | 'Creator' | 'Admin';
export type GlobalMode = 'Education' | 'Fun' | 'Professional';

interface UserStore {
    role: UserRole;
    setRole: (role: UserRole) => void;
}

interface CreditStore {
    storyCredits: number;
    imageCredits: number;
    videoCredits: number;
    addCredits: (type: 'story' | 'image' | 'video', amount: number) => void;
    spendCredits: (type: 'story' | 'image' | 'video', amount: number) => void;
}

interface ModeStore {
    mode: GlobalMode;
    setMode: (mode: GlobalMode) => void;
}

interface TemplateStore {
    purchasedIds: string[];
    addPurchased: (id: string) => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            role: 'Consumer',
            setRole: (role) => set({ role }),
        }),
        { name: 'sb-user-storage' }
    )
);

export const useCreditStore = create<CreditStore>()(
    persist(
        (set) => ({
            storyCredits: 120,
            imageCredits: 80,
            videoCredits: 20,
            addCredits: (type, amount) => set((state) => {
                const key = `${type}Credits` as keyof CreditStore;
                return { [key]: (state[key] as number) + amount };
            }),
            spendCredits: (type, amount) => set((state) => {
                const key = `${type}Credits` as keyof CreditStore;
                return { [key]: Math.max(0, (state[key] as number) - amount) };
            }),
        }),
        { name: 'sb-credit-storage' }
    )
);

export const useModeStore = create<ModeStore>()(
    persist(
        (set) => ({
            mode: 'Professional',
            setMode: (mode) => set({ mode }),
        }),
        { name: 'sb-mode-storage' }
    )
);

export const useTemplateStore = create<TemplateStore>()(
    persist(
        (set) => ({
            purchasedIds: [],
            addPurchased: (id) => set((state) => ({
                purchasedIds: state.purchasedIds.includes(id) ? state.purchasedIds : [...state.purchasedIds, id]
            })),
        }),
        { name: 'sb-template-storage' }
    )
);
