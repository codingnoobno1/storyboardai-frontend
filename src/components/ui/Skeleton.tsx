"use client";

import { motion } from "framer-motion";
import React from "react";

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
    style?: React.CSSProperties;
}

export default function Skeleton({ width = "100%", height = "20px", borderRadius = "8px", style }: SkeletonProps) {
    return (
        <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
                width,
                height,
                borderRadius,
                background: "rgba(255,255,255,0.05)",
                ...style
            }}
        />
    );
}
