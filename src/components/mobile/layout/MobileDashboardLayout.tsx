"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigationStore, useShouldShowBottomChrome } from "@/stores/navigationStore";
import { NavigationModeProvider } from "../providers/NavigationModeProvider";
import { TopAppBar } from "./TopAppBar";
import { HamburgerDrawer } from "../navigation/HamburgerDrawer";
import { ActionBar } from "../surfaces/ActionBar";
import { MobileTabBar } from "../navigation/MobileTabBar";
import { springPresets } from "../motion/transitions";
import { Sparkles, Film, BookOpen, User, Palette, Package, BarChart, LayoutDashboard, Users, FileText, Settings } from "lucide-react";

// Role-aware tab configurations
const CONSUMER_TABS = [
    { key: "/dashboard/consumer", icon: <Sparkles size={22} />, title: "Studio" },
    { key: "/dashboard/consumer/videos", icon: <Film size={22} />, title: "Videos" },
    { key: "/dashboard/consumer/storyboards", icon: <BookOpen size={22} />, title: "Vault" },
    { key: "/dashboard/consumer/settings", icon: <User size={22} />, title: "Profile" },
];

const CREATOR_TABS = [
    { key: "/dashboard/creator", icon: <Palette size={22} />, title: "Studio" },
    { key: "/dashboard/creator/templates", icon: <Package size={22} />, title: "Templates" },
    { key: "/dashboard/creator/analytics", icon: <BarChart size={22} />, title: "Analytics" },
    { key: "/dashboard/creator/settings", icon: <User size={22} />, title: "Profile" },
];

const ADMIN_TABS = [
    { key: "/dashboard/admin", icon: <LayoutDashboard size={22} />, title: "Overview" },
    { key: "/dashboard/admin/users", icon: <Users size={22} />, title: "Users" },
    { key: "/dashboard/admin/content", icon: <FileText size={22} />, title: "Content" },
    { key: "/dashboard/admin/settings", icon: <Settings size={22} />, title: "Settings" },
];

interface MobileDashboardLayoutProps {
    children: React.ReactNode;
    /** Page title shown in TopAppBar */
    title: string;
    /** User role for tab configuration */
    role: "consumer" | "creator" | "admin";
    /** Show action bar with create button */
    showActionBar?: boolean;
    /** Custom action bar content */
    actionBarContent?: React.ReactNode;
    /** Show search in top bar */
    showSearch?: boolean;
    /** Right actions for top bar */
    rightActions?: React.ReactNode;
}

/**
 * Complete mobile dashboard wrapper.
 * Handles navigation mode, chrome visibility, and layout.
 * 
 * Composition:
 * - TopAppBar (hamburger + title + actions)
 * - Content area (scrollable)
 * - ActionBar (optional, sticky bottom)
 * - BottomNavBar (role-aware tabs)
 * - HamburgerDrawer (overlay)
 */
export function MobileDashboardLayout({
    children,
    title,
    role,
    showActionBar = true,
    actionBarContent,
    showSearch = true,
    rightActions,
}: MobileDashboardLayoutProps) {
    const showChrome = useShouldShowBottomChrome();
    const setKeyboardVisible = useNavigationStore((s) => s.setKeyboardVisible);

    // Detect keyboard visibility
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            const viewportHeight = window.visualViewport?.height || window.innerHeight;
            const windowHeight = window.innerHeight;
            const heightDiff = windowHeight - viewportHeight;
            setKeyboardVisible(heightDiff > 100);
        };

        window.visualViewport?.addEventListener('resize', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.visualViewport?.removeEventListener('resize', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, [setKeyboardVisible]);

    // Get tabs based on role
    const tabs = role === "consumer"
        ? CONSUMER_TABS
        : role === "creator"
            ? CREATOR_TABS
            : ADMIN_TABS;

    return (
        <NavigationModeProvider mode="root">
            <div style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100dvh",
                background: "var(--bg, #0a0a0b)",
                position: "relative",
            }}>
                {/* Background glow */}
                <div style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "70vw",
                    height: "50vh",
                    background: role === "consumer"
                        ? "radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent)"
                        : role === "creator"
                            ? "radial-gradient(circle at top right, rgba(16, 185, 129, 0.15), transparent)"
                            : "radial-gradient(circle at top right, rgba(239, 68, 68, 0.15), transparent)",
                    filter: "blur(80px)",
                    pointerEvents: "none",
                    zIndex: 0,
                }} />

                {/* Top App Bar */}
                <TopAppBar
                    title={title}
                    showSearch={showSearch}
                    rightActions={rightActions}
                />

                {/* Content */}
                <main style={{
                    flex: 1,
                    padding: "16px",
                    paddingBottom: showChrome
                        ? (showActionBar ? "calc(140px + env(safe-area-inset-bottom))" : "calc(80px + env(safe-area-inset-bottom))")
                        : "16px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    WebkitOverflowScrolling: "touch",
                    position: "relative",
                    zIndex: 1,
                }}>
                    {children}
                </main>

                {/* Action Bar - hidden when keyboard is visible */}
                {showChrome && showActionBar && actionBarContent && (
                    <ActionBar glow hideOnKeyboard>
                        {actionBarContent}
                    </ActionBar>
                )}

                {/* Bottom Tab Bar - hidden when keyboard is visible */}
                {showChrome && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={springPresets.snappy}
                    >
                        <MobileTabBar tabs={tabs} />
                    </motion.div>
                )}

                {/* Hamburger Drawer (lazy-mounted overlay) */}
                <HamburgerDrawer role={role} />
            </div>
        </NavigationModeProvider>
    );
}
