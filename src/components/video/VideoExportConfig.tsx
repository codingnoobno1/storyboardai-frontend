"use client";

import React from "react";
import { Settings, Shield, RefreshCw, Cpu, Gauge } from "lucide-react";
import Card from "../ui/Card";
import Switch from "../ui/Switch";
import Dropdown from "../ui/Dropdown";

export default function VideoExportConfig() {
    return (
        <Card title="Export Configuration" subtitle="Configure master production parameters">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>RESOLUTION</label>
                        <select style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "10px", borderRadius: "8px", outline: "none" }}>
                            <option>1080p (FHD)</option>
                            <option>4K (UHD) - PRO</option>
                            <option>720p (HD)</option>
                        </select>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>BITRATE</label>
                        <select style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "10px", borderRadius: "8px", outline: "none" }}>
                            <option>Variable (VBR)</option>
                            <option>Constant (CBR)</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <h5 style={{ fontSize: "0.95rem", fontWeight: 700 }}>HW Acceleration</h5>
                            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>Utilize NVENC/QuickSync for faster rendering.</p>
                        </div>
                        <Switch checked={true} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <h5 style={{ fontSize: "0.95rem", fontWeight: 700 }}>AI Frame Interpolation</h5>
                            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>Upscale 24fps to 60fps cinematic fluidity.</p>
                        </div>
                        <Switch checked={false} />
                    </div>
                </div>

                <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "12px" }}>
                    <Cpu size={24} color="var(--accent)" />
                    <div>
                        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>ESTIMATED RENDERING TIME</p>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: 800 }}>~4 minutes 12s</h4>
                    </div>
                </div>
            </div>
        </Card>
    );
}
