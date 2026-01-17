"use client";

import React, { useRef, useState, useEffect } from "react";

interface ScrollableStackProps {
    children: React.ReactNode;
    gap?: "xs" | "sm" | "md" | "lg";
    /** Show fade at top/bottom edges when content is scrollable */
    showEdgeFade?: boolean;
    /** Optional callback when scroll reaches bottom */
    onEndReached?: () => void;
    /** Threshold for onEndReached trigger (pixels from bottom) */
    endReachedThreshold?: number;
}

const gapSizes = {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px"
};

export function ScrollableStack({
    children,
    gap = "md",
    showEdgeFade = false,
    onEndReached,
    endReachedThreshold = 100
}: ScrollableStackProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showTopFade, setShowTopFade] = useState(false);
    const [showBottomFade, setShowBottomFade] = useState(false);

    // Track scroll for edge fades and end detection
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (showEdgeFade) {
                setShowTopFade(container.scrollTop > 20);
                setShowBottomFade(
                    container.scrollHeight - container.scrollTop - container.clientHeight > 20
                );
            }

            // Check for end reached
            if (onEndReached) {
                const distanceFromBottom =
                    container.scrollHeight - container.scrollTop - container.clientHeight;
                if (distanceFromBottom < endReachedThreshold) {
                    onEndReached();
                }
            }
        };

        // Initial check
        handleScroll();

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [showEdgeFade, onEndReached, endReachedThreshold]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: "100%",
            }}
        >
            {/* Top fade indicator */}
            {showEdgeFade && showTopFade && (
                <div style={{
                    position: "sticky",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 24,
                    background: "linear-gradient(to bottom, var(--bg, #0a0a0b), transparent)",
                    pointerEvents: "none",
                    zIndex: 10,
                    marginBottom: -24,
                }} />
            )}

            {/* Content stack */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: gapSizes[gap],
                width: "100%",
                paddingBottom: 16,
            }}>
                {children}
            </div>

            {/* Bottom fade indicator */}
            {showEdgeFade && showBottomFade && (
                <div style={{
                    position: "sticky",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 24,
                    background: "linear-gradient(to top, var(--bg, #0a0a0b), transparent)",
                    pointerEvents: "none",
                    zIndex: 10,
                    marginTop: -24,
                }} />
            )}
        </div>
    );
}

