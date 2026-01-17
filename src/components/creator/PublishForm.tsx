"use client";

import React from "react";
import { Upload, Link as LinkIcon, FileText, Globe } from "lucide-react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";

export default function PublishForm() {
    const [agreed, setAgreed] = React.useState(false);

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "2rem", textAlign: "center" }}>Publish New Template</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <Card title="Media & Visuals" subtitle="Upload a preview video or thumbnail.">
                    <div style={{ height: "150px", border: "2px dashed rgba(255,255,255,0.05)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "0.5rem", background: "rgba(255,255,255,0.02)", cursor: "pointer" }}>
                        <Upload size={32} color="var(--accent)" />
                        <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>Drag & Drop MP4 or PNG</p>
                        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>Recommend 16:9 aspect ratio</p>
                    </div>
                </Card>

                <Card title="Marketplace Details">
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <Input label="Store Display Title" placeholder="e.g. The Ultimate Anime Battle Pack" />
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                            <div style={{ padding: "12px", borderRadius: "10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "10px" }}>
                                <Globe size={18} color="rgba(255,255,255,0.4)" />
                                <span style={{ fontSize: "0.9rem" }}>Global Availability</span>
                            </div>
                            <div style={{ padding: "12px", borderRadius: "10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "10px" }}>
                                <LinkIcon size={18} color="rgba(255,255,255,0.4)" />
                                <span style={{ fontSize: "0.9rem" }}>Support Link</span>
                            </div>
                        </div>
                        <TextArea label="Marketplace Description" placeholder="Explain the value proposition of this template to buyers..." rows={4} />
                    </div>
                </Card>

                <Card title="Terms & Verification">
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(0,0,0,0.2)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                            I certify that I am the sole creator of the prompts and logic within this template. I understand that StoryBoardAI takes a 20% commission on all credit sales made through the marketplace.
                        </div>
                        <Checkbox checked={agreed} onCheckedChange={setAgreed} label="I agree to the Creator Terms of Service" />
                        <Button style={{ width: "100%", padding: "1rem" }} disabled={!agreed}> Submit for Admin Approval </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
