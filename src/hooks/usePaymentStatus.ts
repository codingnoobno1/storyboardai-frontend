"use client";

import { useState } from "react";

export function usePaymentStatus(orderId: string | null) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [status, setStatus] = useState<"pending" | "success" | "failed" | null>(null);

    const checkStatus = async () => {
        if (!orderId) return;
        setIsProcessing(true);
        // Simulation of API check
        setTimeout(() => {
            setStatus("success");
            setIsProcessing(false);
        }, 2000);
    };

    return { isProcessing, status, checkStatus };
}
