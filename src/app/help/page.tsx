"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Card from "@/components/ui/Card";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Search, Book, PlayCircle, ShieldInfo, Cpu } from "lucide-react";

export default function HelpCenterPage() {
    const CATEGORIES = [
        { title: "Getting Started", icon: PlayCircle, desc: "Basics of orchestration and prompt logic." },
        { title: "Billing & Credits", icon: ShieldInfo, desc: "Managing your wallet and tiered access." },
        { title: "Agent Deep-Dive", icon: Cpu, desc: "Technical specs of Thinker/Planner nodes." },
        { title: "Developer Integrations", icon: Book, desc: "API, CLI, and Webhook configuration." },
    ];

    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 900, marginBottom: "2rem" }}>Help <span style={{ color: "var(--accent)" }}>Center</span></h1>
                    <div className="glass" style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem", borderRadius: "1.5rem", display: "flex", alignItems: "center", gap: "12px" }}>
                        <Search size={24} color="rgba(255,255,255,0.2)" />
                        <input type="text" placeholder="Search documentation, guides, and FAQs..." style={{ background: "none", border: "none", color: "white", outline: "none", fontSize: "1.1rem", width: "100%" }} />
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", maxWidth: "1200px", margin: "0 auto" }}>
                    {CATEGORIES.map((cat) => (
                        <Card key={cat.title} style={{ cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}>
                            <cat.icon size={32} color="var(--accent)" style={{ marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>{cat.title}</h3>
                            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", lineHeight: 1.6 }}>{cat.desc}</p>
                            <button style={{ background: "none", border: "none", color: "white", fontWeight: 700, fontSize: "0.85rem", marginTop: "1.5rem", cursor: "pointer", textAlign: "left" }}>Browse Category →</button>
                        </Card>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
