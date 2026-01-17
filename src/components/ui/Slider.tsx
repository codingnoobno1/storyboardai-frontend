"use client";

import React from "react";

interface SliderProps {
    label?: string;
    min?: number;
    max?: number;
    value: number;
    onChange: (val: number) => void;
    step?: number;
}

export default function Slider({ label, min = 0, max = 100, value, onChange, step = 1 }: SliderProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
            {label && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <label style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>{label}</label>
                    <span style={{ fontSize: "0.85rem", fontWeight: 800 }}>{value}</span>
                </div>
            )}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    background: "rgba(255,255,255,0.05)",
                    outline: "none",
                    appearance: "none",
                    cursor: "pointer",
                    accentColor: "var(--accent)"
                }}
            />
        </div>
    );
}
