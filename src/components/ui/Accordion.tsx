"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
    const [openIds, setOpenIds] = useState<string[]>([]);

    const toggle = (id: string) => {
        if (allowMultiple) {
            setOpenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
        } else {
            setOpenIds(prev => prev.includes(id) ? [] : [id]);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {items.map((item) => {
                const isOpen = openIds.includes(item.id);
                return (
                    <div key={item.id} className="glass" style={{ padding: 0, overflow: 'hidden' }}>
                        <button
                            onClick={() => toggle(item.id)}
                            style={{
                                width: "100%",
                                padding: "1rem 1.5rem",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "white",
                                fontWeight: 600,
                                fontSize: "1rem"
                            }}
                        >
                            {item.title}
                            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                                <ChevronDown size={20} color="rgba(255,255,255,0.4)" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                        {item.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
