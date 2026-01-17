"use client";

import React from "react";
import { Sparkles, FileText, Printer } from "lucide-react";
import Card from "../ui/Card";

export default function InvoiceTemplate() {
    return (
        <div style={{ background: "white", color: "#1a1a1a", padding: "4rem", borderRadius: "12px", maxWidth: "800px", margin: "0 auto", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4rem" }}>
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--accent)", marginBottom: "1rem" }}>
                        <Sparkles size={32} fill="var(--accent)" />
                        <span style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-1px" }}>StoryBoardAI</span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#666" }}>123 Tech Park, Silicon Valley, CA<br />support@storyboardai.com</p>
                </div>
                <div style={{ textAlign: "right" }}>
                    <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem" }}>INVOICE</h1>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>#INV-102834<br />Date: Oct 20, 2025</p>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
                <div>
                    <h5 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#999", textTransform: "uppercase", marginBottom: "0.8rem" }}>BILLED TO</h5>
                    <p style={{ fontWeight: 700 }}>Tushar Gupta</p>
                    <p style={{ fontSize: "0.85rem", color: "#666" }}>tushar@example.com<br />New Delhi, India</p>
                </div>
                <div>
                    <h5 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#999", textTransform: "uppercase", marginBottom: "0.8rem" }}>PAYMENT METHOD</h5>
                    <p style={{ fontWeight: 700 }}>UPI Transfer</p>
                    <p style={{ fontSize: "0.85rem", color: "#666" }}>Transaction ID: razor_k82js71js</p>
                </div>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "4rem" }}>
                <thead>
                    <tr style={{ borderBottom: "2px solid #eee" }}>
                        <th style={{ textAlign: "left", padding: "1rem 0", color: "#999", fontSize: "0.8rem" }}>DESCRIPTION</th>
                        <th style={{ textAlign: "right", padding: "1rem 0", color: "#999", fontSize: "0.8rem" }}>QTY</th>
                        <th style={{ textAlign: "right", padding: "1rem 0", color: "#999", fontSize: "0.8rem" }}>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "1.5rem 0", fontWeight: 600 }}>Creator Pro Pack (500 Credits)</td>
                        <td style={{ textAlign: "right", padding: "1.5rem 0" }}>1</td>
                        <td style={{ textAlign: "right", padding: "1.5rem 0", fontWeight: 600 }}>₹399.00</td>
                    </tr>
                </tbody>
            </table>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ width: "250px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem" }}>
                        <span style={{ color: "#666" }}>Tax (GST 18%)</span>
                        <span>₹71.82</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem", fontWeight: 800, borderTop: "2px solid #1a1a1a", paddingTop: "1rem" }}>
                        <span>TOTAL</span>
                        <span>₹470.82</span>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "6rem", borderTop: "1px solid #eee", paddingTop: "2rem", textAlign: "center" }}>
                <p style={{ fontSize: "0.85rem", color: "#999" }}>Thank you for using StoryBoardAI! This is a computer-generated invoice.</p>
            </div>
        </div>
    );
}
