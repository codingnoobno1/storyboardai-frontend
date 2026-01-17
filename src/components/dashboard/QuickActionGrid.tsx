"use client";

import React from "react";
import { Rocket, Book, Video, Image as ImageIcon, Zap, Share2 } from "lucide-react";
import Card from "../ui/Card";

const ACTIONS = [
    { icon: Rocket, title: "New Story", desc: "Text-to-Story", color: "var(--accent)" },
    { icon: Book, title: "Script Study", desc: "View Storyboards", color: "#10B981" },
    { icon: Video, title: "Video Render", desc: "Generate MP4", color: "#F59E0B" },
    { icon: ImageIcon, title: "Asset Gen", desc: "Image credits", color: "#EC4899" },
    { icon: Zap, title: "Fast Mode", desc: "Reduce latency", color: "#6366F1" },
    { icon: Share2, title: "Exports", desc: "Share project", color: "#06B6D4" },
];

export default function QuickActionGrid() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {ACTIONS.map((action, i) => (
                <Card key={i} padding="1.2rem" style={{ cursor: "pointer", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${action.color}11`, color: action.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <action.icon size={20} />
                        </div>
                        <div>
                            <h5 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{action.title}</h5>
                            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{action.desc}</p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
