"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import PricingTable from "@/components/store/PricingTable";
import { Info, HelpCircle } from "lucide-react";

export default function PricingPage() {
    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 900, marginBottom: "1rem" }}>Transparent, Industrial <span style={{ color: "var(--accent)" }}>Pricing</span></h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
                        Choose the orchestration tier that fits your creative workflow depth.
                    </p>
                </div>

                <PricingTable />

                <div style={{ maxWidth: "800px", margin: "8rem auto 0" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800, textAlign: "center", marginBottom: "3rem" }}>Frequently Asked Questions</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <FAQItem
                            q="How are credits consumed?"
                            a="Every agent lifecycle event consumes credits. A standard Text-to-Story project with 10 scenes typically consumes 15 units."
                        />
                        <FAQItem
                            q="Can I use generated content commercially?"
                            a="Yes, Explorer and Creator Pro tiers include full commercial rights for all AI-generated production files."
                        />
                        <FAQItem
                            q="What is Dual-LLM Orchestration?"
                            a="It leverages GPT-4 for logic (Thinker) and Gemini for visual descriptions (Planner) to achieve maximum narrative depth."
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function FAQItem({ q, a }: any) {
    return (
        <div className="glass" style={{ padding: "1.5rem", borderRadius: "1rem" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <HelpCircle size={18} color="var(--accent)" /> {q}
            </h4>
            <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.6, fontSize: "0.95rem" }}>{a}</p>
        </div>
    );
}
