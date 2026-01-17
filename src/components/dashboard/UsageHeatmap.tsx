"use client";

import React from "react";
import Tooltip from "../ui/Tooltip";

export default function UsageHeatmap() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const weeks = Array.from({ length: 12 });

    return (
        <div className="glass" style={{ padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.5rem" }}>Usage Intensity</h3>
            <div style={{ display: "flex", gap: "4px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginRight: "8px" }}>
                    {days.map(day => <span key={day} style={{ fontSize: "0.6rem", height: "12px", color: "rgba(255,255,255,0.2)" }}>{day}</span>)}
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                    {weeks.map((_, wi) => (
                        <div key={wi} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {days.map((_, di) => {
                                const intensity = Math.random();
                                const color = intensity > 0.8 ? "var(--accent)" : intensity > 0.5 ? "rgba(var(--accent-rgb), 0.6)" : intensity > 0.2 ? "rgba(var(--accent-rgb), 0.3)" : "rgba(255,255,255,0.03)";
                                return (
                                    <Tooltip key={di} content={`${Math.floor(intensity * 50)} tasks on this day`}>
                                        <div style={{ width: "12px", height: "12px", borderRadius: "2px", background: color, transition: "transform 0.2s" }} />
                                    </Tooltip>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.2)" }}>Less</span>
                <div style={{ display: "flex", gap: "2px" }}>
                    {[0.03, 0.3, 0.6, 1].map((o, i) => (
                        <div key={i} style={{ width: "8px", height: "8px", borderRadius: "1px", background: i === 0 ? "rgba(255,255,255,0.05)" : `rgba(var(--accent-rgb), ${o})` }} />
                    ))}
                </div>
                <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.2)" }}>More</span>
            </div>
        </div>
    );
}
