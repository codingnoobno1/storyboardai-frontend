"use client";

import React from "react";
import { Terminal, Clock, Shield, User, Zap } from "lucide-react";
import Card from "../ui/Card";

export default function UserActivityLog() {
    const LOGS = [
        { id: 1, user: "Alex R.", action: "Started 'Cyber Noir' production", time: "2m ago", type: "event" },
        { id: 2, user: "Sarah M.", action: "Published 'Manga V2' template", time: "12m ago", type: "system" },
        { id: 3, user: "System", action: "Auto-scaled cluster 'X-NODE-2'", time: "25m ago", type: "telemetry" },
        { id: 4, user: "John D.", action: "Failed payment - Invalid Card", time: "1h ago", type: "error" },
        { id: 5, user: "Admin", action: "Updated Global Revenue model", time: "3h ago", type: "security" },
    ];

    return (
        <Card title="Activity Log" subtitle="Comprehensive platform event stream">
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {LOGS.map((log) => (
                    <div key={log.id} style={{ display: "flex", gap: "12px", padding: "10px", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.03)" }}>
                        <div style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "8px",
                            background: log.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : log.type === 'security' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255,255,255,0.05)',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                        }}>
                            {log.type === 'security' ? <Shield size={16} color="var(--accent)" /> : log.type === 'telemetry' ? <Terminal size={16} /> : <User size={16} />}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                <h5 style={{ fontSize: "0.9rem", fontWeight: 700 }}>{log.user}</h5>
                                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{log.time}</span>
                            </div>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{log.action}</p>
                        </div>
                    </div>
                ))}
                <button style={{ alignSelf: "center", background: "none", border: "none", color: "var(--accent)", fontSize: "0.85rem", fontWeight: 700, cursor: "pointer", marginTop: "1rem" }}>
                    View Full Audit Stream
                </button>
            </div>
        </Card>
    );
}
