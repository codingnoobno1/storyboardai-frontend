"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ padding: "10rem 2rem 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 900, marginBottom: "1rem" }}>Get in <span style={{ color: "var(--accent)" }}>Touch</span></h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem" }}>Our architecture team is ready to assist your creative journey.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                        <ContactInfo
                            icon={Mail}
                            title="Email Us"
                            desc="Our support agents typically respond within 2 hours."
                            val="support@storyboard-ai.com"
                        />
                        <ContactInfo
                            icon={Phone}
                            title="Call Architecture"
                            desc="Direct line for Enterprise tier support."
                            val="+1 (888) AI-STORY"
                        />
                        <ContactInfo
                            icon={MapPin}
                            title="Headquarters"
                            desc="The tech heart of visual orchestration."
                            val="Silicon Valley, CA"
                        />
                    </div>

                    <Card title="Send an Inquiry">
                        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <Input label="First Name" placeholder="e.g. John" />
                                <Input label="Last Name" placeholder="e.g. Doe" />
                            </div>
                            <Input label="Email Address" placeholder="john@example.com" />
                            <TextArea label="Your Inquiry" placeholder="How can we help you orchestrate today?" rows={6} />
                            <Button style={{ width: "100%", padding: "1.2rem" }}> Submit Transmission </Button>
                        </form>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function ContactInfo({ icon: Icon, title, desc, val }: any) {
    return (
        <div style={{ display: "flex", gap: "1.5rem" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(var(--accent-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                <Icon size={24} />
            </div>
            <div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.2rem" }}>{title}</h4>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>{desc}</p>
                <span style={{ fontWeight: 700, color: "white" }}>{val}</span>
            </div>
        </div>
    );
}
