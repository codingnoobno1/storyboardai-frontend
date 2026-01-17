"use client";

import React from "react";

import NotificationCenter from "@/components/dashboard/NotificationCenter";
import ActivityChart from "@/components/dashboard/ActivityChart";
import { BarChart3, TrendingUp, Users, Zap, Globe, Download } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import Badge from "@/components/ui/Badge";

export default function AdminAnalyticsPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Business Intelligence</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Revenue metrics, user growth, and platform performance analytics.</p>
                </div>
                <NotificationCenter />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", marginBottom: "3rem" }}>
                <StatCard label="Total Users" value="12.4k" change="+12.5%" icon={Users} />
                <StatCard label="Gen Projects" value="842" change="+4.2%" icon={Zap} />
                <StatCard label="Global Reach" value="42" change="+1" icon={Globe} />
                <StatCard label="Revenue" value="₹1.2M" change="+18%" icon={TrendingUp} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "3rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <Card title="Traffic & Orchestration Frequency">
                        <ActivityChart />
                    </Card>
                </div>

                <Card title="Export Hub">
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>Generate detailed reports for stakeholders.</p>
                        <Button variant="secondary" style={{ width: "100%" }}> <Download size={18} /> Monthly System Audit </Button>
                        <Button variant="secondary" style={{ width: "100%" }}> <Download size={18} /> Revenue Breakdown </Button>
                        <Button variant="secondary" style={{ width: "100%" }}> <Download size={18} /> User Growth (JSON) </Button>
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
                <Badge variant="success" size="sm" style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10B981", border: "none" }}>{change}</Badge>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontWeight: 700, marginBottom: "0.2rem" }}>{label}</p>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800 }}>{value}</h2>
        </Card>
    );
}
