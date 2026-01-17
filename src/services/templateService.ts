export const templateService = {
    async getAll() {
        // return axios.get('/api/templates');
        return [];
    },
    async getById(id: string) {
        return null;
    },
    async publish(data: any) {
        console.log("Publishing template:", data);
        return { id: "new_123" };
    },
    async rate(id: string, stars: number) {
        return true;
    }
};
