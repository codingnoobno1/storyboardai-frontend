"use client";

import React from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Dropdown from "../ui/Dropdown";
import Card from "../ui/Card";
import { AlertCircle, Smartphone, CreditCard, Landmark } from "lucide-react";

interface WithdrawalModalProps {
    balance: number;
}

export default function WithdrawalModal({ balance }: WithdrawalModalProps) {
    const [selectedMethod, setSelectedMethod] = React.useState("upi");

    const methods = [
        { id: "upi", label: "UPI (Google Pay, PhonePe)", icon: Smartphone },
        { id: "bank", label: "Bank Transfer", icon: Landmark },
        { id: "card", label: "Linked Debit Card", icon: CreditCard },
    ];

    return (
        <Card title="Withdraw Revenue" subtitle="Transfer your earnings to your bank account.">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ padding: "1.5rem", borderRadius: "16px", background: "linear-gradient(135deg, var(--accent), #10B981)", color: "white", textAlign: "center" }}>
                    <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.5rem", fontWeight: 600 }}>AVAILABLE BALANCE</p>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 800 }}>₹{balance.toLocaleString()}</h2>
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.8rem", fontWeight: 600 }}>PAYOUT METHOD</label>
                    <Dropdown options={methods} selectedId={selectedMethod} onSelect={setSelectedMethod} />
                </div>

                <Input label="Withdrawal Amount" type="number" defaultValue={balance} placeholder="Enter amount..." />

                <div style={{ display: "flex", gap: "10px", padding: "1rem", borderRadius: "12px", background: "rgba(245, 158, 11, 0.05)", border: "1px solid rgba(245, 158, 11, 0.1)" }}>
                    <AlertCircle size={20} color="#F59E0B" />
                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                        Withdrawals over ₹10,000 may take up to 24 hours for processing through Razorpay.
                    </p>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                    <Button variant="secondary" style={{ flex: 1 }}> Cancel </Button>
                    <Button style={{ flex: 2 }}> Confirm Withdrawal </Button>
                </div>
            </div>
        </Card>
    );
}
