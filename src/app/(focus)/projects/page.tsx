"use client";

import React, { useState, useEffect } from "react";
import RoleSidebar from "@/components/navigation/Sidebar";
import KanbanBoard from "@/components/dashboard/KanbanBoard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { List, Layout, Filter, Search, Plus } from "lucide-react";
import {
    MobileScreen,
    ScrollableStack,
    Pressable,
    ActionBar,
    SkeletonStack
} from "@/components/mobile";

export default function ProjectsPage() {
    const [view, setView] = useState("kanban");
    const [isMobile, setIsMobile] = useState(false);

    // Mock data based on KanbanBoard COLUMNS
    const projects = [
        { id: "1", name: "Cyber Noir Action", status: "Thinker" },
        { id: "2", name: "Samurai Duel", status: "Thinker" },
        { id: "3", name: "Space Colony Doc", status: "Planner" },
        { id: "4", name: "Physics 101 Explainer", status: "Executor" },
    ];

    useEffect(() => {
        setIsMobile(/mobile|android|iphone|ipad|phone/i.test(navigator.userAgent));
    }, []);

    const DesktopContent = (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
            <RoleSidebar />
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                        <Breadcrumb items={[{ label: "Projects", path: "/projects" }, { label: "Global Pipeline" }]} />
                        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Agent Orchestration Pipeline</h1>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <div className="glass" style={{ display: "flex", gap: "4px", padding: "4px", borderRadius: "10px" }}>
                            <button
                                onClick={() => setView("kanban")}
                                style={{ padding: "8px 16px", borderRadius: "8px", background: view === 'kanban' ? 'var(--accent)' : 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                            >
                                <Layout size={18} />
                            </button>
                            <button
                                onClick={() => setView("list")}
                                style={{ padding: "8px 16px", borderRadius: "8px", background: view === 'list' ? 'var(--accent)' : 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                            >
                                <List size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "2.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div className="glass" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 16px", minWidth: "300px" }}>
                                <Search size={16} color="rgba(255,255,255,0.3)" />
                                <input type="text" placeholder="Search pipeline..." style={{ background: "none", border: "none", color: "white", outline: "none", fontSize: "0.85rem" }} />
                            </div>
                            <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, cursor: "pointer" }}>
                                <Filter size={16} /> Filters
                            </button>
                        </div>

                        {view === "kanban" ? <KanbanBoard /> : (
                            <ScrollableStack>
                                {projects.map(p => (
                                    <Card key={p.id}>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <p style={{ fontWeight: 700 }}>{p.name}</p>
                                            <Badge variant="secondary">{p.status}</Badge>
                                        </div>
                                    </Card>
                                ))}
                            </ScrollableStack>
                        )}
                    </div>

                    <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <Card title="Orchestration Stats">
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <StatRow label="Success Rate" val="99.4%" />
                                <StatRow label="Avg. Latency" val="1.8s" />
                                <StatRow label="Nodes Active" val="142" />
                            </div>
                        </Card>
                    </aside>
                </div>
            </main>
        </div>
    );

    const MobileContent = (
        <MobileScreen title="Projects" header="inline" footer="tab">
            <div style={{ marginBottom: "20px" }}>
                <div className="glass" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px" }}>
                    <Search size={16} color="rgba(255,255,255,0.3)" />
                    <input type="text" placeholder="Search projects..." style={{ background: "none", border: "none", color: "white", outline: "none", fontSize: "0.9rem", width: "100%" }} />
                </div>
            </div>

            <ScrollableStack>
                {projects.map(p => (
                    <Pressable key={p.id}>
                        <Card padding="1.2rem">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 700 }}>{p.name}</h4>
                                    <div style={{ display: "flex", gap: "4px" }}>
                                        <div style={{ width: "20px", height: "4px", borderRadius: "2px", background: "var(--accent)" }} />
                                        <div style={{ width: "20px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.1)" }} />
                                    </div>
                                </div>
                                <Badge variant="secondary" size="sm">{p.status}</Badge>
                            </div>
                        </Card>
                    </Pressable>
                ))}
            </ScrollableStack>

            <ActionBar>
                <button className="btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%" }}>
                    <Plus size={18} /> New Project
                </button>
            </ActionBar>
        </MobileScreen>
    );

    return isMobile ? MobileContent : DesktopContent;
}

function StatRow({ label, val }: any) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
            <span style={{ fontWeight: 700 }}>{val}</span>
        </div>
    );
}
