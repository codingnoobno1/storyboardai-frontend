"use client";

import React from "react";
import { Zap, TrendingUp, AlertCircle } from "lucide-react";
import { useCreditStore } from "@/store/useStore";
import Link from "next/link";

export default function CreditBalanceWidget() {
    const { imageCredits, storyCredits, videoCredits } = useCreditStore();
    const totalCredits = imageCredits + storyCredits + videoCredits;
    const isLow = totalCredits < 50;

    return (
        <Link href="/dashboard/consumer/credits" style={{ textDecoration: "none" }}>
            <div
                className="glass"
                style={{
                    position: "fixed",
                    top: "2rem",
                    right: "2rem",
                    padding: "1rem 1.5rem",
                    borderRadius: "16px",
                    background: isLow
                        ? "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05))"
                        : "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))",
                    border: isLow
                        ? "1px solid rgba(239, 68, 68, 0.3)"
                        : "1px solid rgba(99, 102, 241, 0.2)",
                    boxShadow: isLow
                        ? "0 4px 16px rgba(239, 68, 68, 0.2)"
                        : "0 4px 16px rgba(99, 102, 241, 0.15)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    zIndex: 999,
                    minWidth: "200px",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = isLow
                        ? "0 8px 24px rgba(239, 68, 68, 0.3)"
                        : "0 8px 24px rgba(99, 102, 241, 0.25)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = isLow
                        ? "0 4px 16px rgba(239, 68, 68, 0.2)"
                        : "0 4px 16px rgba(99, 102, 241, 0.15)";
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: isLow ? "rgba(239, 68, 68, 0.2)" : "rgba(99, 102, 241, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {isLow ? (
                            <AlertCircle size={22} color="#ef4444" />
                        ) : (
                            <Zap size={22} color="#6366f1" />
                        )}
                    </div>
                    <div>
                        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.25rem" }}>
                            {isLow ? "Credits Low" : "Power Credits"}
                        </p>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: isLow ? "#ef4444" : "#6366f1" }}>
                                {totalCredits}
                            </h3>
                            {isLow && (
                                <span style={{ fontSize: "0.7rem", color: "#ef4444", fontWeight: 600 }}>
                                    Top up now →
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
