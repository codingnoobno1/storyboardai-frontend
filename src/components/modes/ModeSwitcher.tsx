"use client";

import { useModeStore, GlobalMode } from "@/store/useStore";
import { motion } from "framer-motion";
import { GraduationCap, PartyPopper, Briefcase, LucideIcon } from "lucide-react";

const MODES: { id: GlobalMode, icon: LucideIcon, color: string }[] = [
    { id: 'Education', icon: GraduationCap, color: '#6366F1' },
    { id: 'Fun', icon: PartyPopper, color: '#EC4899' },
    { id: 'Professional', icon: Briefcase, color: '#10B981' },
];

export default function ModeSwitcher() {
    const { mode, setMode } = useModeStore();

    return (
        <div className="glass" style={{ display: 'inline-flex', padding: '4px', borderRadius: '12px', gap: '4px' }}>
            {MODES.map((m) => {
                const active = mode === m.id;
                const Icon = m.icon;

                return (
                    <motion.button
                        key={m.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setMode(m.id)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            background: active ? m.color : 'transparent',
                            color: active ? 'white' : 'rgba(255,255,255,0.4)',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <Icon size={16} />
                        {m.id}
                    </motion.button>
                );
            })}
        </div>
    );
}
