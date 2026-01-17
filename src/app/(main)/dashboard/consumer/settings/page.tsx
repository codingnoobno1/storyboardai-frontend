"use client";

import React from "react";
import { User, Lock, Bell, Shield, Layout, Code } from "lucide-react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Switch from "@/components/ui/Switch";
import ApiKeyManager from "@/components/settings/ApiKeyManager";
import { motion, AnimatePresence } from "framer-motion";
export default function ConsumerSettingsPage() {
    const [activeTab, setActiveTab] = React.useState("profile");

    const tabs = [
        { id: "profile", label: "My Profile", icon: User },
        { id: "security", label: "Security", icon: Lock },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "preferences", label: "Preferences", icon: Layout },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <header style={{ marginBottom: "3rem" }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Personal Settings</h1>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>Customize your AI narrative experience and account preferences.</p>
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
                        {activeTab === "profile" && (
                            <motion.div key="profile" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <Card title="Account Profile" variant="consumer">
                                    <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "2rem" }}>
                                        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), var(--cyan))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 800 }}>TG</div>
                                        <div style={{ display: "flex", gap: "1rem" }}>
                                            <Button variant="secondary" size="sm"> Change Photo </Button>
                                            <Button variant="outline" size="sm"> Remove </Button>
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                                        <Input label="Display Name" defaultValue="Tushar Gupta" />
                                        <Input label="Email Address" defaultValue="tushar@example.com" />
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                        <Input label="Country" defaultValue="India" />
                                        <Input label="Timezone" defaultValue="IST (UTC+5:30)" />
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {activeTab === "preferences" && (
                            <motion.div key="preferences" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <Card title="Personal Preferences" variant="consumer">
                                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                        <PreferenceToggle
                                            title="Real-time Notifications"
                                            desc="Receive alerts for project completion and credit updates."
                                            checked={true}
                                        />
                                        <PreferenceToggle
                                            title="High-Bitrate Exports"
                                            desc="Prioritize quality over speed (+20% Credits)."
                                            checked={false}
                                        />
                                        <PreferenceToggle
                                            title="Auto-Save Storyboards"
                                            desc="Automatically save your work every 5 minutes."
                                            checked={true}
                                        />
                                    </div>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", marginTop: "1rem" }}>
                        <Button variant="secondary" style={{ padding: "0 2rem" }}> Discard </Button>
                        <Button style={{ padding: "0 2.5rem" }}> Save Changes </Button>
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
