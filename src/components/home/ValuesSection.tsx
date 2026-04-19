"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Lightbulb, Target, Zap, Shield } from 'lucide-react';

export function ValuesSection() {
    const { t } = useLanguage();
    
    const valuesIcons = [Lightbulb, Target, Zap, Shield];

    const iconAnimations = [
        // 0 — slow spin
        { animate: { rotate: 360 }, transition: { duration: 8, repeat: Infinity, ease: 'linear' as const } },
        // 1 — pulse scale
        { animate: { scale: [1, 1.18, 1] }, transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const } },
        // 2 — bounce / vertical float
        { animate: { y: [0, -8, 0] }, transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' as const } },
        // 3 — sway (left-right)
        { animate: { rotate: [-8, 8, -8] }, transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' as const } },
    ];

    return (
        <section className="py-28 bg-black relative">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative">
                {/* Curved faded background container */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        borderRadius: '50px',
                        borderTop: '1px solid rgba(255,255,255,0.10)',
                        background: 'linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 70%, #000000 100%)',
                        transform: 'perspective(1200px)',
                    }}
                />
                {/* Bottom fade overlay */}
                <div
                    className="absolute inset-x-0 bottom-0 h-40 z-0 pointer-events-none"
                    style={{
                        borderBottomLeftRadius: '150px',
                        borderBottomRightRadius: '150px',
                        background: 'linear-gradient(to bottom, transparent, #000000)',
                    }}
                />

                <div className="relative z-10 py-16">
                    {/* Section Header — centered */}
                    <div className="flex flex-col items-center text-center mb-20">
                        {/* Pill badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs font-sans font-medium tracking-widest uppercase">
                                {t.about.values.badge || 'Our Values'}
                            </span>
                        </motion.div>

                        {/* Mixed-font heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="text-[2.8rem] sm:text-[3.8rem] md:text-[4.5rem] font-sans font-[600] tracking-tight leading-[1.1] text-white mb-6"
                        >
                            {t.about.values.title.split(',')[0]
                                ? <>
                                    {t.about.values.title.split(',')[0]},{' '}
                                    <span className="font-serif italic font-normal">
                                        {t.about.values.title.split(',').slice(1).join(',').trim()}
                                    </span>
                                </>
                                : <>
                                    {t.about.values.title.split(' ').slice(0, -1).join(' ')}{' '}
                                    <span className="font-serif italic font-normal">
                                        {t.about.values.title.split(' ').slice(-1)[0]}
                                    </span>
                                </>
                            }
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="font-sans text-white/50 text-lg max-w-xl leading-relaxed"
                        >
                            {t.about.values.subtitle}
                        </motion.p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {t.about.values.items.map((value: any, index: number) => {
                            const Icon = valuesIcons[index % valuesIcons.length];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col items-center text-center gap-5"
                                >
                                    <motion.div
                                        animate={iconAnimations[index % iconAnimations.length].animate}
                                        transition={iconAnimations[index % iconAnimations.length].transition}
                                    >
                                        <Icon className="w-20 h-20 text-white" strokeWidth={1.25} />
                                    </motion.div>

                                    <h3 className="font-sans font-[600] text-white text-xl tracking-tight leading-snug">
                                        {value.title}
                                    </h3>

                                    <p className="font-sans text-white/50 text-sm leading-relaxed max-w-[220px]">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
