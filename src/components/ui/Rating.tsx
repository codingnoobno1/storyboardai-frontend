"use client";

import React from "react";
import { Star } from "lucide-react";

interface RatingProps {
    value: number;
    total?: number;
    size?: number;
}

export default function Rating({ value, total = 5, size = 16 }: RatingProps) {
    return (
        <div style={{ display: "flex", gap: "4px" }}>
            {Array.from({ length: total }).map((_, i) => (
                <Star
                    key={i}
                    size={size}
                    fill={i < value ? "var(--accent)" : "transparent"}
                    color={i < value ? "var(--accent)" : "rgba(255,255,255,0.2)"}
                />
            ))}
        </div>
    );
}
