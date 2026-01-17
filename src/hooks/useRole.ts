"use client";

import { useUserStore } from "@/store/useStore";

export function useRole() {
    const { role, setRole } = useUserStore();

    const isAdmin = role === "Admin";
    const isCreator = role === "Creator";
    const isConsumer = role === "Consumer";

    return {
        role,
        setRole,
        isAdmin,
        isCreator,
        isConsumer,
        permissions: {
            canPublish: isAdmin || isCreator,
            canModerate: isAdmin,
            canPurchase: isConsumer || isCreator,
        }
    };
}
