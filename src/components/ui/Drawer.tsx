"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    position?: "left" | "right";
}

export default function Drawer({ isOpen, onClose, title, children, position = "right" }: DrawerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)", zIndex: 900 }}
                    />
                    <motion.div
                        initial={{ x: position === "right" ? "100%" : "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: position === "right" ? "100%" : "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="glass"
                        style={{
                            position: "fixed",
                            top: 0,
                            bottom: 0,
                            [position]: 0,
                            width: "100%",
                            maxWidth: "400px",
                            zIndex: 1000,
                            padding: "2rem",
                            borderRadius: position === "right" ? "24px 0 0 24px" : "0 24px 24px 0",
                            boxShadow: "0 0 50px rgba(0,0,0,0.3)"
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>{title}</h3>
                            <button onClick={onClose} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
                                <X size={24} />
                            </button>
                        </div>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
