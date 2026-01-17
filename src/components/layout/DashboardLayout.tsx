"use client";

import React from "react";
import RoleSidebar from "@/components/navigation/Sidebar";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import CreateProjectModal from "@/components/CreateProjectModal";
import { useProjectContext } from "@/context/ProjectContext";

interface DashboardLayoutProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

export default function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
    const { isCreateModalOpen, closeCreateModal } = useProjectContext();

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
            <RoleSidebar />
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto", position: 'relative' }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
                    <div>
                        {title && <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>{title}</h1>}
                        {subtitle && <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>{subtitle}</p>}
                    </div>
                    <NotificationCenter />
                </div>

                {children}

                <CreateProjectModal isOpen={isCreateModalOpen} onClose={closeCreateModal} />
            </main>
        </div>
    );
}
