"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Image as ImageIcon, Video, FileText } from "lucide-react";

const features = [
    {
        title: "Text to Story",
        description: "Describe your idea in plain language. Our AI converts it into a structured script with scenes.",
        icon: <MessageSquareText size={32} />,
        color: "#6366F1"
    },
    {
        title: "Story to Visuals",
        description: "Each scene becomes a storyboard panel. Generate comic-style images aligned with the narrative.",
        icon: <ImageIcon size={32} />,
        color: "#22D3EE"
    },
    {
        title: "Visuals to Video",
        description: "Bring still images to life. Create short animated clips with transitions and subtitles.",
        icon: <Video size={32} />,
        color: "#F43F5E"
    },
    {
        title: "PPT to Video",
        description: "Turn presentations into explainer videos. Upload a PPT and convert slides into engaging content.",
        icon: <FileText size={32} />,
        color: "#10B981"
    }
];

export default function Features() {
    return (
        <section className="container" id="features">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Powerful AI Capabilities</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
                    Everything you need to transform your creative vision into high-quality visual content.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="glass"
                        style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '15px',
                            background: `${feature.color}22`,
                            color: feature.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            {feature.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{feature.description}</p>

                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: feature.color,
                            opacity: 0.05,
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
