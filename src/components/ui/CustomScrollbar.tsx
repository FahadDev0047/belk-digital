"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export const CustomScrollbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Mutable motion value allows us to control it directly during drag
    const progress = useMotionValue(0);
    const smoothProgress = useSpring(progress, {
        stiffness: 400,
        damping: 40,
        mass: 0.5
    });

    const ballTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

    // Sync scroll to progress when not dragging
    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            if (!isDragging) {
                progress.set(latest);
            }
        });
    }, [isDragging, scrollYProgress, progress]);

    // Sync window scroll to smooth progress ONLY when dragging
    useEffect(() => {
        return smoothProgress.on("change", (latest) => {
            if (isDragging) {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                window.scrollTo({
                    top: latest * totalHeight,
                    behavior: "instant" // updates per frame driven by spring
                });
            }
        });
    }, [isDragging, smoothProgress]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleDrag = useCallback((e: PointerEvent) => {
        if (!containerRef.current) return;

        const { top, height } = containerRef.current.getBoundingClientRect();
        const relativeY = e.clientY - top;
        const newProgress = Math.max(0, Math.min(1, relativeY / height));

        // Update visual position immediately (spring will smooth it)
        progress.set(newProgress);
        // Direct scrollTo removed - handled by smoothProgress subscription
    }, [progress]);

    useEffect(() => {
        const onPointerUp = () => {
            setIsDragging(false);
            document.body.style.userSelect = '';
        };

        const onPointerMove = (e: PointerEvent) => {
            if (isDragging) {
                e.preventDefault();
                handleDrag(e);
            }
        };

        if (isDragging) {
            window.addEventListener('pointermove', onPointerMove);
            window.addEventListener('pointerup', onPointerUp);
            document.body.style.userSelect = 'none'; // Prevent text selection while dragging
        }

        return () => {
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
            document.body.style.userSelect = '';
        };
    }, [isDragging, handleDrag]);

    return (
        <motion.div
            className="hidden md:block fixed right-6 top-12 bottom-12 z-50 w-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <div ref={containerRef} className="relative w-full h-full">
                {/* Thin road line track - absolute centered */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-black/10 dark:bg-white/10" />

                {/* Circular ball indicator - absolute centered */}
                <motion.div
                    className="absolute left-1/2 w-5 h-5 rounded-full shadow-md pointer-events-auto cursor-pointer bg-black border border-white dark:bg-white dark:border-black"
                    style={{
                        top: ballTop,
                        y: '-50%',
                        x: '-50%',
                    }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        scale: isVisible ? (isDragging ? 1.2 : 1) : 0,
                    }}
                    whileHover={{
                        scale: 1.5,
                    }}
                    onPointerDown={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                        // Immediate update on click not needed if just start drag
                    }}
                />
            </div>
        </motion.div>
    );
};
