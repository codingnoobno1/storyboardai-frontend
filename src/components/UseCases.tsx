"use client";

import { motion } from "framer-motion";
import { GraduationCap, Clapperboard, Rocket, Megaphone, BookOpen } from "lucide-react";

const useCases = [
    {
        title: "Educators",
        description: "Create visual learning content that keeps students engaged.",
        icon: <GraduationCap size={24} />,
        color: "#6366F1"
    },
    {
        title: "Content Creators",
        description: "Turn scripts into shorts and story reels for social media.",
        icon: <Megaphone size={24} />,
        color: "#22D3EE"
    },
    {
        title: "Startups",
        description: "Produce pitch and product explainer videos in minutes.",
        icon: <Rocket size={24} />,
        color: "#F43F5E"
    },
    {
        title: "Writers",
        description: "Visualize book scenes, comics, and narrative arcs.",
        icon: <BookOpen size={24} />,
        color: "#10B981"
    }
];

export default function UseCases() {
    return (
        <section className="container">
            <div className="glass" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Designed for Every Storyteller</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: '1.7' }}>
                        Whether you are teaching a class, pitching a startup, or writing your next novel, StoryBoardAI provides the visual tools to bring your ideas to life.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {useCases.map((useCase, index) => (
                            <div key={index} style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ color: useCase.color }}>{useCase.icon}</div>
                                <div>
                                    <h4 style={{ fontWeight: 600 }}>{useCase.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{useCase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <div className="glass floating" style={{ width: '100%', height: '300px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(34, 211, 238, 0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '4rem' }}>🎭</span>
                    </div>
                    <div className="glass" style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent)', color: 'white', borderRadius: '50%', transform: 'rotate(15deg)' }}>
                        <span style={{ fontWeight: 'bold' }}>Built for YOU</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
