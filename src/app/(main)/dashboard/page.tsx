"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useStore";

/**
 * Root dashboard page that redirects users to their role-specific dashboard.
 * Solves the issue of rehydration-based route conflicts.
 */
export default function DashboardRootPage() {
    const { role } = useUserStore();
    const router = useRouter();

    useEffect(() => {
        if (role === 'Admin') {
            router.replace("/dashboard/admin");
        } else if (role === 'Creator') {
            router.replace("/dashboard/creator");
        } else {
            router.replace("/dashboard/consumer");
        }
    }, [role, router]);

    return (
        <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
            Identifying Workspace...
        </div>
    );
}
