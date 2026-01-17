"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PopoverProps {
    trigger: React.ReactNode;
    content: React.ReactNode;
}

export default function Popover({ trigger, content }: PopoverProps) {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div style={{ position: "relative", display: "inline-block" }} ref={popoverRef}>
            <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
                {trigger}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="glass"
                        style={{
                            position: "absolute",
                            top: "calc(100% + 10px)",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 100,
                            minWidth: "200px",
                            padding: "1rem",
                            borderRadius: "12px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                        }}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
