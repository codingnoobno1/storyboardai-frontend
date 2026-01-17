"use client";

import React from "react";
import { User, Lock, Bell, Shield, Layout, Code } from "lucide-react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Switch from "@/components/ui/Switch";
import ApiKeyManager from "@/components/settings/ApiKeyManager";
import { motion, AnimatePresence } from "framer-motion";
export default function AdminSettingsPage() {
    const [activeTab, setActiveTab] = React.useState("security");

    const tabs = [
        { id: "security", label: "Global Security", icon: Shield },
        { id: "nodes", label: "Node Health", icon: Code },
        { id: "audit", label: "System Audit", icon: Layout },
        { id: "notifications", label: "Admin Alerts", icon: Bell },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <header style={{ marginBottom: "3rem" }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Admin Console Settings</h1>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>Full platform orchestration and infrastructure parameters.</p>
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

                    <div style={{ margin: "2rem 0", height: "1px", background: "rgba(255,255,255,0.05)" }} />

                    <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                            <Shield size={20} color="#10B981" />
                            <h5 style={{ fontSize: "0.9rem", fontWeight: 800 }}>Account Health</h5>
                        </div>
                        <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "3px", marginBottom: "0.5rem" }}>
                            <div style={{ width: "95%", height: "100%", background: "#10B981", borderRadius: "3px" }} />
                        </div>
                        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>Verified • Secure • Pro Tier</p>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <AnimatePresence mode="wait">
                        {activeTab === "security" && (
                            <motion.div key="security" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <Card title="Infrastructure Security" variant="admin">
                                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                        <PreferenceToggle
                                            title="Enforce 2FA"
                                            desc="Require two-factor authentication for all Admin & Creator roles."
                                            checked={true}
                                        />
                                        <PreferenceToggle
                                            title="API Rate Limiting"
                                            desc="Prevent system exhaustion by limiting consumer orchestration nodes."
                                            checked={true}
                                        />
                                        <PreferenceToggle
                                            title="Audit Log Retention"
                                            desc="Automatically archive system logs after 90 days."
                                            checked={false}
                                        />
                                    </div>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", marginTop: "1rem" }}>
                        <Button variant="secondary" style={{ padding: "0 2rem" }}> Discard </Button>
                        <Button style={{ padding: "0 2.5rem" }}> Commit Global Changes </Button>
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
