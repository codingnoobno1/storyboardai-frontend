"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { Pressable } from "../actions/Pressable";

interface EmptyStateProps {
    /** Emoji or icon */
    icon?: React.ReactNode;
    /** Main title */
    title: string;
    /** Description text */
    description: string;
    /** Primary action button text */
    actionLabel?: string;
    /** Primary action handler */
    onAction?: () => void;
    /** Secondary action text */
    secondaryLabel?: string;
    /** Secondary action handler */
    onSecondaryAction?: () => void;
    /** Compact mode for inline use */
    compact?: boolean;
}

/**
 * Empty state component for lists/sections with no content.
 * Shows illustration, explanation, and CTA.
 * 
 * Used for:
 * - No projects yet
 * - No videos
 * - No search results
 */
export function EmptyState({
    icon,
    title,
    description,
    actionLabel,
    onAction,
    secondaryLabel,
    onSecondaryAction,
    compact = false,
}: EmptyStateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: compact ? "24px 16px" : "48px 24px",
                minHeight: compact ? "auto" : "300px",
            }}
        >
            {/* Icon/Illustration */}
            {icon && (
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    style={{
                        fontSize: compact ? "2.5rem" : "4rem",
                        marginBottom: compact ? 12 : 20,
                        opacity: 0.9,
                    }}
                >
                    {icon}
                </motion.div>
            )}

            {/* Title */}
            <h3 style={{
                fontSize: compact ? "1rem" : "1.25rem",
                fontWeight: 600,
                margin: 0,
                marginBottom: 8,
                color: "rgba(255, 255, 255, 0.9)",
            }}>
                {title}
            </h3>

            {/* Description */}
            <p style={{
                fontSize: compact ? "0.85rem" : "0.95rem",
                color: "rgba(255, 255, 255, 0.5)",
                margin: 0,
                marginBottom: 20,
                maxWidth: 280,
                lineHeight: 1.5,
            }}>
                {description}
            </p>

            {/* Actions */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "center",
            }}>
                {actionLabel && onAction && (
                    <Pressable onPress={onAction}>
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "12px 24px",
                                background: "var(--accent, #6366f1)",
                                border: "none",
                                borderRadius: 12,
                                color: "white",
                                fontSize: "0.9rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                minHeight: 48, // ≥44px tap target
                            }}
                        >
                            <Plus size={18} />
                            {actionLabel}
                        </button>
                    </Pressable>
                )}

                {secondaryLabel && onSecondaryAction && (
                    <Pressable onPress={onSecondaryAction}>
                        <span style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            color: "var(--accent, #6366f1)",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            cursor: "pointer",
                        }}>
                            {secondaryLabel}
                            <ArrowRight size={14} />
                        </span>
                    </Pressable>
                )}
            </div>
        </motion.div>
    );
}
