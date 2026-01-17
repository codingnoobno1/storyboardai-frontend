"use client";

import { motion } from "framer-motion";
import { Mail, Github, ExternalLink } from "lucide-react";

export default function CTA() {
    return (
        <section className="container">
            <div className="glass shadow-glow" style={{ padding: '6rem 2rem', textAlign: 'center', background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent), radial-gradient(circle at bottom left, rgba(34, 211, 238, 0.15), transparent)' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Ready to Tell Your Story?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
                    Join creators and innovators who are already using StoryBoardAI to transform their ideas into visual reality.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }} onClick={() => window.location.href = '/dashboard'}>
                        Get Started for Free
                    </button>
                    <button className="btn-secondary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                        View Full Architecture
                    </button>
                </div>

                <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '3rem', color: 'rgba(255,255,255,0.4)' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
                        <Mail size={18} /> Contact Us
                    </a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
                        <ExternalLink size={18} /> Documentation
                    </a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
                        <Github size={18} /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
