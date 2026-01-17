"use client";

import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success" | "warning" | "error" | "outline";
    size?: "sm" | "md" | "lg";
    style?: React.CSSProperties;
}

export default function Badge({ children, variant = "primary", size = "md", style }: BadgeProps) {
    const variants = {
        primary: { background: "rgba(var(--accent-rgb), 0.1)", color: "var(--accent)", border: "1px solid rgba(var(--accent-rgb), 0.2)" },
        secondary: { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" },
        success: { background: "rgba(16, 185, 129, 0.1)", color: "#10B981", border: "1px solid rgba(16, 185, 129, 0.2)" },
        warning: { background: "rgba(245, 158, 11, 0.1)", color: "#F59E0B", border: "1px solid rgba(245, 158, 11, 0.2)" },
        error: { background: "rgba(239, 68, 68, 0.1)", color: "#ef4444", border: "1px solid rgba(239, 68, 68, 0.2)" },
        outline: { background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.2)" },
    };

    const sizes = {
        sm: { padding: "1px 6px", fontSize: "0.6rem", height: "20px" },
        md: { padding: "2px 10px", fontSize: "0.7rem", height: "24px" },
        lg: { padding: "4px 12px", fontSize: "0.8rem", height: "28px" },
    };

    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "20px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                ...variants[variant],
                ...sizes[size],
                ...style
            }}
        >
            {children}
        </span>
    );
}
