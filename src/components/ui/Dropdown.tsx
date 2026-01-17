"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
    id: string;
    label: string;
    icon?: any;
}

interface DropdownProps {
    options: DropdownOption[];
    onSelect: (id: string) => void;
    placeholder?: string;
    selectedId?: string;
}

export default function Dropdown({ options, onSelect, placeholder = "Select...", selectedId }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const selectedOption = options.find(o => o.id === selectedId);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    color: selectedOption ? "white" : "rgba(255,255,255,0.4)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    transition: "all 0.2s"
                }}
            >
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {selectedOption?.icon && <selectedOption.icon size={16} />}
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown size={18} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="glass"
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            zIndex: 100,
                            padding: "8px",
                            marginTop: "4px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }}
                    >
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => {
                                    onSelect(option.id);
                                    setIsOpen(false);
                                }}
                                style={{
                                    width: "100%",
                                    padding: "10px 12px",
                                    background: selectedId === option.id ? "rgba(var(--accent-rgb), 0.1)" : "transparent",
                                    border: "none",
                                    borderRadius: "6px",
                                    color: selectedId === option.id ? "var(--accent)" : "rgba(255,255,255,0.7)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    cursor: "pointer",
                                    fontSize: "0.9rem",
                                    transition: "all 0.1s"
                                }}
                            >
                                {option.icon && <option.icon size={16} />}
                                {option.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
