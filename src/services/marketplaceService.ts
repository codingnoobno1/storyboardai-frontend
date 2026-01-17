import { templateService } from "./templateService";
import { userService } from "./userService";
import { paymentService } from "./paymentService";

export const marketplaceService = {
    getTopTemplates: async () => {
        return templateService.getAll(); // Corrected method name
    },
    getTemplateAnalytics: async (id: string) => {
        return {
            sales: 420,
            rating: 4.8,
            revenue: 16800,
            trend: "+12%"
        };
    }
};

export const adminService = {
    getSystemMetrics: async () => {
        return {
            cpu: "12%",
            memory: "4.2GB",
            uptime: "99.98%",
            activeAgents: 142
        };
    },
    getModerationStats: async () => {
        return {
            pending: 12,
            resolvedToday: 45,
            riskLevel: "Low"
        };
    }
};
