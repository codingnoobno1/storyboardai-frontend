"use client";

import { useUserStore, UserRole } from "@/store/useStore";
import { useAuth } from "@/context/AuthContext";
import {
    LayoutDashboard,
    Film,
    Image as ImageIcon,
    Settings,
    LogOut,
    ShoppingBag,
    Zap,
    PenTool,
    BarChart3,
    DollarSign,
    ShieldCheck,
    Users,
    Sparkles,
    BookOpen,
    Store,
    TrendingUp,
    Palette,
    Wallet,
    Star,
    Megaphone,
    Activity,
    Shield,
    PieChart,
    AlertTriangle,
    FileCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
    icon: any;
    label: string;
    path: string;
}

const NAV_CONFIG: Record<UserRole, NavItem[]> = {
    Consumer: [
        { icon: Sparkles, label: "Creation Studio", path: "/dashboard/consumer" },
        { icon: Film, label: "My Productions", path: "/dashboard/consumer/videos" },
        { icon: BookOpen, label: "Narrative Vault", path: "/dashboard/consumer/storyboards" },
        { icon: Store, label: "Template Bazaar", path: "/store" },
        { icon: Zap, label: "Power Credits", path: "/dashboard/consumer/credits" },
    ],
    Creator: [
        { icon: TrendingUp, label: "Revenue Dashboard", path: "/dashboard/creator" },
        { icon: Palette, label: "Design Workshop", path: "/dashboard/creator/templates" },
        { icon: BarChart3, label: "Market Intelligence", path: "/dashboard/creator/analytics" },
        { icon: Wallet, label: "Payout Center", path: "/dashboard/creator/earnings" },
        { icon: Star, label: "Customer Reviews", path: "/dashboard/creator/reviews" },
        { icon: Megaphone, label: "Promotion Hub", path: "/dashboard/creator/promotions" },
    ],
    Admin: [
        { icon: Activity, label: "Mission Control", path: "/dashboard/admin" },
        { icon: Users, label: "User Registry", path: "/dashboard/admin/users" },
        { icon: Shield, label: "Security Ops", path: "/dashboard/admin/security" },
        { icon: PieChart, label: "Business Intelligence", path: "/dashboard/admin/analytics" },
        { icon: Settings, label: "System Config", path: "/dashboard/admin/config" },
        { icon: AlertTriangle, label: "Incident Response", path: "/dashboard/admin/incidents" },
        { icon: FileCheck, label: "Content Review", path: "/dashboard/admin/moderation" },
    ],
};

export default function RoleSidebar() {
    const { role } = useUserStore();
    const { logout } = useAuth();
    const pathname = usePathname();

    const navItems = NAV_CONFIG[role] || NAV_CONFIG.Consumer;

    return (
        <>
            <style jsx global>{`
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-15deg); }
                    100% { transform: translateX(200%) skewX(-15deg); }
                }
                .sidebar-glass {
                    position: relative;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
                }
                .sidebar-glass::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(
                        to right,
                        transparent,
                        rgba(255, 255, 255, 0.05),
                        transparent
                    );
                    transform: translateX(-100%) skewX(-15deg);
                    animation: shine 8s infinite linear;
                    pointer-events: none;
                }
                .nav-item-hover:hover {
                    background: rgba(255, 255, 255, 0.05) !important;
                    color: white !important;
                    transform: translateX(4px);
                    box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
                }
            `}</style>

            <aside className="sidebar-glass" style={{ width: "260px", margin: "1rem", borderRadius: "1.5rem", padding: "1.5rem", display: "flex", flexDirection: "column", position: 'sticky', top: '1rem', height: 'calc(100vh - 2rem)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "3rem", padding: "0.5rem" }}>
                    <div style={{ background: "var(--accent)", padding: "10px", borderRadius: "12px", boxShadow: "0 0 20px rgba(var(--accent-rgb), 0.3)" }}>
                        <Sparkles size={20} color="white" />
                    </div>
                    <span style={{ fontWeight: "900", fontSize: "1.25rem", letterSpacing: "-0.5px", background: "linear-gradient(to right, white, rgba(255,255,255,0.6))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>StoryBoardAI</span>
                </div>

                <nav style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {navItems.map((item) => {
                            const active = pathname === item.path;
                            const Icon = item.icon;

                            return (
                                <Link key={item.path} href={item.path} style={{ textDecoration: 'none' }}>
                                    <div className={active ? "" : "nav-item-hover"} style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        padding: "12px 16px",
                                        borderRadius: "14px",
                                        background: active ? "var(--accent)" : "transparent",
                                        color: active ? "white" : "rgba(255,255,255,0.45)",
                                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                        fontWeight: active ? "700" : "500",
                                        boxShadow: active ? "0 8px 16px -4px rgba(var(--accent-rgb), 0.4)" : "none"
                                    }}>
                                        <Icon size={20} style={{ opacity: active ? 1 : 0.6 }} />
                                        <span>{item.label}</span>
                                    </div>
                                </Link>
                            );
                        })}

                        <div style={{ margin: "1.5rem 0", height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.08), rgba(255,255,255,0))" }} />

                        <Link href={`/dashboard/${role.toLowerCase()}/settings`} style={{ textDecoration: 'none' }}>
                            <div className={pathname?.includes("/settings") ? "" : "nav-item-hover"} style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "12px 16px",
                                color: pathname?.includes("/settings") ? "white" : "rgba(255,255,255,0.45)",
                                background: pathname?.includes("/settings") ? "var(--accent)" : "transparent",
                                borderRadius: "14px",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                fontWeight: pathname?.includes("/settings") ? "700" : "500",
                                boxShadow: pathname?.includes("/settings") ? "0 4px 12px rgba(var(--accent-rgb), 0.3)" : "none"
                            }}>
                                <Settings size={20} style={{ opacity: pathname?.includes("/settings") ? 1 : 0.6 }} />
                                <span>Settings</span>
                            </div>
                        </Link>
                    </div>
                </nav>

                <div style={{ padding: '1.2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.2rem' }}>
                    <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>Orchestrator Role</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: role === 'Admin' ? '#ef4444' : role === 'Creator' ? '#10b981' : 'var(--accent)', boxShadow: `0 0 10px ${role === 'Admin' ? '#ef4444' : role === 'Creator' ? '#10b981' : 'var(--accent)'}` }} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'capitalize', color: 'rgba(255,255,255,0.9)' }}>{role}</span>
                    </div>
                </div>

                <button
                    onClick={logout}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px 16px",
                        color: "#ff4d4d",
                        background: "rgba(255, 77, 77, 0.05)",
                        border: "none",
                        borderRadius: "14px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 77, 77, 0.15)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 77, 77, 0.05)"}
                >
                    <LogOut size={20} />
                    <span style={{ fontWeight: 700 }}>Exit Session</span>
                </button>
            </aside>
        </>
    );
}
