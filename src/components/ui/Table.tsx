"use client";

import React from "react";

interface TableProps {
    headers: string[];
    data: React.ReactNode[][];
}

export default function Table({ headers, data }: TableProps) {
    return (
        <div className="glass" style={{ overflow: "hidden", padding: 0 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
                        {headers.map((header, i) => (
                            <th key={i} style={{ padding: "1rem 1.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)", transition: "background 0.2s" }} className="table-row-hover">
                            {row.map((cell, j) => (
                                <td key={j} style={{ padding: "1rem 1.5rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.8)" }}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <style jsx>{`
        .table-row-hover:hover {
          background: rgba(255,255,255,0.02);
        }
      `}</style>
        </div>
    );
}
