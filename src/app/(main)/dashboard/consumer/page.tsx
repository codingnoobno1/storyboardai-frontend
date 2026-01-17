"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Plus,
    Search,
    Zap
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/context/ProjectContext";
import { useUserStore } from "@/store/useStore";

import CreditBalanceWidget from "@/components/consumer/CreditBalanceWidget";
import {
    MobileScreen,
    ScrollableStack,
    Pressable,
    ActionBar,
    SkeletonStack
} from "@/components/mobile";

export default function ConsumerDashboardPage() {
    const { user, isLoading } = useAuth();
    const { projects, openCreateModal } = useProjects();
    const { setRole } = useUserStore();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("all");

    // Client-side mobile detection for behavioral wrapping
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(/mobile|android|iphone|ipad|phone/i.test(navigator.userAgent));
    }, []);

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/login");
        }
    }, [isLoading, user, router]);

    if (isLoading) {
        return isMobile ? <MobileScreen header="none"><SkeletonStack /></MobileScreen> : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>Loading...</div>;
    }

    const filteredProjects = projects.filter(p => {
        if (activeTab === "all") return true;
        return p.status.toLowerCase() === activeTab.toLowerCase();
    });

    const DashboardContent = (
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "1rem" : "2rem" }}>
            {/* Desktop-only Header */}
            {!isMobile && (
                <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
                    <div>
                        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Creation Studio</h1>
                        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>Transform your ideas into stunning AI-powered narratives.</p>
                    </div>

                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <button
                            className="glass"
                            style={{ padding: "10px 20px", display: "flex", alignItems: "center", gap: "8px", border: "1px solid rgba(16, 185, 129, 0.3)", color: "#10b981", cursor: "pointer", borderRadius: "10px", fontSize: "0.9rem", fontWeight: 600 }}
                            onClick={() => {
                                setRole("Creator");
                                router.push("/dashboard/creator");
                            }}
                        >
                            <Zap size={16} /> Switch to Creator Studio
                        </button>
                        <div className="glass" style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                            <Search size={18} color="rgba(255,255,255,0.3)" />
                        </div>
                        <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }} onClick={openCreateModal}>
                            <Plus size={18} /> New Project
                        </button>
                    </div>
                </header>
            )}

            {/* Stats Summary */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fit, minmax(240px, 1fr))", gap: isMobile ? "0.8rem" : "1.5rem", marginBottom: isMobile ? "1rem" : "3rem" }}>
                <StatCard label="Videos" value={projects.filter(p => p.status === "Completed").length.toString()} growth="+2" isMobile={isMobile} />
                <StatCard label="Boards" value={(projects.length * 4).toString()} growth="+5" isMobile={isMobile} />
                <StatCard label="Saved" value="124h" growth="+15%" isMobile={isMobile} />
                <StatCard label="Agent" value="High" growth="99%" isMobile={isMobile} />
            </div>

            {/* Projects Section */}
            <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: isMobile ? "1.1rem" : "1.3rem", fontWeight: "600" }}>Recent Projects</h3>
                    <div style={{ display: "flex", background: "rgba(255,255,255,0.03)", padding: "4px", borderRadius: "10px" }}>
                        <TabButton label="All" active={activeTab === "all"} onClick={() => setActiveTab("all")} isMobile={isMobile} />
                        <TabButton label="Active" active={activeTab === "processing"} onClick={() => setActiveTab("processing")} isMobile={isMobile} />
                    </div>
                </div>

                {isMobile ? (
                    <ScrollableStack>
                        {filteredProjects.map((project) => (
                            <Pressable key={project.id} onPress={() => router.push(`/storyboard/${project.id}`)}>
                                <ProjectCard {...project} thumbnail={project.coverImage || ""} />
                            </Pressable>
                        ))}
                    </ScrollableStack>
                ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} {...project} thumbnail={project.coverImage || ""} />
                        ))}
                    </div>
                )}
            </div>

            {!isMobile && <CreditBalanceWidget />}
            {isMobile && <ActionBar><button className="btn-primary" onClick={openCreateModal}>+ New Project</button></ActionBar>}
        </div>
    );

    return isMobile ? (
        <MobileScreen title="Creation Studio" header="inline" footer="tab">
            {DashboardContent}
        </MobileScreen>
    ) : DashboardContent;
}

function StatCard({ label, value, growth, isMobile }: { label: string, value: string, growth: string, isMobile?: boolean }) {
    return (
        <div className="glass" style={{ padding: isMobile ? "1rem" : "1.5rem" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.2rem" }}>{label}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <h4 style={{ fontSize: isMobile ? "1.4rem" : "1.8rem", fontWeight: "700" }}>{value}</h4>
                <span style={{ fontSize: "0.7rem", color: "var(--accent)", fontWeight: "600" }}>{growth}</span>
            </div>
        </div>
    );
}

function TabButton({ label, active, onClick, isMobile }: { label: string, active: boolean, onClick: () => void, isMobile?: boolean }) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: isMobile ? "4px 12px" : "6px 16px",
                fontSize: isMobile ? "0.8rem" : "0.85rem",
                borderRadius: "8px",
                border: "none",
                background: active ? "rgba(255,255,255,0.1)" : "transparent",
                color: active ? "white" : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "all 0.2s ease"
            }}
        >
            {label}
        </button>
    );
}
