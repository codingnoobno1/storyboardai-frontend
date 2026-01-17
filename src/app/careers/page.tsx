"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function CareersPage() {
    const JOBS = [
        { title: "Agentic Systems Architect", team: "Engineering", type: "Full-time", loc: "Remote" },
        { title: "Visual Narrative Designer", team: "Creative", type: "Full-time", loc: "SF / Hybrid" },
        { title: "Ethical AI Researcher", team: "Trust & Safety", type: "Contract", loc: "Remote" },
    ];

    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 900, marginBottom: "1rem" }}>Build the <span style={{ color: "var(--accent)" }}>Future</span></h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem" }}>Join the team democratizing cinematic production through AI orchestration.</p>
                </div>

                <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {JOBS.map((job) => (
                        <Card key={job.title} padding="1.5rem">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>{job.title}</h3>
                                    <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                                        <Badge variant="secondary">{job.team}</Badge>
                                        <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>{job.type} • {job.loc}</span>
                                    </div>
                                </div>
                                <Button variant="outline"> Apply Now </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
