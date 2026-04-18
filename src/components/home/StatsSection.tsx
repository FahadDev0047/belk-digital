"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Users, Award, Globe, Heart } from 'lucide-react';

export function StatsSection() {
    const { t } = useLanguage();

    const statsIcons = [Users, Award, Globe, Heart];

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        })
    };

    return (
        <section className="section-padding bg-[#FEFCFF] dark:bg-muted/20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        {t.about.stats.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {t.about.stats.items.map((stat: any, index: number) => {
                        const Icon = statsIcons[index % statsIcons.length];
                        const isPrimary = index === 0;

                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                                className={`group relative rounded-[2rem] p-6 lg:p-8 overflow-hidden transition-all duration-500 ${isPrimary
                                    ? 'bg-gradient-to-br from-[#6249C3] via-[#6249C3]/90 to-[#6249C3]/80'
                                    : 'bg-gradient-to-br from-card/40 via-card/30 to-card/20'
                                    }`}
                                style={{
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    border: isPrimary
                                        ? '2px solid rgba(98, 73, 195, 0.3)'
                                        : '2px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: isPrimary
                                        ? '0 8px 32px rgba(98, 73, 195, 0.2)'
                                        : '0 8px 32px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                {/* Glass reflection effect */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ pointerEvents: 'none' }}
                                />

                                {/* Animated border glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100"
                                    style={{
                                        background: isPrimary
                                            ? 'linear-gradient(45deg, rgba(98, 73, 195, 0.3), transparent, rgba(98, 73, 195, 0.3))'
                                            : 'linear-gradient(45deg, rgba(255, 255, 255, 0.2), transparent, rgba(255, 255, 255, 0.2))',
                                        backgroundSize: '200% 200%',
                                        filter: 'blur(10px)',
                                        pointerEvents: 'none'
                                    }}
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon */}
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                                        className="mb-auto"
                                    >
                                        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl ${isPrimary
                                            ? 'bg-white/20'
                                            : 'bg-[#6249C3]/10'
                                            } backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon
                                                className={`w-5 h-5 lg:w-6 lg:h-6 ${isPrimary ? 'text-white' : 'text-[#6249C3]'
                                                    }`}
                                                strokeWidth={2}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Stat Number */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                                        className="mt-6 mb-2"
                                    >
                                        <div className={`text-[clamp(3rem,8vw,6rem)] lg:text-[clamp(4rem,10vw,7rem)] font-bold leading-none ${isPrimary ? 'text-white' : 'text-foreground'
                                            } group-hover:scale-105 transition-transform duration-300`}>
                                            {stat.value}
                                        </div>
                                    </motion.div>

                                    {/* Label */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.4 }}
                                        className={`text-sm lg:text-base font-medium ${isPrimary ? 'text-white/90' : 'text-muted-foreground'
                                            }`}
                                    >
                                        {stat.label}
                                    </motion.p>
                                </div>

                                {/* Decorative corner gradient */}
                                <div
                                    className={`absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 rounded-bl-full opacity-30 ${isPrimary
                                        ? 'bg-gradient-to-br from-white/30 to-transparent'
                                        : 'bg-gradient-to-br from-[#6249C3]/20 to-transparent'
                                        }`}
                                    style={{ pointerEvents: 'none' }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
