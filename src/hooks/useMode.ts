"use client";

import { useModeStore } from "@/store/useStore";

export function useMode() {
    const { mode, setMode } = useModeStore();

    const config = {
        Education: {
            speed: 0.8,
            complexity: "high",
            style: "Clean/Clear",
            promptPrefix: "Explain in simple terms: ",
        },
        Fun: {
            speed: 1.5,
            complexity: "low",
            style: "Vibrant/Comic",
            promptPrefix: "Make it an epic adventure: ",
        },
        Professional: {
            speed: 1.0,
            complexity: "medium",
            style: "Minimal/Sleek",
            promptPrefix: "Synthesize for business: ",
        }
    };

    return {
        current: mode,
        set: setMode,
        settings: config[mode],
    };
}
