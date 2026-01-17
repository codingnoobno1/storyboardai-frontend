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

export interface MobileLayoutProps {
    children: React.ReactNode;
    showNav?: boolean;
    showTab?: boolean;
    title?: string;
}

import { MobileTabBar } from "../mobile/navigation/MobileTabBar";

export function MobileLayout({
    children,
    showNav = false,
    showTab = false,
    title = "StoryboardAI"
}: MobileLayoutProps) {
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
            {showNav && (
                <NavBar
                    back={pathname !== "/" ? "" : null}
                    onBack={() => router.back()}
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 100,
                        background: "rgba(5, 5, 7, 0.8)",
                        backdropFilter: "blur(10px)",
                        borderBottom: "1px solid var(--glass-border)"
                    }}
                >
                    {title}
                </NavBar>
            )}

            <main style={{
                flex: 1,
                padding: "16px",
                paddingBottom: showTab ? "80px" : "16px"
            }}>
                {children}
            </main>

            {showTab && <MobileTabBar tabs={tabs} />}
        </div>
    );
}
