"use client";

import React from "react";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import { AlertTriangle, Clock, CheckCircle, XCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const INCIDENTS = [
    { id: "1", title: "Database Connection Timeout", status: "Resolved", severity: "Critical", time: "2 hours ago", duration: "15 min" },
    { id: "2", title: "API Gateway 502 Errors", status: "Investigating", severity: "High", time: "30 min ago", duration: "Ongoing" },
    { id: "3", title: "Slow Response Times", status: "Monitoring", severity: "Medium", time: "1 day ago", duration: "2 hours" },
];

export default function IncidentResponsePage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Incident Response</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Error tracking, downtime reports, and system alerts.</p>
                </div>
                <NotificationCenter />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", marginBottom: "2rem" }}>
                <StatCard label="Active Incidents" value="1" icon={AlertTriangle} color="#ef4444" />
                <StatCard label="Resolved Today" value="3" icon={CheckCircle} color="#10B981" />
                <StatCard label="Avg Response Time" value="12m" icon={Clock} color="var(--accent)" />
                <StatCard label="Uptime (30d)" value="99.8%" icon={CheckCircle} color="#10B981" />
            </div>

            <Card title="Recent Incidents" variant="admin">
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {INCIDENTS.map(incident => (
                        <div key={incident.id} style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                                <div>
                                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{incident.title}</h4>
                                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                        <Badge variant={incident.status === "Resolved" ? "success" : incident.status === "Investigating" ? "error" : "warning"}>{incident.status}</Badge>
                                        <Badge variant="secondary">{incident.severity}</Badge>
                                    </div>
                                </div>
                                <Button variant="secondary" size="sm">View Details</Button>
                            </div>
                            <div style={{ display: "flex", gap: "2rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
                                <div>
                                    <span>Started: {incident.time}</span>
                                </div>
                                <div>
                                    <span>Duration: {incident.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}

function StatCard({ label, value, icon: Icon, color }: any) {
    return (
        <Card>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", color }}>
                    <Icon size={20} />
                </div>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>{label}</p>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800 }}>{value}</h2>
            </div>
        </Card>
    );
}
