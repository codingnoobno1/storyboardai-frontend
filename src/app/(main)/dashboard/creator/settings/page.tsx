"use client";

import React from "react";
import { User, DollarSign, Palette, Bell, Shield, Layout, Code } from "lucide-react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Switch from "@/components/ui/Switch";
import ApiKeyManager from "@/components/settings/ApiKeyManager";
import { motion, AnimatePresence } from "framer-motion";

export default function CreatorSettingsPage() {
    const [activeTab, setActiveTab] = React.useState("branding");

    const tabs = [
        { id: "branding", label: "Studio Branding", icon: Palette },
        { id: "payments", label: "Payment Methods", icon: DollarSign },
        { id: "api", label: "Developer Tools", icon: Code },
        { id: "notifications", label: "Studio Alerts", icon: Bell },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <header style={{ marginBottom: "3rem" }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Studio Settings</h1>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>Manage your professional template storefront and branding.</p>
            </header>

            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "3rem" }}>
                {/* Vertical Tabs Sidebar */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "14px 20px",
                                borderRadius: "14px",
                                background: activeTab === tab.id ? "rgba(var(--accent-rgb), 0.1)" : "transparent",
                                border: "none",
                                color: activeTab === tab.id ? "var(--accent)" : "rgba(255,255,255,0.4)",
                                cursor: "pointer",
                                fontWeight: 700,
                                transition: "all 0.2s",
                                textAlign: "left"
                            }}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <AnimatePresence mode="wait">
                        {activeTab === "branding" && (
                            <motion.div key="branding" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <Card title="Storefront Branding" variant="creator">
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                                        <Input label="Studio Name" defaultValue="CyberVision Labs" />
                                        <Input label="Public Store URL" defaultValue="storyboard.ai/s/cybervision" />
                                    </div>
                                    <div style={{ marginBottom: "1.5rem" }}>
                                        <Input label="Studio Bio" defaultValue="Premium narrative architect specializing in high-octane sci-fi storyboards." />
                                    </div>
                                    <PreferenceToggle
                                        title="Display Sales Visualizer"
                                        desc="Show recent sales activity on the public storefront."
                                        checked={true}
                                    />
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", marginTop: "1rem" }}>
                        <Button variant="secondary" style={{ padding: "0 2rem" }}> Discard </Button>
                        <Button style={{ padding: "0 2.5rem" }}> Update Studio </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PreferenceToggle({ title, desc, checked }: any) {
    const [isOn, setIsOn] = React.useState(checked);
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
                <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.2rem" }}>{title}</h5>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>{desc}</p>
            </div>
            <Switch checked={isOn} onCheckedChange={setIsOn} />
        </div>
    );
}
