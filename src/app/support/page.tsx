"use client";

import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { MessageSquare, LifeBuoy, Zap, ChevronRight } from "lucide-react";

export default function SupportPage() {
    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 900, marginBottom: "2rem" }}>Human <span style={{ color: "var(--accent)" }}>Support</span></h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem" }}>When the agents can't help, our architecture experts will.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "400px 1fr", gap: "4rem", maxWidth: "1200px", margin: "0 auto" }}>
                    <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <SupportCard icon={MessageSquare} title="Live Chat" desc="Average response: 5 mins" status="Online" />
                        <SupportCard icon={LifeBuoy} title="Priority Ticket" desc="For Pro & Enterprise users" status="24/7" />
                        <SupportCard icon={Zap} title="Agent Recovery" desc="Direct engineer escalation" status="Verified Only" />
                    </aside>

                    <Card title="Start a Support Transmission">
                        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <Input label="Name" placeholder="Tushar Gupta" />
                                <Input label="Category" placeholder="e.g. Generation Error" />
                            </div>
                            <Input label="Project ID (Optional)" placeholder="#SBAI-8291" />
                            <TextArea label="Description of Incident" rows={8} />
                            <Button style={{ width: "100%", padding: "1.2rem" }}> Initialize Transmission </Button>
                        </form>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function SupportCard({ icon: Icon, title, desc, status }: any) {
    return (
        <div className="glass" style={{ padding: "1.5rem", borderRadius: "1.2rem", display: "flex", gap: "15px", alignItems: "center" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(var(--accent-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                <Icon size={24} />
            </div>
            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800 }}>{title}</h4>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>{desc}</p>
            </div>
            <span style={{ fontSize: "0.7rem", fontWeight: 900, color: "#10B981", textTransform: "uppercase" }}>{status}</span>
        </div>
    );
}
