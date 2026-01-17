"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultValue?: string;
}

export default function Tabs({ tabs, defaultValue }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].id);

    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: "1rem", borderBottom: "1px solid rgba(255,255,255,0.05)", marginBottom: "1.5rem" }}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                background: "none",
                                border: "none",
                                padding: "12px 16px",
                                color: isActive ? "var(--accent)" : "rgba(255,255,255,0.4)",
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.2s",
                                position: "relative"
                            }}
                        >
                            {tab.label}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    style={{ position: "absolute", bottom: -1, left: 0, right: 0, height: "2px", background: "var(--accent)" }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
            <div>
                {tabs.find(t => t.id === activeTab)?.content}
            </div>
        </div>
    );
}
