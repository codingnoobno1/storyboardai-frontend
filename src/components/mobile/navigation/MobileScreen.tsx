"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { getScreenTransition } from "../motion/transitions";
import { MobileHeader } from "./MobileHeader";

interface MobileScreenProps {
    children: React.ReactNode;
    header?: "none" | "inline" | "nav";
    footer?: "none" | "tab" | "action";
    scroll?: boolean;
    title?: string;
    headerRight?: React.ReactNode;
    headerLeft?: React.ReactNode;
    /** Enable keyboard avoidance behavior */
    keyboardAvoiding?: boolean;
    /** Callback when screen becomes visible */
    onFocus?: () => void;
    /** Additional padding at bottom */
    bottomPadding?: number;
}

export function MobileScreen({
    children,
    header = "inline",
    footer = "none",
    scroll = true,
    title,
    headerRight,
    headerLeft,
    keyboardAvoiding = true,
    onFocus,
    bottomPadding = 0
}: MobileScreenProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    // Calculate footer padding
    const footerPadding = footer === "tab" ? 60 : footer === "action" ? 80 : 0;

    // Keyboard visibility detection
    useEffect(() => {
        if (!keyboardAvoiding || typeof window === 'undefined') return;

        const handleResize = () => {
            // On mobile, when keyboard opens, visualViewport height shrinks
            const viewportHeight = window.visualViewport?.height || window.innerHeight;
            const windowHeight = window.innerHeight;
            const heightDiff = windowHeight - viewportHeight;

            if (heightDiff > 100) {
                setKeyboardVisible(true);
                setKeyboardHeight(heightDiff);
            } else {
                setKeyboardVisible(false);
                setKeyboardHeight(0);
            }
        };

        window.visualViewport?.addEventListener('resize', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.visualViewport?.removeEventListener('resize', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, [keyboardAvoiding]);

    // Scroll focused input into view (RN behavior)
    useEffect(() => {
        if (!scrollRef.current) return;

        const handleFocusIn = (e: FocusEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                // Small delay for keyboard to appear
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 300);
            }
        };

        const container = scrollRef.current;
        container.addEventListener('focusin', handleFocusIn);

        return () => {
            container.removeEventListener('focusin', handleFocusIn);
        };
    }, []);

    // Disable background scroll leaks
    useEffect(() => {
        if (!scroll) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        } else {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        };
    }, [scroll]);

    // Trigger onFocus callback
    useEffect(() => {
        onFocus?.();
    }, [onFocus]);

    const screenTransition = getScreenTransition();

    return (
        <motion.div
            variants={screenTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100dvh", // Use dynamic viewport height
                maxHeight: "100dvh",
                background: "var(--bg)",
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: keyboardVisible
                    ? `${keyboardHeight}px`
                    : `calc(${footerPadding + bottomPadding}px + env(safe-area-inset-bottom))`,
                transition: "padding-bottom 0.2s ease-out",
                overflow: "hidden",
            }}
        >
            {header !== "none" && (
                <MobileHeader
                    title={title}
                    left={headerLeft}
                    right={headerRight}
                    type={header}
                />
            )}

            <div
                ref={scrollRef}
                style={{
                    flex: 1,
                    overflowY: scroll ? "auto" : "hidden",
                    overflowX: "hidden",
                    WebkitOverflowScrolling: "touch",
                    overscrollBehavior: "none",
                    padding: "16px",
                    paddingBottom: `${footerPadding + 16}px`,
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}

