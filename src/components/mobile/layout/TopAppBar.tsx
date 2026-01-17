"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, Search, Bell } from "lucide-react";
import { useNavigationStore } from "@/stores/navigationStore";
import { Pressable } from "../actions/Pressable";

interface TopAppBarProps {
    title: string;
    /** Left action: "menu" for hamburger, or custom ReactNode */
    leftAction?: "menu" | React.ReactNode;
    /** Right actions (search, notifications, etc) */
    rightActions?: React.ReactNode;
    /** Show search icon by default */
    showSearch?: boolean;
    /** Custom search handler */
    onSearchPress?: () => void;
}

/**
 * Minimal top app bar for mobile dashboards.
 * Only visible in "root" navigation mode.
 * 
 * Features:
 * - Hamburger menu trigger
 * - Title
 * - 1-2 right actions
 * - Glassmorphic styling
 */
export function TopAppBar({
    title,
    leftAction = "menu",
    rightActions,
    showSearch = true,
    onSearchPress,
}: TopAppBarProps) {
    const openDrawer = useNavigationStore((s) => s.openDrawer);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
                position: "sticky",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: "12px 16px",
                paddingTop: "calc(12px + env(safe-area-inset-top))",
                background: "rgba(10, 10, 12, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
            }}
        >
            {/* Left section */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {leftAction === "menu" ? (
                    <Pressable
                        onPress={openDrawer}
                        ariaLabel="Open menu"
                        style={{
                            width: 44,
                            height: 44,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            background: "rgba(255,255,255,0.05)",
                        }}
                    >
                        <Menu size={22} color="rgba(255,255,255,0.8)" />
                    </Pressable>
                ) : (
                    leftAction
                )}

                {/* Title */}
                <h1 style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    margin: 0,
                    background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>
                    {title}
                </h1>
            </div>

            {/* Right section */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {showSearch && (
                    <Pressable
                        onPress={onSearchPress}
                        ariaLabel="Search"
                        style={{
                            width: 44,
                            height: 44,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            background: "rgba(255,255,255,0.05)",
                        }}
                    >
                        <Search size={20} color="rgba(255,255,255,0.6)" />
                    </Pressable>
                )}
                {rightActions}
            </div>
        </motion.header>
    );
}
