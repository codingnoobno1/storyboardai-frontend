"use client";

import React from "react";
import { TabBar, NavBar } from "antd-mobile";
import {
    MoreOutline,
    AppOutline,
    UnorderedListOutline,
    UserOutline
} from "antd-mobile-icons";
import { useRouter, usePathname } from "next/navigation";

export default function MobileLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const tabs = [
        {
            key: "/",
            title: "Home",
            icon: <MoreOutline />,
        },
        {
            key: "/dashboard",
            title: "Dashboard",
            icon: <AppOutline />,
        },
        {
            key: "/projects",
            title: "Projects",
            icon: <UnorderedListOutline />,
        },
        {
            key: "/dashboard/consumer/settings",
            title: "Settings",
            icon: <UserOutline />,
        },
    ];

    return (
        <div className="mobile-layout" style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "var(--bg)",
            color: "var(--text)"
        }}>
            <NavBar back={null} style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                background: "rgba(5, 5, 7, 0.8)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid var(--glass-border)"
            }}>
                StoryboardAI
            </NavBar>

            <main style={{ flex: 1, padding: "16px", paddingBottom: "80px" }}>
                {children}
            </main>

            <div style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                background: "rgba(5, 5, 7, 0.95)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid var(--glass-border)",
                paddingBottom: "env(safe-area-inset-bottom)",
                zIndex: 1000
            }}>
                <TabBar activeKey={pathname} onChange={value => router.push(value)}>
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>
        </div>
    );
}
