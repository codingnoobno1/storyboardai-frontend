"use client";

import React from "react";

export default function ScrollArea({ children, maxHeight = "400px" }: { children: React.ReactNode, maxHeight?: string }) {
  return (
    <div style={{
      maxHeight,
      overflowY: "auto",
      paddingRight: "10px",
      scrollbarWidth: "thin",
      scrollbarColor: "rgba(255,255,255,0.1) transparent"
    }}>
      {children}
    </div>
  );
}
