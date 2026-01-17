"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkeletonStackProps {
    /** Number of skeleton items */
    count?: number;
    /** Height of each skeleton item */
    height?: number;
    /** Visual variant */
    variant?: "card" | "list" | "compact";
    /** Show shimmer animation */
    animated?: boolean;
    /** Gap between items */
    gap?: "sm" | "md" | "lg";
}

const gapSizes = {
    sm: 8,
    md: 16,
    lg: 24
};

export function SkeletonStack({
    count = 3,
    height,
    variant = "card",
    animated = true,
    gap = "md"
}: SkeletonStackProps) {
    // Determine height based on variant
    const itemHeight = height || (variant === "card" ? 160 : variant === "list" ? 72 : 48);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: gapSizes[gap],
            width: "100%"
        }}>
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonItem
                    key={i}
                    height={itemHeight}
                    variant={variant}
                    animated={animated}
                    delay={i * 0.1}
                />
            ))}
        </div>
    );
}

interface SkeletonItemProps {
    height: number;
    variant: "card" | "list" | "compact";
    animated: boolean;
    delay: number;
}

function SkeletonItem({ height, variant, animated, delay }: SkeletonItemProps) {
    const shimmerGradient = `linear-gradient(
        90deg,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0.05) 50%,
        rgba(255,255,255,0) 100%
    )`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.3 }}
            className="glass"
            style={{
                padding: variant === "compact" ? "0.8rem" : "1.2rem",
                height: `${height}px`,
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Shimmer overlay */}
            {animated && (
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: shimmerGradient,
                        zIndex: 1,
                    }}
                    animate={{
                        x: ["-100%", "100%"]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                        delay: delay
                    }}
                />
            )}

            {/* Skeleton content based on variant */}
            {variant === "card" && (
                <>
                    <div style={{
                        width: "60%",
                        height: 16,
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: 4,
                        marginBottom: 12
                    }} />
                    <div style={{
                        width: "100%",
                        height: 10,
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 4,
                        marginBottom: 8
                    }} />
                    <div style={{
                        width: "80%",
                        height: 10,
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 4
                    }} />
                </>
            )}

            {variant === "list" && (
                <div style={{ display: "flex", alignItems: "center", gap: 12, height: "100%" }}>
                    <div style={{
                        width: 48,
                        height: 48,
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: 8,
                        flexShrink: 0
                    }} />
                    <div style={{ flex: 1 }}>
                        <div style={{
                            width: "70%",
                            height: 14,
                            background: "rgba(255,255,255,0.08)",
                            borderRadius: 4,
                            marginBottom: 8
                        }} />
                        <div style={{
                            width: "50%",
                            height: 10,
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: 4
                        }} />
                    </div>
                </div>
            )}

            {variant === "compact" && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, height: "100%" }}>
                    <div style={{
                        width: 32,
                        height: 32,
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: 6,
                        flexShrink: 0
                    }} />
                    <div style={{
                        width: "60%",
                        height: 12,
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: 4
                    }} />
                </div>
            )}
        </motion.div>
    );
}

// Single skeleton block for custom layouts
export function Skeleton({
    width = "100%",
    height = 16,
    borderRadius = 4,
    animated = true
}: {
    width?: string | number;
    height?: number;
    borderRadius?: number;
    animated?: boolean;
}) {
    return (
        <motion.div
            style={{
                width,
                height,
                background: "rgba(255,255,255,0.08)",
                borderRadius,
                overflow: "hidden",
                position: "relative"
            }}
            animate={animated ? {
                opacity: [0.5, 1, 0.5]
            } : undefined}
            transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
            }}
        />
    );
}

