"use client";

import React from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontWeight: 700, cursor: "pointer" }}>
            <Globe size={16} />
            <span>EN</span>
        </div>
    );
}
