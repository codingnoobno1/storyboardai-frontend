"use client";

import React from "react";
import Link from "next/link";
import { Film, Menu, X, User, Zap } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="glass" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0.5rem 2rem", background: "rgba(10, 10, 15, 0.7)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px" }}>
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "white" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Film size={20} color="white" />
                    </div>
                    <span style={{ fontSize: "1.2rem", fontWeight: 900, letterSpacing: "-0.5px" }}>StoryBoard <span style={{ color: "var(--accent)" }}>AI</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{ display: "none", alignItems: "center", gap: "2.5rem" }}>
                    {["Features", "Marketplace", "Pricing", "Enterprise"].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                            {item}
                        </Link>
                    ))}
                    <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
                    <Link href="/login" style={{ color: "white", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>Log In</Link>
                    <Button variant="primary" size="sm" style={{ padding: "0 1.5rem" }}> Start Free <Zap size={14} style={{ marginLeft: "8px" }} /> </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", display: "block" }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="glass" style={{ position: "absolute", top: "70px", left: "1rem", right: "1rem", borderRadius: "1.5rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                    <Link href="/store" style={{ display: "flex", gap: "12px", alignItems: "center", textDecoration: "none", color: "white", fontWeight: 600 }}> Marketplace </Link>
                    <Link href="/pricing" style={{ display: "flex", gap: "12px", alignItems: "center", textDecoration: "none", color: "white", fontWeight: 600 }}> Pricing </Link>
                    <Link href="/login" style={{ display: "flex", gap: "12px", alignItems: "center", textDecoration: "none", color: "white", fontWeight: 600 }}> Log In </Link>
                    <Button style={{ width: "100%" }}> Get Started </Button>
                </div>
            )}
        </nav>
    );
}
