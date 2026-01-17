import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface DropdownOption {
    id: string;
    label: string;
    icon?: LucideIcon;
}

export type UserRole = "Consumer" | "Creator" | "Admin";

export interface NavItem {
    label: string;
    path: string;
    icon: LucideIcon;
}

export interface TableColumn {
    header: string;
    key: string;
}

export type StatValue = string | number;

export interface DashboardStat {
    label: string;
    value: StatValue;
    trend?: string;
    icon: LucideIcon;
}

export type ProjectMode = "Text-to-Story" | "Story-to-Visuals" | "Visuals-to-Video" | "PPT-to-Video";

export interface Scene {
    id: string;
    text: string;
    visualDescription: string;
    imageUrl?: string;
    status: "pending" | "generating" | "completed";
}

export interface Project {
    id: string;
    title: string;
    status: "Completed" | "Processing" | "Draft";
    mode: ProjectMode | string;
    coverImage?: string;
    coverStyle?: string;
    date: string;
    scenes: Scene[] | number;
    videoUrl?: string;
}

export interface Template {
    id: string;
    title: string;
    price: number;
    rating: number;
    author: string;
    coverImage?: string;
}
