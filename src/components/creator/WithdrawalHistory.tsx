"use client";

import React from "react";
import { Clock, CheckCircle, Smartphone, Download } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Table from "../ui/Table";

export default function WithdrawalHistory() {
    const headers = ["ID", "Amount", "Method", "Date", "Status"];
    const data = [
        ["#WD-801", <span style={{ fontWeight: 800 }}>₹12,400</span>, "Razorpay Sync", "Dec 18, 2025", <Badge variant="success">Completed</Badge>],
        ["#WD-792", <span style={{ fontWeight: 800 }}>₹8,200</span>, "Bank Transfer", "Dec 10, 2025", <Badge variant="success">Completed</Badge>],
        ["#WD-641", <span style={{ fontWeight: 800 }}>₹14,000</span>, "Razorpay Sync", "Nov 28, 2025", <Badge variant="secondary">Archive</Badge>],
        ["#WD-512", <span style={{ fontWeight: 800 }}>₹2,500</span>, "Manual Audit", "Nov 15, 2025", <Badge variant="error" style={{ background: "rgba(239, 68, 68, 0.1)", border: "none" }}>Rejected</Badge>],
    ];

    return (
        <Card title="Withdrawal History" subtitle="Monitor your revenue lifecycle events" padding="0">
            <div style={{ overflowX: "auto" }}>
                <Table headers={headers} data={data} />
            </div>
        </Card>
    );
}
