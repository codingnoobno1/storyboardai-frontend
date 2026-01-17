"use client";

import React from "react";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import { Megaphone, TrendingUp, Eye, Target } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function PromotionHubPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Promotion Hub</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Featured listings, marketing campaigns, and visibility tools.</p>
                </div>
                <NotificationCenter />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginBottom: "2rem" }}>
                <StatCard label="Featured Slots" value="2/3" icon={Target} />
                <StatCard label="Campaign Views" value="1.2k" icon={Eye} />
                <StatCard label="Conversion Lift" value="+18%" icon={TrendingUp} />
            </div>

            <Card title="Active Promotions">
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <PromotionCard
                        title="Featured: Cyber Noir Action"
                        status="Active"
                        views={420}
                        conversions={12}
                        endsIn="3 days"
                    />
                    <PromotionCard
                        title="Homepage Banner: Neon Tokyo"
                        status="Scheduled"
                        views={0}
                        conversions={0}
                        endsIn="Starts in 2 days"
                    />
                </div>
            </Card>

            <Card title="Available Promotion Options">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
                    <OptionCard
                        title="Featured Listing"
                        price="₹500/week"
                        description="Top placement in category pages"
                    />
                    <OptionCard
                        title="Homepage Banner"
                        price="₹1,200/week"
                        description="Prime visibility on marketplace homepage"
                    />
                </div>
            </Card>
        </div>
    );
}

function StatCard({ label, value, icon: Icon }: any) {
    return (
        <Card>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(var(--accent-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <Icon size={24} />
                </div>
                <div>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.25rem" }}>{label}</p>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>{value}</h2>
                </div>
            </div>
        </Card>
    );
}

function PromotionCard({ title, status, views, conversions, endsIn }: any) {
    return (
        <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h4>
                    <Badge variant={status === "Active" ? "success" : "primary"}>{status}</Badge>
                </div>
                <Button variant="secondary" size="sm">Manage</Button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", fontSize: "0.85rem" }}>
                <div>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Views</p>
                    <p style={{ fontWeight: 700 }}>{views}</p>
                </div>
                <div>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Conversions</p>
                    <p style={{ fontWeight: 700 }}>{conversions}</p>
                </div>
                <div>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>{endsIn}</p>
                </div>
            </div>
        </div>
    );
}

function OptionCard({ title, price, description }: any) {
    return (
        <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)", marginBottom: "0.5rem" }}>{price}</p>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>{description}</p>
            <Button variant="primary" style={{ width: "100%" }}>Purchase Slot</Button>
        </div>
    );
}
