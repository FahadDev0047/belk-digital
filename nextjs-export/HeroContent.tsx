"use client";

import { ArrowDown, Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroContent = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
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
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    const sideNavVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <div className="relative z-10 flex min-h-screen flex-col justify-between px-8 md:px-12 lg:px-16 pt-28 pb-10">
            {/* Main Heading */}
            <div className="flex-1 flex flex-col justify-center max-w-4xl">
                <motion.h1
                    className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-white"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span className="block" variants={itemVariants}>
                        WE CREATE
                    </motion.span>
                    <motion.span className="flex items-center gap-4" variants={itemVariants}>
                        <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-foreground/30 shrink-0">
                            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-foreground/60" />
                        </span>
                        <span className="text-foreground/60">AWESOME</span>
                    </motion.span>
                    <motion.span className="block" variants={itemVariants}>
                        DESIGN
                    </motion.span>
                </motion.h1>
            </div>

            {/* Bottom Bar */}
            <motion.div
                className=""
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
                <div className="h-px bg-foreground/15 mb-5" />
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5 glass-card rounded-full px-3 py-1.5">
                        <div className="w-5 h-5 rounded bg-accent flex items-center justify-center">
                            <span className="text-accent-foreground font-bold text-[10px]">C</span>
                        </div>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                            ))}
                        </div>
                        <span className="text-sm font-body font-semibold text-foreground">4.9</span>
                    </div>
                    <span className="text-xs font-body uppercase tracking-widest text-accent font-semibold">Gold Verified</span>
                    <span className="text-sm font-body text-muted-foreground">Our Customers love to work with us, 40 Reviews</span>
                </div>
            </motion.div>

            {/* Side Navigation */}
            <div className="hidden lg:flex flex-col gap-3 absolute right-12 top-1/2 -translate-y-1/2 text-right">
                {["Home", "Our Services", "About Us", "Portfolio", "Reviews", "Contact Us"].map((item, i) => (
                    <motion.a
                        key={item}
                        href="#"
                        className={`text-sm font-body transition-colors ${i === 0 ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                            }`}
                        custom={i}
                        variants={sideNavVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                    >
                        {item}
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default HeroContent;
