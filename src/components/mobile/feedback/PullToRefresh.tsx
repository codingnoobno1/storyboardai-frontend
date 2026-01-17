"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { springPresets } from "../motion/transitions";
import { haptic } from "./Haptic";

interface PullToRefreshProps {
    children: React.ReactNode;
    /** Callback when refresh is triggered */
    onRefresh: () => Promise<void>;
    /** Pull distance threshold to trigger refresh */
    threshold?: number;
    /** Custom loading indicator */
    loadingIndicator?: React.ReactNode;
    /** Disable the pull to refresh */
    disabled?: boolean;
}

export function PullToRefresh({
    children,
    onRefresh,
    threshold = 80,
    loadingIndicator,
    disabled = false
}: PullToRefreshProps) {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [pullDistance, setPullDistance] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const startY = useRef(0);
    const isPulling = useRef(false);

    const y = useMotionValue(0);
    const opacity = useTransform(y, [0, threshold], [0, 1]);
    const rotate = useTransform(y, [0, threshold], [0, 360]);
    const scale = useTransform(y, [0, threshold / 2, threshold], [0.5, 0.8, 1]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (disabled || isRefreshing) return;

        const container = containerRef.current;
        if (container && container.scrollTop === 0) {
            startY.current = e.touches[0].clientY;
            isPulling.current = true;
        }
    }, [disabled, isRefreshing]);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!isPulling.current || disabled || isRefreshing) return;

        const currentY = e.touches[0].clientY;
        const diff = currentY - startY.current;

        if (diff > 0) {
            // Resistance effect - harder to pull as you go further
            const resistance = 0.5;
            const pull = Math.min(diff * resistance, threshold * 1.5);
            setPullDistance(pull);
            y.set(pull);

            // Haptic at threshold
            if (pull >= threshold && pullDistance < threshold) {
                haptic.medium();
            }
        }
    }, [disabled, isRefreshing, threshold, pullDistance, y]);

    const handleTouchEnd = useCallback(async () => {
        if (!isPulling.current || disabled) return;
        isPulling.current = false;

        if (pullDistance >= threshold && !isRefreshing) {
            setIsRefreshing(true);
            haptic.heavy();

            try {
                await onRefresh();
            } finally {
                setIsRefreshing(false);
            }
        }

        setPullDistance(0);
        y.set(0);
    }, [pullDistance, threshold, isRefreshing, onRefresh, disabled, y]);

    const DefaultLoader = () => (
        <motion.div
            style={{
                width: 24,
                height: 24,
                border: "2px solid rgba(255,255,255,0.2)",
                borderTopColor: "var(--accent, #6366f1)",
                borderRadius: "50%",
                rotate,
            }}
            animate={isRefreshing ? { rotate: 360 } : {}}
            transition={isRefreshing ? {
                duration: 0.8,
                repeat: Infinity,
                ease: "linear"
            } : undefined}
        />
    );

    return (
        <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                position: "relative",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                height: "100%",
            }}
        >
            {/* Pull indicator */}
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: pullDistance,
                    opacity,
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
            >
                <motion.div style={{ scale }}>
                    {loadingIndicator || <DefaultLoader />}
                </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{
                    y,
                    transition: isPulling.current ? "none" : "all 0.3s ease-out",
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
