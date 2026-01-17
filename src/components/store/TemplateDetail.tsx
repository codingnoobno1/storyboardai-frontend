"use client";

import React from "react";
import { Star, ShoppingCart, User, ArrowLeft, ShieldCheck, Download } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Tabs from "../ui/Tabs";
import ReviewSection from "./ReviewSection";

interface TemplateDetailProps {
    id: string;
    onBack: () => void;
}

export default function TemplateDetail({ id, onBack }: TemplateDetailProps) {
    // Mock data fetching based on ID
    const template = {
        name: "Neon Tokyo 2077",
        creator: "Synthwave",
        price: 40,
        rating: 5.0,
        downloads: "2.4k+",
        description: "The ultimate cyberpunk aesthetic for your storyboards. High contrast, neon glow effects, and futuristic framing logic optimized for Sci-Fi narratives.",
        features: [
            "Custom Glow-Node Orchestration",
            "Futuristic Font Presets",
            "Cyber-Grid Scene Layouts",
            "Dynamic Glitch Transitions"
        ]
    };

    const tabs = [
        {
            id: "details", label: "Details", content: (
                <div style={{ padding: "1rem 0" }}>
                    <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{template.description}</p>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Key Features</h4>
                    <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", listStyle: "none", padding: 0 }}>
                        {template.features.map((f, i) => (
                            <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>
                                <ShieldCheck size={16} color="var(--accent)" /> {f}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        },
        { id: "reviews", label: "Reviews (124)", content: <ReviewSection /> },
        { id: "changelog", label: "Changelog", content: <p style={{ color: "rgba(255,255,255,0.4)" }}>Version 2.0: Added dual-tone neon support.</p> }
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <button onClick={onBack} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "0.9rem" }}>
                <ArrowLeft size={16} /> Back to Store
            </button>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "3rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div style={{ width: "100%", aspectRatio: "16/9", background: "rgba(0,0,0,0.5)", borderRadius: "24px", overflow: "hidden", position: "relative" }}>
                        <img src="https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=1200" alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                        <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                            <Badge variant="success">BEST SELLER</Badge>
                        </div>
                    </div>

                    <Tabs tabs={tabs} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <Card>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div>
                                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.2rem" }}>{template.name}</h2>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>
                                    <span>by <b>{template.creator}</b></span>
                                    <span style={{ color: "var(--accent)" }}>●</span>
                                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                        <Star size={14} fill="#F59E0B" color="#F59E0B" />
                                        <b style={{ color: "white" }}>{template.rating}</b>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem", background: "rgba(255,255,255,0.03)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <div>
                                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase" }}>One-time Purchase</p>
                                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>{template.price} Credits</h3>
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>DOWNLOADS</p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: 700 }}>
                                        <Download size={14} /> {template.downloads}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <Button style={{ width: "100%", height: "56px" }}> <ShoppingCart size={20} /> Purchase & Use </Button>
                                <Button variant="secondary" style={{ width: "100%", height: "56px" }}> Add to Wishlist </Button>
                            </div>

                            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", textAlign: "center", lineHeight: 1.4 }}>
                                Includes commercial rights for all generated content. <br /> Works across all Global Modes.
                            </p>
                        </div>
                    </Card>

                    <Card title="About Creator">
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(45deg, #FF3D00, #FFEA00)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>S</div>
                            <div>
                                <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>{template.creator}</h5>
                                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>Pro Level Creator • 12 Templates</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
