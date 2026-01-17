"use client";

import React from "react";
import CreatorSidebar from "@/components/navigation/CreatorSidebar";

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            display: "flex",
            minHeight: "100vh",
            background: "var(--bg)",
            position: 'relative'
        }}>
            {/* Creator Background Glow */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '60vw',
                height: '60vh',
                background: 'radial-gradient(circle at top right, var(--creator-glow), transparent)',
                filter: 'blur(100px)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <CreatorSidebar />

            <main style={{
                flex: 1,
                padding: "2rem",
                overflowY: "auto",
                position: 'relative',
                zIndex: 1,
                //@ts-ignore
                "--accent": "var(--creator-accent)"
            }}>
                {children}
            </main>
        </div>
    );
}
