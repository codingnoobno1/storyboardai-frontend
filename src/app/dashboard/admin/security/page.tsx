"use client";

import React from "react";

import NotificationCenter from "@/components/dashboard/NotificationCenter";
import PlatformHealthGrid from "@/components/admin/PlatformHealthGrid";
import UserActivityLog from "@/components/admin/UserActivityLog";
import AuditLogDetail from "@/components/admin/AuditLogDetail";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Card from "@/components/ui/Card";

export default function SecurityPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <Breadcrumb items={[{ label: "Security", path: "/dashboard/admin/security" }, { label: "Guardian Core" }]} />
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Security Center</h1>
                </div>
                <NotificationCenter />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <PlatformHealthGrid />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 500px", gap: "2.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                        <AuditLogDetail logId="#SEC-904" />
                        <UserActivityLog />
                    </div>
                    <Card title="Traffic Nodes (Global)" style={{ height: "100%" }}>
                        <div style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)", borderRadius: "20px" }}>
                            <p style={{ color: "rgba(255,255,255,0.2)", fontWeight: 800 }}>Interactive Map Logic Placeholder</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
