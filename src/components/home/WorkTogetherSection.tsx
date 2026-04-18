"use client";
import { motion } from "framer-motion";
import { useLanguage } from '@/i18n/LanguageContext';

export function WorkTogetherSection() {
    const { t } = useLanguage();
    const text = t.homeWorkTogether.text;

    // Custom Row Component for cleaner structure
    const MarqueeRow = ({ direction }: { direction: 'left' | 'right' }) => (
        <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div
                initial={{ x: direction === 'left' ? 0 : "-50%" }}
                animate={{ x: direction === 'left' ? "-50%" : 0 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="flex shrink-0 font-black"
            >
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center text-black dark:text-white">
                        {Array.from({ length: 8 }).map((_, j) => (
                            <span
                                key={j}
                                className={`text-7xl md:text-9xl lg:text-[150px] font-bold tracking-tighter uppercase px-4 md:px-8
                                    ${direction === 'left'
                                        ? 'opacity-100'
                                        : 'opacity-20'
                                    }`}

                            >
                                {text}
                            </span>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section className="py-4 md:py-6 bg-[#FEFCFF] dark:bg-[#030303] transition-colors duration-300 overflow-hidden select-none">
            <MarqueeRow direction="left" />
            <MarqueeRow direction="right" />
        </section>
    );
}
