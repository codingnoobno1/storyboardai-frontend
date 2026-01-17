"use client";

import React from "react";
import RoleSidebar from "@/components/navigation/Sidebar";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import PriceCard from "@/components/store/PricingTable";
import Breadcrumb from "@/components/ui/Breadcrumb";
import EmptyState from "@/components/ui/EmptyState";
import { Zap, ShoppingBag } from "lucide-react";

export default function StorePage() {
    const [hasPurchased, setHasPurchased] = React.useState(false);

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
            <RoleSidebar />
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <div>
                        <Breadcrumb items={[{ label: "Marketplace", path: "/store" }, { label: "Premium Templates" }]} />
                        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Template Marketplace</h1>
                        <p style={{ color: "rgba(255,255,255,0.4)" }}>Acquire high-fidelity logic structures from top AI architects.</p>
                    </div>
                    <NotificationCenter />
                </div>

                {!hasPurchased ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                        <EmptyState
                            title="Your Logic Vault is Empty"
                            description="Acquire your first premium template to unlock specialized orchestration nodes."
                            actionLabel="Explore Top Sellers"
                            onAction={() => { }}
                            icon={ShoppingBag}
                        />
                        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginTop: "2rem" }}>Featured Orchestration Nodes</h2>
                        <PriceCard />
                    </div>
                ) : (
                    <div>Purchased Content Here</div>
                )}
            </main>
        </div>
    );
}
