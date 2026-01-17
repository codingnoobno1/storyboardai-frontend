"use client";

import React from "react";
import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import Card from "../ui/Card";

export default function RevenueChart() {
    return (
        <Card title="Revenue Growth" subtitle="7-day logic orchestration revenue" style={{ height: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: 900 }}>₹42,840</h2>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#10B981", fontSize: "0.85rem", fontWeight: 700 }}>
                            <ArrowUpRight size={16} /> +12.4% vs last week
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "6px" }}>
                        {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} style={{ width: "4px", height: "40px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", position: "relative" }}>
                                <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${40 + Math.random() * 60}%`, background: "var(--accent)", borderRadius: "2px" }} />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <RevenueItem label="Direct Credit Sales" val="₹24,400" />
                    <RevenueItem label="Marketplace Commission" val="₹12,240" />
                    <RevenueItem label="Enterprise Licenses" val="₹6,200" />
                </div>
            </div>
        </Card>
    );
}

function RevenueItem({ label, val }: any) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderRadius: "10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>{label}</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{val}</span>
        </div>
    );
}
