"use client";

import React from "react";
import { motion } from "framer-motion";
import { Film, Edit3, Clock, Play } from "lucide-react";
import { Pressable } from "../actions/Pressable";
import { haptic } from "../feedback/Haptic";

export type EditorMode = "preview" | "scenes" | "prompt" | "timeline";

interface EditorModeSwitchProps {
    activeMode: EditorMode;
    onChange: (mode: EditorMode) => void;
}

const MODES: { key: EditorMode; icon: React.ReactNode; label: string }[] = [
    { key: "scenes", icon: <Film size={20} />, label: "Scenes" },
    { key: "preview", icon: <Play size={20} />, label: "Preview" },
    { key: "prompt", icon: <Edit3 size={20} />, label: "Prompt" },
    { key: "timeline", icon: <Clock size={20} />, label: "Timeline" },
];

/**
 * Segmented control for editor mode switching.
 * Always visible at bottom of editor.
 */
export function EditorModeSwitch({ activeMode, onChange }: EditorModeSwitchProps) {
    const handleChange = (mode: EditorMode) => {
        haptic.light();
        onChange(mode);
    };

    return (
        <div style={{
            padding: "12px 16px",
            paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
            background: "rgba(10, 10, 12, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
            <div style={{
                display: "flex",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 12,
                padding: 4,
            }}>
                {MODES.map((mode) => {
                    const isActive = activeMode === mode.key;

                    return (
                        <Pressable
                            key={mode.key}
                            onPress={() => handleChange(mode.key)}
                            style={{ flex: 1 }}
                        >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 4,
                                padding: "10px 8px",
                                borderRadius: 10,
                                background: isActive ? "var(--accent, #6366f1)" : "transparent",
                                transition: "background 0.2s ease",
                                position: "relative",
                            }}>
                                <div style={{
                                    color: isActive ? "white" : "rgba(255,255,255,0.5)",
                                }}>
                                    {mode.icon}
                                </div>
                                <span style={{
                                    fontSize: "0.7rem",
                                    fontWeight: isActive ? 600 : 500,
                                    color: isActive ? "white" : "rgba(255,255,255,0.5)",
                                }}>
                                    {mode.label}
                                </span>
                            </div>
                        </Pressable>
                    );
                })}
            </div>
        </div>
    );
}
