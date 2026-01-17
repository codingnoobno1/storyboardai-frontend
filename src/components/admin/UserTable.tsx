"use client";

import React from "react";
import Table from "../ui/Table";
import Badge from "../ui/Badge";
import Avatar from "../ui/Avatar";
import { MoreVertical, Mail, ShieldAlert, Ban } from "lucide-react";
import Dropdown from "../ui/Dropdown";

const USERS = [
    { id: 1, name: "Tushar Gupta", role: "Creator", status: "Active", credits: "1,240", joined: "Oct 12" },
    { id: 2, name: "Jessica Doe", role: "Consumer", status: "Active", credits: "450", joined: "Oct 15" },
    { id: 3, name: "Alex Rivers", role: "Creator", status: "Flagged", credits: "8,900", joined: "Sep 20" },
    { id: 4, name: "Sam Wilson", role: "Admin", status: "Active", credits: "-", joined: "Aug 01" },
    { id: 5, name: "Mike Oxwell", role: "Consumer", status: "Banned", credits: "0", joined: "Oct 18" },
];

export default function UserTable() {
    const tableHeaders = ["User", "Role", "Status", "Credits", "Joined", "Actions"];

    const tableData = USERS.map(user => [
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar name={user.name} size="sm" />
            <div>
                <div style={{ fontWeight: 700 }}>{user.name}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)" }}>sb_id_{user.id * 1024}</div>
            </div>
        </div>,
        <Badge variant={user.role === "Admin" ? "error" : user.role === "Creator" ? "success" : "primary"}>{user.role}</Badge>,
        <Badge variant={user.status === "Banned" ? "error" : user.status === "Flagged" ? "warning" : "success"}>{user.status}</Badge>,
        user.credits,
        user.joined,
        <div style={{ display: "flex", gap: "10px" }}>
            <Mail size={16} color="rgba(255,255,255,0.4)" style={{ cursor: 'pointer' }} />
            <ShieldAlert size={16} color="rgba(255,255,255,0.4)" style={{ cursor: 'pointer' }} />
            <Ban size={16} color="#ef4444" style={{ cursor: 'pointer' }} />
        </div>
    ]);

    return (
        <div className="glass" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Platform Users</h3>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Manage and moderate StoryBoardAI users.</p>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <Dropdown options={[{ id: 'all', label: 'All Roles' }, { id: 'creators', label: 'Creators Only' }]} onSelect={() => { }} selectedId="all" />
                    <button className="btn-secondary" style={{ padding: "10px 16px" }}>Export CSV</button>
                </div>
            </div>
            <Table headers={tableHeaders} data={tableData} />
        </div>
    );
}
