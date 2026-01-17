"use client";

import { useState } from "react";

export function useTemplates() {
    const [loading, setLoading] = useState(false);

    const purchaseTemplate = async (templateId: string) => {
        setLoading(true);
        // Simulate API call
        await new Promise(r => setTimeout(r, 1500));
        setLoading(false);
        return { success: true };
    };

    const fetchTemplateDetails = async (id: string) => {
        // Mock fetch
        return { id, name: "Sample Template" };
    };

    return {
        loading,
        purchaseTemplate,
        fetchTemplateDetails,
    };
}
