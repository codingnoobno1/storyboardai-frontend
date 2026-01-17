"use client";

import React from "react";
import { TrendingUp, Users, Eye, DollarSign, Star } from "lucide-react";

interface TemplateMetric {
    name: string;
    views: number;
    purchases: number;
    revenue: number;
    rating: number;
    trend: number;
}

const MOCK_METRICS: TemplateMetric[] = [
    { name: "Cyber Noir Action", views: 1240, purchases: 48, revenue: 14400, rating: 4.8, trend: 12 },
    { name: "Neon Tokyo 2077", views: 980, purchases: 35, revenue: 10500, rating: 4.6, trend: 8 },
    { name: "Manga Pro", views: 750, purchases: 28, revenue: 8400, rating: 4.9, trend: -3 },
];

export default function TemplatePerformanceMetrics() {
    return (
        <div className="glass" style={{ padding: "2rem", borderRadius: "12px", marginBottom: "2rem", border: "1px solid rgba(16, 185, 129, 0.15)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Template Performance</h3>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Top 3 templates by revenue (last 30 days)</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1.25rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "12px" }}>
                    <TrendingUp size={18} color="#10B981" />
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#10B981" }}>+15% vs last month</span>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {MOCK_METRICS.map((template, index) => (
                    <div
                        key={template.name}
                        style={{
                            padding: "1.5rem",
                            background: "rgba(16, 185, 129, 0.03)",
                            borderRadius: "12px",
                            border: "1px solid rgba(16, 185, 129, 0.1)",
                            transition: "all 0.3s ease",
                            cursor: "pointer"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(16, 185, 129, 0.06)";
                            e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(16, 185, 129, 0.03)";
                            e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.1)";
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "8px",
                                    background: "linear-gradient(135deg, #10B981, #059669)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "0.9rem",
                                    fontWeight: 800,
                                    color: "white"
                                }}>
                                    #{index + 1}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{template.name}</h4>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <Star size={14} fill="#10B981" color="#10B981" />
                                        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#10B981" }}>{template.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.5rem 1rem",
                                borderRadius: "8px",
                                background: template.trend > 0 ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)"
                            }}>
                                <TrendingUp size={14} color={template.trend > 0 ? "#10B981" : "#ef4444"} />
                                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: template.trend > 0 ? "#10B981" : "#ef4444" }}>
                                    {template.trend > 0 ? "+" : ""}{template.trend}%
                                </span>
                            </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
                            <MetricItem icon={Eye} label="Views" value={template.views.toLocaleString()} />
                            <MetricItem icon={Users} label="Purchases" value={template.purchases.toString()} />
                            <MetricItem icon={DollarSign} label="Revenue" value={`₹${template.revenue.toLocaleString()}`} />
                            <MetricItem
                                icon={TrendingUp}
                                label="Conversion"
                                value={`${((template.purchases / template.views) * 100).toFixed(1)}%`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MetricItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                <Icon size={14} color="rgba(255,255,255,0.4)" />
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{label}</p>
            </div>
            <p style={{ fontSize: "1rem", fontWeight: 700 }}>{value}</p>
        </div>
    );
}
