"use client";

import React from "react";
import RoleSidebar from "@/components/navigation/Sidebar";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Settings, Sliders, Volume2, Maximize2, Layers, Cpu, ShieldCheck } from "lucide-react";

export default function ProjectSettingsPage() {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
            <RoleSidebar />
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                        <Breadcrumb items={[{ label: "Projects", path: "/dashboard" }, { label: "Settings" }]} />
                        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Project Architect</h1>
                    </div>
                    <NotificationCenter />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "2.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                        <Card title="Orchestration Logic">
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                <DivergentSetting
                                    label="Agent Thinking Depth"
                                    desc="Set to Max for complex sci-fi/fantasy narratives."
                                    icon={Cpu}
                                    options={["Standard", "Deep", "Infinite"]}
                                    current="Deep"
                                />
                                <DivergentSetting
                                    label="Visual Fidelity Seed"
                                    desc="Lock the seed to maintain consistency across scenes."
                                    icon={Layers}
                                    options={["Random", "Locked (8291)", "Legacy"]}
                                    current="Locked (8291)"
                                />
                                <DivergentSetting
                                    label="Audio Mixing"
                                    desc="Prioritize dialogue clarity or cinematic score."
                                    icon={Volume2}
                                    options={["Dialogue", "Symphonic", "Balance"]}
                                    current="Balance"
                                />
                            </div>
                        </Card>

                        <Card title="Distribution Parameters">
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                <Input label="Slug / URL" defaultValue="cyber-noir-2077" />
                                <Input label="License" defaultValue="Commercial-Pro" />
                            </div>
                        </Card>
                    </div>

                    <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <Card title="Guard-01 Compliance">
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
                                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <ShieldCheck size={18} color="#10B981" />
                                    <span style={{ color: "#10B981", fontWeight: 700 }}>VERIFIED SAFE</span>
                                </div>
                                <p>This project follows our Ethical Narrative Motif guidelines. No restricted motifs detected.</p>
                            </div>
                        </Card>
                        <Button style={{ width: "100%", padding: "1.2rem" }}> Save Architect Profile </Button>
                        <Button variant="danger" style={{ width: "100%", opacity: 0.5 }}> Archive Project </Button>
                    </aside>
                </div>
            </main>
        </div>
    );
}

function DivergentSetting({ label, desc, icon: Icon, options, current }: any) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)" }}>
                    <Icon size={20} />
                </div>
                <div>
                    <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>{label}</h5>
                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>{desc}</p>
                </div>
            </div>
            <div className="glass" style={{ display: "flex", gap: "4px", padding: "4px", borderRadius: "10px" }}>
                {options.map((opt: any) => (
                    <button key={opt} style={{ padding: "6px 12px", borderRadius: "8px", background: opt === current ? 'var(--accent)' : 'transparent', border: 'none', color: 'white', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}> {opt} </button>
                ))}
            </div>
        </div>
    );
}
