"use client";

import React from "react";
import { AlertCircle, CheckCircle, Info, XCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AlertProps {
    type?: "success" | "info" | "warning" | "error";
    title: string;
    description?: string;
    onClose?: () => void;
}

export default function Alert({ type = "info", title, description, onClose }: AlertProps) {
    const config = {
        success: { icon: CheckCircle, color: "#10B981", bg: "rgba(16, 185, 129, 0.1)" },
        info: { icon: Info, color: "var(--accent)", bg: "rgba(99, 102, 241, 0.1)" },
        warning: { icon: AlertCircle, color: "#F59E0B", bg: "rgba(245, 158, 11, 0.1)" },
        error: { icon: XCircle, color: "#EF4444", bg: "rgba(239, 68, 68, 0.1)" },
    };

    const { icon: Icon, color, bg } = config[type];

    return (
        <div
            style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                borderRadius: "12px",
                background: bg,
                border: `1px solid ${color}33`,
                position: "relative"
            }}
        >
            <Icon size={20} color={color} style={{ flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
                <h5 style={{ fontSize: "0.95rem", fontWeight: 800, color: "white", marginBottom: "0.2rem" }}>{title}</h5>
                {description && <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{description}</p>}
            </div>
            {onClose && (
                <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>
                    <X size={16} />
                </button>
            )}
        </div>
    );
}
