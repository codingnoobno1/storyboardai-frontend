"use client";

import React from "react";
import { Filter, Search } from "lucide-react";
import Badge from "../ui/Badge";

const CATEGORIES = ["All", "Sci-Fi", "Noir", "Manga", "Education", "Horror", "Business"];

export default function CategoryFilter() {
    const [active, setActive] = React.useState("All");

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="glass" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", minWidth: "400px" }}>
                    <Search size={18} color="rgba(255,255,255,0.3)" />
                    <input
                        type="text"
                        placeholder="Search templates, styles, or creators..."
                        style={{ background: "none", border: "none", outline: "none", color: "white", width: "100%", fontSize: "0.95rem" }}
                    />
                </div>
                <button style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "12px 20px", color: "white", cursor: "pointer", fontWeight: 600 }}>
                    <Filter size={18} /> Filters
                </button>
            </div>

            <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "5px" }}>
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        style={{
                            padding: "8px 20px",
                            borderRadius: "20px",
                            background: active === cat ? "var(--accent)" : "rgba(255,255,255,0.03)",
                            border: `1px solid ${active === cat ? "var(--accent)" : "rgba(255,255,255,0.1)"}`,
                            color: active === cat ? "white" : "rgba(255,255,255,0.6)",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.2s",
                            whiteSpace: "nowrap"
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}
