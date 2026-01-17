export const userService = {
    async getProfile() {
        return { name: "John Doe", role: "Creator" };
    },
    async updateRole(role: string) {
        return true;
    },
    async getStats() {
        return { projects: 12, templates: 4, earnings: 50000 };
    }
};
