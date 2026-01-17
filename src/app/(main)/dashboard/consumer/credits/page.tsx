"use client";

import React from "react";
import CreditCalculator from "@/components/credits/CreditCalculator";
import CreditPackCard from "@/components/payments/CreditPackCard";
import PaymentHistory from "@/components/payments/PaymentHistory";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { ShieldCheck, Info } from "lucide-react";
import Card from "@/components/ui/Card";

export default function CreditsPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <header style={{ marginBottom: "3rem" }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Power Credits</h1>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>Fuel your creative engine with AI generation credits.</p>
            </header>

            <div style={{ marginBottom: "2rem" }}>
                <Breadcrumb items={[{ label: "Billing", path: "/dashboard/consumer/credits" }, { label: "Wallet Overview" }]} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 450px", gap: "2.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                        <BalanceCard label="Active Story Credits" value={142} color="var(--accent)" />
                        <BalanceCard label="Visual Generation Tokens" value={85} color="#10B981" />
                    </div>
                    <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginTop: "1rem" }}>Acquire More Resources</h2>
                    <CreditPackCard />
                    <PaymentHistory />
                </div>

                <aside style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    <CreditCalculator />
                    <Card title="Security & Compliance" variant="consumer">
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <ShieldCheck size={18} color="#10B981" />
                                <p>PCI-DSS Level 1 Secure Payments</p>
                            </div>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <Info size={18} color="var(--accent)" />
                                <p>Unused credits carry over to next billing cycle for Pro users.</p>
                            </div>
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
}

function BalanceCard({ label, value, color }: any) {
    return (
        <div className="glass" style={{ padding: "1.5rem", borderRadius: "20px", position: "relative", overflow: "hidden" }}>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>{label}</p>
            <h2 style={{ fontSize: "2.8rem", fontWeight: 900 }}>{value}</h2>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "4px", background: color }} />
        </div>
    );
}
