"use client";

import React from "react";
import { Key, Copy, RefreshCw, Plus, Eye, EyeOff, Trash2 } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function ApiKeyManager() {
    const [showKey, setShowKey] = React.useState<Record<string, boolean>>({});

    const KEYS = [
        { id: "1", name: "Staging API Key", key: "sk_test_••••••••••••••••••••••••", lastUsed: "2h ago" },
        { id: "2", name: "Production Primary", key: "sk_live_••••••••••••••••••••••••", lastUsed: "14m ago" },
    ];

    return (
        <Card title="API Keys" subtitle="Manage external agent access and integrations">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {KEYS.map((k) => (
                    <div key={k.id} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <Key size={16} color="var(--accent)" />
                                <span style={{ fontSize: "0.95rem", fontWeight: 700 }}>{k.name}</span>
                            </div>
                            <Badge variant="success" size="sm">Active</Badge>
                        </div>

                        <div className="glass" style={{ padding: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                            <code style={{ flex: 1, fontSize: "0.85rem", opacity: 0.6 }}>
                                {showKey[k.id] ? k.key : "••••••••••••••••••••••••••••••••"}
                            </code>
                            <button onClick={() => setShowKey(p => ({ ...p, [k.id]: !p[k.id] }))} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>
                                {showKey[k.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                            <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>
                                <Copy size={16} />
                            </button>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
                            <span>Last used: {k.lastUsed}</span>
                            <button style={{ background: "none", border: "none", color: "#ef4444", fontSize: "0.75rem", cursor: "pointer", fontWeight: 600 }}>Revoke Key</button>
                        </div>
                    </div>
                ))}

                <Button variant="secondary" style={{ width: "100%", borderStyle: "dashed", background: "transparent" }}>
                    <Plus size={18} /> Generate New API Key
                </Button>
            </div>
        </Card>
    );
}
