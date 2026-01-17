"use client";

import React from "react";
import RoleSidebar from "@/components/navigation/Sidebar";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function EnterprisePage() {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
            <RoleSidebar />
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                <div style={{ textAlign: "center", padding: "5rem 0" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 900, marginBottom: "1rem" }}>StoryBoard <span style={{ color: "var(--accent)" }}>Enterprise</span></h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
                        Private clusters, custom model training, and A-grade security for global studios.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
                    <EnterpriseFeature title="Dedicated Nodes" desc="100% reserved GPU/CPU clusters for zero-latency orchestration." />
                    <EnterpriseFeature title="Custom Fine-Tuning" desc="Train our agents on your studio's proprietary visual DNA." />
                    <EnterpriseFeature title="On-Prem Deployment" desc="Run the full StoryBoard stack inside your own secure VPC." />
                </div>

                <div style={{ marginTop: "5rem", textAlign: "center" }}>
                    <Button style={{ padding: "0 4rem", height: "60px", fontSize: "1.1rem" }}> Contact Solutions Architect </Button>
                </div>
            </main>
        </div>
    );
}

function EnterpriseFeature({ title, desc }: any) {
    return (
        <Card padding="2rem">
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>{title}</h3>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem", lineHeight: 1.6 }}>{desc}</p>
        </Card>
    );
}
