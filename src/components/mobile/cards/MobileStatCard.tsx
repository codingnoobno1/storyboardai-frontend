"use client";

import React from "react";
import { motion } from "framer-motion";

interface MobileStatCardProps {
    label: string;
    value: string;
    growth?: string;
    icon?: React.ReactNode;
}

/**
 * Compact stat card for mobile 2x2 grid.
 */
export function MobileStatCard({
    label,
    value,
    growth,
    icon,
}: MobileStatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: 12,
                padding: "14px",
                border: "1px solid rgba(255, 255, 255, 0.04)",
            }}
        >
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 8,
            }}>
                <span style={{
                    fontSize: "0.7rem",
                    color: "rgba(255, 255, 255, 0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                }}>
                    {label}
                </span>
                {icon && (
                    <div style={{ opacity: 0.5 }}>{icon}</div>
                )}
            </div>

            <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: 8,
            }}>
                <span style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "white",
                }}>
                    {value}
                </span>
                {growth && (
                    <span style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: growth.startsWith("+") || growth.includes("%") ? "#10b981" : "#ef4444",
                        background: growth.startsWith("+") || growth.includes("%")
                            ? "rgba(16, 185, 129, 0.15)"
                            : "rgba(239, 68, 68, 0.15)",
                        padding: "2px 6px",
                        borderRadius: 4,
                    }}>
                        {growth}
                    </span>
                )}
            </div>
        </motion.div>
    );
}
