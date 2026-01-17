"use client";

import React from "react";
import ConsumerSidebar from "@/components/navigation/ConsumerSidebar";
import CreateProjectModal from "@/components/CreateProjectModal";
import { useProjectContext } from "@/context/ProjectContext";

export default function ConsumerLayout({ children }: { children: React.ReactNode }) {
    const { isCreateModalOpen, closeCreateModal } = useProjectContext();

    return (
        <div style={{
            display: "flex",
            minHeight: "100vh",
            background: "var(--bg)",
            position: 'relative'
        }}>
            {/* Consumer Background Glow */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '60vw',
                height: '60vh',
                background: 'radial-gradient(circle at top right, var(--consumer-glow), transparent)',
                filter: 'blur(100px)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <ConsumerSidebar />

            <main style={{
                flex: 1,
                padding: "2rem",
                overflowY: "auto",
                position: 'relative',
                zIndex: 1,
                //@ts-ignore
                "--accent": "var(--consumer-accent)"
            }}>
                {children}
            </main>

            <CreateProjectModal isOpen={isCreateModalOpen} onClose={closeCreateModal} />
        </div>
    );
}
