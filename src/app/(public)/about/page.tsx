"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Card from "@/components/ui/Card";

export default function AboutPage() {
    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 900, marginBottom: "2rem" }}>Our <span style={{ color: "var(--accent)" }}>Mission</span></h1>
                    <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "4rem" }}>
                        To bridge the gap between imagination and production by leveraging the world's most advanced multi-agent AI ecosystems.
                        We believe that every story deserves to be seen, not just told.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
                        <Card title="Agentic Architecture">
                            <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>We don't just use one AI. We orchestrate a cluster of specialized agents—Thinkers, Planners, and Executors—to ensure your vision is executed with technical precision.</p>
                        </Card>
                        <Card title="Democratizing Production">
                            <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>What used to take a studio of 50 artists and 6 months now takes one creator and a single afternoon. We are rebuilding the future of media production.</p>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
