"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
    value: string;
    direction?: "up" | "down";
    className?: string;
}

export function Counter({ value, direction = "up", className }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? parseFloat(value) : 0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState<string>(direction === "down" ? value : "0");

    useEffect(() => {
        if (isInView) {
            // Parse the numeric part and any non-numeric suffix
            const match = value.match(/(\d+(?:\.\d+)?)(.*)/);
            if (match) {
                const number = parseFloat(match[1]);
                motionValue.set(number);
            }
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            const match = value.match(/(\d+(?:\.\d+)?)(.*)/);
            const suffix = match ? match[2] : "";
            const newValue = `${Math.floor(latest)}${suffix}`;
            setDisplayValue(newValue);
        });

        return () => unsubscribe();
    }, [springValue, value]);

    return <span ref={ref} className={className}>{displayValue}</span>;
}
