"use client";

import React from "react";

/**
 * Root dashboard layout - provides minimal structure
 * Each nested dashboard (admin/consumer/creator) has its own layout with sidebar
 */
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
