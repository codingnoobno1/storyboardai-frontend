"use client";

import React from "react";
import UsageHeatmap from "@/components/dashboard/UsageHeatmap";
import { ImageIcon, Edit3, Trash2, Eye, Plus, Search, Layout, Calendar, Layers } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";
import { motion, AnimatePresence } from "framer-motion";
const MOCK_STORYBOARDS = [
    { id: "1", title: "The Martian Chronicles", scenes: 12, mode: "Sci-Fi", lastEdit: "10m ago", complexity: "High", version: "v2.4" },
    { id: "2", title: "Global Finance Intro", scenes: 8, mode: "Professional", lastEdit: "2h ago", complexity: "Medium", version: "v1.1" },
    { id: "3", title: "Kids' Forest Adventure", scenes: 24, mode: "Fun", lastEdit: "3d ago", complexity: "Low", version: "v3.0" },
    { id: "4", title: "Smart City Logistics", scenes: 15, mode: "Professional", lastEdit: "1w ago", complexity: "High", version: "v1.2" },
];

export default function StoryboardsPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Narrative Vault</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>Your personal library of storyboards and narrative templates.</p>
                </div>
                <Button variant="primary" style={{ padding: "0 2rem" }}> <Plus size={18} /> New Storyboard </Button>
            </header>

            {/* Action Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <div className="glass" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 16px", minWidth: "300px" }}>
                        <Search size={18} color="rgba(255,255,255,0.3)" />
                        <input type="text" placeholder="Search narrative..." style={{ background: "none", border: "none", color: "white", outline: "none", fontSize: "0.9rem" }} />
                    </div>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "2.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
                        <AnimatePresence>
                            {MOCK_STORYBOARDS.map((sb, idx) => (
                                <motion.div
                                    key={sb.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Card
                                        title={sb.title}
                                        subtitle={`Version ${sb.version} • ${sb.lastEdit}`}
                                        style={{ height: "100%", display: "flex", flexDirection: "column" }}
                                    >
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "1.5rem 0", flex: 1 }}>
                                            <Badge variant="primary" style={{ background: "rgba(var(--accent-rgb), 0.1)", border: "1px solid rgba(var(--accent-rgb), 0.2)" }}>{sb.mode}</Badge>
                                            <Badge variant="secondary" style={{ fontSize: "0.75rem" }}>{sb.scenes} Scenes</Badge>
                                            <Badge variant="outline" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.75rem" }}>
                                                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: sb.complexity === "High" ? "#ef4444" : "#10b981" }} />
                                                {sb.complexity} Complexity
                                            </Badge>
                                        </div>

                                        <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                                            <Button variant="primary" size="sm" style={{ flex: 1 }}> <Edit3 size={16} /> Open Editor </Button>
                                            <Tooltip content="Quick Preview">
                                                <Button variant="secondary" size="icon"> <Eye size={16} /> </Button>
                                            </Tooltip>
                                            <Button variant="danger" size="icon" style={{ background: "rgba(239, 68, 68, 0.1)", border: "none" }}> <Trash2 size={16} color="#ef4444" /> </Button>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <UsageHeatmap />
                    <Card title="Quick Stats">
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(99, 102, 241, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                                    <ImageIcon size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Total Scenes</p>
                                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800 }}>142</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981" }}>
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Active Edits (24h)</p>
                                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800 }}>8</h4>
                                </div>
                            </div>
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
}
