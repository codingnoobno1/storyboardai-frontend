"use client";

import React from "react";
import AdminSidebar from "@/components/navigation/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            display: "flex",
            minHeight: "100vh",
            background: "var(--bg)",
            position: 'relative'
        }}>
            {/* Admin Background Glow */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '60vw',
                height: '60vh',
                background: 'radial-gradient(circle at top right, var(--admin-glow), transparent)',
                filter: 'blur(100px)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <AdminSidebar />

            <main style={{
                flex: 1,
                padding: "2rem",
                overflowY: "auto",
                position: 'relative',
                zIndex: 1,
                //@ts-ignore
                "--accent": "var(--admin-accent)"
            }}>
                {children}
            </main>
        </div>
    );
}
