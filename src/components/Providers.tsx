"use client";

import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import { ProjectProvider } from "@/context/ProjectContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <ProjectProvider>
                {children}
            </ProjectProvider>
        </AuthProvider>
    );
}
