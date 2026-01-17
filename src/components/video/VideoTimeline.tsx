"use client";

import React from "react";
import { Clock, Scissors, Music, Layers, Volume2 } from "lucide-react";
import Card from "../ui/Card";

export default function VideoTimeline({ duration = 45 }: { duration?: number }) {
    const waveformHeights = React.useMemo(() => {
        return Array.from({ length: 40 }).map(() => 20 + Math.random() * 60);
    }, []);

    return (
        <Card padding="1rem">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, display: "flex", alignItems: "center", gap: "8px" }}>
                    <Clock size={18} color="var(--accent)" /> Production Timeline
                </h4>
                <div style={{ display: "flex", gap: "10px" }}>
                    <button style={{ padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", fontSize: "0.75rem", cursor: "pointer" }}> <Scissors size={14} /> Trim </button>
                    <button style={{ padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", fontSize: "0.75rem", cursor: "pointer" }}> <Volume2 size={14} /> Mix </button>
                </div>
            </div>

            <div style={{ position: "relative", height: "120px", background: "rgba(0,0,0,0.3)", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                {/* Visual Track */}
                <div style={{ display: "flex", padding: "10px", gap: "4px", height: "60px" }}>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} style={{ flex: 1, background: "rgba(var(--accent-rgb), 0.2)", borderRadius: "4px", border: "1px solid rgba(var(--accent-rgb), 0.3)", position: "relative" }}>
                            <img src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=100&h=80&sig=${i}`} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }} alt="" />
                        </div>
                    ))}
                </div>

                {/* Audio Track */}
                <div style={{ position: "absolute", bottom: "10px", left: "10px", right: "10px", height: "30px", background: "rgba(16, 185, 129, 0.1)", borderRadius: "6px", border: "1px dashed rgba(16, 185, 129, 0.3)", display: "flex", alignItems: "center", padding: "0 10px" }}>
                    <Music size={12} color="#10B981" />
                    <div style={{ flex: 1, height: "100%", display: "flex", alignItems: "center", gap: "2px", marginLeft: "10px" }}>
                        {waveformHeights.map((height, i) => (
                            <div key={i} style={{ width: "2px", height: `${height}%`, background: "#10B981", opacity: 0.6 }} />
                        ))}
                    </div>
                </div>

                {/* Playhead */}
                <div style={{ position: "absolute", top: 0, left: "30%", width: "2px", height: "100%", background: "var(--accent)", zIndex: 10 }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent)", margin: "-6px 0 0 -5px", boxShadow: "0 0 10px var(--accent)" }} />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", fontWeight: 700 }}>
                <span>0:00</span>
                <span>0:15</span>
                <span>0:30</span>
                <span style={{ color: "var(--accent)" }}>0:45</span>
            </div>
        </Card>
    );
}
