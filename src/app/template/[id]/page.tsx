"use client";

import React from "react";
import RoleSidebar from "@/components/navigation/Sidebar";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import TemplateReviews from "@/components/store/TemplateReviews";
import Rating from "@/components/ui/Rating";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Download, Share2, Zap, ShieldCheck, ShoppingCart } from "lucide-react";

export default function TemplateDetailPage({ params }: { params: { id: string } }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
            <RoleSidebar />
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                        <Breadcrumb items={[{ label: "Marketplace", path: "/marketplace" }, { label: "Neon Tokyo 2077" }]} />
                        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Neon Tokyo 2077 Node</h1>
                    </div>
                    <NotificationCenter />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "3rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                        <div style={{ aspectRatio: "2/1", borderRadius: "24px", overflow: "hidden", background: "rgba(0,0,0,0.5)", position: "relative" }}>
                            <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} alt="" />
                            <div style={{ position: "absolute", bottom: "30px", left: "30px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                                    <Rating value={5} />
                                    <span style={{ color: "white", fontWeight: 800 }}>Top Architecture</span>
                                </div>
                                <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Cyberpunk Pro Logic</h2>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Architect's Note</h3>
                            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                                This orchestration node is optimized for high-contrast, atmospheric sci-fi narratives. It utilizes a specialized Thinker-X sub-module that deep-parses cyberpunk jargon into visual prompts for max immersion.
                            </p>
                        </div>

                        <TemplateReviews />
                    </div>

                    <aside style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                        <Card title="Acquisition" padding="2rem">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.5rem" }}>
                                <span style={{ fontSize: "2.5rem", fontWeight: 900 }}>₹149</span>
                                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.3)" }}>Full License</span>
                            </div>
                            <Button style={{ width: "100%", padding: "1.5rem", marginBottom: "1rem" }}> <ShoppingCart size={20} /> Purchase Node </Button>
                            <Button variant="secondary" style={{ width: "100%" }}> <Share2 size={18} /> share </Button>
                        </Card>

                        <Card title="Node Specifications">
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}> <span>Thinker Depth</span> <span style={{ color: "white" }}>Infinite</span> </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}> <span>Compatibility</span> <span style={{ color: "white" }}>v2.4+</span> </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}> <span>Visual Engine</span> <span style={{ color: "white" }}>SDXL Ultra</span> </div>
                                <div style={{ display: "flex", gap: "10px", marginTop: "1rem", color: "#10B981", fontWeight: 700 }}> <ShieldCheck size={16} /> Verified Security </div>
                            </div>
                        </Card>
                    </aside>
                </div>
            </main>
        </div>
    );
}
