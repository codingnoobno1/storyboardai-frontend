"use client";

import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { haptic } from "../feedback/Haptic";
import { pressableVariants } from "../motion/transitions";

interface PressableProps {
    children: React.ReactNode;
    /** Callback on press/click */
    onPress?: () => void;
    /** Callback on long press (500ms) */
    onLongPress?: () => void;
    /** Disable interaction */
    disabled?: boolean;
    /** Additional inline styles */
    style?: React.CSSProperties;
    /** Additional CSS class */
    className?: string;
    /** Enable haptic feedback */
    useHaptic?: boolean;
    /** Delay before press registers (helps with scroll conflicts) */
    pressDelay?: number;
    /** Scale amount on press (0-1) */
    pressScale?: number;
    /** Accessibility label */
    ariaLabel?: string;
}

export function Pressable({
    children,
    onPress,
    onLongPress,
    disabled = false,
    style,
    className,
    useHaptic = true,
    pressDelay = 0,
    pressScale = 0.97,
    ariaLabel
}: PressableProps) {
    const pressTimer = useRef<NodeJS.Timeout | null>(null);
    const longPressTimer = useRef<NodeJS.Timeout | null>(null);
    const isLongPress = useRef(false);
    const touchStartPos = useRef({ x: 0, y: 0 });

    const clearTimers = useCallback(() => {
        if (pressTimer.current) {
            clearTimeout(pressTimer.current);
            pressTimer.current = null;
        }
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current);
            longPressTimer.current = null;
        }
    }, []);

    const handleTouchStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
        if (disabled) return;

        isLongPress.current = false;

        // Track touch position for movement detection
        if ('touches' in e) {
            touchStartPos.current = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        }

        // Long press detection
        if (onLongPress) {
            longPressTimer.current = setTimeout(() => {
                isLongPress.current = true;
                if (useHaptic) haptic.heavy();
                onLongPress();
            }, 500);
        }
    }, [disabled, onLongPress, useHaptic]);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!('touches' in e)) return;

        // Cancel long press if finger moves too much
        const moveX = Math.abs(e.touches[0].clientX - touchStartPos.current.x);
        const moveY = Math.abs(e.touches[0].clientY - touchStartPos.current.y);

        if (moveX > 10 || moveY > 10) {
            clearTimers();
        }
    }, [clearTimers]);

    const handleTouchEnd = useCallback(() => {
        clearTimers();

        if (disabled || isLongPress.current) return;

        // Delay press to avoid scroll conflicts
        if (pressDelay > 0) {
            pressTimer.current = setTimeout(() => {
                if (useHaptic) haptic.light();
                onPress?.();
            }, pressDelay);
        } else {
            if (useHaptic) haptic.light();
            onPress?.();
        }
    }, [disabled, pressDelay, useHaptic, onPress, clearTimers]);

    const handleClick = useCallback((e: React.MouseEvent) => {
        // Prevent double-firing on touch devices
        if (e.detail === 0) return; // Touch events have detail=0
        if (disabled || isLongPress.current) return;

        if (useHaptic) haptic.light();
        onPress?.();
    }, [disabled, useHaptic, onPress]);

    return (
        <motion.div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={handleClick}
            whileTap={disabled ? {} : {
                scale: pressScale,
                opacity: 0.8,
                transition: { duration: 0.1 }
            }}
            style={{
                cursor: disabled ? "not-allowed" : "pointer",
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation",
                opacity: disabled ? 0.5 : 1,
                ...style
            }}
            className={className}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-label={ariaLabel}
            aria-disabled={disabled}
        >
            {children}
        </motion.div>
    );
}

