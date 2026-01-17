"use client";

import React from "react";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import { Star, ThumbsUp, MessageSquare, TrendingUp } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const MOCK_REVIEWS = [
    { id: "1", buyer: "Alex Rivers", template: "Cyber Noir Action", rating: 5, comment: "Absolutely stunning template! Saved me hours of work.", date: "2 days ago" },
    { id: "2", buyer: "Sarah Miller", template: "Neon Tokyo 2077", rating: 4, comment: "Great quality, minor tweaks needed for my use case.", date: "5 days ago" },
    { id: "3", buyer: "Mike Chen", template: "Manga Pro", rating: 5, comment: "Perfect for my anime project. Highly recommend!", date: "1 week ago" },
];

export default function CustomerReviewsPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Customer Reviews</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Ratings, feedback, and testimonials from your buyers.</p>
                </div>
                <NotificationCenter />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginBottom: "2rem" }}>
                <StatCard label="Average Rating" value="4.8" icon={Star} color="#10B981" />
                <StatCard label="Total Reviews" value="127" icon={MessageSquare} color="var(--accent)" />
                <StatCard label="Response Rate" value="94%" icon={ThumbsUp} color="#6366f1" />
            </div>

            <Card title="Recent Customer Feedback" variant="creator">
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {MOCK_REVIEWS.map(review => (
                        <div key={review.id} style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                                <div>
                                    <h4 style={{ fontSize: "1rem", fontWeight: 700 }}>{review.buyer}</h4>
                                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>{review.template}</p>
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    <div style={{ display: "flex", gap: "2px" }}>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="#10B981" color="#10B981" />
                                        ))}
                                    </div>
                                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{review.date}</span>
                                </div>
                            </div>
                            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}

function StatCard({ label, value, icon: Icon, color }: any) {
    return (
        <Card>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", color }}>
                    <Icon size={24} />
                </div>
                <div>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.25rem" }}>{label}</p>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>{value}</h2>
                </div>
            </div>
        </Card>
    );
}
