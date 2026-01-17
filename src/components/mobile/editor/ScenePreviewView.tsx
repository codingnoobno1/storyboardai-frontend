"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { Pressable } from "../actions/Pressable";
import { haptic } from "../feedback/Haptic";

interface Scene {
    id: string;
    index: number;
    text: string;
    visualPrompt?: string;
}

interface ScenePreviewViewProps {
    scene: Scene;
    sceneIndex: number;
    totalScenes: number;
    onRegenerate: () => void;
    onPrevScene: () => void;
    onNextScene: () => void;
}

/**
 * Fullscreen scene preview.
 * Primary view - shows AI-generated scene.
 * 
 * Features:
 * - Full-bleed preview
 * - Swipe/tap for prev/next scene
 * - Regenerate button in thumb zone
 */
export function ScenePreviewView({
    scene,
    sceneIndex,
    totalScenes,
    onRegenerate,
    onPrevScene,
    onNextScene,
}: ScenePreviewViewProps) {
    const handleRegenerate = () => {
        haptic.medium();
        onRegenerate();
    };

    const canGoPrev = sceneIndex > 0;
    const canGoNext = sceneIndex < totalScenes - 1;

    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#080808",
        }}>
            {/* Scene indicator */}
            <div style={{
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
            }}>
                {Array.from({ length: totalScenes }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: i === sceneIndex ? 24 : 8,
                            height: 8,
                            borderRadius: 4,
                            background: i === sceneIndex
                                ? "var(--accent, #6366f1)"
                                : "rgba(255,255,255,0.2)",
                            transition: "all 0.2s ease",
                        }}
                    />
                ))}
            </div>

            {/* Preview Canvas */}
            <div style={{
                flex: 1,
                position: "relative",
                display: "flex",
                flexDirection: "column",
            }}>
                {/* Main preview area */}
                <div style={{
                    flex: 1,
                    margin: 16,
                    marginTop: 0,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    {/* Placeholder preview */}
                    <motion.div
                        key={scene.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ textAlign: "center", padding: 24 }}
                    >
                        <div style={{ fontSize: "4rem", marginBottom: 16 }}>🌆</div>
                        <h3 style={{
                            fontSize: "1.2rem",
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.8)",
                            marginBottom: 8,
                        }}>
                            Scene {sceneIndex + 1}
                        </h3>
                        <p style={{
                            fontSize: "0.9rem",
                            color: "rgba(255,255,255,0.5)",
                            lineHeight: 1.5,
                            maxWidth: 280,
                        }}>
                            {scene.text}
                        </p>
                    </motion.div>

                    {/* Navigation arrows */}
                    {canGoPrev && (
                        <Pressable
                            onPress={onPrevScene}
                            style={{
                                position: "absolute",
                                left: 8,
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: 44,
                                height: 44,
                                borderRadius: 22,
                                background: "rgba(0,0,0,0.5)",
                                backdropFilter: "blur(10px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <ChevronLeft size={24} color="white" />
                        </Pressable>
                    )}

                    {canGoNext && (
                        <Pressable
                            onPress={onNextScene}
                            style={{
                                position: "absolute",
                                right: 8,
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: 44,
                                height: 44,
                                borderRadius: 22,
                                background: "rgba(0,0,0,0.5)",
                                backdropFilter: "blur(10px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <ChevronRight size={24} color="white" />
                        </Pressable>
                    )}
                </div>

                {/* Prompt preview + Regenerate */}
                <div style={{
                    padding: "0 16px 16px",
                }}>
                    {/* Visual prompt hint */}
                    {scene.visualPrompt && (
                        <div style={{
                            padding: 12,
                            borderRadius: 10,
                            background: "rgba(255,255,255,0.03)",
                            marginBottom: 12,
                        }}>
                            <p style={{
                                fontSize: "0.75rem",
                                color: "var(--cyan, #22d3ee)",
                                marginBottom: 4,
                            }}>
                                Visual Style
                            </p>
                            <p style={{
                                fontSize: "0.85rem",
                                color: "rgba(255,255,255,0.6)",
                                lineHeight: 1.4,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}>
                                {scene.visualPrompt}
                            </p>
                        </div>
                    )}

                    {/* Regenerate button - thumb zone */}
                    <Pressable onPress={handleRegenerate}>
                        <button style={{
                            width: "100%",
                            padding: "14px",
                            borderRadius: 12,
                            background: "rgba(99, 102, 241, 0.15)",
                            border: "1px solid rgba(99, 102, 241, 0.3)",
                            color: "var(--accent, #6366f1)",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            cursor: "pointer",
                        }}>
                            <RefreshCw size={18} />
                            Regenerate Scene
                        </button>
                    </Pressable>
                </div>
            </div>
        </div>
    );
}
