"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getScreenTransition, screenTransitionsReduced } from "../motion/transitions";

interface ScreenTransitionProps {
    children: React.ReactNode;
    /** Unique key for AnimatePresence to track screen changes */
    transitionKey?: string;
    /** Direction of transition */
    direction?: "forward" | "back";
}

/**
 * RN-style screen transition wrapper
 * Wraps page content with slide-in/slide-out animations
 */
export function ScreenTransition({
    children,
    transitionKey,
    direction = "forward"
}: ScreenTransitionProps) {
    const transitions = getScreenTransition();

    // Reverse animation direction for "back" navigation
    const variants = direction === "back"
        ? {
            initial: { x: "-30%", opacity: 0.8 },
            animate: transitions.animate,
            exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } }
        }
        : transitions;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={transitionKey}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative"
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
