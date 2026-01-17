"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
    Activity,
    Users,
    Shield,
    PieChart,
    Settings as SettingsIcon,
    AlertTriangle,
    FileCheck,
    LogOut,
} from "lucide-react";

interface NavItem {
    icon: any;
    label: string;
    path: string;
}

const ADMIN_NAV: NavItem[] = [
    { icon: Activity, label: "Mission Control", path: "/dashboard/admin" },
    { icon: Users, label: "User Registry", path: "/dashboard/admin/users" },
    { icon: Shield, label: "Security Ops", path: "/dashboard/admin/security" },
    { icon: PieChart, label: "Business Intelligence", path: "/dashboard/admin/analytics" },
    { icon: SettingsIcon, label: "System Config", path: "/dashboard/admin/config" },
    { icon: AlertTriangle, label: "Incident Response", path: "/dashboard/admin/incidents" },
    { icon: FileCheck, label: "Content Review", path: "/dashboard/admin/moderation" },
];

export default function AdminSidebar() {
    const { logout } = useAuth();
    const pathname = usePathname();

    return (
        <aside className="sidebar-glass-admin" style={{
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
                    background: "linear-gradient(135deg, #ef4444, #dc2626)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "0.25rem"
                }}>
                    CommandCenter
                </h2>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
                    Platform Operations
                </p>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {ADMIN_NAV.map((item) => {
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
                                padding: "0.625rem 1rem",
                                borderRadius: "6px",
                                background: isActive ? "rgba(239, 68, 68, 0.15)" : "transparent",
                                border: isActive ? "1px solid rgba(239, 68, 68, 0.3)" : "1px solid transparent",
                                color: isActive ? "#ef4444" : "rgba(255,255,255,0.6)",
                                textDecoration: "none",
                                transition: "all 0.2s ease",
                                fontWeight: isActive ? 600 : 500,
                                fontSize: "0.9rem"
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
                            <Icon size={18} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <Link
                    href="/dashboard/admin/settings"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.625rem 1rem",
                        borderRadius: "6px",
                        background: pathname === "/dashboard/admin/settings" ? "rgba(239, 68, 68, 0.15)" : "transparent",
                        color: pathname === "/dashboard/admin/settings" ? "#ef4444" : "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        fontSize: "0.9rem"
                    }}
                >
                    <SettingsIcon size={18} />
                    <span>Settings</span>
                </Link>

                <button
                    onClick={logout}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.625rem 1rem",
                        borderRadius: "6px",
                        background: "transparent",
                        border: "none",
                        color: "rgba(255,255,255,0.6)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontSize: "0.9rem",
                        width: "100%",
                        textAlign: "left"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)";
                        e.currentTarget.style.color = "#ef4444";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    }}
                >
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>

            <style jsx global>{`
                .sidebar-glass-admin {
                    position: relative;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(20px);
                    border-right: 1px solid rgba(239, 68, 68, 0.15);
                    box-shadow: 0 4px 30px rgba(239, 68, 68, 0.1);
                }
            `}</style>
        </aside>
    );
}
