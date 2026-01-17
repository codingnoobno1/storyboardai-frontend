"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NavBar } from "antd-mobile";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { headerCollapseVariants, springPresets } from "../motion/transitions";

interface MobileHeaderProps {
    title?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
    type?: "inline" | "nav";
    /** Enable header collapse on scroll */
    collapsible?: boolean;
    /** Scroll container ref for collapse detection */
    scrollContainerRef?: React.RefObject<HTMLElement>;
}

export function MobileHeader({
    title,
    left,
    right,
    type = "inline",
    collapsible = false,
    scrollContainerRef
}: MobileHeaderProps) {
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    // Track scroll for collapse behavior
    useEffect(() => {
        if (!collapsible) return;

        const handleScroll = () => {
            const scrollY = scrollContainerRef?.current?.scrollTop ?? window.scrollY;
            setIsCollapsed(scrollY > 50);
        };

        const target = scrollContainerRef?.current ?? window;
        target.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            target.removeEventListener('scroll', handleScroll);
        };
    }, [collapsible, scrollContainerRef]);

    // Inline header style (large title, RN-style)
    if (type === "inline") {
        return (
            <motion.div
                ref={headerRef}
                animate={collapsible ? (isCollapsed ? "collapsed" : "expanded") : "expanded"}
                variants={headerCollapseVariants}
                style={{
                    padding: isCollapsed ? "12px 16px" : "20px 16px 8px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    background: isCollapsed
                        ? "rgba(5, 5, 7, 0.95)"
                        : "transparent",
                    backdropFilter: isCollapsed ? "blur(20px)" : "none",
                    borderBottom: isCollapsed
                        ? "1px solid rgba(255,255,255,0.05)"
                        : "none",
                    transition: "all 0.2s ease-out",
                }}
            >
                <div style={{ flex: 1 }}>
                    {left && <div style={{ marginBottom: 8 }}>{left}</div>}
                    {title && (
                        <h1
                            style={{
                                margin: 0,
                                fontSize: isCollapsed ? "1.2rem" : "1.8rem",
                                fontWeight: 700,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                transition: "font-size 0.2s ease-out",
                            }}
                        >
                            {title}
                        </h1>
                    )}
                </div>
                {right && (
                    <div style={{
                        flexShrink: 0,
                        marginLeft: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    }}>
                        {right}
                    </div>
                )}
            </motion.div>
        );
    }

    // Nav header style (back button, centered title)
    return (
        <NavBar
            back={left || ""}
            backArrow={left === undefined ? <ArrowLeft size={20} /> : undefined}
            onBack={() => router.back()}
            right={right}
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                background: "rgba(5, 5, 7, 0.9)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                "--height": "56px",
                "--title-font-size": "1rem",
            } as React.CSSProperties}
        >
            <span style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "60vw",
                display: "block"
            }}>
                {title}
            </span>
        </NavBar>
    );
}

