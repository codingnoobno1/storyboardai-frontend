"use client";

import React from "react";
import RoleSidebar from "@/components/navigation/Sidebar";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import TemplateGrid from "@/components/store/TemplateGrid";
import CategoryFilter from "@/components/store/CategoryFilter";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Search, Filter, ShoppingBag } from "lucide-react";

export default function MarketplacePage() {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
            <RoleSidebar />
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                        <Breadcrumb items={[{ label: "Marketplace", path: "/store" }, { label: "Premium Catalog" }]} />
                        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Logic Exploration</h1>
                    </div>
                    <NotificationCenter />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "3rem" }}>
                    <aside style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                        <div className="glass" style={{ padding: "1.5rem", borderRadius: "20px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                                <Search size={18} color="rgba(255,255,255,0.3)" />
                                <input type="text" placeholder="Search templates..." style={{ background: "none", border: "none", color: "white", outline: "none", fontSize: "0.9rem" }} />
                            </div>
                            <CategoryFilter />
                        </div>

                        <div style={{ padding: "2rem", borderRadius: "20px", background: "var(--accent)", color: "white", textAlign: "center" }}>
                            <ShoppingBag size={48} color="white" style={{ marginBottom: "1rem" }} />
                            <h4 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "0.5rem" }}>Sell Your Logic</h4>
                            <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "1.5rem" }}>Join 1,200+ architects earning $4k/mo.</p>
                            <button style={{ width: "100%", padding: "12px", borderRadius: "10px", background: "white", color: "var(--accent)", border: "none", fontWeight: 900, cursor: "pointer" }}>Become Creator</button>
                        </div>
                    </aside>

                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Discover Nodes</h3>
                            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Showing 1,242 templates</span>
                        </div>
                        <TemplateGrid />
                    </div>
                </div>
            </main>
        </div>
    );
}
