"use client";

import { useState, useEffect } from "react";

export function useHistory<T>(initialState: T) {
    const [state, setState] = useState(initialState);
    const [history, setHistory] = useState<T[]>([initialState]);
    const [pointer, setPointer] = useState(0);

    const set = (newState: T) => {
        const newHistory = history.slice(0, pointer + 1);
        newHistory.push(newState);
        setHistory(newHistory);
        setPointer(newHistory.length - 1);
        setState(newState);
    };

    const undo = () => {
        if (pointer > 0) {
            setPointer(pointer - 1);
            setState(history[pointer - 1]);
        }
    };

    const redo = () => {
        if (pointer < history.length - 1) {
            setPointer(pointer + 1);
            setState(history[pointer + 1]);
        }
    };

    return { state, set, undo, redo, canUndo: pointer > 0, canRedo: pointer < history.length - 1 };
}
