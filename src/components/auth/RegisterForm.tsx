"use client";

import React from "react";
import { User, Mail, Lock, ShieldCheck } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function RegisterForm() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>Join the Cluster</h2>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem" }}>Register your creative fingerprint</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <Input label="Full Name" placeholder="e.g. Tushar Gupta" />
                <Input label="Email Address" placeholder="tushar@example.com" />
                <Input label="Initial Password" type="password" placeholder="••••••••" />

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginTop: "1rem" }}>
                    <input type="checkbox" style={{ marginTop: "4px" }} />
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
                        I agree to the <span style={{ color: "white", fontWeight: 700 }}>Terms of Orchestration</span> and the use of AI ethics filters.
                    </p>
                </div>

                <Button style={{ width: "100%", padding: "1.2rem", marginTop: "1rem" }}>
                    Create Account <ShieldCheck size={18} style={{ marginLeft: "8px" }} />
                </Button>
            </div>
        </div>
    );
}
