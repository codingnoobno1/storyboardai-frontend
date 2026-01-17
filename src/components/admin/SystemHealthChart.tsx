"use client";

import React from "react";
import { Activity, Zap, Cpu, MemoryStick as Memory, Globe, Server } from "lucide-react";
import Card from "../ui/Card";

export default function SystemHealthChart() {
    return (
        <Card title="Agent Node Health" subtitle="Real-time telemetry across orchestration clusters">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                    <HealthMetric label="THINKER_01" value="Normal" status="success" load="12%" />
                    <HealthMetric label="PLANNER_PRO" value="Under Load" status="warning" load="84%" />
                    <HealthMetric label="VID_X_NODE" value="Normal" status="success" load="45%" />
                </div>

                <div style={{ height: "150px", display: "flex", alignItems: "flex-end", gap: "4px", padding: "10px", background: "rgba(0,0,0,0.3)", borderRadius: "12px", position: "relative" }}>
                    {/* Simple Sparkline Mock */}
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i} style={{ flex: 1, background: "var(--accent)", height: `${20 + Math.random() * 80}%`, opacity: 0.3 + (i / 100), borderRadius: "2px" }} />
                    ))}
                    <div style={{ position: "absolute", top: "10px", right: "100px", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }} /> GLOBAL_TRAFFIC_PRESSURE
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", borderRadius: "12px", background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.1)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Server size={18} color="#10B981" />
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#10B981" }}>ALL SYSTEMS OPERATIONAL</span>
                    </div>
                    <span style={{ fontSize: "0.75rem", opacity: 0.5 }}>Uptime: 99.98% (30d)</span>
                </div>
            </div>
        </Card>
    );
}

function HealthMetric({ label, value, status, load }: any) {
    return (
        <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", fontWeight: 800 }}>{label}</span>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: status === "success" ? "#10B981" : "#F59E0B" }} />
            </div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700 }}>{value}</h4>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>
                <span>L: {load}</span>
                <span>2ms</span>
            </div>
        </div>
    );
}
