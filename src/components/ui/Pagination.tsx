"use client";

import React from "react";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", marginTop: "2rem" }}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{ padding: "8px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
            >
                <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: currentPage === i + 1 ? "var(--accent)" : "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "white",
                        fontWeight: 700,
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }}
                >
                    {i + 1}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{ padding: "8px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
            >
                <ChevronRight size={16} />
            </button>
        </div>
    );
}
