"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98] as const,
        },
    },
};

const HeroContent = () => {
    const { t, language } = useLanguage();

    return (
        <motion.div
            className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center pointer-events-auto mt-8 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Sparkle Icon */}
            <motion.svg
                variants={itemVariants}
                width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-6 text-white"
            >
                <path d="M30 0C30 16.5685 43.4315 30 60 30C43.4315 30 30 43.4315 30 60C30 43.4315 16.5685 30 0 30C16.5685 30 30 16.5685 30 0Z" fill="currentColor" />
            </motion.svg>

            {/* Main Content */}
            <motion.h1
                variants={itemVariants}
                className="text-white font-display font-medium text-4xl sm:text-5xl md:text-[4rem] leading-[1.1] tracking-tight max-w-3xl mx-auto whitespace-pre-line transition-colors duration-300"
            >
                {t.hero.title}
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="text-white/80 text-base sm:text-lg md:text-xl font-medium mt-5 max-w-xl mx-auto leading-relaxed transition-colors duration-300"
            >
                {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
            >
                <Link
                    href={`/${language}/contact`}
                    className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-[0.5rem] bg-white hover:bg-white/90 text-black font-medium text-sm md:text-base transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(255,255,255,0.1)]"
                >
                    {t.nav.bookCall} <MoveRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                    href={`/${language}/services`}
                    className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-[0.5rem] bg-transparent text-white font-medium text-sm md:text-base border border-white/20 transition-all hover:bg-white/5 hover:-translate-y-0.5"
                >
                    Explore Services
                </Link>
            </motion.div>

            <motion.p
                variants={itemVariants}
                className="mt-5 text-[13px] text-white/60 transition-colors duration-300"
            >
                Elevate your digital presence today.
            </motion.p>
        </motion.div>
    );
};

export default HeroContent;
