"use client";

import React from "react";
import { Plus, Sparkles } from "lucide-react";
import { useProjectContext } from "@/context/ProjectContext";

export default function QuickCreateWidget() {
    const { openCreateModal } = useProjectContext();

    return (
        <div
            onClick={openCreateModal}
            className="glass"
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--consumer-accent), #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 8px 32px rgba(99, 102, 241, 0.4), 0 0 0 0 rgba(99, 102, 241, 0.7)",
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                zIndex: 1000,
                transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 12px 48px rgba(99, 102, 241, 0.6)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(99, 102, 241, 0.4)";
            }}
        >
            <Plus size={32} color="white" strokeWidth={3} />

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        box-shadow: 0 8px 32px rgba(99, 102, 241, 0.4), 0 0 0 0 rgba(99, 102, 241, 0.7);
                    }
                    50% {
                        box-shadow: 0 8px 32px rgba(99, 102, 241, 0.4), 0 0 0 20px rgba(99, 102, 241, 0);
                    }
                }
            `}</style>
        </div>
    );
}
