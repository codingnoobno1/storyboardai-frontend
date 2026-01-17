"use client";

import React from "react";
import { FolderOpen, LucideIcon } from "lucide-react";
import Button from "./Button";

interface EmptyStateProps {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    icon?: LucideIcon;
}

export default function EmptyState({ title, description, actionLabel, onAction, icon: Icon = FolderOpen }: EmptyStateProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem 2rem", background: "rgba(255,255,255,0.02)", borderRadius: "24px", border: "1px dashed rgba(255,255,255,0.1)", textAlign: "center" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(var(--accent-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: "1.5rem" }}>
                <Icon size={40} />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>{title}</h3>
            <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "2rem", maxWidth: "400px", lineHeight: 1.5 }}>{description}</p>
            {actionLabel && (
                <Button onClick={onAction}> {actionLabel} </Button>
            )}
        </div>
    );
}
