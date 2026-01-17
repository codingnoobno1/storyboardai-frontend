"use client";

import React from "react";
import { Clock, Eye, Check, X, Shield, AlertTriangle } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const QUEUE = [
    { id: 1, type: "Template", name: "Quantum Physics V2", creator: "Prof. AI", time: "12m ago", risk: "Low" },
    { id: 2, type: "Project", name: "Anxious Night", creator: "user_992", time: "45m ago", risk: "Medium" },
    { id: 3, type: "Template", name: "Cyber War Pack", creator: "NeonDream", time: "1h ago", risk: "High" },
];

export default function ModerationQueue() {
    return (
        <Card title="Moderation Queue" subtitle="Approve or reject pending templates and flagged content.">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {QUEUE.map(item => (
                    <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.2rem", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: item.type === "Template" ? "rgba(var(--accent-rgb), 0.1)" : "rgba(245, 158, 11, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: item.type === "Template" ? "var(--accent)" : "#F59E0B" }}>
                            <Shield size={20} />
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                                <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>{item.name}</h5>
                                <Badge variant={item.risk === "High" ? "error" : item.risk === "Medium" ? "warning" : "success"}>{item.risk} Risk</Badge>
                            </div>
                            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", display: "flex", gap: "10px" }}>
                                <span>by {item.creator}</span>
                                <span>•</span>
                                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}> <Clock size={12} /> {item.time} </span>
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "8px" }}>
                            <button style={{ padding: "8px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "none", color: "white", cursor: "pointer" }}>
                                <Eye size={18} />
                            </button>
                            <button style={{ padding: "8px", borderRadius: "8px", background: "rgba(16, 185, 129, 0.1)", border: "none", color: "#10B981", cursor: "pointer" }}>
                                <Check size={18} />
                            </button>
                            <button style={{ padding: "8px", borderRadius: "8px", background: "rgba(239, 68, 68, 0.1)", border: "none", color: "#ef4444", cursor: "pointer" }}>
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
