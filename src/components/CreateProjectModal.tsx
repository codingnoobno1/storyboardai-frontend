"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Wand2, BookOpen, ImageIcon, Film, FileText, Sparkles, Image as LucideImage, Check } from "lucide-react";
import { useState } from "react";
import { useProjects, ProjectMode } from "@/context/ProjectContext";
import CreationModeCard from "./CreationModeCard";
import FullPageLoader from "./FullPageLoader";

interface CreateProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const COVER_STYLES = [
    { id: 'comic-boom', name: 'Boom! Comic', image: 'https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=200&h=280&fit=crop' },
    { id: 'noir', name: 'Dark Noir', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=200&h=280&fit=crop' },
    { id: 'sci-fi', name: 'Neon Sci-Fi', image: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=200&h=280&fit=crop' },
    { id: 'manga', name: 'Classic Manga', image: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0bb?q=80&w=200&h=280&fit=crop' },
];

export default function CreateProjectModal({ isOpen, onClose }: CreateProjectModalProps) {
    const [step, setStep] = useState(1);
    const [selectedMode, setSelectedMode] = useState<ProjectMode>("Text-to-Story");
    const [selectedStyle, setSelectedStyle] = useState('comic-boom');
    const [title, setTitle] = useState("");
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const { addProject } = useProjects();

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title) {
            setIsGenerating(true);
            const newId = await addProject(title, selectedMode, selectedStyle, prompt);
            setIsGenerating(false);
            onClose();
            // Reset state
            setStep(1);
            setTitle("");
            setPrompt("");
            setSelectedMode("Text-to-Story");
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            className="glass"
                            style={{ position: 'relative', width: '100%', maxWidth: '900px', maxHeight: '90vh', overflowY: 'auto', padding: '3rem', zIndex: 101, border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                            <button onClick={onClose} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'color 0.2s' }}>
                                <X size={28} />
                            </button>

                            {/* Progress Bar */}
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '3rem', width: '200px' }}>
                                {[1, 2, 3].map(i => (
                                    <div key={i} style={{ flex: 1, height: '4px', borderRadius: '2px', background: step >= i ? 'var(--accent)' : 'rgba(255,255,255,0.1)', transition: 'all 0.4s ease' }} />
                                ))}
                            </div>

                            {step === 1 && (
                                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.8rem', letterSpacing: '-1px' }}>Select Generation Mode</h2>
                                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>Choose how you want the Agent ADK to start your story.</p>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                                        <CreationModeCard
                                            icon={BookOpen}
                                            title="Text to Story"
                                            description="Convert plain scripts or ideas into structured scenes."
                                            accent="var(--accent)"
                                            selected={selectedMode === "Text-to-Story"}
                                            onClick={() => setSelectedMode("Text-to-Story")}
                                        />
                                        <CreationModeCard
                                            icon={ImageIcon}
                                            title="Story to Visuals"
                                            description="Turn existing scripts into comic-style storyboard panels."
                                            accent="#10B981"
                                            selected={selectedMode === "Story-to-Visuals"}
                                            onClick={() => setSelectedMode("Story-to-Visuals")}
                                        />
                                        <CreationModeCard
                                            icon={Film}
                                            title="Visuals to Video"
                                            description="Animate storyboard panels with transitions & subtitles."
                                            accent="#F59E0B"
                                            selected={selectedMode === "Visuals-to-Video"}
                                            onClick={() => setSelectedMode("Visuals-to-Video")}
                                        />
                                        <CreationModeCard
                                            icon={FileText}
                                            title="PPT to Video"
                                            description="Upload a presentation and turn slides into a video story."
                                            accent="#EC4899"
                                            selected={selectedMode === "PPT-to-Video"}
                                            onClick={() => setSelectedMode("PPT-to-Video")}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <button className="btn-primary" onClick={handleNext} style={{ padding: '0.8rem 2.5rem', fontSize: '1rem' }}> Continue </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.8rem', letterSpacing: '-1px' }}>Comic Cover Style</h2>
                                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>Select the visual aesthetic for your project cover.</p>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                                        {COVER_STYLES.map(style => (
                                            <div
                                                key={style.id}
                                                onClick={() => setSelectedStyle(style.id)}
                                                style={{
                                                    position: 'relative',
                                                    cursor: 'pointer',
                                                    borderRadius: '12px',
                                                    overflow: 'hidden',
                                                    aspectRatio: '2/3',
                                                    border: selectedStyle === style.id ? '3px solid var(--accent)' : '3px solid transparent',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                <img src={style.image} alt={style.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', alignItems: 'flex-end', padding: '10px' }}>
                                                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{style.name}</span>
                                                </div>
                                                {selectedStyle === style.id && (
                                                    <div style={{ position: 'absolute', top: '8px', right: '8px', background: 'var(--accent)', borderRadius: '50%', padding: '4px' }}>
                                                        <Check size={14} color="white" />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <button className="btn-secondary" onClick={handleBack}> Back </button>
                                        <button className="btn-primary" onClick={handleNext} style={{ padding: '0.8rem 2.5rem' }}> Almost There </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.8rem', letterSpacing: '-1px' }}>Finalize Project</h2>
                                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>Last step: Give your idea a name and a prompt.</p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Project Title</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Chronicles of Neo-Tokyo"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                required
                                                style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none', fontSize: '1.1rem' }}
                                            />
                                        </div>

                                        <div style={{ marginBottom: '2.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                                                {selectedMode === "PPT-to-Video" ? "Presentation Overview" : "Strategic Prompt"}
                                            </label>
                                            <textarea
                                                placeholder={selectedMode === "PPT-to-Video" ? "Explain what this presentation is about..." : "Describe the core story beat..."}
                                                value={prompt}
                                                onChange={(e) => setPrompt(e.target.value)}
                                                rows={4}
                                                style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none', resize: 'none', fontSize: '1rem', lineHeight: 1.6 }}
                                            />
                                        </div>

                                        {selectedMode === "PPT-to-Video" && (
                                            <div className="glass" style={{ padding: '1.5rem', marginBottom: '2.5rem', borderStyle: 'dashed', textAlign: 'center' }}>
                                                <LucideImage size={32} style={{ marginBottom: '1rem', color: 'var(--accent)' }} />
                                                <p style={{ fontWeight: 600 }}>Upload .pptx file</p>
                                                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Max size 50MB</p>
                                            </div>
                                        )}

                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <button type="button" className="btn-secondary" onClick={handleBack}> Back </button>
                                            <button type="submit" className="btn-primary" style={{ display: 'flex', gap: '10px', alignItems: 'center', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                                                <Wand2 size={20} /> Generate Visual Story
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <FullPageLoader
                isLoading={isGenerating}
                message="Orchestrating Your Vision"
                subMessage={`The Agent Chain is processing your ${selectedMode} request...`}
            />
        </>
    );
}
