"use client";

import React from "react";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import RevenueChart from "@/components/dashboard/RevenueChart";
import WithdrawalHistory from "@/components/creator/WithdrawalHistory";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { DollarSign, Zap, Users, ShoppingBag, Smartphone } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function EarningsPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <Breadcrumb items={[{ label: "Earnings", path: "/dashboard/creator/earnings" }, { label: "Revenue Dashboard" }]} />
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Revenue & Settlement</h1>
                </div>
                <Button style={{ padding: "0 2.5rem" }}> <DollarSign size={18} /> Instant Settlement </Button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "2.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                        <StatItem label="Available Balance" value="₹12,400" icon={DollarSign} color="var(--accent)" />
                        <StatItem label="Pending Settlement" value="₹4,200" icon={Zap} color="#F59E0B" />
                        <StatItem label="Lifetime Earned" value="₹184,000" icon={ShoppingBag} color="#10B981" />
                    </div>
                    <RevenueChart />
                    <WithdrawalHistory />
                </div>

                <aside style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    <Card title="Settlement Policy" style={{ background: "rgba(var(--accent-rgb), 0.05)" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                            <p>● Credits earned from marketplace sales are held for 48 hours for anti-fraud verification.</p>
                            <p>● Settlement available instantly for accounts over Tier 2 verification.</p>
                            <p>● Transaction fees: 5% + ₹10 platform service charge.</p>
                        </div>
                    </Card>
                    <Card title="Payment Method">
                        <div className="glass" style={{ padding: "1rem", borderRadius: "12px", border: "1px solid var(--accent)", display: "flex", alignItems: "center", gap: "12px" }}>
                            <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(var(--accent-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                                <Smartphone size={20} />
                            </div>
                            <div>
                                <p style={{ fontSize: "0.9rem", fontWeight: 700 }}>Razorpay Sync</p>
                                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>Verified • Primary</p>
                            </div>
                        </div>
                        <Button variant="secondary" style={{ width: "100%", marginTop: "1rem" }}> Manage Payout Methods </Button>
                    </Card>
                </aside>
            </div>
        </div>
    );
}

function StatItem({ label, value, icon: Icon, color }: any) {
    return (
        <Card padding="1.5rem">
            <Icon size={24} color={color} style={{ marginBottom: "1rem" }} />
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", fontWeight: 800 }}>{label}</p>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 900 }}>{value}</h2>
        </Card>
    );
}
