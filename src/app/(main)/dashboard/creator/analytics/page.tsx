"use client";

import React from "react";

import NotificationCenter from "@/components/dashboard/NotificationCenter";
import ActivityChart from "@/components/dashboard/ActivityChart";
import { BarChart3, TrendingUp, ShoppingBag, Users, Download } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CreatorAnalyticsPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Market Intelligence</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Buyer trends, conversion funnels, and competitive insights.</p>
                </div>
                <NotificationCenter />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", marginBottom: "3rem" }}>
                <StatCard label="Total Sales" value="1.2k" change="+8.4%" icon={ShoppingBag} />
                <StatCard label="Unique Buyers" value="842" change="+12%" icon={Users} />
                <StatCard label="Avg. Rating" value="4.9" change="Stable" icon={TrendingUp} />
                <StatCard label="Conversion Rate" value="3.2%" change="+0.4%" icon={BarChart3} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "3rem" }}>
                <Card title="Monthly Revenue & Sales Frequency">
                    <ActivityChart />
                </Card>

                <Card title="Top Performing Assets">
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <AssetItem name="Neon Tokyo 2077" sales={420} revenue="₹16,800" />
                        <AssetItem name="Cyber Noir Action" sales={310} revenue="₹12,400" />
                        <AssetItem name="Manga Pro" sales={150} revenue="₹6,000" />
                        <Button variant="secondary" style={{ width: "100%", marginTop: "1rem" }}> View Detailed Report </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

function StatCard({ label, value, change, icon: Icon }: any) {
    return (
        <Card>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(var(--accent-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <Icon size={20} />
                </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontWeight: 700, marginBottom: "0.2rem" }}>{label}</p>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800 }}>{value}</h2>
            <p style={{ fontSize: "0.75rem", color: change.includes("+") ? "#10B981" : "rgba(255,255,255,0.3)", fontWeight: 700 }}>{change}</p>
        </Card>
    );
}

function AssetItem({ name, sales, revenue }: any) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div>
                <h5 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{name}</h5>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{sales} Sales</p>
            </div>
            <span style={{ fontWeight: 800 }}>{revenue}</span>
        </div>
    );
}
