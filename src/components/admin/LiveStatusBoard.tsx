"use client";

import React from "react";
import { Activity, CheckCircle, AlertTriangle, XCircle, Server, Database, Zap } from "lucide-react";

interface SystemStatus {
    name: string;
    status: "operational" | "degraded" | "down";
    uptime: string;
    responseTime: string;
}

const SYSTEM_SERVICES: SystemStatus[] = [
    { name: "API Gateway", status: "operational", uptime: "99.9%", responseTime: "45ms" },
    { name: "Database Cluster", status: "operational", uptime: "100%", responseTime: "12ms" },
    { name: "AI Generation Nodes", status: "degraded", uptime: "98.2%", responseTime: "320ms" },
    { name: "Storage Service", status: "operational", uptime: "99.8%", responseTime: "28ms" },
    { name: "Authentication", status: "operational", uptime: "100%", responseTime: "18ms" },
];

export default function LiveStatusBoard() {
    const operationalCount = SYSTEM_SERVICES.filter(s => s.status === "operational").length;
    const degradedCount = SYSTEM_SERVICES.filter(s => s.status === "degraded").length;
    const downCount = SYSTEM_SERVICES.filter(s => s.status === "down").length;

    return (
        <div className="glass" style={{ padding: "2rem", borderRadius: "16px", marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>System Status</h3>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>Real-time platform health monitoring</p>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <StatusPill label="Operational" count={operationalCount} color="#10B981" />
                    <StatusPill label="Degraded" count={degradedCount} color="#f59e0b" />
                    <StatusPill label="Down" count={downCount} color="#ef4444" />
                </div>
            </div>

            {/* Services Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                {SYSTEM_SERVICES.map((service) => (
                    <ServiceCard key={service.name} service={service} />
                ))}
            </div>

            {/* Overall Health Indicator */}
            <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(16, 185, 129, 0.05)", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <CheckCircle size={24} color="#10B981" />
                    </div>
                    <div>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#10B981" }}>All Systems Operational</h4>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Platform running smoothly • Last incident: 3 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatusPill({ label, count, color }: { label: string; count: number; color: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: `${color}15`, borderRadius: "20px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} />
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color }}>{count} {label}</span>
        </div>
    );
}

function ServiceCard({ service }: { service: SystemStatus }) {
    const getStatusColor = () => {
        switch (service.status) {
            case "operational": return "#10B981";
            case "degraded": return "#f59e0b";
            case "down": return "#ef4444";
        }
    };

    const getStatusIcon = () => {
        switch (service.status) {
            case "operational": return <CheckCircle size={18} />;
            case "degraded": return <AlertTriangle size={18} />;
            case "down": return <XCircle size={18} />;
        }
    };

    const statusColor = getStatusColor();

    return (
        <div style={{ padding: "1.25rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: `1px solid ${statusColor}30` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <h5 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{service.name}</h5>
                <div style={{ color: statusColor }}>
                    {getStatusIcon()}
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", fontSize: "0.8rem" }}>
                <div>
                    <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "0.25rem" }}>Uptime</p>
                    <p style={{ fontWeight: 700 }}>{service.uptime}</p>
                </div>
                <div>
                    <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "0.25rem" }}>Response</p>
                    <p style={{ fontWeight: 700 }}>{service.responseTime}</p>
                </div>
            </div>
        </div>
    );
}
