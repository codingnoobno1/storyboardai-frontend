"use client";

import { useCreditStore } from "@/store/useStore";

export function useCredits() {
    const { storyCredits, imageCredits, videoCredits, addCredits, spendCredits } = useCreditStore();

    return {
        balances: {
            story: storyCredits,
            image: imageCredits,
            video: videoCredits,
        },
        total: storyCredits + imageCredits + videoCredits,
        add: addCredits,
        spend: spendCredits,
        isOut: (type: "story" | "image" | "video") => {
            if (type === "story") return storyCredits <= 0;
            if (type === "image") return imageCredits <= 0;
            if (type === "video") return videoCredits <= 0;
            return true;
        }
    };
}
