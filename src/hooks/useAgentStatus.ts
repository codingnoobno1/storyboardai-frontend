"use client";

import { useState } from "react";
import { useInterval } from "./useInterval";

export function useAgentStatus() {
    const [status, setStatus] = useState("Idle");
    const [activeNodes, setActiveNodes] = useState(0);

    // Simulation of real-time telemetry
    useInterval(() => {
        const nodes = Math.floor(Math.random() * 10) + 140;
        setActiveNodes(nodes);

        if (Math.random() > 0.8) {
            setStatus(Math.random() > 0.5 ? "Orchestrating" : "Optimizing");
        } else {
            setStatus("Idle");
        }
    }, 5000);

    return { status, activeNodes };
}
