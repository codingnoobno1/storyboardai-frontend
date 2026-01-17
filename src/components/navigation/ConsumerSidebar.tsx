"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
    Sparkles,
    Film,
    BookOpen,
    Store,
    Zap,
    Settings,
    LogOut,
    Briefcase,
    LucideIcon
} from "lucide-react";
import { useUserStore } from "@/store/useStore";
import { useRouter } from "next/navigation";

interface NavItem {
    icon: LucideIcon;
    label: string;
    path: string;
}

const CONSUMER_NAV: NavItem[] = [
    { icon: Sparkles, label: "Creation Studio", path: "/dashboard/consumer" },
    { icon: Film, label: "My Productions", path: "/dashboard/consumer/videos" },
    { icon: BookOpen, label: "Narrative Vault", path: "/dashboard/consumer/storyboards" },
    { icon: Store, label: "Template Bazaar", path: "/store" },
    { icon: Zap, label: "Power Credits", path: "/dashboard/consumer/credits" },
];

export default function ConsumerSidebar() {
    const { logout } = useAuth();
    const { setRole } = useUserStore();
    const router = useRouter();
    const pathname = usePathname();

    return (
        <aside className="sidebar-glass" style={{
            width: "280px",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            position: "relative",
            zIndex: 10
        }}>
            {/* Logo */}
            <div style={{ marginBottom: "1rem" }}>
                <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "0.25rem"
                }}>
                    StoryForge
                </h2>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
                    Personal Creation Suite
                </p>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {CONSUMER_NAV.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.path || pathname?.startsWith(item.path + "/");

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                padding: "0.875rem 1rem",
                                borderRadius: "12px",
                                background: isActive ? "rgba(99, 102, 241, 0.15)" : "transparent",
                                border: isActive ? "1px solid rgba(99, 102, 241, 0.3)" : "1px solid transparent",
                                color: isActive ? "#6366f1" : "rgba(255,255,255,0.6)",
                                textDecoration: "none",
                                transition: "all 0.2s ease",
                                fontWeight: isActive ? 600 : 500,
                                fontSize: "0.95rem"
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                    e.currentTarget.style.color = "white";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                                }
                            }}
                        >
                            <Icon size={20} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <Link
                    href="/dashboard/consumer/settings"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.875rem 1rem",
                        borderRadius: "12px",
                        background: pathname === "/dashboard/consumer/settings" ? "rgba(99, 102, 241, 0.15)" : "transparent",
                        color: pathname === "/dashboard/consumer/settings" ? "#6366f1" : "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        fontSize: "0.95rem"
                    }}
                >
                    <Settings size={20} />
                    <span>Settings</span>
                </Link>

                <div
                    onClick={() => {
                        setRole("Creator");
                        router.push("/dashboard/creator");
                    }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.875rem 1rem",
                        borderRadius: "12px",
                        background: "rgba(16, 185, 129, 0.05)",
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                        color: "#10b981",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontSize: "0.95rem",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "rgba(16, 185, 129, 0.1)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "rgba(16, 185, 129, 0.05)"}
                >
                    <Briefcase size={20} />
                    <span style={{ fontWeight: 600 }}>Creator Studio</span>
                </div>

                <button
                    onClick={logout}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.875rem 1rem",
                        borderRadius: "12px",
                        background: "transparent",
                        border: "none",
                        color: "rgba(255,255,255,0.6)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontSize: "0.95rem",
                        width: "100%",
                        textAlign: "left"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(239, 68, 68, 0.1)";
                        e.currentTarget.style.color = "#ef4444";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    }}
                >
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>

            <style jsx global>{`
                .sidebar-glass {
                    position: relative;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(20px);
                    border-right: 1px solid rgba(99, 102, 241, 0.15);
                    box-shadow: 0 4px 30px rgba(99, 102, 241, 0.1);
                }
            `}</style>
        </aside>
    );
}
