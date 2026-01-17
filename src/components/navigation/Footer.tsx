"use client";

import React from "react";
import Link from "next/link";
import { Film, Github, Twitter, Linkedin, Youtube, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "5rem 2rem 2rem", background: "var(--bg)" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>
                <div style={{ gridColumn: "span 2" }}>
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "white", marginBottom: "1.5rem" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Film size={20} color="white" />
                        </div>
                        <span style={{ fontSize: "1.2rem", fontWeight: 900 }}>StoryBoard <span style={{ color: "var(--accent)" }}>AI</span></span>
                    </Link>
                    <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: "300px", lineHeight: 1.6, fontSize: "0.95rem" }}>
                        The industrial-grade AI platform for cinematic storytelling and visual narrative orchestration.
                    </p>
                </div>

                <FooterColumn
                    title="Platform"
                    links={[{ label: "Marketplace", href: "/store" }, { label: "Features", href: "/#features" }, { label: "Pricing", href: "/pricing" }, { label: "Roadmap", href: "/#roadmap" }]}
                />
                <FooterColumn
                    title="Company"
                    links={[{ label: "About Us", href: "/about" }, { label: "Career", href: "/career" }, { label: "Contact", href: "/contact" }, { label: "Blog", href: "/blog" }]}
                />
                <FooterColumn
                    title="Legal"
                    links={[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "Cookie Policy", href: "/cookies" }, { label: "Security", href: "/security" }]}
                />
            </div>

            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem 0", borderTop: "1px solid rgba(255,255,255,0.03)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>
                    © 2025 StoryBoard AI Inc. Crafted with <Heart size={14} style={{ color: "#ef4444", verticalAlign: "middle" }} /> by the Vision Team.
                </p>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                    <Github size={20} color="rgba(255,255,255,0.3)" style={{ cursor: "pointer" }} />
                    <Twitter size={20} color="rgba(255,255,255,0.3)" style={{ cursor: "pointer" }} />
                    <Linkedin size={20} color="rgba(255,255,255,0.3)" style={{ cursor: "pointer" }} />
                    <Youtube size={20} color="rgba(255,255,255,0.3)" style={{ cursor: "pointer" }} />
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }: any) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "white" }}>{title}</h4>
            {links.map((link: any) => (
                <Link key={link.label} href={link.href} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
