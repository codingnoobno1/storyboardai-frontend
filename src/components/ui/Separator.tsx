"use client";

import React from "react";

interface SeparatorProps {
    orientation?: "horizontal" | "vertical";
    margin?: string;
}

export default function Separator({ orientation = "horizontal", margin = "1.5rem" }: SeparatorProps) {
    return (
        <div
            style={{
                background: "rgba(255,255,255,0.05)",
                ...(orientation === "horizontal"
                    ? { height: "1px", width: "100%", margin: `${margin} 0` }
                    : { width: "1px", height: "100%", margin: `0 ${margin}` })
            }}
        />
    );
}
