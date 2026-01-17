"use client";

import React from "react";
import RoleSidebar from "@/components/navigation/Sidebar";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import VideoTimeline from "@/components/video/VideoTimeline";
import VideoExportConfig from "@/components/video/VideoExportConfig";
import SceneGrid from "@/components/storyboard/SceneGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Play, Download, Share2, Info } from "lucide-react";
import Button from "@/components/ui/Button";

export default function VideoDetailPage({ params }: { params: { id: string } }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
            <RoleSidebar />
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                        <Breadcrumb items={[{ label: "Videos", path: "/videos" }, { label: "Project Alpha" }]} />
                        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Production Master</h1>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <Button variant="secondary"> <Share2 size={18} /> Share </Button>
                        <Button> <Download size={18} /> Master Export </Button>
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "2.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div style={{ aspectRatio: "16/9", background: "black", borderRadius: "24px", overflow: "hidden", position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Play size={64} color="var(--accent)" fill="var(--accent)" style={{ opacity: 0.8 }} />
                            </div>
                            <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                                <div style={{ width: "40%", height: "100%", background: "var(--accent)" }} />
                            </div>
                        </div>
                        <VideoTimeline />
                        <SceneGrid />
                    </div>

                    <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <VideoExportConfig />
                        <div className="glass" style={{ padding: "1.5rem", borderRadius: "20px" }}>
                            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                                <Info size={18} color="var(--accent)" /> Production Specs
                            </h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}> <span>Codec</span> <span style={{ color: "white" }}>H.265 / HEVC</span> </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}> <span>Frames</span> <span style={{ color: "white" }}>1,080</span> </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}> <span>Colorspace</span> <span style={{ color: "white" }}>Rec.709</span> </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}> <span>Agent Depth</span> <span style={{ color: "white" }}>Tier 3</span> </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
