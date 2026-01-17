"use client";

import { motion } from "framer-motion";
import { Play, MoreVertical, Calendar, Clock } from "lucide-react";

interface ProjectCardProps {
    title: string;
    status: "Completed" | "Processing" | "Draft";
    thumbnail: string;
    date: string;
}

export default function ProjectCard({ title, status, thumbnail, date }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass"
            style={{ overflow: "hidden", position: "relative" }}
        >
            <div style={{ height: "160px", background: "rgba(0,0,0,0.2)", position: "relative" }}>
                {thumbnail ? (
                    <img src={thumbnail} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.1)" }}>
                        <Play size={48} />
                    </div>
                )}
                <div style={{ position: "absolute", top: "12px", right: "12px" }}>
                    <span style={{
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "0.7rem",
                        fontWeight: "bold",
                        background: status === "Completed" ? "rgba(16, 185, 129, 0.2)" : status === "Processing" ? "rgba(245, 158, 11, 0.2)" : "rgba(255,255,255,0.1)",
                        color: status === "Completed" ? "#10B981" : status === "Processing" ? "#F59E0B" : "rgba(255,255,255,0.6)",
                        border: `1px solid ${status === "Completed" ? "#10B98144" : status === "Processing" ? "#F59E0B44" : "rgba(255,255,255,0.1)"}`
                    }}>
                        {status}
                    </span>
                </div>
            </div>

            <div style={{ padding: "1.2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.8rem" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "600" }}>{title}</h4>
                    <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>
                        <MoreVertical size={18} />
                    </button>
                </div>

                <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={14} /> {date}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={14} /> 2m 30s</span>
                </div>

                <button
                    className="btn-secondary"
                    style={{ width: "100%", marginTop: "1.2rem", padding: "8px", fontSize: "0.9rem" }}
                    onClick={() => window.location.href = `/storyboard/1`}
                >
                    Open Editor
                </button>
            </div>
        </motion.div>
    );
}
