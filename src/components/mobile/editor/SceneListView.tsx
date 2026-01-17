"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, GripVertical, Trash2 } from "lucide-react";
import { Pressable } from "../actions/Pressable";
import { haptic } from "../feedback/Haptic";

interface Scene {
    id: string;
    index: number;
    text: string;
}

interface SceneListViewProps {
    scenes: Scene[];
    activeIndex: number;
    onSelect: (index: number) => void;
    onAdd?: () => void;
    onDelete?: (sceneId: string) => void;
    onReorder?: (scenes: Scene[]) => void;
}

/**
 * Fullscreen scene list.
 * Replaces desktop sidebar.
 * 
 * Features:
 * - Tap to select scene
 * - Long-press for actions (delete)
 * - Add new scene CTA
 */
export function SceneListView({
    scenes,
    activeIndex,
    onSelect,
    onAdd,
    onDelete,
}: SceneListViewProps) {
    const [longPressedId, setLongPressedId] = React.useState<string | null>(null);

    const handleLongPress = (sceneId: string) => {
        haptic.medium();
        setLongPressedId(sceneId);
    };

    const handleDelete = (sceneId: string) => {
        haptic.heavy();
        onDelete?.(sceneId);
        setLongPressedId(null);
    };

    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#0a0a0c",
        }}>
            {/* Scene List */}
            <div style={{
                flex: 1,
                overflowY: "auto",
                padding: 16,
                WebkitOverflowScrolling: "touch",
            }}>
                {scenes.map((scene, index) => {
                    const isActive = index === activeIndex;
                    const isLongPressed = longPressedId === scene.id;

                    return (
                        <motion.div
                            key={scene.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Pressable
                                onPress={() => {
                                    setLongPressedId(null);
                                    onSelect(index);
                                }}
                                onLongPress={() => handleLongPress(scene.id)}
                                pressScale={0.98}
                                style={{ marginBottom: 12 }}
                            >
                                <div style={{
                                    padding: 16,
                                    borderRadius: 14,
                                    background: isActive
                                        ? "rgba(99, 102, 241, 0.15)"
                                        : "rgba(255,255,255,0.03)",
                                    border: isActive
                                        ? "1px solid rgba(99, 102, 241, 0.4)"
                                        : "1px solid rgba(255,255,255,0.06)",
                                    position: "relative",
                                }}>
                                    {/* Scene number */}
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: 8,
                                    }}>
                                        <span style={{
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            color: isActive ? "var(--accent, #6366f1)" : "rgba(255,255,255,0.3)",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                        }}>
                                            Scene {index + 1}
                                        </span>

                                        <GripVertical
                                            size={16}
                                            color="rgba(255,255,255,0.2)"
                                        />
                                    </div>

                                    {/* Scene text */}
                                    <p style={{
                                        fontSize: "0.9rem",
                                        color: isActive ? "white" : "rgba(255,255,255,0.6)",
                                        lineHeight: 1.5,
                                        margin: 0,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}>
                                        {scene.text}
                                    </p>

                                    {/* Delete button on long-press */}
                                    {isLongPressed && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            style={{
                                                position: "absolute",
                                                top: 8,
                                                right: 8,
                                            }}
                                        >
                                            <Pressable
                                                onPress={() => handleDelete(scene.id)}
                                                style={{
                                                    width: 36,
                                                    height: 36,
                                                    borderRadius: 8,
                                                    background: "rgba(239, 68, 68, 0.9)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Trash2 size={16} color="white" />
                                            </Pressable>
                                        </motion.div>
                                    )}
                                </div>
                            </Pressable>
                        </motion.div>
                    );
                })}
            </div>

            {/* Add Scene Button */}
            <div style={{
                padding: 16,
                borderTop: "1px solid rgba(255,255,255,0.06)",
            }}>
                <Pressable onPress={onAdd}>
                    <button style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: 12,
                        border: "1px dashed rgba(255,255,255,0.2)",
                        background: "rgba(255,255,255,0.02)",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        cursor: "pointer",
                    }}>
                        <Plus size={18} />
                        Add Scene
                    </button>
                </Pressable>
            </div>
        </div>
    );
}
