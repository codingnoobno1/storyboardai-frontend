"use client";

import React from "react";

import NotificationCenter from "@/components/dashboard/NotificationCenter";
import ModerationQueue from "@/components/admin/ModerationQueue";
import { ShieldAlert, CheckCircle, XCircle, Search, Filter } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AdminModerationPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Content Moderation</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Review flagged assets and verify high-tier creator templates.</p>
                </div>
                <NotificationCenter />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "3rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                        <Button variant="secondary" style={{ flex: 1 }}> <ShieldAlert size={18} /> Safety Flags (12) </Button>
                        <Button variant="outline" style={{ flex: 1 }}> <CheckCircle size={18} /> Approved (142) </Button>
                        <Button variant="outline" style={{ flex: 1 }}> <XCircle size={18} /> Rejected (4) </Button>
                    </div>
                    <ModerationQueue />
                </div>

                <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div className="glass" style={{ padding: "1.5rem", borderRadius: "20px" }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1rem" }}>Moderation Policy</h4>
                        <ul style={{ padding: 0, listStyle: "none", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", display: "flex", flexDirection: "column", gap: "12px" }}>
                            <li style={{ display: "flex", gap: "10px" }}> ● AI-generated violence is strictly reviewed. </li>
                            <li style={{ display: "flex", gap: "10px" }}> ● Creator templates must follow prompt ethics. </li>
                            <li style={{ display: "flex", gap: "10px" }}> ● Escalation required for Tier-3 violations. </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}
