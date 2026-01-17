"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackHeader } from "../navigation/BackHeader";
import { EditorModeSwitch, EditorMode } from "./EditorModeSwitch";
import { SceneListView } from "./SceneListView";
import { ScenePreviewView } from "./ScenePreviewView";
import { ScenePromptView } from "./ScenePromptView";
import { TimelineView } from "./TimelineView";
import { springPresets } from "../motion/transitions";

interface Scene {
    id: string;
    index: number;
    text: string;
    visualPrompt?: string;
}

interface MobileEditorShellProps {
    projectId: string;
    projectTitle: string;
    scenes: Scene[];
    onBack: () => void;
    onSave?: () => void;
    onGenerate?: () => void;
    onRegenerateScene?: (sceneId: string) => void;
    onUpdatePrompt?: (sceneId: string, prompt: string) => void;
    onAddScene?: () => void;
    onDeleteScene?: (sceneId: string) => void;
    onReorderScenes?: (scenes: Scene[]) => void;
}

/**
 * Mobile Editor Shell - Mode Controller
 * 
 * Implements mode-based navigation for mobile editors:
 * - Preview (default) - Fullscreen scene preview
 * - Scenes - Fullscreen scene list
 * - Prompt - Scene prompt editor
 * - Timeline - Fullscreen timeline
 * 
 * Only ONE mode visible at a time.
 */
export function MobileEditorShell({
    projectId,
    projectTitle,
    scenes,
    onBack,
    onSave,
    onGenerate,
    onRegenerateScene,
    onUpdatePrompt,
    onAddScene,
    onDeleteScene,
    onReorderScenes,
}: MobileEditorShellProps) {
    const [mode, setMode] = useState<EditorMode>("preview");
    const [activeSceneIndex, setActiveSceneIndex] = useState(0);

    const activeScene = scenes[activeSceneIndex] || scenes[0];

    const handleSceneSelect = (index: number) => {
        setActiveSceneIndex(index);
        setMode("preview"); // Switch to preview when scene selected
    };

    const handleModeChange = (newMode: EditorMode) => {
        setMode(newMode);
    };

    // Get header title based on mode
    const getHeaderTitle = () => {
        switch (mode) {
            case "scenes": return "Scenes";
            case "prompt": return `Edit Scene ${activeSceneIndex + 1}`;
            case "timeline": return "Timeline";
            default: return projectTitle;
        }
    };

    // Get header back action
    const handleHeaderBack = () => {
        if (mode !== "preview") {
            setMode("preview");
        } else {
            onBack();
        }
    };

    return (
        <div style={{
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            background: "#050507",
            overflow: "hidden",
        }}>
            {/* Header - contextual per mode */}
            <BackHeader
                title={getHeaderTitle()}
                onBack={handleHeaderBack}
                rightActions={
                    mode === "preview" && (
                        <button
                            onClick={onGenerate}
                            style={{
                                background: "var(--accent, #6366f1)",
                                border: "none",
                                borderRadius: 8,
                                padding: "8px 16px",
                                color: "white",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            Generate
                        </button>
                    )
                }
            />

            {/* Mode Content */}
            <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
                <AnimatePresence mode="wait">
                    {mode === "preview" && (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ height: "100%" }}
                        >
                            <ScenePreviewView
                                scene={activeScene}
                                sceneIndex={activeSceneIndex}
                                totalScenes={scenes.length}
                                onRegenerate={() => onRegenerateScene?.(activeScene.id)}
                                onPrevScene={() => setActiveSceneIndex(Math.max(0, activeSceneIndex - 1))}
                                onNextScene={() => setActiveSceneIndex(Math.min(scenes.length - 1, activeSceneIndex + 1))}
                            />
                        </motion.div>
                    )}

                    {mode === "scenes" && (
                        <motion.div
                            key="scenes"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={springPresets.snappy}
                            style={{ height: "100%" }}
                        >
                            <SceneListView
                                scenes={scenes}
                                activeIndex={activeSceneIndex}
                                onSelect={handleSceneSelect}
                                onAdd={onAddScene}
                                onDelete={onDeleteScene}
                                onReorder={onReorderScenes}
                            />
                        </motion.div>
                    )}

                    {mode === "prompt" && (
                        <motion.div
                            key="prompt"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={springPresets.snappy}
                            style={{ height: "100%" }}
                        >
                            <ScenePromptView
                                scene={activeScene}
                                onSave={(prompt) => {
                                    onUpdatePrompt?.(activeScene.id, prompt);
                                    setMode("preview");
                                }}
                                onCancel={() => setMode("preview")}
                            />
                        </motion.div>
                    )}

                    {mode === "timeline" && (
                        <motion.div
                            key="timeline"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={springPresets.snappy}
                            style={{ height: "100%" }}
                        >
                            <TimelineView
                                scenes={scenes}
                                activeIndex={activeSceneIndex}
                                onSelectScene={handleSceneSelect}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mode Switch - always visible at bottom */}
            <EditorModeSwitch
                activeMode={mode}
                onChange={handleModeChange}
            />
        </div>
    );
}
