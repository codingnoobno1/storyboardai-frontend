"use client";

import { useEffect } from "react";

export function useLockBodyScroll() {
    useEffect(() => {
        if (typeof window === "undefined" || !document?.body) return;
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);
}
