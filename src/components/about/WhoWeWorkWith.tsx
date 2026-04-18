"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

// Reuse existing images
import cardWebDesign from '@/assets/images/card_web_design.png';
import cardWebDev from '@/assets/images/card_web_dev.png';
import cardRedesign from '@/assets/images/card_redesign.png';
import cardMarketing from '@/assets/images/card_marketing.png';

const images: StaticImageData[] = [cardWebDesign, cardWebDev, cardMarketing, cardRedesign];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export function WhoWeWorkWith() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    const items = t.about.whoWeWorkWith.items;
    const validItems = Array.isArray(items) ? items : [];

    useEffect(() => {
        if (validItems.length === 0) return;

        // Auto-cycle through the cards based on duration
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % validItems.length);
        }, SLIDE_DURATION);

        return () => clearInterval(timer);
    }, [activeIndex, validItems.length]); // Setting activeIndex resets the timer duration reliably

    if (validItems.length === 0) return null;

    return (
        <section className="py-24 lg:py-32 bg-[#0c0c0c] relative overflow-hidden">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

                {/* Header */}
                <div className="mb-16 max-w-4xl">
                    <h2 className="text-5xl md:text-6xl font-sans font-[600] text-white tracking-tight leading-[1.1]">
                        {t.about.whoWeWorkWith.headingPart1}{' '}
                        <span className="font-serif italic font-normal">{t.about.whoWeWorkWith.headingItalic}</span>
                        {t.about.whoWeWorkWith.headingPart2 ? <>{' '}{t.about.whoWeWorkWith.headingPart2}</> : null}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Left Side: Large Image Display */}
                    <div className="lg:col-span-7 relative w-full aspect-video md:aspect-[4/3] rounded-md overflow-hidden shadow-2xl bg-[#120a22]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images[activeIndex % images.length]}
                                    alt={validItems[activeIndex].title}
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                />
                                {/* Soft overlay to match dark theme gracefully */}
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Interactive Cards Sequence */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {validItems.map((item: any, index: number) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={cn(
                                        "cursor-pointer rounded-md p-6 transition-all duration-300 border backdrop-blur-sm",
                                        isActive
                                            ? "bg-white/5 border-white/20 shadow-lg"
                                            : "bg-transparent border-transparent hover:bg-white/[0.02]"
                                    )}
                                >
                                    <h3
                                        className={cn(
                                            "text-2xl font-bold font-display tracking-tight transition-colors duration-300",
                                            isActive ? "text-white" : "text-white/40 group-hover:text-white/60"
                                        )}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={cn(
                                            "mt-3 text-base leading-relaxed transition-colors duration-300",
                                            isActive ? "text-white/80" : "text-white/30"
                                        )}
                                    >
                                        {item.description}
                                    </p>

                                    {/* Progress Bar Component */}
                                    <div className="mt-6 w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                                        {isActive && (
                                            <motion.div
                                                key={activeIndex} // Ensure animation resets perfectly on activeIndex change
                                                className="h-full bg-white rounded-full origin-left"
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{
                                                    duration: SLIDE_DURATION / 1000,
                                                    ease: "linear"
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
