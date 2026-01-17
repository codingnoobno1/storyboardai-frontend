"use client";

import React from "react";
import { Check, Zap, Shield, Globe } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const TIERS = [
    {
        id: "free",
        name: "Explorer",
        price: "₹0",
        desc: "Perfect for testing the AI orchestration waters.",
        features: ["5 Projects / Month", "Standard Rendering", "OpenAI 3.5 Turbo", "Community Support"],
        accent: "rgba(255,255,255,0.1)",
        button: "secondary"
    },
    {
        id: "pro",
        name: "Creator Pro",
        price: "₹399",
        desc: "For content creators and power storytellers.",
        features: ["Unlimited Projects", "4K Ultra HD Export", "Dual-LLM (GPT-4 + Gemini)", "Priority Node Access", "No Watermark"],
        accent: "var(--accent)",
        button: "primary",
        popular: true
    },
    {
        id: "enterprise",
        name: "Architect",
        price: "Custom",
        desc: "Unrestricted power for studios and agencies.",
        features: ["Custom Model Training", "On-Prem Deployment", "Bulk API Access", "Dedicated Agent Support", "SLA Verification"],
        accent: "#10B981",
        button: "outline"
    }
];

export default function PricingTable() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", maxWidth: "1200px", margin: "0 auto" }}>
            {TIERS.map((tier) => (
                <Card
                    key={tier.id}
                    style={{
                        position: "relative",
                        border: tier.popular ? `1px solid ${tier.accent}` : "1px solid rgba(255,255,255,0.05)",
                        background: tier.popular ? "rgba(var(--accent-rgb), 0.05)" : "rgba(255,255,255,0.02)"
                    }}
                >
                    {tier.popular && (
                        <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "white", padding: "4px 12px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 900 }}>MOST POPULAR</div>
                    )}
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>{tier.name}</h3>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "1rem" }}>
                        <span style={{ fontSize: "2.5rem", fontWeight: 900 }}>{tier.price}</span>
                        {tier.price !== "Custom" && <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>/mo</span>}
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", marginBottom: "2rem", height: "40px" }}>{tier.desc}</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                        {tier.features.map(f => (
                            <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem" }}>
                                <Check size={16} color={tier.accent} />
                                <span>{f}</span>
                            </div>
                        ))}
                    </div>

                    <Button variant={tier.button as any} style={{ width: "100%", padding: "1.2rem" }}>
                        {tier.id === "enterprise" ? "Contact Architecture Team" : "Upgrade to " + tier.name}
                    </Button>
                </Card>
            ))}
        </div>
    );
}
