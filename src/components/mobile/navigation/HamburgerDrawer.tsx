"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { X, Sparkles, Store, Zap, Briefcase, LogOut, HelpCircle } from "lucide-react";
import { useNavigationStore } from "@/stores/navigationStore";
import { useAuth } from "@/context/AuthContext";
import { useUserStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { Pressable } from "../actions/Pressable";
import { haptic } from "../feedback/Haptic";
import { springPresets } from "../motion/transitions";

interface HamburgerDrawerProps {
    /** Consumer / Creator / Admin specific menu items */
    role?: "consumer" | "creator" | "admin";
}

interface ActionRowProps {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    variant?: "default" | "accent" | "danger";
    badge?: string;
}

function ActionRow({ icon, label, onClick, variant = "default", badge }: ActionRowProps) {
    const colors = {
        default: { text: "rgba(255,255,255,0.8)", bg: "rgba(255,255,255,0.05)" },
        accent: { text: "#10b981", bg: "rgba(16, 185, 129, 0.1)" },
        danger: { text: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" },
    };

    return (
        <Pressable
            onPress={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "14px 16px",
                borderRadius: 12,
                background: colors[variant].bg,
                minHeight: 48, // ≥44px tap target
            }}
        >
            <div style={{ color: colors[variant].text }}>{icon}</div>
            <span style={{
                flex: 1,
                fontSize: "0.95rem",
                fontWeight: 500,
                color: colors[variant].text
            }}>
                {label}
            </span>
            {badge && (
                <span style={{
                    background: "var(--accent, #6366f1)",
                    color: "white",
                    fontSize: "0.7rem",
                    padding: "2px 8px",
                    borderRadius: 10,
                    fontWeight: 600,
                }}>
                    {badge}
                </span>
            )}
        </Pressable>
    );
}

/**
 * Hamburger drawer for secondary navigation.
 * Lazy-mounted, swipe-to-dismiss.
 */
export function HamburgerDrawer({ role = "consumer" }: HamburgerDrawerProps) {
    const drawerOpen = useNavigationStore((s) => s.drawerOpen);
    const closeDrawer = useNavigationStore((s) => s.closeDrawer);
    const { logout } = useAuth();
    const { setRole } = useUserStore();
    const router = useRouter();

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && drawerOpen) closeDrawer();
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [drawerOpen, closeDrawer]);

    const handleSwitchRole = () => {
        haptic.medium();
        closeDrawer();
        if (role === "consumer") {
            setRole("Creator");
            router.push("/dashboard/creator");
        } else {
            setRole("Consumer");
            router.push("/dashboard/consumer");
        }
    };

    const handleLogout = () => {
        haptic.heavy();
        closeDrawer();
        logout();
    };

    const handleNavigate = (path: string) => {
        haptic.light();
        closeDrawer();
        router.push(path);
    };

    return (
        <AnimatePresence>
            {drawerOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={closeDrawer}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0, 0, 0, 0.6)",
                            backdropFilter: "blur(4px)",
                            zIndex: 200,
                        }}
                    />

                    {/* Drawer */}
                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={springPresets.snappy}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.1}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -50 || info.velocity.x < -200) {
                                closeDrawer();
                            }
                        }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: "min(300px, 85vw)",
                            background: "rgba(15, 15, 18, 0.98)",
                            backdropFilter: "blur(20px)",
                            borderRight: "1px solid rgba(255,255,255,0.08)",
                            zIndex: 201,
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: "env(safe-area-inset-top)",
                            paddingBottom: "env(safe-area-inset-bottom)",
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: "20px 16px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                            <div>
                                <h2 style={{
                                    fontSize: "1.4rem",
                                    fontWeight: 800,
                                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    margin: 0,
                                }}>
                                    StoryForge
                                </h2>
                                <p style={{
                                    fontSize: "0.75rem",
                                    color: "rgba(255,255,255,0.4)",
                                    margin: "4px 0 0 0",
                                }}>
                                    {role === "consumer" ? "Personal Studio" : "Creator Studio"}
                                </p>
                            </div>
                            <Pressable
                                onPress={closeDrawer}
                                ariaLabel="Close menu"
                                style={{
                                    width: 40,
                                    height: 40,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 10,
                                    background: "rgba(255,255,255,0.05)",
                                }}
                            >
                                <X size={20} color="rgba(255,255,255,0.6)" />
                            </Pressable>
                        </div>

                        {/* Menu Items */}
                        <div style={{
                            flex: 1,
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            overflowY: "auto",
                        }}>
                            {role === "consumer" && (
                                <>
                                    <ActionRow
                                        icon={<Store size={20} />}
                                        label="Template Bazaar"
                                        onClick={() => handleNavigate("/store")}
                                    />
                                    <ActionRow
                                        icon={<Zap size={20} />}
                                        label="Power Credits"
                                        onClick={() => handleNavigate("/dashboard/consumer/credits")}
                                        badge="120"
                                    />
                                </>
                            )}

                            {role === "creator" && (
                                <>
                                    <ActionRow
                                        icon={<Store size={20} />}
                                        label="Store Settings"
                                        onClick={() => handleNavigate("/dashboard/creator/store")}
                                    />
                                    <ActionRow
                                        icon={<Zap size={20} />}
                                        label="Payout Dashboard"
                                        onClick={() => handleNavigate("/dashboard/creator/payouts")}
                                    />
                                </>
                            )}

                            <ActionRow
                                icon={<HelpCircle size={20} />}
                                label="Help & Support"
                                onClick={() => handleNavigate("/support")}
                            />
                        </div>

                        {/* Footer */}
                        <div style={{
                            padding: "16px",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                        }}>
                            <ActionRow
                                icon={<Briefcase size={20} />}
                                label={role === "consumer" ? "Switch to Creator" : "Switch to Consumer"}
                                onClick={handleSwitchRole}
                                variant="accent"
                            />
                            <ActionRow
                                icon={<LogOut size={20} />}
                                label="Logout"
                                onClick={handleLogout}
                                variant="danger"
                            />
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
