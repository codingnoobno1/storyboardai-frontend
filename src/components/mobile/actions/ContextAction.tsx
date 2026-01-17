"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contextActionVariants, springPresets } from "../motion/transitions";
import { haptic } from "../feedback/Haptic";

interface ContextActionProps {
    /** Controls visibility of the context action bar */
    visible: boolean;
    children: React.ReactNode;
    /** Callback when the action bar is closed */
    onClose?: () => void;
    /** Position from bottom (accounts for tab bar) */
    bottomOffset?: number;
}

/**
 * RN-style contextual action toolbar
 * Appears when items are selected or context requires actions
 * Slides in from bottom with spring animation
 */
export function ContextAction({
    visible,
    children,
    onClose,
    bottomOffset = 76 // Default accounts for tab bar + safe area
}: ContextActionProps) {
    const handleClose = () => {
        haptic.light();
        onClose?.();
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contextActionVariants}
                    style={{
                        position: "fixed",
                        bottom: `calc(${bottomOffset}px + env(safe-area-inset-bottom))`,
                        left: 16,
                        right: 16,
                        zIndex: 95,
                    }}
                >
                    {/* Glassmorphic container */}
                    <div style={{
                        background: "rgba(30, 30, 35, 0.95)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        borderRadius: 16,
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "12px 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        gap: 8,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    }}>
                        {/* Close button */}
                        {onClose && (
                            <button
                                onClick={handleClose}
                                style={{
                                    background: "rgba(255,255,255,0.1)",
                                    border: "none",
                                    borderRadius: 8,
                                    padding: "8px 12px",
                                    color: "rgba(255,255,255,0.6)",
                                    fontSize: "0.85rem",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 4,
                                }}
                            >
                                ✕
                            </button>
                        )}

                        {/* Action buttons container */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            flex: 1,
                            justifyContent: "flex-end",
                        }}>
                            {children}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Helper component for context action buttons
interface ContextActionButtonProps {
    icon: React.ReactNode;
    label?: string;
    onClick?: () => void;
    variant?: "default" | "primary" | "danger";
}

export function ContextActionButton({
    icon,
    label,
    onClick,
    variant = "default"
}: ContextActionButtonProps) {
    const handleClick = () => {
        haptic.medium();
        onClick?.();
    };

    const colors = {
        default: { bg: "rgba(255,255,255,0.1)", text: "#fff" },
        primary: { bg: "rgba(99, 102, 241, 0.3)", text: "#818cf8" },
        danger: { bg: "rgba(239, 68, 68, 0.3)", text: "#f87171" },
    };

    return (
        <motion.button
            onClick={handleClick}
            whileTap={{ scale: 0.95 }}
            style={{
                background: colors[variant].bg,
                border: "none",
                borderRadius: 8,
                padding: label ? "8px 16px" : "10px",
                color: colors[variant].text,
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
            }}
        >
            {icon}
            {label && <span>{label}</span>}
        </motion.button>
    );
}
