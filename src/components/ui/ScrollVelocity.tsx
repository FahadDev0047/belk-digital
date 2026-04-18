"use client";

import { useRef } from 'react';
import { motion, useSpring, useTransform, useScroll, useVelocity } from 'motion/react';

interface ScrollVelocityProps {
    texts: string[];
    velocity?: number;
    className?: string;
    numCopies?: number;
}

export default function ScrollVelocity({
    texts,
    velocity = 100,
    className = '',
    numCopies = 2
}: ScrollVelocityProps) {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });

    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(velocityFactor, (latest) => {
        return `${-latest * velocity}px`;
    });

    const xReversed = useTransform(velocityFactor, (latest) => {
        return `${latest * velocity}px`;
    });

    return (
        <div ref={targetRef} className="relative overflow-hidden whitespace-nowrap">
            {texts.map((text, rowIndex) => (
                <motion.div
                    key={rowIndex}
                    className="flex gap-8"
                    style={{
                        x: rowIndex % 2 === 0 ? xReversed : x
                    }}
                >
                    {Array.from({ length: numCopies }).map((_, copyIndex) => (
                        <span
                            key={copyIndex}
                            className={className}
                        >
                            {text}
                        </span>
                    ))}
                </motion.div>
            ))}
        </div>
    );
}
