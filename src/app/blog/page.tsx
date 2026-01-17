"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Card from "@/components/ui/Card";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function BlogPage() {
    const POSTS = [
        { title: "The Rise of Agentic Orchestration", date: "Dec 18, 2025", author: "Dr. AI", thumb: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=400" },
        { title: "Directing AI: A Creator's Manual", date: "Dec 12, 2025", author: "Sarah M.", thumb: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" },
        { title: "Behind the Scenes ofGuard-01", date: "Nov 28, 2025", author: "Guard Team", thumb: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400" },
    ];

    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h1 style={{ fontSize: "3.5rem", fontWeight: 900, marginBottom: "4rem" }}>Orchestration <span style={{ color: "var(--accent)" }}>Insights</span></h1>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
                        {POSTS.map((post) => (
                            <Card key={post.title} padding="0" style={{ overflow: "hidden" }}>
                                <img src={post.thumb} style={{ width: "100%", height: "200px", objectFit: "cover" }} alt="" />
                                <div style={{ padding: "1.5rem" }}>
                                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>{post.date} • {post.author}</span>
                                    <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginTop: "0.5rem", marginBottom: "1rem" }}>{post.title}</h3>
                                    <button style={{ background: "none", border: "none", color: "var(--accent)", fontWeight: 700, cursor: "pointer", fontSize: "0.9rem" }}>Read Article →</button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
