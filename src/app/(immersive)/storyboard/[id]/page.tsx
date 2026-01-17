"use client";

import { useParams, useRouter } from "next/navigation";
import { useProjects } from "@/context/ProjectContext";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import {
    ArrowLeft,
    Save,
    Play,
    Plus,
    Wand2,
    Layers,
    Music,
    Type,
    ChevronRight,
    MoreHorizontal,
    Settings
} from "lucide-react";
import { motion } from "framer-motion";

export default function StoryboardEditorPage() {
    const { id } = useParams();
    const router = useRouter();
    const { getProject } = useProjects();
    const { user, isLoading } = useAuth();
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        if (!isLoading && !user) router.push("/login");
        if (id) {
            const p = getProject(id as string);
            setProject(p);
        }
    }, [id, user, isLoading, getProject, router]);

    if (!project) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Editor...</div>;

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#050505" }}>
            {/* Top Bar */}
            <header className="glass" style={{ padding: "0.8rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <button onClick={() => router.push("/dashboard")} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                        <ArrowLeft size={20} />
                    </button>
                    <div style={{ height: '20px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />
                    <div>
                        <h1 style={{ fontSize: "1rem", fontWeight: "600" }}>{project.title}</h1>
                        <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>Last saved 2m ago</p>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "0.8rem" }}>
                    <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                        <Save size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Save Draft
                    </button>
                    <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={() => router.push(`/video/${id}`)}>
                        <Play size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Generate Video
                    </button>
                </div>
            </header>

            {/* Editor Body */}
            <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
                {/* Left Toolbar */}
                <aside style={{ width: "60px", borderRight: "1px solid var(--card-border)", display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem 0", gap: "1.5rem" }}>
                    <ToolbarIcon icon={<Wand2 size={24} />} active />
                    <ToolbarIcon icon={<Layers size={24} />} />
                    <ToolbarIcon icon={<Type size={24} />} />
                    <ToolbarIcon icon={<Music size={24} />} />
                    <div style={{ flex: 1 }} />
                    <ToolbarIcon icon={<Settings size={24} />} />
                </aside>

                {/* Scene list */}
                <div style={{ width: "300px", borderRight: "1px solid var(--card-border)", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.01)" }}>
                    <div style={{ padding: "1.2rem", borderBottom: "1px solid var(--card-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Scenes (4)</span>
                        <button style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer" }}><Plus size={18} /></button>
                    </div>
                    <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
                        <SceneItem index={1} text="The neon signs flicker as Dex walks down the alley." active />
                        <SceneItem index={2} text="Close up on Dex's mechanical eye scanning the wall." />
                        <SceneItem index={3} text="A hidden door slides open, revealing a secret lab." />
                        <SceneItem index={4} text="Dex enters the room, gun drawn and alert." />
                    </div>
                </div>

                {/* Canvas Area */}
                <main style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem", background: "#080808" }}>
                    <div className="glass" style={{ flex: 1, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌆</div>
                            <h3 style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.6)' }}>AI Scene Preview</h3>
                            <p style={{ color: 'rgba(255,255,255,0.3)', marginTop: '0.5rem' }}>The neon signs flicker as Dex walks down the alley.</p>
                        </div>

                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', display: 'flex', gap: '1rem' }}>
                            <div className="glass" style={{ flex: 1, padding: '1rem', background: 'rgba(0,0,0,0.6)' }}>
                                <p style={{ fontSize: '0.8rem', color: 'var(--cyan)', marginBottom: '0.4rem' }}>Visual Prompt</p>
                                <p style={{ fontSize: '0.9rem' }}>Cinematic noir lighting, heavy rain, purple and teal neon reflections, high contrast.</p>
                            </div>
                            <button className="btn-primary" style={{ padding: '0 1.5rem' }}> Regenerate </button>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="glass" style={{ height: "120px", padding: '1.2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Timeline</span>
                            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>00:00 / 00:45</span>
                        </div>
                        <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', padding: '4px', gap: '4px' }}>
                            <div style={{ flex: 1, background: 'var(--accent)', borderRadius: '4px' }} />
                            <div style={{ flex: 1.2, background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                            <div style={{ flex: 0.8, background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                            <div style={{ flex: 1.5, background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function ToolbarIcon({ icon, active = false }: { icon: any, active?: boolean }) {
    return (
        <div style={{
            color: active ? "var(--accent)" : "rgba(255,255,255,0.3)",
            cursor: "pointer",
            padding: '8px',
            borderRadius: '8px',
            background: active ? 'rgba(99, 102, 241, 0.1)' : 'transparent'
        }}>
            {icon}
        </div>
    );
}

function SceneItem({ index, text, active = false }: { index: number, text: string, active?: boolean }) {
    return (
        <div style={{
            padding: "1rem",
            borderRadius: "12px",
            background: active ? "rgba(255,255,255,0.05)" : "transparent",
            border: active ? "1px solid var(--accent)" : "1px solid transparent",
            marginBottom: "1rem",
            cursor: "pointer"
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: active ? "var(--accent)" : "rgba(255,255,255,0.3)" }}>SCENE {index}</span>
                <MoreHorizontal size={14} color="rgba(255,255,255,0.3)" />
            </div>
            <p style={{ fontSize: "0.85rem", color: active ? "white" : "rgba(255,255,255,0.5)", lineHeight: "1.4" }}>{text}</p>
        </div>
    );
}
