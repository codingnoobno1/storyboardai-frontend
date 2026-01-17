"use client";

import React from "react";
import { Server, Activity, ShieldCheck, Cpu } from "lucide-react";
import Card from "../ui/Card";

export default function PlatformHealthGrid() {
    const REGIONS = [
        { name: "US-East (N. Virginia)", status: "Operational", load: "12%", latency: "2ms" },
        { name: "EU-West (Ireland)", status: "Operational", load: "45%", latency: "14ms" },
        { name: "AP-South (Mumbai)", status: "High Load", load: "92%", latency: "42ms" },
        { name: "Global Edge", status: "Operational", load: "8%", latency: "1ms" },
    ];

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {REGIONS.map((r) => (
                <Card key={r.name} padding="1.2rem">
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                        <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", fontWeight: 800 }}>{r.name}</span>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: r.status === "Operational" ? "#10B981" : "#F59E0B" }} />
                    </div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1rem" }}>{r.status}</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem" }}>
                            <span style={{ color: "rgba(255,255,255,0.4)" }}>Cluster Load</span>
                            <span style={{ fontWeight: 700 }}>{r.load}</span>
                        </div>
                        <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px" }}>
                            <div style={{ width: r.load, height: "100%", background: "var(--accent)" }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginTop: "4px" }}>
                            <span style={{ color: "rgba(255,255,255,0.4)" }}>E2E Latency</span>
                            <span style={{ fontWeight: 700 }}>{r.latency}</span>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
