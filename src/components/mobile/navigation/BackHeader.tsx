"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Pressable } from "../actions/Pressable";
import { springPresets } from "../motion/transitions";

interface BackHeaderProps {
    /** Page title */
    title: string;
    /** Custom back handler (defaults to router.back) */
    onBack?: () => void;
    /** Right side actions */
    rightActions?: React.ReactNode;
    /** Use X instead of arrow (for modals/overlays) */
    closeButton?: boolean;
    /** Make background transparent */
    transparent?: boolean;
}

/**
 * Back navigation header for focused screens.
 * Used when navigating deeper than root level.
 * 
 * Auto-hides BottomNav when this is visible.
 */
export function BackHeader({
    title,
    onBack,
    rightActions,
    closeButton = false,
    transparent = false,
}: BackHeaderProps) {
    const router = useRouter();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            router.back();
        }
    };

    const Icon = closeButton ? X : ArrowLeft;

    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.snappy}
            style={{
                position: "sticky",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: "12px 16px",
                paddingTop: "calc(12px + env(safe-area-inset-top))",
                background: transparent
                    ? "transparent"
                    : "rgba(10, 10, 12, 0.9)",
                backdropFilter: transparent ? "none" : "blur(20px)",
                WebkitBackdropFilter: transparent ? "none" : "blur(20px)",
                borderBottom: transparent
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
            }}
        >
            {/* Left: Back button + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                <Pressable
                    onPress={handleBack}
                    ariaLabel={closeButton ? "Close" : "Go back"}
                    style={{
                        width: 44,
                        height: 44,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.05)",
                        flexShrink: 0,
                    }}
                >
                    <Icon size={22} color="rgba(255,255,255,0.8)" />
                </Pressable>

                <h1 style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    margin: 0,
                    color: "white",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    flex: 1,
                }}>
                    {title}
                </h1>
            </div>

            {/* Right actions */}
            {rightActions && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {rightActions}
                </div>
            )}
        </motion.header>
    );
}
