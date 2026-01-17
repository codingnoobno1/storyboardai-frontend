"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MoreVertical, Clock, CheckCircle, Loader } from "lucide-react";
import { Pressable } from "../actions/Pressable";
import { haptic } from "../feedback/Haptic";

interface MobileProjectRowProps {
    id: string;
    title: string;
    status: "Draft" | "Processing" | "Completed";
    date: string;
    thumbnail?: string;
    /** Called when row is tapped */
    onPress?: () => void;
    /** Called when long-pressed (opens context menu) */
    onLongPress?: () => void;
    /** Called when menu icon tapped */
    onMenuPress?: () => void;
}

const statusConfig = {
    Draft: { icon: Clock, color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" },
    Processing: { icon: Loader, color: "#6366f1", bg: "rgba(99, 102, 241, 0.15)" },
    Completed: { icon: CheckCircle, color: "#10b981", bg: "rgba(16, 185, 129, 0.15)" },
};

/**
 * Compact horizontal project card for mobile lists.
 * 
 * Design principles:
 * - Entire row is tap target (≥56px height)
 * - Long-press opens context menu
 * - Menu icon at bottom-right (thumb zone)
 * - Minimal but informative
 */
export function MobileProjectRow({
    id,
    title,
    status,
    date,
    thumbnail,
    onPress,
    onLongPress,
    onMenuPress,
}: MobileProjectRowProps) {
    const [isPressed, setIsPressed] = useState(false);
    const StatusIcon = statusConfig[status].icon;

    const handleMenuPress = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        haptic.medium();
        onMenuPress?.();
    };

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            pressScale={0.98}
            style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px",
                background: isPressed ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.04)",
                minHeight: 72, // Ensures ≥44px tap target
                transition: "background 0.15s ease",
            }}
        >
            {/* Thumbnail */}
            <div style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                background: thumbnail
                    ? `url(${thumbnail}) center/cover`
                    : "linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.2))",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                {!thumbnail && (
                    <span style={{ fontSize: "1.2rem" }}>🎬</span>
                )}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    margin: 0,
                    color: "white",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                }}>
                    {title}
                </h4>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 4,
                }}>
                    {/* Status badge */}
                    <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "2px 8px",
                        borderRadius: 6,
                        background: statusConfig[status].bg,
                        color: statusConfig[status].color,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                    }}>
                        <StatusIcon size={10} />
                        {status}
                    </span>
                    {/* Date */}
                    <span style={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.4)",
                    }}>
                        {date}
                    </span>
                </div>
            </div>

            {/* Menu button - bottom-right for thumb zone */}
            <div
                onClick={handleMenuPress}
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    alignSelf: "flex-end", // Positions in thumb zone
                }}
            >
                <MoreVertical size={18} color="rgba(255,255,255,0.5)" />
            </div>
        </Pressable>
    );
}
