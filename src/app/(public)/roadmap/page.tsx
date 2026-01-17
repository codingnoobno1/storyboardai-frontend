"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Card from "@/components/ui/Card";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Check, Clock } from "lucide-react";

export default function RoadmapPage() {
    const ROADMAP = [
        { quarter: "Q4 2025", title: "Industrial Launch", status: "Completed", items: ["Multi-Agent Orchestration", "Razorpay Integration", "Creator Marketplace v1"] },
        { quarter: "Q1 2026", title: "Voice & Audio Evolution", status: "In Progress", items: ["Cloned Voice Synthesizer", "Dolby Atmos Mixing", "Auto-SFX Injection"] },
        { quarter: "Q2 2026", title: "Global Expansion", status: "Planned", items: ["Multi-language Localization", "On-Prem Clusters", "Studio Partnership SDK"] },
    ];

    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 900, marginBottom: "2rem" }}>Product <span style={{ color: "var(--accent)" }}>Roadmap</span></h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem" }}>Our vision for the next generation of AI-driven media production.</p>
                </div>

                <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "4rem" }}>
                    {ROADMAP.map((step) => (
                        <div key={step.quarter} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "3rem" }}>
                            <div style={{ textAlign: "right", marginTop: "1rem" }}>
                                <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--accent)" }}>{step.quarter}</h2>
                                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "white", opacity: 0.3 }}>PHASE-{step.quarter[1]}</span>
                            </div>
                            <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: step.status === 'Completed' ? "4px solid var(--accent)" : "4px solid rgba(255,255,255,0.05)" }}>
                                <div style={{ position: "absolute", left: "-10px", top: "10px", width: "16px", height: "16px", borderRadius: "50%", background: step.status === 'Completed' ? 'var(--accent)' : '#1a1a2e', border: "4px solid var(--bg)" }} />
                                <Card>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                                        <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>{step.title}</h3>
                                        <span style={{ fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", color: step.status === 'Completed' ? '#10B981' : '#F59E0B' }}>{step.status}</span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                        {step.items.map(item => (
                                            <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}>
                                                {step.status === 'Completed' ? <Check size={16} color="#10B981" /> : <Clock size={16} />}
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
