"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ActivityChart() {
    const data = [30, 45, 35, 60, 50, 80, 70, 90, 85, 100, 95, 110];
    const max = Math.max(...data);
    const width = 800;
    const height = 200;

    const points = data.map((val, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - (val / max) * height;
        return `${x},${y}`;
    }).join(" ");

    return (
        <div className="glass" style={{ padding: "2rem", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Orchestration Activity</h3>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Agent ADK task frequency over the last 12 hours.</p>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "var(--accent)" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }} />
                        Active Tasks
                    </div>
                </div>
            </div>

            <div style={{ position: "relative", height: `${height}px`, width: "100%" }}>
                <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "100%", overflow: "visible" }}>
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    {[0, 0.25, 0.5, 0.75, 1].map((p) => (
                        <line
                            key={p}
                            x1="0"
                            y1={height * p}
                            x2={width}
                            y2={height * p}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                    ))}

                    {/* Area */}
                    <motion.path
                        initial={{ d: `M 0,${height} ${points.split(" ").map(p => `L ${p}`).join(" ")} L ${width},${height} Z`, opacity: 0 }}
                        animate={{ opacity: 1 }}
                        fill="url(#chartGradient)"
                        d={`M 0,${height} ${points.split(" ").map(p => `L ${p}`).join(" ")} L ${width},${height} Z`}
                    />

                    {/* Line */}
                    <motion.polyline
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        points={points}
                    />

                    {/* Points */}
                    {data.map((val, i) => {
                        const x = (i / (data.length - 1)) * width;
                        const y = height - (val / max) * height;
                        return (
                            <motion.circle
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.1 * i }}
                                cx={x}
                                cy={y}
                                r="4"
                                fill="var(--accent)"
                                stroke="#050505"
                                strokeWidth="2"
                            />
                        );
                    })}
                </svg>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", fontWeight: 600 }}>
                <span>12H AGO</span>
                <span>9H AGO</span>
                <span>6H AGO</span>
                <span>3H AGO</span>
                <span>NOW</span>
            </div>
        </div>
    );
}
