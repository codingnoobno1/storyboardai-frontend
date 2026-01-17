"use client";

import React from "react";
import Card from "../ui/Card";
import Rating from "../ui/Rating";
import Avatar from "../ui/Avatar";

export default function TemplateReviews() {
    const REVIEWS = [
        { id: 1, user: "Elena S.", rating: 5, date: "3d ago", comment: "The Sci-Fi logic node in this template is incredibly detailed. Saved me hours!" },
        { id: 2, user: "Mark V.", rating: 4, date: "1w ago", comment: "Beautiful visual aesthetics, but I wish it had more audio mixing hooks." },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800 }}>User Impressions</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Rating value={4} />
                    <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>4.8 / 5.0</span>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {REVIEWS.map((rev) => (
                    <Card key={rev.id} padding="1.2rem" style={{ background: "rgba(255,255,255,0.01)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <Avatar size="sm" initials={rev.user[0]} />
                                <div>
                                    <h5 style={{ fontSize: "0.9rem", fontWeight: 700 }}>{rev.user}</h5>
                                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>Verified Purchase</span>
                                </div>
                            </div>
                            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{rev.date}</span>
                        </div>
                        <Rating value={rev.rating} size={14} />
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", marginTop: "0.8rem", lineHeight: 1.5 }}>{rev.comment}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
