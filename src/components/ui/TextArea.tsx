"use client";

import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export default function TextArea({ label, error, style, ...props }: TextAreaProps) {
    return (
        <div style={{ width: "100%", marginBottom: "1rem" }}>
            {label && (
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
                    {label}
                </label>
            )}
            <textarea
                style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${error ? "#ef4444" : "rgba(255,255,255,0.1)"}`,
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "all 0.2s ease",
                    resize: "vertical",
                    minHeight: "100px",
                    ...style
                }}
                {...props}
            />
            {error && (
                <p style={{ marginTop: "0.4rem", fontSize: "0.75rem", color: "#ef4444" }}>{error}</p>
            )}
        </div>
    );
}
