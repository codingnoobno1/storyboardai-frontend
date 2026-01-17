"use client";

import React from "react";
import { Check } from "lucide-react";

interface StepperProps {
    steps: string[];
    currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
    return (
        <div style={{ display: "flex", alignItems: "center", width: "100%", margin: "2rem 0" }}>
            {steps.map((step, i) => (
                <React.Fragment key={i}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                background: i < currentStep ? "var(--accent)" : i === currentStep ? "rgba(var(--accent-rgb), 0.1)" : "rgba(255,255,255,0.05)",
                                border: i === currentStep ? "2px solid var(--accent)" : "2px solid transparent",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: i <= currentStep ? "white" : "rgba(255,255,255,0.2)",
                                fontWeight: 800,
                                transition: "all 0.3s"
                            }}
                        >
                            {i < currentStep ? <Check size={20} /> : i + 1}
                        </div>
                        <span style={{ position: "absolute", top: "50px", fontSize: "0.7rem", color: i <= currentStep ? "white" : "rgba(255,255,255,0.2)", fontWeight: 700, width: "80px", textAlign: "center", textTransform: "uppercase" }}>
                            {step}
                        </span>
                    </div>
                    {i < steps.length - 1 && (
                        <div style={{ flex: 1, height: "2px", background: i < currentStep ? "var(--accent)" : "rgba(255,255,255,0.05)", margin: "0 10px", transition: "all 0.3s" }} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
