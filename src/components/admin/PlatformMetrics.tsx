"use client";

import React from "react";
import { Server, Activity, Database, Cpu, Globe } from "lucide-react";
import Card from "../ui/Card";
import Progress from "../ui/Progress";

export default function PlatformMetrics() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <Card title="System Performance" subtitle="Real-time Agent ADK health metrics.">
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <MetricRow icon={Cpu} label="Thinker Node Load" value={34} status="Healthy" />
                    <MetricRow icon={Activity} label="Planner Service Latency" value={120} max={500} unit="ms" />
                    <MetricRow icon={Database} label="Token Cache Utility" value={82} status="High" />
                    <MetricRow icon={Server} label="Microservice Uptime" value={99.9} unit="%" />
                </div>
            </Card>

            <Card title="Global Reach" subtitle="Daily traffic distribution.">
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <Globe size={24} color="var(--accent)" />
                            <span style={{ fontWeight: 700 }}>Total Active Countries</span>
                        </div>
                        <span style={{ fontSize: "1.5rem", fontWeight: 800 }}>42</span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>TOP REGIONS</div>
                        <RegionRow label="United States" value={45} />
                        <RegionRow label="India" value={28} />
                        <RegionRow label="European Union" value={15} />
                    </div>
                </div>
            </Card>
        </div>
    );
}

function MetricRow({ icon: Icon, label, value, max = 100, status, unit }: any) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.6)" }}>
                    <Icon size={16} />
                    {label}
                </div>
                <span style={{ fontWeight: 700 }}>{value}{unit} {status && <span style={{ fontSize: "0.7rem", color: "#10B981" }}>({status})</span>}</span>
            </div>
            <Progress value={value} max={max} color={value > 90 ? "#ef4444" : "var(--accent)"} />
        </div>
    );
}

function RegionRow({ label, value }: { label: string, value: number }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
            <span>{label}</span>
            <span style={{ fontWeight: 700 }}>{value}%</span>
        </div>
    );
}
