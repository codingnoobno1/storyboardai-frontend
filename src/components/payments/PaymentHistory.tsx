"use client";

import React from "react";
import Table from "../ui/Table";
import Badge from "../ui/Badge";
import { Download, ExternalLink } from "lucide-react";

const HISTORY = [
    { id: "INV-102", date: "Oct 18, 2025", pack: "Creator Pro", amount: "₹399", status: "Completed" },
    { id: "INV-101", date: "Oct 12, 2025", pack: "Starter Kit", amount: "₹99", status: "Completed" },
    { id: "INV-098", date: "Sep 28, 2025", pack: "Studio Tier", amount: "₹1,499", status: "Completed" },
    { id: "INV-095", date: "Sep 15, 2025", pack: "Starter Kit", amount: "₹99", status: "Failed" },
];

export default function PaymentHistory() {
    const headers = ["Invoice ID", "Date", "Pack Name", "Amount", "Status", "Receipt"];

    const data = HISTORY.map(item => [
        <span style={{ fontWeight: 600 }}>{item.id}</span>,
        item.date,
        item.pack,
        item.amount,
        <Badge variant={item.status === "Completed" ? "success" : "error"}>{item.status}</Badge>,
        <div style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.4)" }}>
            <Download size={16} style={{ cursor: 'pointer' }} />
            <ExternalLink size={16} style={{ cursor: 'pointer' }} />
        </div>
    ]);

    return (
        <div className="glass" style={{ padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.5rem" }}>Billing History</h3>
            <Table headers={headers} data={data} />
        </div>
    );
}
