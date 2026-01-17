"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export default function Input({ label, error, icon, style, ...props }: InputProps) {
    return (
        <div style={{ width: "100%", marginBottom: "1rem" }}>
            {label && (
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
                    {label}
                </label>
            )}
            <div style={{ position: "relative" }}>
                {icon && (
                    <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)" }}>
                        {icon}
                    </div>
                )}
                <input
                    style={{
                        width: "100%",
                        padding: icon ? "12px 12px 12px 40px" : "12px 16px",
                        background: "rgba(255,255,255,0.03)",
                        border: `1px solid ${error ? "#ef4444" : "rgba(255,255,255,0.1)"}`,
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "0.95rem",
                        outline: "none",
                        transition: "all 0.2s ease",
                        ...style
                    }}
                    {...props}
                />
            </div>
            {error && (
                <p style={{ marginTop: "0.4rem", fontSize: "0.75rem", color: "#ef4444" }}>{error}</p>
            )}
        </div>
    );
}
