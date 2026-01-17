"use client";

import React from "react";
import TemplateCard from "../cards/TemplateCard";

const MOCK_TEMPLATES = [
    { id: "1", name: "Boom! Comic Hero", creator: "Stan AI", price: 25, rating: 4.9, image: "https://images.unsplash.com/photo-1588497859490-85d1c17db26d?auto=format&fit=crop&q=80&w=400" },
    { id: "2", name: "Dark Noir Detective", creator: "NoirMaster", price: 30, rating: 4.8, image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400" },
    { id: "3", name: "Neon Tokyo 2077", creator: "Synthwave", price: 40, rating: 5.0, image: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=400" },
    { id: "4", name: "Classic Manga Pro", creator: "MangaSensei", price: 20, rating: 4.7, image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=400" },
    { id: "5", name: "Watercolor Dreams", creator: "ArtisanAI", price: 15, rating: 4.6, image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=400" },
    { id: "6", name: "Cinematic Sci-Fi", creator: "FutureVfx", price: 50, rating: 4.9, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" },
];

export default function TemplateGrid() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
            {MOCK_TEMPLATES.map((template) => (
                <TemplateCard key={template.id} template={template} />
            ))}
        </div>
    );
}
