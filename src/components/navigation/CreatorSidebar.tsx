"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
    TrendingUp,
    Palette,
    BarChart3,
    Wallet,
    Star,
    Megaphone,
    Settings,
    LogOut,
} from "lucide-react";

interface NavItem {
    icon: any;
    label: string;
    path: string;
}

const CREATOR_NAV: NavItem[] = [
    { icon: TrendingUp, label: "Revenue Dashboard", path: "/dashboard/creator" },
    { icon: Palette, label: "Design Workshop", path: "/dashboard/creator/templates" },
    { icon: BarChart3, label: "Market Intelligence", path: "/dashboard/creator/analytics" },
    { icon: Wallet, label: "Payout Center", path: "/dashboard/creator/earnings" },
    { icon: Star, label: "Customer Reviews", path: "/dashboard/creator/reviews" },
    { icon: Megaphone, label: "Promotion Hub", path: "/dashboard/creator/promotions" },
];

export default function CreatorSidebar() {
    const { logout } = useAuth();
    const pathname = usePathname();

    return (
        <aside className="sidebar-glass-creator" style={{
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
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "0.25rem"
                }}>
                    StudioPro
                </h2>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
                    Professional Marketplace
                </p>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {CREATOR_NAV.map((item) => {
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
                                padding: "0.75rem 1rem",
                                borderRadius: "8px",
                                background: isActive ? "rgba(16, 185, 129, 0.15)" : "transparent",
                                border: isActive ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid transparent",
                                color: isActive ? "#10b981" : "rgba(255,255,255,0.6)",
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
                    href="/dashboard/creator/settings"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        background: pathname === "/dashboard/creator/settings" ? "rgba(16, 185, 129, 0.15)" : "transparent",
                        color: pathname === "/dashboard/creator/settings" ? "#10b981" : "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        fontSize: "0.95rem"
                    }}
                >
                    <Settings size={20} />
                    <span>Settings</span>
                </Link>

                <button
                    onClick={logout}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
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
                .sidebar-glass-creator {
                    position: relative;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(20px);
                    border-right: 1px solid rgba(16, 185, 129, 0.15);
                    box-shadow: 0 4px 30px rgba(16, 185, 129, 0.1);
                }
            `}</style>
        </aside>
    );
}
