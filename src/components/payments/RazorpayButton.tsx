"use client";

import React from "react";
import Button from "../ui/Button";
import { ShieldCheck } from "lucide-react";

export default function RazorpayButton() {
    const handlePayment = () => {
        // Simulated Razorpay integration
        console.log("Initializing Razorpay...");
        alert("Razorpay checkout UI would open here.");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <Button
                onClick={handlePayment}
                style={{
                    width: "100%",
                    height: "60px",
                    background: "#3392FF",
                    boxShadow: "0 4px 20px -5px rgba(51, 146, 255, 0.5)",
                    fontSize: "1.1rem"
                }}
            >
                <img
                    src="https://cdn.razorpay.com/static/assets/logo/pay_light.svg"
                    alt="Razorpay"
                    style={{ height: "24px", marginRight: "12px" }}
                />
                Pay Now Securely
            </Button>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>
                <ShieldCheck size={14} /> 256-bit SSL Secure Payment
            </div>
        </div>
    );
}
