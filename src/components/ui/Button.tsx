"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    isLoading,
    className,
    style,
    ...props
}: ButtonProps) {
    const baseStyles: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "none",
        gap: "8px",
        position: "relative",
        overflow: "hidden",
    };

    const variants = {
        primary: {
            background: "var(--accent)",
            color: "white",
            boxShadow: "0 4px 15px -4px var(--accent)",
        },
        secondary: {
            background: "rgba(255,255,255,0.05)",
            color: "white",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
        },
        outline: {
            background: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
        },
        ghost: {
            background: "transparent",
            color: "rgba(255,255,255,0.6)",
        },
        danger: {
            background: "#ef4444",
            color: "white",
            boxShadow: "0 4px 15px -4px #ef4444",
        },
    };

    const sizes = {
        sm: { padding: "8px 16px", fontSize: "0.85rem" },
        md: { padding: "12px 24px", fontSize: "0.95rem" },
        lg: { padding: "16px 32px", fontSize: "1.05rem" },
        icon: { padding: "10px", borderRadius: "10px" },
    };

    const currentVariant = variants[variant] || variants.primary;
    const currentSize = sizes[size] || sizes.md;

    const combinedStyle = {
        ...baseStyles,
        ...currentVariant,
        ...currentSize,
        ...(style as object)
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            style={combinedStyle}
            disabled={isLoading}
            {...props}
        >
            {isLoading && (
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%" }}
                />
            )}
            <span style={{ opacity: isLoading ? 0 : 1 }}>{children as React.ReactNode}</span>
        </motion.button>
    );
}
