"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function DesktopLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="desktop-layout" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{ flex: 1, padding: "2rem 0" }}>
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
