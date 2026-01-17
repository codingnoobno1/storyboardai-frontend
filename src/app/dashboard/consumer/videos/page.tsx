"use client";

import React from "react";
import ActivityChart from "@/components/dashboard/ActivityChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Film, Play, Download, Trash2, Search, Clock, Share2 } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";
import { motion, AnimatePresence } from "framer-motion";

const MOCK_VIDEOS = [
    { id: "1", title: "Cyber Noir Action", date: "2025-12-20", duration: "0:45", status: "Ready", thumbnail: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400", size: "45MB" },
    { id: "2", title: "Space Colony Doc", date: "2025-12-19", duration: "1:20", status: "Ready", thumbnail: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=400", size: "120MB" },
    { id: "3", title: "Physics 101 Explainer", date: "2025-12-15", duration: "2:15", status: "Archive", thumbnail: "https://images.unsplash.com/photo-1532094349884-543bb1185043?auto=format&fit=crop&q=80&w=400", size: "85MB" },
    { id: "4", title: "Samurai Duel Concept", date: "2025-12-10", duration: "0:30", status: "Ready", thumbnail: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=400", size: "22MB" },
    { id: "5", title: "Organic Chemistry 3", date: "2025-11-28", duration: "1:45", status: "Processing", thumbnail: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=400", size: "-" },
];

export default function VideosPage() {
    const [filter, setFilter] = React.useState("All");

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <header style={{ marginBottom: "3rem" }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>My Productions</h1>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>Export, share, and manage your rendered video masterpieces.</p>
            </header>

            {/* Action Bar */}
            <div className="glass" style={{ padding: "1rem 1.5rem", borderRadius: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, maxWidth: "400px" }}>
                    <Search size={18} color="rgba(255,255,255,0.3)" />
                    <input
                        type="text"
                        placeholder="Search videos by title..."
                        style={{ background: "none", border: "none", outline: "none", color: "white", width: "100%", fontSize: "0.95rem" }}
                    />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ display: "flex", gap: "8px" }}>
                        {["All", "Ready", "Processing", "Archive"].map(tag => (
                            <button
                                key={tag}
                                onClick={() => setFilter(tag)}
                                style={{
                                    padding: "6px 12px",
                                    borderRadius: "8px",
                                    background: filter === tag ? "var(--accent)" : "rgba(255,255,255,0.05)",
                                    border: "none",
                                    color: filter === tag ? "white" : "rgba(255,255,255,0.4)",
                                    fontSize: "0.8rem",
                                    fontWeight: 700,
                                    cursor: "pointer"
                                }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "2.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
                        <AnimatePresence>
                            {MOCK_VIDEOS.map((video, idx) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Card padding="0" style={{ overflow: "hidden", height: "100%", position: "relative" }}>
                                        <div style={{ position: "relative", aspectRatio: "16/9", background: "rgba(0,0,0,0.3)" }}>
                                            <img src={video.thumbnail} alt={video.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
                                            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--accent)", border: "none", color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}
                                                >
                                                    <Play size={24} fill="white" />
                                                </motion.button>
                                            </div>
                                            <div style={{ position: "absolute", bottom: "10px", right: "10px", background: "rgba(0,0,0,0.6)", padding: "2px 8px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 800 }}>
                                                {video.duration}
                                            </div>
                                            <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                                                <Badge variant={video.status === "Ready" ? "success" : video.status === "Processing" ? "primary" : "secondary"}>
                                                    {video.status}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div style={{ padding: "1.2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                            <div>
                                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>{video.title}</h3>
                                                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>
                                                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} /> {video.date}</span>
                                                    <span>●</span>
                                                    <span>{video.size}</span>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", gap: "8px" }}>
                                                <Button variant="primary" style={{ flex: 1, fontSize: "0.85rem" }}> <Download size={16} /> Export </Button>
                                                <Tooltip content="Share Link">
                                                    <Button variant="secondary" size="icon"> <Share2 size={16} /> </Button>
                                                </Tooltip>
                                                <Button variant="outline" size="icon" style={{ borderColor: "rgba(239, 68, 68, 0.2)", color: "#ef4444" }}>
                                                    <Trash2 size={16} />
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {MOCK_VIDEOS.length === 0 && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem", opacity: 0.5 }}>
                            <Film size={64} style={{ marginBottom: "1.5rem" }} />
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>No videos found</h2>
                            <p>Start generating your first AI production today.</p>
                        </div>
                    )}
                </div>

                <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <ActivityChart />
                    <RecentActivity />
                    <Card title="Storage Stats">
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                                <span style={{ color: "rgba(255,255,255,0.4)" }}>Space Used</span>
                                <span style={{ fontWeight: 700 }}>245 MB / 2 GB</span>
                            </div>
                            <div style={{ width: "100%", height: "8px", borderRadius: "4px", background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
                                <div style={{ width: "12%", height: "100%", background: "var(--accent)" }} />
                            </div>
                            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
                                Archive videos to free up high-speed processing slots.
                            </p>
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
}
