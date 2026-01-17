"use client";

import React from "react";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import TemplateEditor from "@/components/creator/TemplateEditor";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { PenTool, Eye, Share2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CreatorTemplateEditPage({ params }: { params: { id: string } }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <Breadcrumb items={[
                        { label: "My Templates", path: "/dashboard/creator/templates" },
                        { label: "Logic Studio" }
                    ]} />
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Template Architect</h1>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <Button variant="secondary"> <Eye size={18} /> Preview </Button>
                    <Button variant="outline"> <Share2 size={18} /> Share </Button>
                    <NotificationCenter />
                </div>
            </div>

            <TemplateEditor />
        </div>
    );
}
