"use client";

import React from "react";
import { ShieldAlert, User, Terminal, Clock, Globe } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function AuditLogDetail({ logId }: { logId: string }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Audit Event: {logId}</h3>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>Security-critical event captured by Guard-01</p>
                </div>
                <Badge variant="error" size="lg">Priority 1</Badge>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <InfoItem icon={User} label="User Context" val="alex@creators.ai (ID: #401)" />
                <InfoItem icon={Terminal} label="Source Node" val="API_GATEWAY_MAIN" />
                <InfoItem icon={Globe} label="IP Address" val="192.168.1.1 (San Francisco)" />
                <InfoItem icon={Clock} label="Timestamp" val="2025-12-20T14:32:11Z" />
            </div>

            <Card padding="1.5rem" style={{ background: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.1)" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#EF4444", marginBottom: "1rem" }}>EVENT PAYLOAD</h4>
                <pre style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", overflowX: "auto", whiteSpace: "pre-wrap" }}>
                    {JSON.stringify({
                        action: "UNAUTHORIZED_CREDIT_INJECTION",
                        params: { amount: 10000, method: "SQL_RETRY_BYPASS" },
                        detected_by: "DemoGuard Middleware"
                    }, null, 2)}
                </pre>
            </Card>

            <div style={{ display: "flex", gap: "1rem" }}>
                <Button variant="danger" style={{ flex: 1 }}> Ban User </Button>
                <Button variant="secondary" style={{ flex: 1 }}> Flag for Review </Button>
                <Button variant="outline" style={{ flex: 1 }}> Export Evidence </Button>
            </div>
        </div>
    );
}

function InfoItem({ icon: Icon, label, val }: any) {
    return (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)" }}>
                <Icon size={16} />
            </div>
            <div>
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", fontWeight: 800 }}>{label}</p>
                <p style={{ fontSize: "0.85rem", fontWeight: 700 }}>{val}</p>
            </div>
        </div>
    );
}
