"use client";

import { motion } from "framer-motion";
import React from "react";

interface SwitchProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    label?: string;
}

export default function Switch({ checked, onCheckedChange, label }: SwitchProps) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }} onClick={() => onCheckedChange(!checked)}>
            <div
                style={{
                    width: "44px",
                    height: "24px",
                    background: checked ? "var(--accent)" : "rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    padding: "2px",
                    display: "flex",
                    transition: "background 0.2s"
                }}
            >
                <motion.div
                    animate={{ x: checked ? 20 : 0 }}
                    style={{ width: "20px", height: "20px", background: "white", borderRadius: "50%", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                />
            </div>
            {label && <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>{label}</span>}
        </div>
    );
}
