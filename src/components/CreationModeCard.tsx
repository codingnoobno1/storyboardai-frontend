"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CreationModeCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    selected: boolean;
    onClick: () => void;
    accent: string;
}

export default function CreationModeCard({ icon: Icon, title, description, selected, onClick, accent }: CreationModeCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            style={{
                padding: '1.5rem',
                borderRadius: '16px',
                background: selected ? `linear-gradient(135deg, ${accent}22, ${accent}11)` : 'rgba(255,255,255,0.03)',
                border: `2px solid ${selected ? accent : 'transparent'}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                boxShadow: selected ? `0 10px 30px -10px ${accent}44` : 'none'
            }}
        >
            <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: selected ? accent : 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: selected ? 'white' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s ease'
            }}>
                <Icon size={24} />
            </div>

            <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem', color: selected ? 'white' : 'rgba(255,255,255,0.8)' }}>{title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{description}</p>
            </div>
        </motion.div>
    );
}
