import { create } from 'zustand';

export type NavigationMode = "root" | "focused" | "immersive";

interface NavigationState {
    // Core navigation state
    activeTab: string;
    navigationMode: NavigationMode;

    // UI state
    drawerOpen: boolean;
    activeBottomSheet: string | null;
    keyboardVisible: boolean;

    // Selection state
    selectedItemsCount: number;
    selectedItems: string[];

    // Actions
    setActiveTab: (tab: string) => void;
    setMode: (mode: NavigationMode) => void;
    openDrawer: () => void;
    closeDrawer: () => void;
    toggleDrawer: () => void;
    openSheet: (id: string) => void;
    closeSheet: () => void;
    setKeyboardVisible: (visible: boolean) => void;
    selectItem: (id: string) => void;
    deselectItem: (id: string) => void;
    clearSelection: () => void;
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
    // Initial state
    activeTab: "/dashboard/consumer",
    navigationMode: "root",
    drawerOpen: false,
    activeBottomSheet: null,
    keyboardVisible: false,
    selectedItemsCount: 0,
    selectedItems: [],

    // Actions
    setActiveTab: (tab) => set({ activeTab: tab }),

    setMode: (mode) => set({
        navigationMode: mode,
        // Auto-close drawer and sheets when entering immersive mode
        drawerOpen: mode === "immersive" ? false : get().drawerOpen,
        activeBottomSheet: mode === "immersive" ? null : get().activeBottomSheet,
    }),

    openDrawer: () => set({ drawerOpen: true }),
    closeDrawer: () => set({ drawerOpen: false }),
    toggleDrawer: () => set((state) => ({ drawerOpen: !state.drawerOpen })),

    openSheet: (id) => set({ activeBottomSheet: id }),
    closeSheet: () => set({ activeBottomSheet: null }),

    setKeyboardVisible: (visible) => set({ keyboardVisible: visible }),

    selectItem: (id) => set((state) => {
        if (state.selectedItems.includes(id)) return state;
        const newItems = [...state.selectedItems, id];
        return {
            selectedItems: newItems,
            selectedItemsCount: newItems.length
        };
    }),

    deselectItem: (id) => set((state) => {
        const newItems = state.selectedItems.filter(i => i !== id);
        return {
            selectedItems: newItems,
            selectedItemsCount: newItems.length
        };
    }),

    clearSelection: () => set({
        selectedItems: [],
        selectedItemsCount: 0
    }),
}));

// Selector hooks for performance
export const useNavigationMode = () => useNavigationStore((s) => s.navigationMode);
export const useKeyboardVisible = () => useNavigationStore((s) => s.keyboardVisible);
export const useDrawerOpen = () => useNavigationStore((s) => s.drawerOpen);
export const useSelectedCount = () => useNavigationStore((s) => s.selectedItemsCount);

// Computed: should show bottom chrome?
export const useShouldShowBottomChrome = () => useNavigationStore((s) =>
    s.navigationMode === "root" && !s.keyboardVisible
);
