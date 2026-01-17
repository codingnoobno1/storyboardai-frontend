"use client";

import { useState } from "react";

export function usePayments() {
    const [isProcessing, setIsProcessing] = useState(false);

    const initiateRazorpay = async (amount: number) => {
        setIsProcessing(true);
        console.log(`Initiating Razorpay for ₹${amount}`);
        await new Promise(r => setTimeout(r, 2000));
        setIsProcessing(false);
        return { transactionId: "razor_" + Math.random().toString(36).slice(7) };
    };

    return {
        isProcessing,
        initiateRazorpay,
    };
}
