"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { Award, Users, Globe, BarChart3, Shield, CheckCircle2, ArrowRight, ChevronRight, Projector as Project, Star, Zap, Monitor, Smartphone, Layout } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';
import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
    const { language, t, isRTL } = useLanguage();

    const stats = [
        { value: '50+', label: t.hero.stats.projects, icon: Award },
        { value: '300+', label: t.hero.stats.clients, icon: Users },
        { value: '45+', label: t.hero.stats.countries, icon: Globe },
        { value: '98%', label: t.trust.items[1].label, icon: BarChart3 },
    ];

    const caseStudyImages = [
        '/images/projects/project1.webp',
        '/images/projects/project2.webp',
        '/images/projects/project3.webp',
    ];

    return (
        <div className="bg-[#0A0A0A] min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative pt-44 pb-32 overflow-hidden min-h-[80vh] flex flex-col justify-end">
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero/about-bg.webp"
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(59,130,246,0.12),transparent)] z-10" />
                </div>

                <div className="container-wide relative z-20">
                    <div className="max-w-[1200px] mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8"
                        >
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs font-sans font-medium tracking-widest uppercase">
                                {t.work.badge}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-sans font-[600] tracking-tight leading-[1.1] mb-12 text-white"
                        >
                            {t.work.title}{' '}
                            <span className="font-serif italic font-normal text-white/90">
                                {t.work.titleHighlight}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-sans mb-16"
                        >
                            {t.work.subtitle}
                        </motion.p>

                        {/* Glassy Stats row */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="bg-white/[0.03] backdrop-blur-md rounded-[32px] p-8 border border-white/5 hover:border-white/10 transition-all group"
                                >
                                    <stat.icon className="w-10 h-10 text-white/40 mb-6 mx-auto group-hover:scale-110 group-hover:text-white transition-all" />
                                    <div className="text-4xl md:text-5xl font-sans font-bold mb-2 tracking-tight text-white">{stat.value}</div>
                                    <div className="text-[11px] text-white/40 uppercase tracking-[0.2em] font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Case Studies */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn("text-center max-w-3xl mx-auto mb-24", isRTL && "text-right")}
                    >
                        <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-6 block">
                           Showcase
                        </span>
                        <h2 className="text-4xl md:text-6xl font-sans font-[600] text-white">
                           {t.work.caseStudies?.title || 'Featured Projects'}
                        </h2>
                        
                        <div className="flex flex-wrap justify-center gap-3 mt-12">
                            {(t.work.caseStudies?.filters || []).map((filter: string, index: number) => (
                                <span key={index} className="px-6 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-bold uppercase tracking-widest text-white/40 hover:bg-white/10 hover:text-white transition-all cursor-default">
                                    {filter}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Premium Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden hover:border-white/15 transition-all duration-700"
                            >
                                <div className="aspect-[4/5] relative overflow-hidden">
                                     {/* Placeholder image layer */}
                                    <div className="absolute inset-0 bg-[#1A1A1A] group-hover:scale-110 transition-transform duration-1000 ease-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                                    
                                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-40 group-hover:opacity-80 transition-opacity">
                                         <Project className="w-16 h-16 text-white" />
                                    </div>

                                    {/* Overlay Content */}
                                    <div className="absolute bottom-10 left-10 right-10 z-20">
                                         <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 mb-3 block">
                                             Client Excellence
                                         </span>
                                         <h3 className="text-2xl font-sans font-[600] text-white mb-4 line-clamp-2">
                                             Transforming Digital Realities for Global Leaders
                                         </h3>
                                         <p className="text-white/50 text-sm line-clamp-2 mb-8 group-hover:text-white/80 transition-colors">
                                             A comprehensive redesign and strategic development phase resulting in 200% growth.
                                         </p>
                                         <div className="flex items-center gap-4">
                                              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                                  <ChevronRight className={cn("w-5 h-5", isRTL && "rotate-180")} />
                                              </div>
                                              <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">View Case Study</span>
                                         </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-32 relative overflow-hidden bg-white/[0.02]">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn("text-center max-w-3xl mx-auto mb-24", isRTL && "text-right")}
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black tracking-widest uppercase mb-8">
                             {t.work.methodologyBadge}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-sans font-[600] text-white mb-8">{t.work.methodologyTitle}</h2>
                        <p className="text-xl text-white/50 font-sans">
                            {t.work.methodologySubtitle}
                        </p>
                    </motion.div>

                    <div className="space-y-8 max-w-5xl mx-auto">
                        {t.work.methodology.map((item: { title: string, description: string }, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "relative flex gap-8 items-center bg-white/[0.03] backdrop-blur-md rounded-[40px] p-8 md:p-12 border border-white/5 hover:border-white/15 transition-all duration-500 group overflow-hidden",
                                    isRTL && "flex-row-reverse text-right"
                                )}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] -mr-32 -mt-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500 relative z-10">
                                    <span className="text-3xl font-black">{String(index + 1).padStart(2, '0')}</span>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-sans font-[600] mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-white/50 text-lg leading-relaxed font-sans">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn("text-center max-w-3xl mx-auto mb-24", isRTL && "text-right")}
                    >
                         <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-6 block">
                             Versatility
                         </span>
                        <h2 className="text-4xl md:text-6xl font-sans font-[600] text-white">
                             {t.work.industriesTitle}
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
                        {t.work.industries.map((industry: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={cn(
                                    "group relative flex items-center gap-4 bg-white/[0.03] border border-white/5 rounded-2xl px-8 py-5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden",
                                    isRTL && "flex-row-reverse"
                                )}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <CheckCircle2 className="w-5 h-5 text-white/40 group-hover:text-white transition-colors relative z-10" />
                                <span className="font-sans font-medium text-white/60 group-hover:text-white transition-colors relative z-10">{industry}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Statement */}
            <section className="py-40 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero/service-detail-bg.webp"
                        alt="Trust Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A] z-10" />
                </div>

                <div className="container-wide relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-12 group hover:scale-110 transition-transform duration-500">
                             <Shield className="w-10 h-10 text-white/40 group-hover:text-white transition-colors" />
                        </div>
                        
                        <h2 className="text-4xl md:text-7xl font-sans font-[600] text-white mb-10 tracking-tight">
                            {t.work.trust.title}
                        </h2>

                        {t.work.trust.subtitle && (
                            <p className="text-2xl md:text-3xl text-white/50 mb-12 font-serif italic italic leading-relaxed">
                                "&quot;{t.work.trust.subtitle}&quot;"
                            </p>
                        )}

                        <p className="text-lg md:text-xl text-white/40 mb-16 max-w-3xl mx-auto font-sans">
                            {t.work.trust.body}
                        </p>

                        <div className="flex flex-wrap justify-center gap-8">
                            {t.work.trust.items.map((item: string, index: number) => (
                                <div key={index} className="flex items-center gap-3">
                                     <Star className="w-4 h-4 text-white/40" />
                                     <span className="text-xs font-bold uppercase tracking-widest text-white/40">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Clients Choose Us Again */}
            {t.work.whyAgain && (
                <section className="py-32 relative overflow-hidden">
                    <div className="container-wide">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-24"
                        >
                             <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-6 block">
                                Outcomes
                             </span>
                            <h2 className="text-4xl md:text-6xl font-sans font-[600] text-white">
                                {t.work.whyAgain.title}
                            </h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {t.work.whyAgain.items.map((item: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-500 group",
                                        isRTL && "text-right"
                                    )}
                                >
                                    <h3 className="text-2xl font-sans font-[600] text-white mb-6 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-white/50 text-lg leading-relaxed font-sans">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTASection
                title={t.work.cta?.title || "Ready to Build Results Like These for Your Business?"}
                subtitle={t.work.cta?.subtitle || "Let’s discuss how we can deliver measurable growth for your digital initiatives."}
            />
        </div>
    );
};

export default Work;
