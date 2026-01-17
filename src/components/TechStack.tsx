"use client";

import { motion } from "framer-motion";
import { Server, Zap, ShieldCheck, Layers, Cpu, Database } from "lucide-react";

const techItems = [
    { icon: <Cpu />, title: "AI Orchestration", desc: "Advanced LLM chaining for narrative consistency." },
    { icon: <Zap />, title: "Gen-AI Pipelines", desc: "Stable Diffusion & Runway integration." },
    { icon: <Layers />, title: "Microservices", desc: "Scalable Python FastAPI backend services." },
    { icon: <ShieldCheck />, title: "API Gateway", desc: "Rate limiting and security layer." },
    { icon: <Database />, title: "Asset Storage", desc: "Optimized local & cloud storage." },
    { icon: <Server />, title: "Vercel Edge", desc: "Global distribution & edge functions." },
];

export default function TechStack() {
    return (
        <section className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Tech Behind the Magic</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Leveraging state-of-the-art AI and distributed systems.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {techItems.map((item, index) => (
                    <div key={index} className="glass" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', color: 'var(--cyan)' }}>
                            {item.icon}
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass" style={{ marginTop: '3rem', padding: '2rem', textAlign: 'center', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), rgba(34, 211, 238, 0.05))' }}>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Stack: Next.js • Python • FastAPI • FFmpeg • OpenAI • Replicate
                </p>
            </div>
        </section>
    );
}
