"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, useDragControls, PanInfo } from "framer-motion";
import { slideUp, springPresets } from "../motion/transitions";
import { haptic } from "../feedback/Haptic";

interface BottomSheetProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    /** Height preset or custom value */
    height?: "sm" | "md" | "lg" | "full" | number;
    /** Show drag handle indicator */
    showHandle?: boolean;
    /** Dismiss on backdrop tap */
    dismissOnBackdrop?: boolean;
}

const heightPresets = {
    sm: "40vh",
    md: "60vh",
    lg: "80vh",
    full: "95vh"
};

export function BottomSheet({
    visible,
    onClose,
    children,
    title,
    height = "md",
    showHandle = true,
    dismissOnBackdrop = true
}: BottomSheetProps) {
    const sheetRef = useRef<HTMLDivElement>(null);
    const dragControls = useDragControls();

    // Calculate height value
    const heightValue = typeof height === "number"
        ? `${height}px`
        : heightPresets[height];

    // Handle drag end - dismiss if dragged down enough or with velocity
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 100;
        const velocityThreshold = 500;

        if (info.offset.y > threshold || info.velocity.y > velocityThreshold) {
            haptic.light();
            onClose();
        }
    };

    const handleBackdropClick = () => {
        if (dismissOnBackdrop) {
            haptic.light();
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {visible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleBackdropClick}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0, 0, 0, 0.6)",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                            zIndex: 1100,
                        }}
                    />

                    {/* Sheet */}
                    <motion.div
                        ref={sheetRef}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={springPresets.snappy}
                        drag="y"
                        dragControls={dragControls}
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={{ top: 0, bottom: 0.5 }}
                        onDragEnd={handleDragEnd}
                        style={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            minHeight: heightValue,
                            maxHeight: "95vh",
                            background: "var(--bg, #0a0a0b)",
                            borderTopLeftRadius: 24,
                            borderTopRightRadius: 24,
                            borderTop: "1px solid rgba(255,255,255,0.08)",
                            padding: "0 16px 16px",
                            paddingBottom: "calc(16px + env(safe-area-inset-bottom))",
                            zIndex: 1101,
                            touchAction: "none",
                            overflowY: "auto",
                            overflowX: "hidden",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {/* Drag Handle */}
                        {showHandle && (
                            <div
                                onPointerDown={(e) => dragControls.start(e)}
                                style={{
                                    padding: "12px 0",
                                    cursor: "grab",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{
                                    width: 40,
                                    height: 5,
                                    background: "rgba(255,255,255,0.15)",
                                    borderRadius: 100,
                                }} />
                            </div>
                        )}

                        {/* Title */}
                        {title && (
                            <div style={{
                                marginBottom: 20,
                                textAlign: "center",
                                paddingTop: showHandle ? 0 : 16
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    color: "var(--text, #fff)"
                                }}>
                                    {title}
                                </h3>
                            </div>
                        )}

                        {/* Content */}
                        <div style={{ paddingTop: title ? 0 : (showHandle ? 0 : 16) }}>
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

