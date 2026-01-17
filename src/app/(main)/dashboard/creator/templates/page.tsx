"use client";

import React from "react";

import NotificationCenter from "@/components/dashboard/NotificationCenter";
import TemplateGrid from "@/components/store/TemplateGrid";
import { PenTool, Plus, Search, Filter } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CreatorTemplatesPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>My AI Templates</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Manage and refine your logic structures for the Marketplace.</p>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <Button> <Plus size={18} /> Create New Template </Button>
                    <NotificationCenter />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
                <div className="glass" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 20px", minWidth: "400px" }}>
                    <Search size={18} color="rgba(255,255,255,0.3)" />
                    <input type="text" placeholder="Search my templates..." style={{ background: "none", border: "none", color: "white", outline: "none", width: "100%" }} />
                </div>
                <Button variant="secondary"> <Filter size={18} /> Sort </Button>
            </div>

            <TemplateGrid />
        </div>
    );
}
