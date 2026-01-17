"use client";

import React from "react";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import PlatformMetrics from "@/components/admin/PlatformMetrics";
import UserTable from "@/components/admin/UserTable";
import ModerationQueue from "@/components/admin/ModerationQueue";
import LiveStatusBoard from "@/components/admin/LiveStatusBoard";
import RealTimeAlertsPanel from "@/components/admin/RealTimeAlertsPanel";

export default function AdminDashboardPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Mission Control</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Real-time platform status, system health, and operational oversight.</p>
                </div>
                <NotificationCenter />
            </div>

            {/* Admin-Only Features */}
            <LiveStatusBoard />
            <RealTimeAlertsPanel />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <PlatformMetrics />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 450px", gap: "2.5rem" }}>
                    <UserTable />
                    <ModerationQueue />
                </div>
            </div>
        </div>
    );
}
