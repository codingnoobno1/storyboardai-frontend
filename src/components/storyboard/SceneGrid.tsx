"use client";

import React from "react";
import { List, Grid, Maximize2, Trash2, RotateCcw, Plus } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { motion } from "framer-motion";

export default function SceneGrid() {
    const SCENES = [
        { id: 1, prompt: "Wide shot of a neon city with heavy rain.", status: "Generated", thumbnail: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400" },
        { id: 2, prompt: "Close up of the protagonist's eyes reflecting neon.", status: "Refining", thumbnail: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=400" },
        { id: 3, prompt: "Aerial view of flying vehicles between skyscrapers.", status: "Pending", thumbnail: "" },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800 }}>Visual Script Nodes</h3>
                <div style={{ display: "flex", gap: "8px" }}>
                    <button style={{ background: "rgba(255,255,255,0.05)", border: "none", color: "white", padding: "8px", borderRadius: "8px", cursor: "pointer" }}> <Grid size={16} /> </button>
                    <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", padding: "8px", borderRadius: "8px", cursor: "pointer" }}> <List size={16} /> </button>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
                {SCENES.map((scene, i) => (
                    <motion.div
                        key={scene.id}
                        whileHover={{ y: -5 }}
                    >
                        <Card padding="0" style={{ overflow: "hidden", position: "relative" }}>
                            <div style={{ aspectRatio: "16/9", background: "rgba(0,0,0,0.3)", position: "relative" }}>
                                {scene.thumbnail ? (
                                    <img src={scene.thumbnail} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                                ) : (
                                    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.2)" }}>No Preview Yet</div>
                                )}
                                <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                                    <Badge variant={scene.status === "Generated" ? "success" : "secondary"}>{scene.status}</Badge>
                                </div>
                            </div>
                            <div style={{ padding: "1rem" }}>
                                <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", fontWeight: 800, textTransform: "uppercase" }}>SCENE {i + 1}</span>
                                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", marginTop: "4px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                    {scene.prompt}
                                </p>
                                <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "1rem" }}>
                                    <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}><RotateCcw size={16} /></button>
                                    <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}><Maximize2 size={16} /></button>
                                    <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}><Trash2 size={16} /></button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
                {/* Add Scene Card */}
                <div style={{ aspectRatio: "1.7/1", borderRadius: "20px", border: "2px dashed rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}>
                    <Plus size={32} color="rgba(255,255,255,0.2)" />
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.2)", marginTop: "10px", fontWeight: 700 }}>Inject New Scene Node</span>
                </div>
            </div>
        </div>
    );
}
