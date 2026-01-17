"use client";

import { Bell, Settings, Search } from "lucide-react";
import React, { useState } from "react";
import Avatar from "../ui/Avatar";
import { useAuth } from "@/context/AuthContext";
import Popover from "@/components/ui/Popover"; // Assuming we'll build this or use a simple div

export default function NotificationCenter() {
    const { user } = useAuth();
    const [hasNotifications, setHasNotifications] = useState(true);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div className="glass" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 16px", minWidth: "300px" }}>
                <Search size={18} color="rgba(255,255,255,0.3)" />
                <input
                    type="text"
                    placeholder="Search projects..."
                    style={{ background: "none", border: "none", outline: "none", color: "white", width: "100%", fontSize: "0.9rem" }}
                />
            </div>

            <div style={{ position: "relative", cursor: "pointer" }}>
                <Bell size={22} color="white" />
                {hasNotifications && (
                    <div style={{ position: "absolute", top: "-2px", right: "-2px", width: "10px", height: "10px", background: "#ef4444", borderRadius: "50%", border: "2px solid #050505" }} />
                )}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "2rem" }}>
                <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "0.9rem", fontWeight: 700 }}>{user?.name || user?.username || "Guest"}</p>
                    <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>Consumer Tier</p>
                </div>
                <Avatar name={user?.name || user?.username || "User"} src={user?.avatar} />
            </div>
        </div>
    );
}
