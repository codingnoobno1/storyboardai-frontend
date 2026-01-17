"use client";

import React from "react";
import RoleSidebar from "@/components/navigation/Sidebar";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import KanbanBoard from "@/components/dashboard/KanbanBoard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Calendar from "@/components/ui/Calendar";
import Card from "@/components/ui/Card";
import { List, Layout, Filter, Search } from "lucide-react";

export default function ProjectsPage() {
    const [view, setView] = React.useState("kanban");

    return (
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
                        <NotificationCenter />
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

                        <KanbanBoard />
                    </div>

                    <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <Calendar />
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
}

function StatRow({ label, val }: any) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
            <span style={{ fontWeight: 700 }}>{val}</span>
        </div>
    );
}
