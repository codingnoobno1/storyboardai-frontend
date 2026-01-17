"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { MessageSquare, HelpCircle, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";

export default function FAQPage() {
    const FAQS = [
        { title: "What is the difference between a Story and a Visual?", content: "A Story credit covers the narrative logic and script generation. A Visual credit covers the high-fidelity AI image generation for each scene." },
        { title: "Can I export my projects for commercial use?", content: "Absolutely. Any production generated on a paid tier belongs to you 100%." },
        { title: "Which AI models does StoryBoard AI use?", content: "We use a proprietary ensemble of GPT-4, Gemini Pro, and Stable Diffusion XL, orchestrated by our custom agentic architecture." },
        { title: "Can I cancel my subscription anytime?", content: "Yes, you can manage and cancel your tiered access at any time through the Billing section of your dashboard." }
    ];

    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 900, marginBottom: "1rem" }}>Knowledge <span style={{ color: "var(--accent)" }}>Cluster</span></h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem" }}>Everything you need to know about AI orchestration.</p>
                </div>

                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <Accordion items={FAQS} />

                    <div style={{ marginTop: "5rem", textAlign: "center" }}>
                        <Card style={{ padding: "3rem", background: "rgba(var(--accent-rgb), 0.05)" }}>
                            <HelpCircle size={48} color="var(--accent)" style={{ marginBottom: "1.5rem" }} />
                            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>Still have questions?</h2>
                            <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "2rem" }}>Our support agents are active 24/7 inside the orchestration nodes.</p>
                            <Button style={{ padding: "0 3rem" }}> Contact Support <ArrowRight size={18} style={{ marginLeft: "8px" }} /> </Button>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
