"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useNavigationStore, NavigationMode } from "@/stores/navigationStore";

interface NavigationModeContextValue {
    mode: NavigationMode;
    setMode: (mode: NavigationMode) => void;
}

const NavigationModeContext = createContext<NavigationModeContextValue>({
    mode: "root",
    setMode: () => { },
});

interface NavigationModeProviderProps {
    children: React.ReactNode;
    mode?: NavigationMode;
}

/**
 * Provides navigation mode context and syncs with global store.
 * Wrap screens/layouts to control chrome visibility.
 * 
 * Usage:
 * <NavigationModeProvider mode="focused">
 *   <ProjectDetailPage />
 * </NavigationModeProvider>
 */
export function NavigationModeProvider({
    children,
    mode = "root"
}: NavigationModeProviderProps) {
    const setStoreMode = useNavigationStore((s) => s.setMode);
    const storeMode = useNavigationStore((s) => s.navigationMode);

    // Sync mode to store on mount/change
    useEffect(() => {
        if (mode !== storeMode) {
            setStoreMode(mode);
        }
    }, [mode, storeMode, setStoreMode]);

    // Reset to root when unmounting from focused/immersive
    useEffect(() => {
        return () => {
            if (mode !== "root") {
                setStoreMode("root");
            }
        };
    }, [mode, setStoreMode]);

    return (
        <NavigationModeContext.Provider value={{ mode, setMode: setStoreMode }}>
            {children}
        </NavigationModeContext.Provider>
    );
}

export const useNavigationModeContext = () => useContext(NavigationModeContext);
