"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Play, Loader2 } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

export default function Hero() {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const fullPrompt = "A futuristic cyberpunk city with neon lights and flying cars, comic style...";

    useEffect(() => {
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
    }, [isGenerating, showPreview]);

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
        <section className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', minHeight: '80vh' }}>
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="glass" style={{ padding: '4px 12px', fontSize: '0.8rem', color: 'var(--cyan)', marginBottom: '1rem', display: 'inline-block' }}>
                            <Sparkles size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            AI-Powered Storytelling
                        </span>
                        <h1 className="gradient-text" style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                            Turn Ideas into Visual Stories — Instantly
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                            StoryBoardAI transforms simple text, scripts, or presentations into comic-style storyboards and short videos using AI.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn-primary" onClick={() => window.location.href = '/dashboard'}>
                                Create Your Own Story <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                            </button>
                            <button className="btn-secondary">
                                View Sample Video <Play size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="glass" style={{ padding: '2rem', height: '400px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '1.5rem', fontFamily: 'monospace', position: 'relative' }}>
                        <AnimatePresence mode="wait">
                            {!showPreview ? (
                                <motion.div
                                    key="typing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div style={{ color: 'var(--cyan)', marginBottom: '0.5rem' }}>AI Prompt:</div>
                                    <div style={{ fontSize: '1.1rem', color: '#fff' }}>
                                        {prompt}
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            style={{ borderRight: '2px solid var(--accent)', marginLeft: '2px' }}
                                        />
                                    </div>
                                    {isGenerating && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent)' }}
                                        >
                                            <Loader2 className="spinning" />
                                            <span>Generating Storyboard...</span>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="preview"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <div style={{ color: 'var(--cyan)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Generated Scene:</span>
                                        <button onClick={reset} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '0.8rem' }}>Replay</button>
                                    </div>
                                    <div className="glass" style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(45deg, #121212, #2a2a2a)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '3rem' }}>🌆</div>
                                                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>Cyberpunk City v1.0</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div style={{ marginTop: '1rem', height: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isGenerating ? { width: '100%' } : { width: 0 }}
                            transition={{ duration: 2 }}
                            style={{ height: '100%', background: 'var(--accent)' }}
                        />
                    </div>
                </div>
            </div>

            <style jsx global>{`
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
