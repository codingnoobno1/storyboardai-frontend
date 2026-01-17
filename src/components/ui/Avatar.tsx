"use client";

import React from "react";

interface AvatarProps {
    src?: string;
    name?: string;
    initials?: string;
    size?: "sm" | "md" | "lg";
    style?: React.CSSProperties;
}

export default function Avatar({ src, name = "", initials: manualInitials, size = "md", style }: AvatarProps) {
    const sizes = {
        sm: { width: "32px", height: "32px", fontSize: "0.8rem" },
        md: { width: "44px", height: "44px", fontSize: "1rem" },
        lg: { width: "64px", height: "64px", fontSize: "1.4rem" },
    };

    const calculatedInitials = manualInitials || name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <div
            style={{
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: src ? "transparent" : "linear-gradient(135deg, var(--accent), var(--cyan))",
                color: "white",
                fontWeight: 700,
                border: "2px solid rgba(255,255,255,0.1)",
                flexShrink: 0,
                ...sizes[size],
                ...style
            }}
        >
            {src ? (
                <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
                calculatedInitials
            )}
        </div>
    );
}
