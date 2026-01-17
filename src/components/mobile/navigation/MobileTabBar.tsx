"use client";

import React from "react";
import { TabBar } from "antd-mobile";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { haptic } from "../feedback/Haptic";
import { tabIconVariants, springPresets } from "../motion/transitions";

interface TabItem {
    key: string;
    title: string;
    icon: React.ReactNode;
}

interface MobileTabBarProps {
    tabs: TabItem[];
    /** Hide labels, show icons only */
    iconOnly?: boolean;
    /** Show active indicator dot */
    showIndicator?: boolean;
}

export function MobileTabBar({
    tabs,
    iconOnly = false,
    showIndicator = true
}: MobileTabBarProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (key: string) => {
        haptic.medium();
        router.push(key);
    };

    // Check if tab is active (handle nested routes)
    const isActive = (key: string) => {
        if (key === "/") return pathname === "/";
        return pathname.startsWith(key);
    };

    return (
        <div style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(5, 5, 7, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingBottom: "env(safe-area-inset-bottom)",
            zIndex: 1000,
        }}>
            <TabBar
                activeKey={pathname}
                onChange={handleChange}
                style={{
                    "--adm-color-primary": "var(--accent, #6366f1)",
                } as React.CSSProperties}
            >
                {tabs.map(item => {
                    const active = isActive(item.key);
                    return (
                        <TabBar.Item
                            key={item.key}
                            icon={() => (
                                <div style={{ position: "relative" }}>
                                    <motion.div
                                        initial={false}
                                        animate={active ? "active" : "inactive"}
                                        variants={tabIconVariants}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {item.icon}
                                    </motion.div>

                                    {/* Active indicator dot */}
                                    <AnimatePresence>
                                        {showIndicator && active && (
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                transition={springPresets.bouncy}
                                                style={{
                                                    position: "absolute",
                                                    bottom: -8,
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                    width: 4,
                                                    height: 4,
                                                    borderRadius: "50%",
                                                    background: "var(--accent, #6366f1)",
                                                }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                            title={iconOnly ? undefined : (
                                <motion.span
                                    initial={false}
                                    animate={{
                                        opacity: active ? 1 : 0.5,
                                        fontWeight: active ? 600 : 400
                                    }}
                                    style={{ fontSize: "0.7rem" }}
                                >
                                    {item.title}
                                </motion.span>
                            )}
                        />
                    );
                })}
            </TabBar>
        </div>
    );
}

