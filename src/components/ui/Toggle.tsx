"use client";

import { motion } from "framer-motion";
import React from "react";

interface ToggleProps {
    pressed: boolean;
    onPressedChange: (pressed: boolean) => void;
    children: React.ReactNode;
}

export default function Toggle({ pressed, onPressedChange, children }: ToggleProps) {
    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onPressedChange(!pressed)}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 12px",
                borderRadius: "8px",
                background: pressed ? "rgba(var(--accent-rgb), 0.15)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${pressed ? "var(--accent)" : "rgba(255,255,255,0.1)"}`,
                color: pressed ? "var(--accent)" : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 600,
                transition: "all 0.2s"
            }}
        >
            {children}
        </motion.button>
    );
}
