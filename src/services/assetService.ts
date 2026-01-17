export const assetService = {
    uploadFile: async (file: File) => {
        // Simulation of S3 upload
        return new Promise((resolve) => {
            setTimeout(() => resolve(`https://s3.storyboard-ai.com/${file.name}`), 1500);
        });
    },
    getAssetsForProject: async (projectId: string) => {
        return [
            { id: "1", type: "image", url: "https://...", size: "1.2MB" },
            { id: "2", type: "audio", url: "https://...", size: "4.5MB" },
        ];
    }
};
