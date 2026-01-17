"use client";

import React from "react";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import ActivityChart from "@/components/dashboard/ActivityChart";
import CreditGauge from "@/components/dashboard/CreditGauge";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UsageHeatmap from "@/components/dashboard/UsageHeatmap";
import QuickActionGrid from "@/components/dashboard/QuickActionGrid";
import Card from "@/components/ui/Card";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import RevenueGraph from "@/components/creator/RevenueGraph";
import TemplatePerformanceMetrics from "@/components/creator/TemplatePerformanceMetrics";

export default function CreatorDashboardPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Revenue Dashboard</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>Track your template sales, earnings, and marketplace performance.</p>
                </div>
                <NotificationCenter />
            </header>

            {/* Creator-Only Features */}
            <RevenueGraph />
            <TemplatePerformanceMetrics />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "2.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <WelcomeBanner />
                    </div>

                    <QuickActionGrid />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                        <Card title="Orchestration frequency">
                            <ActivityChart />
                        </Card>
                        <Card title="Credit Usage Depth">
                            <div style={{ display: "flex", justifyContent: "space-around", padding: "1rem 0" }}>
                                <CreditGauge label="Story" value={85} max={100} color="var(--accent)" />
                                <CreditGauge label="Visuals" value={42} max={100} color="#F59E0B" />
                            </div>
                        </Card>
                    </div>
                    <UsageHeatmap />
                </div>

                <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <RecentActivity />
                </aside>
            </div>
        </div>
    );
}
