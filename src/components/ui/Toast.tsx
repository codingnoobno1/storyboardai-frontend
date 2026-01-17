"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import React, { useEffect } from "react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
    id: string;
    message: string;
    type?: ToastType;
    onClose: (id: string) => void;
}

export default function Toast({ id, message, type = "info", onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => onClose(id), 5000);
        return () => clearTimeout(timer);
    }, [id, onClose]);

    const variants = {
        success: { icon: CheckCircle, color: "#10B981" },
        error: { icon: AlertCircle, color: "#ef4444" },
        warning: { icon: Info, color: "#F59E0B" },
        info: { icon: Info, color: "var(--accent)" },
    };

    const { icon: Icon, color } = variants[type];

    return (
        <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                background: "rgba(10, 10, 10, 0.8)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${color}44`,
                borderRadius: "12px",
                minWidth: "300px",
                boxShadow: `0 10px 30px -10px ${color}33`,
                position: "relative"
            }}
        >
            <div style={{ color }}>
                <Icon size={20} />
            </div>
            <p style={{ flex: 1, fontSize: "0.9rem", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
                {message}
            </p>
            <button
                onClick={() => onClose(id)}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}
            >
                <X size={16} />
            </button>
            <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                style={{ position: "absolute", bottom: 0, left: 0, height: "2px", background: color, borderRadius: "0 0 0 12px" }}
            />
        </motion.div>
    );
}
