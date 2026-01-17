"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.path ? (
                        <Link href={item.path} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
                            {item.label}
                        </Link>
                    ) : (
                        <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 700 }}>{item.label}</span>
                    )}
                    {index < items.length - 1 && <ChevronRight size={14} color="rgba(255,255,255,0.2)" />}
                </React.Fragment>
            ))}
        </nav>
    );
}
