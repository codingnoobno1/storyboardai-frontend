"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp, springPresets } from "../motion/transitions";

interface ActionBarProps {
    children: React.ReactNode;
    /** Automatically hide when keyboard is visible */
    hideOnKeyboard?: boolean;
    /** Show glow effect behind the action bar */
    glow?: boolean;
}

export function ActionBar({
    children,
    hideOnKeyboard = true,
    glow = true
}: ActionBarProps) {
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Detect keyboard visibility
    useEffect(() => {
        if (!hideOnKeyboard || typeof window === 'undefined') return;

        const handleResize = () => {
            const viewportHeight = window.visualViewport?.height || window.innerHeight;
            const windowHeight = window.innerHeight;
            const heightDiff = windowHeight - viewportHeight;

            setIsKeyboardVisible(heightDiff > 100);
        };

        window.visualViewport?.addEventListener('resize', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.visualViewport?.removeEventListener('resize', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, [hideOnKeyboard]);

    // Animate in on mount
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const shouldShow = isVisible && (!hideOnKeyboard || !isKeyboardVisible);

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={springPresets.snappy}
                    style={{
                        position: "fixed",
                        bottom: "calc(60px + env(safe-area-inset-bottom) + 16px)",
                        left: 16,
                        right: 16,
                        zIndex: 90,
                    }}
                >
                    {/* Glow effect */}
                    {glow && (
                        <div style={{
                            position: "absolute",
                            inset: -20,
                            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
                            filter: "blur(20px)",
                            pointerEvents: "none",
                            zIndex: -1,
                        }} />
                    )}

                    {/* Action content */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                    }}>
                        {React.Children.map(children, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child as React.ReactElement<any>, {
                                    style: {
                                        ...(child.props as any).style,
                                        width: "100%",
                                        boxShadow: glow
                                            ? "0 8px 32px rgba(99, 102, 241, 0.4)"
                                            : "0 4px 16px rgba(0,0,0,0.3)",
                                    }
                                });
                            }
                            return child;
                        })}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

