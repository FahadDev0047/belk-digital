"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export function NumbersSection() {
    const { t } = useLanguage();

    const icons = [
        // Trending Up
        <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
        </svg>,
        // Database
        <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>,
        // Double Up
        <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 11 12 6 7 11"></polyline>
            <polyline points="17 18 12 13 7 18"></polyline>
        </svg>
    ];

    const statsData = t.numbersSection?.items || [
        { value: "10+", description: "Years in the business where we helped companies grow." },
        { value: "100k+", description: "Over 100k people have used our services." },
        { value: "100%", description: "We are always available to help you with your needs." }
    ];

    const stats = statsData.map((item: any, index: number) => ({
        ...item,
        icon: icons[index % icons.length]
    }));

    return (
        <section className="py-24 bg-[#030303] relative overflow-hidden">
            {/* Main Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ 
                backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />
            
            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5 rounded-2xl overflow-hidden bg-[#050505]/50 backdrop-blur-sm">
                    {stats.map((stat: any, index: number) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                            className="relative p-12 md:p-16 group border-white/[0.03] border-b md:border-b-0 md:border-r last:border-r-0 hover:bg-white/[0.01] transition-colors duration-500"
                        >
                            {/* Subtle internal grid for individual card */}
                            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ 
                                backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }} />

                            {/* Corner Fold Decoration (Triangle) */}
                            <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
                                <div 
                                    className="absolute top-0 right-0 w-full h-full bg-white/5" 
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} 
                                />
                                <div 
                                    className="absolute top-0 right-0 w-4 h-4 bg-white/10" 
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} 
                                />
                            </div>

                            {/* Icon Box */}
                            <div className="relative mb-12">
                                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-white/70 border border-white/10 shadow-[inner_0_2px_4px_rgba(255,255,255,0.05)] group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                                    <div className="group-hover:scale-110 transition-transform duration-500">
                                        {stat.icon}
                                    </div>
                                </div>
                                {/* Glow effect on hover */}
                                <div className="absolute -inset-2 rounded-3xl bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Value (Number) */}
                            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
                                {stat.value}
                            </h2>

                            {/* Description Text */}
                            <p className="text-white/40 text-lg md:text-xl leading-relaxed font-medium max-w-[280px] group-hover:text-white/60 transition-colors duration-500">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
