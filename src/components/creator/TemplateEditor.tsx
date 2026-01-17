"use client";

import React from "react";
import { Info, Save, Play, Settings as SettingsIcon } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function TemplateEditor() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <Card title="Structure Configuration" subtitle="Define the logic of your AI template.">
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <Input label="Template Name" placeholder="e.g. Physics Explainer V1" />
                        <TextArea label="Base System Prompt" placeholder="Act as a world-class physics teacher..." rows={6} />
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <div style={{ flex: 1 }}>
                                <Input label="Scene Count Max" type="number" defaultValue={5} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <Input label="Animation Pace (s)" type="number" defaultValue={2.5} />
                            </div>
                        </div>
                    </div>
                </Card>

                <Card title="Sample Output Preview" subtitle="Simulated result based on current logic.">
                    <div style={{ height: "300px", background: "rgba(0,0,0,0.3)", borderRadius: "12px", border: "1px dashed rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(var(--accent-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                            <Play fill="var(--accent)" size={24} />
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>Click play to simulate the AI generation chain.</p>
                    </div>
                </Card>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <Card title="Publish Settings">
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                        <div>
                            <label style={{ display: "block", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem", fontWeight: 600 }}>DOMAIN CATEGORY</label>
                            <Badge>Education</Badge>
                        </div>
                        <Input label="Price (Credits)" type="number" defaultValue={10} />
                        <div style={{ padding: "1rem", borderRadius: "10px", background: "rgba(var(--accent-rgb), 0.05)", border: "1px solid rgba(var(--accent-rgb), 0.1)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)", marginBottom: "0.5rem" }}>
                                <Info size={16} />
                                <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>Creator Tip</span>
                            </div>
                            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}> Education templates with structured scenes sell 40% faster. </p>
                        </div>
                        <Button style={{ width: "100%" }}> <Save size={18} /> Save Template </Button>
                        <Button variant="secondary" style={{ width: "100%" }}> <SettingsIcon size={18} /> Advanced Nodes </Button>
                    </div>
                </Card>

                <Card title="Live Statistics">
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Draft Usage</span>
                            <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>24 tests</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Success Rate</span>
                            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#10B981" }}>98%</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
