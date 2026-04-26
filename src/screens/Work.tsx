"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { Award, Users, Globe, BarChart3, Shield, CheckCircle2, ArrowRight, ChevronRight, Projector as Project, Star, Zap, Monitor, Smartphone, Layout } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';
import Image from 'next/image';
import Link from 'next/link';
import MuxPlayer from '@mux/mux-player-react';

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
    ];

    const featuredCaseStudies: any[] = [
        {
            subtitle: "99Purity Peptides",
            title: "Elevating Research with High-Purity Synthetic Peptides",
            videoId: "02UDvvGgCcwGd01iOE3C4ElNe77bwyNWvkwOc8W3FEvoU",
            client: "99Purity Peptides",
            date: "2023",
            categories: "UI/UX & Photography",
            services: "E-commerce Platform Design",
            about: "99 Purity Peptides operates as a research-focused peptide company that USA laboratories and independent research professionals rely on when sourcing synthetic research peptides. As a trusted peptide supplier and established peptide supplier, USA buyers choose for consistency. We specialise exclusively in laboratory-grade peptides designated for controlled research environments.\n\nOur organisation supports analytical and laboratory research by providing high-purity synthetic research peptides with structured documentation, research classification clarity, and compliance-aligned sourcing practices. Every material offered through our platform is intended strictly for research use only and supplied with defined quality verification standards."
        },
        {
            subtitle: "FilmFluence - Influencer Marketing",
            title: "Transform Your Brand with Authenticity",
            videoId: "Yd02KEEO0002U8h00OC028Y02L666UQAwgWH7R8L5gWCCkIEE",
            client: "FilmFluence",
            date: "2024",
            categories: "Branding & Digital Campaigns",
            services: "Platform Design & Strategy",
            about: "FilmFluence serves as India's rising bridge between visionary brands and impactful creators, curating collaborations that speak, engage, and convert. The mission is to empower nano and micro creators with real opportunities, while helping brands craft high-impact digital campaigns through a curated team of creators, writers, editors, and campaign supervisors.\n\nThe proven 3-step process transforms a brand's vision into compelling influencer campaigns that drive real results. By matching brands with the perfect creators based on audience alignment and content style, FilmFluence ensures campaigns blend creativity with tangible conversion."
        },
        {
            subtitle: "Belk Body Lab",
            title: "Elite Body Transformations Engineered for Performance",
            videoId: "mk3JhR01n2Eci2RmbfpySn4b1C3JImg7029Y2U01rEMV4s",
            client: "Coach Kyle Belk",
            date: "2024",
            categories: "Health, Fitness & Coaching",
            services: "Fat Loss & Hypertrophy Protocols",
            about: "Belk Body Lab, led by certified personal trainer Kyle Belk, offers elite transformation coaching engineered for performance. With over 7 years of coaching experience and 500+ clients transformed, the focus is on building custom protocols rooted in unique metabolism, schedules, and goals.\n\nThe approach completely rejects cookie-cutter plans. Instead, it provides expert-led, highly customized coaching for both beginners and elite performers, ensuring sustainable fat loss and muscle hypertrophy. With a 98% success rate, Belk Body Lab is trusted by top performers across the US."
        }
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

                    {/* Redesigned Single Case Study Layout */}
                    <div className="flex flex-col gap-32">
                        {featuredCaseStudies.map((caseStudy, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col"
                            >
                                <div className="mb-8">
                                    <p className="text-white/80 font-medium font-sans mb-4">{caseStudy.subtitle}</p>
                                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-sans font-[600] text-white max-w-4xl tracking-tight leading-[1.1]">
                                        {caseStudy.title}
                                    </h3>
                                </div>

                                <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[24px] md:rounded-[40px] overflow-hidden mb-12 bg-white/5 border border-white/10">
                                    {caseStudy.videoId ? (
                                        <MuxPlayer
                                            playbackId={caseStudy.videoId}
                                            muted={true}
                                            autoPlay={false}
                                            streamType="on-demand"
                                            className="w-full h-full object-cover"
                                            style={{ height: '100%', maxWidth: '100%' }}
                                        />
                                    ) : caseStudy.image ? (
                                        <Image
                                            src={caseStudy.image}
                                            alt={caseStudy.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : null}
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-white/10 pb-12">
                                    <div>
                                        <h4 className="text-white font-[600] font-sans mb-2 text-lg">Client Name</h4>
                                        <p className="text-white/60 font-sans">{caseStudy.client}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-[600] font-sans mb-2 text-lg">Date</h4>
                                        <p className="text-white/60 font-sans">{caseStudy.date}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-[600] font-sans mb-2 text-lg">Categories</h4>
                                        <p className="text-white/60 font-sans">{caseStudy.categories}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-[600] font-sans mb-2 text-lg">Services</h4>
                                        <p className="text-white/60 font-sans">{caseStudy.services}</p>
                                    </div>
                                </div>

                                <div className="max-w-4xl">
                                    <h4 className="text-2xl font-[600] text-white font-sans mb-6">About</h4>
                                    <div className="space-y-6">
                                        {caseStudy.about.split('\n\n').map((paragraph, pIndex) => (
                                            <p key={pIndex} className="text-white/70 text-lg leading-relaxed font-sans">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title={t.work.cta?.title || "Ready to Build Results Like These for Your Business?"}
                subtitle={t.work.cta?.subtitle || "Let’s discuss how we can deliver measurable growth for your digital initiatives."}
            />
        </div>
    );
};

export default Work;
