"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function PrivacyPage() {
    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "2rem" }}>Privacy <span style={{ color: "var(--accent)" }}>Policy</span></h1>
                <div style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <section>
                        <h3 style={{ color: "white", marginBottom: "1rem" }}>1. Data Encryption</h3>
                        <p>All transmitted agent prompts and production files are encrypted using 2048-bit RSA protocols. We prioritize your narrative sovereignty.</p>
                    </section>
                    <section>
                        <h3 style={{ color: "white", marginBottom: "1rem" }}>2. Training Use</h3>
                        <p>Unless on an Enterprise tier, anonymized metadata may be used to improve the stability of our orchestration nodes. No sensitive production data is used for model training.</p>
                    </section>
                    <section>
                        <h3 style={{ color: "white", marginBottom: "1rem" }}>3. Your Rights</h3>
                        <p>You retain 100% ownership of your prompts and the resulting AI-generated productions. You can request a full data audit or deletion at any time via the Settings panel.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
