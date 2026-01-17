"use client";

import { useAuth } from "@/context/AuthContext";
import { Sparkles, ArrowRight } from "lucide-react";
import React from "react";

export default function WelcomeBanner() {
    const { user } = useAuth();

    return (
        <div className="glass" style={{
            padding: "2.5rem",
            background: "linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), transparent)",
            border: "1px solid rgba(var(--accent-rgb), 0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            overflow: "hidden",
            position: "relative"
        }}>
            <div style={{ position: "absolute", top: "-20px", right: "-20px", opacity: 0.1 }}>
                <Sparkles size={120} color="var(--accent)" />
            </div>

            <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.8rem", letterSpacing: "-1px" }}>
                    Welcome back, {user?.name?.split(" ")[0] || "Story Architect"}! 🚀
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", maxWidth: "500px", lineHeight: 1.5 }}>
                    Your 'Cyber Noir' project is currently being processed by the Planner Agent. Check the Status logs for details.
                </p>
            </div>

            <button className="btn-primary" style={{ display: "flex", gap: "10px", alignItems: "center", padding: "14px 28px" }}>
                Quick Create <ArrowRight size={18} />
            </button>
        </div>
    );
}
