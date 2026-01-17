"use client";

import React from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function KanbanBoard() {
    const COLUMNS = [
        { name: "Thinker", items: ["Cyber Noir Action", "Samurai Duel"] },
        { name: "Planner", items: ["Space Colony Doc"] },
        { name: "Executor", items: ["Physics 101 Explainer"] },
        { name: "Verifying", items: [] },
    ];

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", width: "100%" }}>
            {COLUMNS.map((col) => (
                <div key={col.name} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 5px" }}>
                        <h5 style={{ fontSize: "0.85rem", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{col.name}</h5>
                        <Badge variant="secondary" size="sm">{col.items.length}</Badge>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minHeight: "200px", padding: "10px", background: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px dashed rgba(255,255,255,0.05)" }}>
                        {col.items.map((item) => (
                            <Card key={item} padding="1rem" style={{ cursor: "grab" }}>
                                <p style={{ fontSize: "0.85rem", fontWeight: 700 }}>{item}</p>
                                <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
                                    <div style={{ width: "20px", height: "4px", borderRadius: "2px", background: "var(--accent)" }} />
                                    <div style={{ width: "20px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.1)" }} />
                                </div>
                            </Card>
                        ))}
                        {col.items.length === 0 && (
                            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", color: "rgba(255,255,255,0.1)", fontWeight: 700 }}>EMPTY STREAM</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
