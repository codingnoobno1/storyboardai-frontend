"use client";

import React from "react";
import { Search, Plus, Terminal, Settings, Layout } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandMenu({ isOpen, onClose, onAction }: { isOpen: boolean, onClose: () => void, onAction: (cmd: string) => void }) {
    if (!isOpen) return null;

    const COMMANDS = [
        { id: "new", label: "Create New Project", icon: Plus, shortcut: "⌘N" },
        { id: "settings", label: "Open Settings", icon: Settings, shortcut: "⌘S" },
        { id: "dashboard", label: "Go to Dashboard", icon: Layout, shortcut: "⌘D" },
        { id: "terminal", label: "Run Agent Command", icon: Terminal, shortcut: "⌘K" },
    ];

    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)" }} />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="glass"
                style={{ width: "100%", maxWidth: "600px", padding: "1rem", borderRadius: "1.5rem", position: "relative" }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0.8rem", borderBottom: "1px solid rgba(255,255,255,0.05)", marginBottom: "0.5rem" }}>
                    <Search size={20} color="var(--accent)" />
                    <input
                        autoFocus
                        type="text"
                        placeholder="Type a command or search assets..."
                        style={{ background: "none", border: "none", color: "white", outline: "none", fontSize: "1.1rem", width: "100%" }}
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {COMMANDS.map((cmd) => (
                        <button
                            key={cmd.id}
                            onClick={() => { onAction(cmd.id); onClose(); }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "12px",
                                borderRadius: "12px",
                                background: "transparent",
                                border: "none",
                                color: "rgba(255,255,255,0.6)",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                textAlign: "left"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                            <cmd.icon size={18} />
                            <span style={{ flex: 1, fontWeight: 600 }}>{cmd.label}</span>
                            <kbd style={{ background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: "4px", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>{cmd.shortcut}</kbd>
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
