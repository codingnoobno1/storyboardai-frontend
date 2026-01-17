"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import { Project, Scene, ProjectMode } from "@/types/common";

interface ProjectContextType {
    projects: Project[];
    addProject: (title: string, mode: ProjectMode, coverStyle?: string, prompt?: string) => Promise<string>;
    getProject: (id: string) => Project | undefined;
    isCreateModalOpen: boolean;
    openCreateModal: () => void;
    closeCreateModal: () => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const openCreateModal = () => setIsCreateModalOpen(true);
    const closeCreateModal = () => setIsCreateModalOpen(false);

    useEffect(() => {
        const mockProjects: Project[] = Array.from({ length: 55 }).map((_, i) => ({
            id: `proj_${i + 1}`,
            title: `Project ${i + 1}: ${["Cyberpunk Neon", "Space Odyssey", "Noir Mystery", "Medieval Epic", "Startup Pitch"][i % 5]}`,
            status: i % 10 === 0 ? "Processing" : i % 3 === 0 ? "Draft" : "Completed",
            mode: ["Text-to-Story", "Story-to-Visuals", "Visuals-to-Video", "PPT-to-Video"][i % 4] as ProjectMode,
            date: `Dec ${Math.floor(Math.random() * 20) + 1}, 2024`,
            scenes: [],
        }));
        setProjects(mockProjects);
    }, []);

    const addProject = async (title: string, mode: ProjectMode, coverStyle?: string, prompt: string = "") => {
        // Prepare project data
        const newId = `proj_${Date.now()}`;
        const newProject: Project = {
            id: newId,
            title,
            status: "Processing",
            mode,
            coverStyle,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            scenes: [
                { id: "s1", text: "Initializing Agents...", visualDescription: "Orchestrating...", status: "pending" }
            ],
        };

        // Add to local state immediately (optimistic UI)
        setProjects([newProject, ...projects]);

        try {
            // Call backend API
            const response = await fetch("http://localhost:8000/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    prompt,
                    user_id: "demo_user_1", // In a real app, this comes from auth
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "Generation failed");
            }

            const data = await response.json();

            // Update project with backend results
            setProjects(current => current.map(p => {
                if (p.id === newId) {
                    return {
                        ...p,
                        status: "Completed",
                        scenes: data.result.results.map((r: { script?: string; visual?: string }, idx: number) => ({
                            id: `scene_${idx}`,
                            text: r.script || "Generated scene",
                            visualDescription: r.visual || "AI visual",
                            status: "completed"
                        }))
                    };
                }
                return p;
            }));

            return newId;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            console.error("Orchestration Error:", error);
            // Handle error (e.g., mark project as failed)
            setProjects(current => current.map(p =>
                p.id === newId ? { ...p, status: "Draft" as const } : p
            ));
            alert(`Error: ${errorMessage}`);
            return newId;
        }
    };

    const getProject = (id: string) => projects.find(p => p.id === id);

    return (
        <ProjectContext.Provider value={{
            projects,
            addProject,
            getProject,
            isCreateModalOpen,
            openCreateModal,
            closeCreateModal
        }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjectContext = () => {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error("useProjectContext must be used within a ProjectProvider");
    }
    return context;
};

export const useProjects = useProjectContext;
