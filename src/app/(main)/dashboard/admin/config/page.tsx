"use client";

import React from "react";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import { Settings, ToggleLeft, Server, Zap } from "lucide-react";
import Card from "@/components/ui/Card";
import Switch from "@/components/ui/Switch";
import Button from "@/components/ui/Button";

export default function SystemConfigPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>System Config</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Feature flags, node orchestration, and API limits.</p>
                </div>
                <NotificationCenter />
            </div>

            <Card title="Feature Flags" variant="admin">
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <FeatureToggle
                        title="AI Generation v2"
                        description="Enable next-generation AI model for all users"
                        enabled={true}
                    />
                    <FeatureToggle
                        title="Template Marketplace"
                        description="Allow creators to publish and sell templates"
                        enabled={true}
                    />
                    <FeatureToggle
                        title="Beta Features"
                        description="Enable experimental features for testing"
                        enabled={false}
                    />
                </div>
            </Card>

            <Card title="System Limits" variant="admin">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
                    <LimitCard label="API Rate Limit" value="1000" unit="req/min" />
                    <LimitCard label="Max Upload Size" value="100" unit="MB" />
                    <LimitCard label="Concurrent Jobs" value="50" unit="jobs" />
                    <LimitCard label="Cache TTL" value="3600" unit="seconds" />
                </div>
            </Card>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                <Button variant="secondary">Reset to Defaults</Button>
                <Button variant="primary">Apply Changes</Button>
            </div>
        </div>
    );
}

function FeatureToggle({ title, description, enabled }: any) {
    const [isEnabled, setIsEnabled] = React.useState(enabled);
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{title}</h5>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>{description}</p>
            </div>
            <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
        </div>
    );
}

function LimitCard({ label, value, unit }: any) {
    return (
        <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>{label}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 800 }}>{value}</h3>
                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>{unit}</span>
            </div>
        </div>
    );
}
