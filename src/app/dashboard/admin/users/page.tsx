"use client";

import React from "react";

import NotificationCenter from "@/components/dashboard/NotificationCenter";
import { Users, ShieldCheck, Mail, Edit, Trash2, Search, Filter, Calendar } from "lucide-react";
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const USERS = [
    { id: "101", name: "Alex Rivers", email: "alex@example.com", role: "Consumer", joined: "Oct 12, 2025", status: "Active" },
    { id: "102", name: "Sarah Miller", email: "sarah@design.ai", role: "Creator", joined: "Oct 10, 2025", status: "Active" },
    { id: "103", name: "John Doe", email: "john@meta.com", role: "Consumer", joined: "Oct 05, 2025", status: "Flagged" },
    { id: "104", name: "Mike Shinoda", email: "mike@lp.com", role: "Admin", joined: "Sep 28, 2025", status: "Active" },
];

export default function AdminUsersPage() {
    const headers = ["User", "Role", "Joined Date", "Status", "Actions"];

    const data = USERS.map(user => [
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem" }}>{user.name[0]}</div>
            <div>
                <p style={{ fontWeight: 700, fontSize: "0.95rem" }}>{user.name}</p>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{user.email}</p>
            </div>
        </div>,
        <Badge variant={user.role === "Admin" ? "error" : user.role === "Creator" ? "success" : "primary"}>{user.role}</Badge>,
        user.joined,
        <Badge variant={user.status === "Active" ? "success" : "error"}>{user.status}</Badge>,
        <div style={{ display: "flex", gap: "8px" }}>
            <Button variant="secondary" size="icon"> <Edit size={14} /> </Button>
            <Button variant="outline" size="icon"> <Mail size={14} /> </Button>
            <Button variant="danger" size="icon"> <Trash2 size={14} /> </Button>
        </div>
    ]);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>User Registry</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)" }}>Account management, role assignments, and user governance.</p>
                </div>
                <NotificationCenter />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div className="glass" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 20px", minWidth: "400px" }}>
                    <Search size={18} color="rgba(255,255,255,0.3)" />
                    <input type="text" placeholder="Search by name, email, or UID..." style={{ background: "none", border: "none", color: "white", outline: "none", width: "100%" }} />
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <Button variant="secondary"> <Filter size={18} /> Advanced Filter </Button>
                    <Button> <Calendar size={18} /> Export Audit Log </Button>
                </div>
            </div>

            <Card padding="0" style={{ overflow: "hidden" }}>
                <Table headers={headers} data={data} />
            </Card>
        </div>
    );
}
