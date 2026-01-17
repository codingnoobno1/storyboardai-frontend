export const haptic = {
    light: () => typeof navigator !== 'undefined' && navigator.vibrate?.(10),
    medium: () => typeof navigator !== 'undefined' && navigator.vibrate?.(20),
    heavy: () => typeof navigator !== 'undefined' && navigator.vibrate?.(30),
};
