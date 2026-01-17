"use client";

import React, { useState, useEffect } from "react";
import ConsumerSidebar from "@/components/navigation/ConsumerSidebar";
import CreateProjectModal from "@/components/CreateProjectModal";
import { useProjectContext } from "@/context/ProjectContext";
import { MobileDashboardLayout } from "@/components/mobile";
import { Plus } from "lucide-react";

export default function ConsumerLayout({ children }: { children: React.ReactNode }) {
    const { isCreateModalOpen, closeCreateModal, openCreateModal } = useProjectContext();
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mobile layout
    if (isMobile) {
        return (
            <>
                <MobileDashboardLayout
                    title="Creation Studio"
                    role="consumer"
                    showActionBar={true}
                    actionBarContent={
                        <button
                            className="btn-primary"
                            onClick={openCreateModal}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                width: "100%",
                                minHeight: 48,
                            }}
                        >
                            <Plus size={18} />
                            New Project
                        </button>
                    }
                >
                    {children}
                </MobileDashboardLayout>
                <CreateProjectModal isOpen={isCreateModalOpen} onClose={closeCreateModal} />
            </>
        );
    }

    // Desktop layout
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

