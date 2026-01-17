"use client";

import React from "react";

export default function Calendar({ selectedDate = new Date() }: { selectedDate?: Date }) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentMonth = selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    return (
        <div className="glass" style={{ padding: "1.5rem", borderRadius: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 800 }}>{currentMonth}</h4>
                <div style={{ display: "flex", gap: "10px" }}>
                    <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>←</button>
                    <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>→</button>
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "10px", textAlign: "center" }}>
                {days.map(d => <span key={d} style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", fontWeight: 800 }}>{d}</span>)}
                {Array.from({ length: 31 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            height: "36px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            background: (i + 1 === selectedDate.getDate()) ? "var(--accent)" : "transparent",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => i + 1 !== selectedDate.getDate() && (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                        onMouseLeave={(e) => i + 1 !== selectedDate.getDate() && (e.currentTarget.style.background = "transparent")}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}
