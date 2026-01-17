"use client";

import React from "react";
import { useUserStore, UserRole } from "@/store/useStore";
import { User, Crown, Briefcase, LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RoleSwitcher() {
    const { role, setRole } = useUserStore();
    const router = useRouter();

    const roles: { value: UserRole; label: string; icon: LucideIcon; color: string }[] = [
        { value: "Consumer", label: "Consumer", icon: User, color: "#6366f1" },
        { value: "Creator", label: "Creator", icon: Briefcase, color: "#10b981" },
        { value: "Admin", label: "Admin", icon: Crown, color: "#ef4444" },
    ];

    return (
        <div style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            zIndex: 1000,
            display: "flex",
            gap: "0.5rem",
            padding: "0.75rem",
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
        }}>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginRight: "0.5rem", alignSelf: "center" }}>
                Role:
            </span>
            {roles.map((r) => {
                const Icon = r.icon;
                const isActive = role === r.value;

                return (
                    <button
                        key={r.value}
                        onClick={() => {
                            setRole(r.value);
                            router.push(`/dashboard/${r.value.toLowerCase()}`);
                        }}
                        style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            border: isActive ? `2px solid ${r.color}` : "1px solid rgba(255,255,255,0.1)",
                            background: isActive ? `${r.color}20` : "rgba(255,255,255,0.05)",
                            color: isActive ? r.color : "rgba(255,255,255,0.6)",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "0.85rem",
                            fontWeight: isActive ? 700 : 500,
                        }}
                        onMouseEnter={(e) => {
                            if (!isActive) {
                                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isActive) {
                                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                            }
                        }}
                    >
                        <Icon size={16} />
                        {r.label}
                    </button>
                );
            })}
        </div>
    );
}
