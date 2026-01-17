export interface Storyboard {
    id: string;
    title: string;
    description?: string;
    scenes: number;
    status: 'Draft' | 'Processing' | 'Completed' | 'Archive';
    date: string;
    mode?: string;
    lastEdit?: string;
    complexity?: 'Low' | 'Medium' | 'High';
    version?: string;
}

export interface Project {
    id: string;
    title: string;
    status: string;
    date: string;
    scenes: number;
}
