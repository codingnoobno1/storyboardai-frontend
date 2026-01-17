"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({ content, children, position = "top" }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    const positions = {
        top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: "8px" },
        bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: "8px" },
        left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: "8px" },
        right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: "8px" },
    };

    return (
        <div
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        style={{
                            position: "absolute",
                            background: "rgba(5, 5, 5, 0.95)",
                            backdropFilter: "blur(4px)",
                            color: "white",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                            zIndex: 1000,
                            pointerEvents: "none",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            ...positions[position]
                        }}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
