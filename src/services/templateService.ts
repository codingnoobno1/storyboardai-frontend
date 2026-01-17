import { Template } from "@/types/common";

export const templateService = {
    async getAll(): Promise<Template[]> {
        // return axios.get('/api/templates');
        return [];
    },
    async getById(id: string): Promise<Template | null> {
        return null;
    },
    async publish(data: Partial<Template>): Promise<{ id: string }> {
        console.log("Publishing template:", data);
        return { id: "new_123" };
    },
    async rate(id: string, stars: number) {
        return true;
    }
};
