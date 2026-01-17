"use client";

import { useState } from "react";

export type Notification = {
    id: string;
    type: "success" | "error" | "info";
    message: string;
};

export function useNotifications() {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const notify = (message: string, type: Notification["type"] = "info") => {
        const id = Math.random().toString(36).slice(7);
        setNotifications(prev => [...prev, { id, type, message }]);
    };

    const remove = (id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return {
        notifications,
        notify,
        remove,
    };
}
