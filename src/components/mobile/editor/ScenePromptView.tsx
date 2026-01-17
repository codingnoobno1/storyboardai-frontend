"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";
import { Pressable } from "../actions/Pressable";
import { haptic } from "../feedback/Haptic";

interface Scene {
    id: string;
    index: number;
    text: string;
    visualPrompt?: string;
}

interface ScenePromptViewProps {
    scene: Scene;
    onSave: (prompt: string) => void;
    onCancel: () => void;
}

// Style presets
const STYLE_PRESETS = [
    { label: "Cinematic", value: "cinematic lighting, film grain, wide angle" },
    { label: "Noir", value: "high contrast, shadows, moody, black and white tones" },
    { label: "Anime", value: "anime style, vibrant colors, cell shading" },
    { label: "Sci-Fi", value: "futuristic, neon lights, cyberpunk aesthetic" },
    { label: "Fantasy", value: "magical, ethereal glow, fantasy realm" },
    { label: "Minimal", value: "clean, simple, minimal details, soft lighting" },
];

/**
 * Scene prompt editor.
 * Fullscreen, keyboard-safe.
 * 
 * Features:
 * - Edit visual prompt
 * - Style presets
 * - Apply changes CTA at bottom
 */
export function ScenePromptView({
    scene,
    onSave,
    onCancel,
}: ScenePromptViewProps) {
    const [prompt, setPrompt] = useState(scene.visualPrompt || "");

    const handlePresetClick = (preset: string) => {
        haptic.light();
        setPrompt((prev) => {
            if (prev) return `${prev}, ${preset}`;
            return preset;
        });
    };

    const handleSave = () => {
        haptic.medium();
        onSave(prompt);
    };

    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#0a0a0c",
        }}>
            {/* Scene context */}
            <div style={{
                padding: 16,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
                <p style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: 4,
                }}>
                    Scene {scene.index + 1}
                </p>
                <p style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.4,
                }}>
                    {scene.text}
                </p>
            </div>

            {/* Prompt editor */}
            <div style={{
                flex: 1,
                padding: 16,
                overflowY: "auto",
            }}>
                <label style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: 8,
                }}>
                    <Wand2 size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />
                    Visual Prompt
                </label>

                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the visual style, lighting, mood..."
                    style={{
                        width: "100%",
                        minHeight: 120,
                        padding: 14,
                        borderRadius: 12,
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.03)",
                        color: "white",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                        resize: "vertical",
                        fontFamily: "inherit",
                    }}
                />

                {/* Style presets */}
                <div style={{ marginTop: 20 }}>
                    <p style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.6)",
                        marginBottom: 10,
                    }}>
                        Quick Styles
                    </p>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                    }}>
                        {STYLE_PRESETS.map((preset) => (
                            <Pressable
                                key={preset.label}
                                onPress={() => handlePresetClick(preset.value)}
                            >
                                <div style={{
                                    padding: "8px 14px",
                                    borderRadius: 8,
                                    background: "rgba(99, 102, 241, 0.1)",
                                    border: "1px solid rgba(99, 102, 241, 0.2)",
                                    fontSize: "0.8rem",
                                    color: "var(--accent, #6366f1)",
                                    fontWeight: 500,
                                }}>
                                    {preset.label}
                                </div>
                            </Pressable>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div style={{
                padding: 16,
                paddingBottom: "calc(16px + env(safe-area-inset-bottom))",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                gap: 12,
            }}>
                <Pressable onPress={onCancel} style={{ flex: 1 }}>
                    <button style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: 12,
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "transparent",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        cursor: "pointer",
                    }}>
                        Cancel
                    </button>
                </Pressable>

                <Pressable onPress={handleSave} style={{ flex: 2 }}>
                    <button style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: 12,
                        border: "none",
                        background: "var(--accent, #6366f1)",
                        color: "white",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        cursor: "pointer",
                    }}>
                        Apply Changes
                    </button>
                </Pressable>
            </div>
        </div>
    );
}
