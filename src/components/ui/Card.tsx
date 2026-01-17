import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    padding?: string;
    style?: React.CSSProperties;
    variant?: "consumer" | "creator" | "admin" | "default";
}

export default function Card({ children, title, subtitle, padding = "2rem", style, variant = "default", ...props }: CardProps) {
    const getVariantStyles = () => {
        switch (variant) {
            case "consumer":
                return {
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(139, 92, 246, 0.03))",
                    border: "1px solid rgba(99, 102, 241, 0.15)",
                    boxShadow: "0 4px 16px rgba(99, 102, 241, 0.08)",
                };
            case "creator":
                return {
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.03), rgba(5, 150, 105, 0.03))",
                    border: "1px solid rgba(16, 185, 129, 0.15)",
                    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.1)",
                };
            case "admin":
                return {
                    borderRadius: "6px",
                    background: "rgba(239, 68, 68, 0.02)",
                    border: "1px solid rgba(239, 68, 68, 0.12)",
                    boxShadow: "0 1px 4px rgba(239, 68, 68, 0.08)",
                };
            default:
                return {
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                };
        }
    };

    const variantStyles = getVariantStyles();

    return (
        <div
            className="glass"
            style={{
                padding,
                ...variantStyles,
                ...style,
            }}
            {...props}
        >
            {title && (
                <div style={{ marginBottom: "1.5rem" }}>
                    <h3
                        style={{
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "white",
                        }}
                    >
                        {title}
                    </h3>
                    {subtitle && <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginTop: "4px" }}>{subtitle}</p>}
                </div>
            )}
            {children}
        </div>
    );
}
