import { Storyboard } from "@/types/project";

export const MOCK_PROJECTS: any[] = [
    { id: "1", title: "Cyber Noir Action", status: "Completed", date: "2025-12-18", scenes: 12 },
    { id: "2", title: "Global Finance Intro", status: "Processing", date: "2025-12-20", scenes: 8 },
    { id: "3", title: "The Martian Chronicles", status: "Draft", date: "2025-12-15", scenes: 24 },
];

export const MOCK_TEMPLATES: any[] = [
    { id: "t1", title: "Neon Tokyo 2077", price: 149, rating: 5, author: "Architect-X" },
    { id: "t2", title: "Samurai Duel Pro", price: 199, rating: 4.8, author: "Shinoda" },
];

export const MOCK_USER = {
    name: "Tushar Gupta",
    email: "tushar@ai-story.com",
    role: "Consumer",
    credits: { story: 142, visual: 85 }
};
