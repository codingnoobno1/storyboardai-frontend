export const agentService = {
    getOrchestrationLog: async (projectId: string) => {
        return [
            { step: "Thinker", status: "Success", duration: "1.2s", output: "Intent: Sci-Fi Narrative" },
            { step: "Planner", status: "Success", duration: "0.8s", output: "12 Scenes Generated" },
            { step: "Executor", status: "Processing", duration: "4.5s", output: "Generating Visual Nodes..." },
        ];
    },
    getSystemHealth: async () => {
        return {
            status: "Operational",
            latency: "4ms",
            throughput: "14.2 ops/s",
            lastBackup: "12m ago"
        };
    }
};
