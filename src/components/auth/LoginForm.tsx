"use client";

import React from "react";
import { Mail, Lock, LogIn, ChevronRight } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function LoginForm({ onSuccess }: { onSuccess: (role: string) => void }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>Welcome Back</h2>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem" }}>Initialize your orchestration session</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <Input label="Email Address" placeholder="alex@creators.ai" />
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Input label="Password" type="password" placeholder="••••••••" />
                    <a href="#" style={{ fontSize: "0.8rem", color: "var(--accent)", textAlign: "right", fontWeight: 700, textDecoration: "none" }}>Forgot Password?</a>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                    <Button onClick={() => onSuccess("Consumer")} style={{ width: "100%", padding: "1.2rem" }}>
                        Login as Consumer <LogIn size={18} style={{ marginLeft: "8px" }} />
                    </Button>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
                        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", fontWeight: 800 }}>OR DEV ACCESS</span>
                        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <Button onClick={() => onSuccess("Creator")} variant="secondary"> Creator </Button>
                        <Button onClick={() => onSuccess("Admin")} variant="outline"> Admin </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
