"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function TermsPage() {
    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "2rem" }}>Terms of <span style={{ color: "var(--accent)" }}>Orchestration</span></h1>
                <div style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <section>
                        <h3 style={{ color: "white", marginBottom: "1rem" }}>1. Acceptance</h3>
                        <p>By initializing a project on the StoryBoard AI cluster, you agree to comply with our ethical prompt standards and credit usage policies.</p>
                    </section>
                    <section>
                        <h3 style={{ color: "white", marginBottom: "1rem" }}>2. Credit Policy</h3>
                        <p>Credits are non-transferable and may expire based on tier settings. Refund on unspent credits is only available within 48 hours of purchase.</p>
                    </section>
                    <section>
                        <h3 style={{ color: "white", marginBottom: "1rem" }}>3. Production Misuse</h3>
                        <p>The platform shall not be used to generate deep-fakes, violent narratives, or content that violates intellectual property laws. Zero tolerance policy enforced by Admin Console.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
