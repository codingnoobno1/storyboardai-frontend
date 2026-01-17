"use client";

import { motion } from "framer-motion";
import React from "react";

interface ProgressProps {
    value: number;
    max?: number;
    color?: string;
}

export default function Progress({ value, max = 100, color = "var(--accent)" }: ProgressProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "4px", overflow: "hidden" }}>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ height: "100%", background: color, borderRadius: "4px" }}
            />
        </div>
    );
}
