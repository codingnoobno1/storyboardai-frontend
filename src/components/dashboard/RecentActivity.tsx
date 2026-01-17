"use client";

import React from "react";
import { CheckCircle, Clock, Zap, AlertCircle } from "lucide-react";
import Badge from "../ui/Badge";

const ACTIVITIES = [
    { id: 1, type: "success", title: "Video Render Complete", desc: "Project 'Cyber Noir' rendered in 4K.", time: "2m ago" },
    { id: 2, type: "process", title: "Planner Agent Active", desc: "Generating task graph for 'Mars Colony'.", time: "5m ago" },
    { id: 3, type: "credits", title: "Credits Refilled", desc: "Added 500 Image Credits via Razorpay.", time: "1h ago" },
    { id: 4, type: "warning", title: "Service Latency", desc: "Image Gen API experiencing high load.", time: "2h ago" },
];

export default function RecentActivity() {
    return (
        <div className="glass" style={{ padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.5rem" }}>Recent Activity</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {ACTIVITIES.map((activity) => (
                    <div key={activity.id} style={{ display: "flex", gap: "12px" }}>
                        <div style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            background: "rgba(255,255,255,0.03)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: activity.type === "success" ? "#10B981" : activity.type === "process" ? "var(--accent)" : activity.type === "credits" ? "#F59E0B" : "#ef4444"
                        }}>
                            {activity.type === "success" && <CheckCircle size={18} />}
                            {activity.type === "process" && <Clock size={18} />}
                            {activity.type === "credits" && <Zap size={18} />}
                            {activity.type === "warning" && <AlertCircle size={18} />}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
                                <h5 style={{ fontSize: "0.9rem", fontWeight: 600 }}>{activity.title}</h5>
                                <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)" }}>{activity.time}</span>
                            </div>
                            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{activity.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button style={{ width: "100%", marginTop: "1.5rem", padding: "10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>
                View All Logs
            </button>
        </div>
    );
}
