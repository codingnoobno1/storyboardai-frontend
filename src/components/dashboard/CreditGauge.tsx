"use client";

import { motion } from "framer-motion";
import React from "react";

interface CreditGaugeProps {
    label: string;
    value: number;
    max: number;
    color?: string;
}

export default function CreditGauge({ label, value, max, color = "var(--accent)" }: CreditGaugeProps) {
    const percentage = (value / max) * 100;
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="glass" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ position: "relative", width: "100px", height: "100px", marginBottom: "1rem" }}>
                <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="8"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <span style={{ fontSize: "1.2rem", fontWeight: 800 }}>{value}</span>
                    <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>/ {max}</span>
                </div>
            </div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.2rem" }}>{label}</h4>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>Credits Available</p>
        </div>
    );
}
