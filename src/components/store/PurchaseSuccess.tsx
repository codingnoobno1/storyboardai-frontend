"use client";

import React from "react";
import { CheckCircle, ArrowRight, Download, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function PurchaseSuccess({ templateName }: { templateName: string }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "4rem 2rem" }}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12 }}
                style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginBottom: "2rem" }}
            >
                <CheckCircle size={48} />
            </motion.div>

            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>Purchase Successful!</h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", maxWidth: "500px", lineHeight: 1.6, marginBottom: "3rem" }}>
                Congratulations! You now have full access to <b>{templateName}</b>. It has been added to your creation library.
            </p>

            <div style={{ display: "flex", gap: "1rem", width: "100%", maxWidth: "400px" }}>
                <Button style={{ flex: 1 }}> <ArrowRight size={18} /> Start Project </Button>
                <Button variant="secondary" style={{ flex: 1 }}> <Download size={18} /> Template Assets </Button>
            </div>

            <button style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", cursor: "pointer" }}>
                <Share2 size={16} /> Share your find
            </button>
        </div>
    );
}
