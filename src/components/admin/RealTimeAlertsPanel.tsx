"use client";

import React, { useState } from "react";
import { AlertTriangle, CheckCircle, XCircle, Bell, Shield, Database, Zap } from "lucide-react";
import Button from "@/components/ui/Button";

interface Alert {
    id: string;
    type: "critical" | "warning" | "info";
    title: string;
    message: string;
    time: string;
    action?: string;
}

const MOCK_ALERTS: Alert[] = [
    { id: "1", type: "critical", title: "High Error Rate Detected", message: "API Gateway experiencing 5% error rate", time: "2 min ago", action: "Investigate" },
    { id: "2", type: "warning", title: "Storage Approaching Limit", message: "Database storage at 85% capacity", time: "15 min ago", action: "Expand" },
    { id: "3", type: "info", title: "Deployment Successful", message: "v2.4.1 deployed to production", time: "1 hour ago" },
];

export default function RealTimeAlertsPanel() {
    const [alerts, setAlerts] = useState(MOCK_ALERTS);
    const [filter, setFilter] = useState<"all" | "critical" | "warning" | "info">("all");

    const filteredAlerts = filter === "all"
        ? alerts
        : alerts.filter(a => a.type === filter);

    const criticalCount = alerts.filter(a => a.type === "critical").length;
    const warningCount = alerts.filter(a => a.type === "warning").length;

    const getAlertIcon = (type: string) => {
        switch (type) {
            case "critical": return <XCircle size={20} color="#ef4444" />;
            case "warning": return <AlertTriangle size={20} color="#f59e0b" />;
            case "info": return <CheckCircle size={20} color="#10B981" />;
        }
    };

    const getAlertColor = (type: string) => {
        switch (type) {
            case "critical": return "#ef4444";
            case "warning": return "#f59e0b";
            case "info": return "#10B981";
        }
    };

    return (
        <div className="glass" style={{ padding: "2rem", borderRadius: "8px", marginBottom: "2rem", border: "1px solid rgba(239, 68, 68, 0.12)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Real-Time Alerts</h3>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>System notifications and critical events</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <FilterButton label="All" count={alerts.length} active={filter === "all"} onClick={() => setFilter("all")} />
                    <FilterButton label="Critical" count={criticalCount} active={filter === "critical"} onClick={() => setFilter("critical")} color="#ef4444" />
                    <FilterButton label="Warning" count={warningCount} active={filter === "warning"} onClick={() => setFilter("warning")} color="#f59e0b" />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxHeight: "400px", overflowY: "auto" }}>
                {filteredAlerts.map((alert) => (
                    <div
                        key={alert.id}
                        style={{
                            padding: "1.25rem",
                            background: `${getAlertColor(alert.type)}08`,
                            borderRadius: "8px",
                            border: `1px solid ${getAlertColor(alert.type)}30`,
                            transition: "all 0.2s ease"
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div style={{ display: "flex", gap: "1rem", flex: 1 }}>
                                <div style={{ marginTop: "2px" }}>
                                    {getAlertIcon(alert.type)}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.5rem", color: getAlertColor(alert.type) }}>
                                        {alert.title}
                                    </h4>
                                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.75rem" }}>
                                        {alert.message}
                                    </p>
                                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
                                        {alert.time}
                                    </span>
                                </div>
                            </div>
                            {alert.action && (
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    style={{
                                        background: `${getAlertColor(alert.type)}20`,
                                        border: `1px solid ${getAlertColor(alert.type)}40`,
                                        color: getAlertColor(alert.type)
                                    }}
                                >
                                    {alert.action}
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function FilterButton({ label, count, active, onClick, color = "#6366f1" }: any) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: active ? `1px solid ${color}40` : "1px solid rgba(255,255,255,0.1)",
                background: active ? `${color}15` : "transparent",
                color: active ? color : "rgba(255,255,255,0.6)",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
            }}
        >
            {label}
            <span style={{
                padding: "2px 6px",
                borderRadius: "4px",
                background: active ? `${color}30` : "rgba(255,255,255,0.1)",
                fontSize: "0.75rem",
                fontWeight: 700
            }}>
                {count}
            </span>
        </button>
    );
}
