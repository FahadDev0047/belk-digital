"use client";
import { useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from '@/lib/utils';
import ShinyText from '@/components/ui/ShinyText/ShinyText';

interface WordProps {
    children: string;
    progress: any;
    range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="relative mx-[0.4em] inline-block">
            {/* Ghost Layer */}
            <span className="absolute inset-0 select-none text-white/10">
                {children}
            </span>
            {/* Reveal Layer */}
            <ShinyText
                text={children}
                color="#9ca3af"
                shineColor="#ffffff"
                speed={3}
                className="relative z-10"
                style={{ opacity }}
            />
        </span>
    );
}

export function WhoWeAreSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { t, language, isRTL } = useLanguage();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const revealProgress = useTransform(smoothProgress, [0, 0.7], [0, 1]);

    const headingText = t.whoWeAre?.badge || "WHO WE ARE";
    const descriptionText = t.whoWeAre?.title || "We are a global digital solutions company building high-performance websites, SaaS platforms, and scalable digital products that drive real business impact.";

    const descWords = descriptionText.split(" ");
    const totalWords = descWords.length;

    return (
        <section
            ref={containerRef}
            className="dark relative h-[200vh] bg-black transition-colors duration-500"
        >
            <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden w-full">
                {/* Background Image */}
                <img 
                    src="/assets/liq.png" 
                    alt="Liquid Background" 
                    className="absolute bottom-0 right-0 w-[80%] md:w-[60%] max-w-[500px] opacity-30 pointer-events-none z-0 mix-blend-screen translate-x-[5%] translate-y-[10%]"
                />
                
                <div className="container-wide flex flex-col justify-center items-center h-full gap-8 md:gap-12 relative z-10">

                    {/* Section Header */}
                    <div className="w-full flex justify-center">
                        <div className={cn("w-full max-w-6xl", isRTL ? "sm:text-right" : "")}>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-xs font-semibold tracking-[0.5em] text-black/40 dark:text-white/30 uppercase mb-6 block text-center sm:text-left"
                            >
                                {headingText}
                            </motion.span>

                            {/* Animated Description Reveal */}
                            <div className="text-[28px] text-center sm:text-left sm:text-4xl md:text-5xl lg:text-6xl font-sans font-[500] tracking-tighter leading-[1.3] sm:leading-[1.2] lg:leading-[1.1]">
                                {descWords.map((word: string, i: number) => {
                                    const start = i / totalWords;
                                    const end = (i + 1) / totalWords;
                                    return (
                                        <Word
                                            key={`d-${i}`}
                                            progress={revealProgress}
                                            range={[start, end]}
                                        >
                                            {word}
                                        </Word>
                                    );
                                })}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
