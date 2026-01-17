"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Play } from "lucide-react";
import { Pressable } from "../actions/Pressable";
import { haptic } from "../feedback/Haptic";

interface Scene {
    id: string;
    index: number;
    text: string;
}

interface TimelineViewProps {
    scenes: Scene[];
    activeIndex: number;
    onSelectScene: (index: number) => void;
    totalDuration?: number; // seconds
}

/**
 * Fullscreen timeline view.
 * Horizontal scrolling timeline.
 * 
 * Features:
 * - Visual scene blocks
 * - Tap to select scene
 * - Duration display
 */
export function TimelineView({
    scenes,
    activeIndex,
    onSelectScene,
    totalDuration = 45,
}: TimelineViewProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleSceneClick = (index: number) => {
        haptic.light();
        onSelectScene(index);
    };

    // Calculate per-scene duration
    const sceneDuration = totalDuration / scenes.length;

    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#0a0a0c",
        }}>
            {/* Duration header */}
            <div style={{
                padding: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "rgba(255,255,255,0.6)",
                }}>
                    <Clock size={18} />
                    <span style={{ fontSize: "0.9rem" }}>
                        Total Duration
                    </span>
                </div>
                <span style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "white",
                }}>
                    {formatDuration(totalDuration)}
                </span>
            </div>

            {/* Timeline */}
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 16,
            }}>
                {/* Time markers */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                    paddingLeft: 4,
                    paddingRight: 4,
                }}>
                    {scenes.map((_, i) => (
                        <span
                            key={i}
                            style={{
                                fontSize: "0.7rem",
                                color: "rgba(255,255,255,0.3)",
                            }}
                        >
                            {formatDuration(i * sceneDuration)}
                        </span>
                    ))}
                    <span style={{
                        fontSize: "0.7rem",
                        color: "rgba(255,255,255,0.3)",
                    }}>
                        {formatDuration(totalDuration)}
                    </span>
                </div>

                {/* Scene blocks */}
                <div
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        gap: 6,
                        overflowX: "auto",
                        paddingBottom: 8,
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {scenes.map((scene, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <Pressable
                                key={scene.id}
                                onPress={() => handleSceneClick(index)}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    style={{
                                        flex: 1,
                                        minWidth: 80,
                                        height: 60,
                                        borderRadius: 8,
                                        background: isActive
                                            ? "var(--accent, #6366f1)"
                                            : "rgba(255,255,255,0.08)",
                                        border: isActive
                                            ? "none"
                                            : "1px solid rgba(255,255,255,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        gap: 4,
                                    }}
                                >
                                    <span style={{
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                        color: isActive ? "white" : "rgba(255,255,255,0.5)",
                                    }}>
                                        Scene {index + 1}
                                    </span>
                                    <span style={{
                                        fontSize: "0.65rem",
                                        color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)",
                                    }}>
                                        {formatDuration(sceneDuration)}
                                    </span>
                                </motion.div>
                            </Pressable>
                        );
                    })}
                </div>

                {/* Playhead (visual indicator) */}
                <div style={{
                    marginTop: 16,
                    height: 4,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    overflow: "hidden",
                }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{
                            width: `${((activeIndex + 1) / scenes.length) * 100}%`
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{
                            height: "100%",
                            background: "var(--accent, #6366f1)",
                            borderRadius: 2,
                        }}
                    />
                </div>
            </div>

            {/* Preview button */}
            <div style={{
                padding: 16,
                paddingBottom: "calc(16px + env(safe-area-inset-bottom))",
                borderTop: "1px solid rgba(255,255,255,0.06)",
            }}>
                <Pressable onPress={() => { }}>
                    <button style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: 12,
                        border: "none",
                        background: "rgba(16, 185, 129, 0.15)",
                        color: "#10b981",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        cursor: "pointer",
                    }}>
                        <Play size={18} />
                        Preview Full Video
                    </button>
                </Pressable>
            </div>
        </div>
    );
}

function formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}
