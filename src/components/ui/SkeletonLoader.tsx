"use client";

import React from "react";

export default function Skeleton({ width = "100%", height = "20px", borderRadius = "4px" }) {
    return (
        <div
            className="skeleton"
            style={{
                width,
                height,
                borderRadius,
                background: "rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden"
            }}
        />
    );
}
