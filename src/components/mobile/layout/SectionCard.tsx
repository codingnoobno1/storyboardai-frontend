"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionCardProps {
    /** Section title */
    title: string;
    /** Optional action (See All, etc) */
    action?: React.ReactNode;
    /** Content */
    children: React.ReactNode;
    /** Remove padding from content area */
    noPadding?: boolean;
}

/**
 * Grouped content block for mobile dashboards.
 * Used for Stats, Recent Projects, etc.
 */
export function SectionCard({
    title,
    action,
    children,
    noPadding = false,
}: SectionCardProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: 16,
                border: "1px solid rgba(255, 255, 255, 0.06)",
                overflow: "hidden",
            }}
        >
            {/* Header */}
            <div style={{
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
            }}>
                <h3 style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    margin: 0,
                    color: "rgba(255, 255, 255, 0.9)",
                }}>
                    {title}
                </h3>
                {action && (
                    <div style={{ color: "var(--accent, #6366f1)", fontSize: "0.85rem" }}>
                        {action}
                    </div>
                )}
            </div>

            {/* Content */}
            <div style={{ padding: noPadding ? 0 : "12px 16px" }}>
                {children}
            </div>
        </motion.section>
    );
}
