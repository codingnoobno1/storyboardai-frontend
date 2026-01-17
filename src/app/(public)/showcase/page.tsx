"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Card from "@/components/ui/Card";
import Rating from "@/components/ui/Rating";
import Avatar from "@/components/ui/Avatar";
import { Download, Share2, Heart, MessageSquare } from "lucide-react";

export default function ShowcasePage() {
    const COMMUNITY_PROJS = [
        { title: "Neon Tokyo 2077", creator: "CyberGhost", rating: 5, likes: 1422, thumb: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=600" },
        { title: "The Martian Chronicles", creator: "Alex R.", rating: 4, likes: 822, thumb: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=600" },
        { title: "Samurai Duel Concept", creator: "Studio-X", rating: 5, likes: 2100, thumb: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=600" },
    ];

    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <h1 style={{ fontSize: "4.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Community <span style={{ color: "var(--accent)" }}>Showcase</span></h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem" }}>Explore high-tier productions orchestrated by the global creative cluster.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem", maxWidth: "1400px", margin: "0 auto" }}>
                    {COMMUNITY_PROJS.map((proj) => (
                        <Card key={proj.title} padding="0" style={{ overflow: "hidden" }}>
                            <div style={{ position: "relative" }}>
                                <img src={proj.thumb} style={{ width: "100%", height: "250px", objectFit: "cover" }} alt="" />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", display: "flex", alignItems: "flex-end", padding: "1.5rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                        <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>{proj.title}</h3>
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <button style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white", padding: "8px", borderRadius: "8px" }}> <Heart size={18} fill="white" /> </button>
                                            <button style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white", padding: "8px", borderRadius: "8px" }}> <Share2 size={18} /> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Avatar size="sm" initials={proj.creator[0]} />
                                    <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{proj.creator}</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <Rating value={proj.rating} size={14} />
                                    <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>({proj.likes} likes)</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
