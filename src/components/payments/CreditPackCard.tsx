"use client";

import React from "react";
import { Zap, Target, Star, Crown } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

interface CreditPack {
    id: string;
    name: string;
    credits: number;
    price: number;
    bonus?: number;
    featured?: boolean;
}

const PACKS: CreditPack[] = [
    { id: "1", name: "Starter Kit", credits: 100, price: 99, featured: false },
    { id: "2", name: "Creator Pro", credits: 500, price: 399, bonus: 50, featured: true },
    { id: "3", name: "Studio Tier", credits: 2000, price: 1499, bonus: 300, featured: false },
];

export default function CreditPackCard() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {PACKS.map((pack) => (
                <Card
                    key={pack.id}
                    style={{
                        position: "relative",
                        border: pack.featured ? "2px solid var(--accent)" : "1px solid rgba(255,255,255,0.1)",
                        transform: pack.featured ? "scale(1.05)" : "scale(1)",
                        zIndex: pack.featured ? 10 : 1
                    }}
                >
                    {pack.featured && (
                        <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 800 }}>
                            MOST POPULAR
                        </div>
                    )}

                    <div style={{ textAlign: "center", padding: "1rem 0" }}>
                        <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(var(--accent-rgb), 0.1)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                            {pack.credits >= 2000 ? <Crown size={32} /> : pack.credits >= 500 ? <Star size={32} /> : <Zap size={32} />}
                        </div>

                        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>{pack.name}</h3>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "6px", marginBottom: "1.5rem" }}>
                            <span style={{ fontSize: "2.5rem", fontWeight: 800 }}>{pack.credits}</span>
                            <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>Credits</span>
                        </div>

                        {pack.bonus && (
                            <div style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10B981", padding: "6px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                                + {pack.bonus} BONUS CREDITS
                            </div>
                        )}

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.5rem" }}>
                                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>Price: </span>
                                <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>₹{pack.price}</span>
                            </div>
                            <Button variant={pack.featured ? "primary" : "secondary"} style={{ width: "100%", padding: "1rem" }}> Buy Pack </Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
