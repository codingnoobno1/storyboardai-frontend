"use client";

import React from "react";
import { Star, User } from "lucide-react";
import Avatar from "../ui/Avatar";

const REVIEWS = [
    { id: 1, user: "Alex R.", rating: 5, date: "2 days ago", comment: "The neon effects are insane. This template saved me hours of post-processing!" },
    { id: 2, user: "Sarah M.", rating: 4, date: "1 week ago", comment: "Great structure. Would love to see more color variations in the future." },
    { id: 3, user: "John Doe", rating: 5, date: "2 weeks ago", comment: "Perfect for my cyberpunk short film. The AI planner follows the logic perfectly." },
];

export default function ReviewSection() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "1rem 0" }}>
            {REVIEWS.map((review) => (
                <div key={review.id} style={{ display: "flex", gap: "1rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <Avatar name={review.user} size="sm" />
                    <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.3rem" }}>
                            <h5 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{review.user}</h5>
                            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{review.date}</span>
                        </div>
                        <div style={{ display: "flex", gap: "2px", marginBottom: "0.5rem" }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={12} fill={i < review.rating ? "#F59E0B" : "none"} color={i < review.rating ? "#F59E0B" : "rgba(255,255,255,0.2)"} />
                            ))}
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{review.comment}</p>
                    </div>
                </div>
            ))}
            <button style={{ alignSelf: "center", background: "none", border: "none", color: "var(--accent)", fontSize: "0.85rem", fontWeight: 700, cursor: "pointer", marginTop: "0.5rem" }}>
                Load More Reviews
            </button>
        </div>
    );
}
