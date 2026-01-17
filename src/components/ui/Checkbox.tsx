"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface CheckboxProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    label?: string;
}

export default function Checkbox({ checked, onCheckedChange, label }: CheckboxProps) {
    return (
        <div
            style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
            onClick={() => onCheckedChange(!checked)}
        >
            <div
                style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "6px",
                    border: `2px solid ${checked ? "var(--accent)" : "rgba(255,255,255,0.2)"}`,
                    background: checked ? "var(--accent)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s"
                }}
            >
                {checked && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Check size={14} color="white" strokeWidth={3} />
                    </motion.div>
                )}
            </div>
            {label && <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>{label}</span>}
        </div>
    );
}
