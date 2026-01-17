"use client";

import React from "react";
import { FileSearch, MessageSquare, AlertTriangle, ShieldCheck } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ModerationDetail({ item }: { item: any }) {
    if (!item) return null;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Audit ID: {item.id}</h3>
                <Badge variant="error">High Risk</Badge>
            </div>

            <div style={{ padding: "1.5rem", borderRadius: "16px", background: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.1)" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#ef4444", marginBottom: "0.5rem" }}>DETECTION LOG</h4>
                <p style={{ fontSize: "0.85rem", opacity: 0.7, lineHeight: 1.6 }}>
                    Orchestrator flag triggered on 'Thinker' node. Content contains restricted narrative motifs involving unauthorized IP replication.
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", fontWeight: 700 }}>ORIGINAL PROMPT</div>
                <p className="glass" style={{ padding: "1rem", borderRadius: "10px", fontSize: "0.9rem", color: "white" }}>
                    "Generate a sequence featuring a character that looks exactly like [REDACTED] fighting a [REDACTED] in a [REDACTED] style."
                </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
                <Button variant="danger" style={{ width: "100%" }}> Ban User </Button>
                <Button variant="secondary" style={{ width: "100%" }}> Dismiss Flag </Button>
            </div>
            <Button variant="outline" style={{ width: "100%" }}> Escalate to Senior Admin </Button>
        </div>
    );
}
