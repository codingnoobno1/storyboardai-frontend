"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Play, Loader2 } from "lucide-react";

export default function Hero() {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const fullPrompt = "A futuristic cyberpunk city with neon lights and flying cars, comic style...";

    // Detect mobile on mount
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Typing animation - disabled on mobile for performance
    useEffect(() => {
        if (isMobile) return; // Skip typing animation on mobile

        let timeout: NodeJS.Timeout;
        if (!isGenerating && !showPreview) {
            let i = 0;
            const interval = setInterval(() => {
                setPrompt(fullPrompt.slice(0, i));
                i++;
                if (i > fullPrompt.length) {
                    clearInterval(interval);
                    timeout = setTimeout(() => handleGenerate(), 1000);
                }
            }, 50);
            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [isGenerating, showPreview, isMobile]);

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setShowPreview(true);
        }, 2000);
    };

    const reset = () => {
        setShowPreview(false);
        setPrompt("");
    };

    return (
        <section
            style={{
                minHeight: "100dvh",
                display: "flex",
                alignItems: "center",
                padding: isMobile ? "1.25rem" : "2rem",
            }}
        >
            <div
                className="hero-grid"
                style={{
                    width: "100%",
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "grid",
                    gap: isMobile ? "1.5rem" : "3rem",
                }}
            >
                {/* TEXT BLOCK - Always first on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: isMobile ? "center" : "left",
                        order: 1
                    }}
                >
                    {/* Badge */}
                    <span
                        className="glass"
                        style={{
                            padding: "4px 12px",
                            fontSize: "0.75rem",
                            color: "var(--cyan)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            marginBottom: "1rem",
                        }}
                    >
                        <Sparkles size={14} />
                        AI-Powered Storytelling
                    </span>

                    {/* Headline - responsive font size */}
                    <h1
                        className="gradient-text"
                        style={{
                            fontSize: "clamp(2rem, 6vw, 3.5rem)",
                            lineHeight: 1.15,
                            marginBottom: "1rem",
                        }}
                    >
                        Turn Ideas into Visual Stories
                    </h1>

                    {/* Subheadline - responsive */}
                    <p
                        style={{
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "clamp(0.95rem, 3vw, 1.2rem)",
                            marginBottom: "1.75rem",
                            maxWidth: isMobile ? "100%" : "90%",
                        }}
                    >
                        Transform text, scripts, or presentations into comic-style
                        storyboards and short videos using AI.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        style={{
                            display: "flex",
                            gap: "0.75rem",
                            flexWrap: "wrap",
                            justifyContent: isMobile ? "center" : "flex-start",
                        }}
                    >
                        <button
                            className="btn-primary"
                            onClick={() => window.location.href = '/dashboard'}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            Create Story <ArrowRight size={16} />
                        </button>
                        <button
                            className="btn-secondary"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            Watch Demo <Play size={16} />
                        </button>
                    </div>
                </motion.div>

                {/* PREVIEW BLOCK - Below fold on mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass"
                    style={{
                        height: isMobile ? 200 : 360,
                        borderRadius: 16,
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        overflow: "hidden",
                        padding: isMobile ? "1rem" : "1.5rem",
                        order: 2,
                    }}
                >
                    {/* Preview content area */}
                    <div
                        style={{
                            flex: 1,
                            background: "rgba(0,0,0,0.3)",
                            borderRadius: 12,
                            padding: isMobile ? "1rem" : "1.5rem",
                            fontFamily: "monospace",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {!showPreview ? (
                                <motion.div
                                    key="typing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        width: "100%",
                                        textAlign: isMobile ? "center" : "left"
                                    }}
                                >
                                    {isMobile ? (
                                        // Simplified mobile view
                                        <div style={{ textAlign: "center" }}>
                                            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎨</div>
                                            <div style={{
                                                color: "var(--cyan)",
                                                fontSize: "0.85rem",
                                                opacity: 0.8
                                            }}>
                                                AI Storyboard Generator
                                            </div>
                                            {isGenerating && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    style={{
                                                        marginTop: "0.75rem",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "0.5rem",
                                                        color: "var(--accent)",
                                                        fontSize: "0.8rem"
                                                    }}
                                                >
                                                    <Loader2 size={16} className="spinning" />
                                                    <span>Generating...</span>
                                                </motion.div>
                                            )}
                                        </div>
                                    ) : (
                                        // Desktop typing animation
                                        <>
                                            <div style={{ color: "var(--cyan)", marginBottom: "0.5rem" }}>
                                                AI Prompt:
                                            </div>
                                            <div style={{ fontSize: "1.1rem", color: "#fff" }}>
                                                {prompt}
                                                <motion.span
                                                    animate={{ opacity: [1, 0] }}
                                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                                    style={{
                                                        borderRight: "2px solid var(--accent)",
                                                        marginLeft: "2px"
                                                    }}
                                                />
                                            </div>
                                            {isGenerating && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    style={{
                                                        marginTop: "2rem",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "1rem",
                                                        color: "var(--accent)"
                                                    }}
                                                >
                                                    <Loader2 className="spinning" />
                                                    <span>Generating Storyboard...</span>
                                                </motion.div>
                                            )}
                                        </>
                                    )}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="preview"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <div style={{
                                        color: "var(--cyan)",
                                        marginBottom: "0.5rem",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        fontSize: isMobile ? "0.8rem" : "0.9rem"
                                    }}>
                                        <span>Generated Scene:</span>
                                        <button
                                            onClick={reset}
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "rgba(255,255,255,0.5)",
                                                cursor: "pointer",
                                                fontSize: "0.8rem"
                                            }}
                                        >
                                            Replay
                                        </button>
                                    </div>
                                    <div
                                        className="glass"
                                        style={{
                                            flex: 1,
                                            overflow: "hidden",
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <div style={{ fontSize: isMobile ? "2rem" : "3rem" }}>🌆</div>
                                            <p style={{
                                                fontSize: "0.8rem",
                                                color: "rgba(255,255,255,0.5)",
                                                marginTop: "0.75rem"
                                            }}>
                                                Cyberpunk City v1.0
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Progress bar - only on desktop */}
                    {!isMobile && (
                        <div style={{
                            marginTop: "1rem",
                            height: 16,
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: 8,
                            overflow: "hidden"
                        }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={isGenerating ? { width: "100%" } : { width: 0 }}
                                transition={{ duration: 2 }}
                                style={{ height: "100%", background: "var(--accent)" }}
                            />
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Responsive grid CSS */}
            <style jsx global>{`
                .hero-grid {
                    grid-template-columns: 1fr;
                }

                @media (min-width: 1024px) {
                    .hero-grid {
                        grid-template-columns: 1fr 1fr;
                        align-items: center;
                    }
                }

                .spinning {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}

