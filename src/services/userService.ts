import { UserRole } from "@/types/common";

export const userService = {
    async getProfile(): Promise<{ name: string; role: UserRole }> {
        return { name: "John Doe", role: "Creator" };
    },
    async updateRole(role: UserRole) {
        return true;
    },
    async getStats() {
        return { projects: 12, templates: 4, earnings: 50000 };
    }
};
