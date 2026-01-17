"use client";

import React from "react";
import { TrendingUp, DollarSign, ArrowUp, ArrowDown } from "lucide-react";

interface RevenueData {
    month: string;
    revenue: number;
}

const MOCK_DATA: RevenueData[] = [
    { month: "Jul", revenue: 2400 },
    { month: "Aug", revenue: 3200 },
    { month: "Sep", revenue: 2800 },
    { month: "Oct", revenue: 4100 },
    { month: "Nov", revenue: 3800 },
    { month: "Dec", revenue: 5200 },
];

export default function RevenueGraph() {
    const maxRevenue = Math.max(...MOCK_DATA.map(d => d.revenue));
    const currentMonth = MOCK_DATA[MOCK_DATA.length - 1].revenue;
    const previousMonth = MOCK_DATA[MOCK_DATA.length - 2].revenue;
    const growth = ((currentMonth - previousMonth) / previousMonth * 100).toFixed(1);
    const isPositive = currentMonth > previousMonth;

    return (
        <div className="glass" style={{ padding: "2rem", borderRadius: "16px", marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
                <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Revenue Overview</h3>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--creator-accent)" }}>₹{currentMonth.toLocaleString()}</h2>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: isPositive ? "#10B981" : "#ef4444" }}>
                            {isPositive ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
                            <span style={{ fontSize: "1rem", fontWeight: 700 }}>{growth}%</span>
                        </div>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginTop: "0.5rem" }}>vs last month</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1.25rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "12px" }}>
                    <DollarSign size={20} color="#10B981" />
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#10B981" }}>Active Earnings</span>
                </div>
            </div>

            {/* Graph */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem", height: "200px" }}>
                {MOCK_DATA.map((data, index) => {
                    const height = (data.revenue / maxRevenue) * 100;
                    const isLast = index === MOCK_DATA.length - 1;

                    return (
                        <div key={data.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                            <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "flex-end" }}>
                                <div
                                    style={{
                                        width: "100%",
                                        height: `${height}%`,
                                        background: isLast
                                            ? "linear-gradient(180deg, var(--creator-accent), rgba(16, 185, 129, 0.3))"
                                            : "linear-gradient(180deg, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.1))",
                                        borderRadius: "8px 8px 0 0",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer",
                                        position: "relative",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scaleY(1.05)";
                                        e.currentTarget.style.filter = "brightness(1.2)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scaleY(1)";
                                        e.currentTarget.style.filter = "brightness(1)";
                                    }}
                                >
                                    {isLast && (
                                        <div style={{
                                            position: "absolute",
                                            top: "-2rem",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            fontSize: "0.85rem",
                                            fontWeight: 700,
                                            color: "var(--creator-accent)",
                                            whiteSpace: "nowrap"
                                        }}>
                                            ₹{data.revenue.toLocaleString()}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>{data.month}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
