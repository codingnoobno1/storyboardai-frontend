"use client";

import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import Card from "@/components/ui/Card";
import { Film } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();

    const handleSuccess = (role: string) => {
        login(role);
        router.push("/dashboard");
    };

    return (
        <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <div style={{ position: "absolute", top: "2rem", left: "2rem" }}>
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "white" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Film size={20} color="white" />
                    </div>
                    <span style={{ fontSize: "1.2rem", fontWeight: 900 }}>StoryBoard</span>
                </Link>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ width: "100%", maxWidth: "450px" }}>
                <Card padding="3rem">
                    <LoginForm onSuccess={handleSuccess} />
                    <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.3)" }}>
                        Don't have an account? <Link href="/register" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>Join the Cluster</Link>
                    </p>
                </Card>
            </motion.div>
        </div>
    );
}

// Fixed import for motion
import { motion } from "framer-motion";
