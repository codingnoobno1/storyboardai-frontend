// Spring presets for RN-like feel
export const springPresets = {
    // Snappy response for buttons and quick interactions
    snappy: { type: "spring", stiffness: 400, damping: 30 } as const,
    // Gentle for page transitions
    gentle: { type: "spring", stiffness: 200, damping: 25 } as const,
    // Bouncy for emphasis
    bouncy: { type: "spring", stiffness: 300, damping: 15 } as const,
    // Stiff for immediate response
    stiff: { type: "spring", stiffness: 500, damping: 35 } as const,
} as const;

// Check for reduced motion preference
export const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Screen transitions (RN stack navigator style)
export const screenTransitions = {
    initial: { x: "100%", opacity: 0.8 },
    animate: {
        x: 0,
        opacity: 1,
        transition: springPresets.gentle
    },
    exit: {
        x: "-30%",
        opacity: 0,
        transition: { duration: 0.2, ease: "easeIn" }
    }
} as const;

// Reduced motion fallback for screen transitions
export const screenTransitionsReduced = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.15 } },
    exit: { opacity: 0, transition: { duration: 0.1 } }
} as const;

// Slide up (for bottom sheets, action bars)
export const slideUp = {
    initial: { y: "100%", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: springPresets.snappy
    },
    exit: {
        y: "100%",
        opacity: 0,
        transition: { duration: 0.2 }
    }
} as const;

// Slide down (for dropdowns, headers)
export const slideDown = {
    initial: { y: "-100%", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: springPresets.snappy
    },
    exit: {
        y: "-100%",
        opacity: 0,
        transition: { duration: 0.2 }
    }
} as const;

// Scale fade (for modals, cards)
export const scaleFade = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: springPresets.snappy
    },
    exit: {
        scale: 0.95,
        opacity: 0,
        transition: { duration: 0.15 }
    }
} as const;

// Pressable feedback (RN Pressable style)
export const pressableVariants = {
    idle: { scale: 1, opacity: 1 },
    pressed: { scale: 0.97, opacity: 0.8 },
    disabled: { scale: 1, opacity: 0.5 }
} as const;

// Tab bar icon animation
export const tabIconVariants = {
    inactive: { scale: 1, y: 0 },
    active: {
        scale: 1.15,
        y: -2,
        transition: springPresets.bouncy
    }
} as const;

// Context action bar (slides from bottom)
export const contextActionVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: springPresets.snappy
    }
} as const;

// Skeleton shimmer animation
export const shimmerAnimation = {
    initial: { backgroundPosition: "-200% 0" },
    animate: {
        backgroundPosition: "200% 0",
        transition: {
            repeat: Infinity,
            duration: 1.5,
            ease: "linear"
        }
    }
} as const;

// Header collapse animation
export const headerCollapseVariants = {
    expanded: { height: 56, opacity: 1 },
    collapsed: { height: 44, opacity: 0.9 }
} as const;

// Utility: Get appropriate transition based on motion preference
export const getScreenTransition = () =>
    prefersReducedMotion() ? screenTransitionsReduced : screenTransitions;
