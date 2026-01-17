"use client";

import React from "react";
import { Calculator, Zap, Archive, Info } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function CreditCalculator() {
    const [numScenes, setNumScenes] = React.useState(10);
    const [useHighRes, setUseHighRes] = React.useState(false);

    const cost = Math.floor(numScenes * (useHighRes ? 2.5 : 1.5));

    return (
        <Card title="Task Cost Calculator" subtitle="Estimate orchestration requirements">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <label style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>ESTIMATED SCENES</label>
                        <span style={{ fontSize: "0.85rem", fontWeight: 800 }}>{numScenes} Scenes</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="50"
                        value={numScenes}
                        onChange={(e) => setNumScenes(parseInt(e.target.value))}
                        style={{ accentColor: "var(--accent)", cursor: "pointer" }}
                    />
                </div>

                <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 800, display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
                        <Zap size={16} color="var(--accent)" /> Total Cost Estimation
                    </h4>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                            <span style={{ fontSize: "2.5rem", fontWeight: 900 }}>{cost}</span>
                            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Credits</span>
                        </div>
                        <p style={{ fontSize: "0.75rem", color: "#10B981", fontWeight: 700 }}>~₹{cost * 0.8}</p>
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.3)", fontSize: "0.7rem" }}>
                    <Info size={14} /> Final cost may vary based on agent thinking depth.
                </div>
            </div>
        </Card>
    );
}
