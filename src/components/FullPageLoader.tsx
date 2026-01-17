"use client";

import { motion, AnimatePresence } from "framer-motion";
import LottieAnimation from "./LottieAnimation";
import { useEffect, useState } from "react";

interface FullPageLoaderProps {
    isLoading: boolean;
    message: string;
    subMessage?: string;
}

export default function FullPageLoader({ isLoading, message, subMessage }: FullPageLoaderProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        "Initializing Agent ADK...",
        "Thinker node analyzing intent...",
        "Planner node generating task graph...",
        "Orchestrating microservices...",
        "Finalizing artifacts..."
    ];

    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setCurrentStep((prev) => (prev + 1) % steps.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 1000,
                        background: 'rgba(5, 5, 5, 0.95)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '2rem'
                    }}
                >
                    <div style={{ width: '300px', height: '300px', marginBottom: '2rem' }}>
                        <LottieAnimation animationPath="https://lottie.host/5b2b2b1b-5b5b-4b1b-8b5b-5b5b4b1b8b5b/sb_ai_loader.json" />
                    </div>

                    <motion.h2
                        key={message}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}
                    >
                        {message}
                    </motion.h2>

                    <motion.p
                        key={steps[currentStep]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}
                    >
                        {steps[currentStep]}
                    </motion.p>

                    {subMessage && (
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>{subMessage}</p>
                    )}

                    <div style={{ position: 'absolute', bottom: '3rem', width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '1px', overflow: 'hidden' }}>
                        <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            style={{ width: '100%', height: '100%', background: 'var(--accent)' }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
