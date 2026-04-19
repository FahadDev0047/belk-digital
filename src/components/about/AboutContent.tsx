"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
    Users, Award, Globe, Heart, Lightbulb, Target, Zap, Shield,
    Layout, Code, Sparkles, Search, BarChart, Server,
    Rocket, Building2, ShoppingBag, Briefcase,
    Globe2, TrendingUp, Cpu, Handshake,
    Map, PenTool
} from 'lucide-react';
import CardSwap, { Card } from '@/components/ui/CardSwap';
import { ApproachSection } from '@/components/home/ApproachSection';
import { StatsSection } from '@/components/home/StatsSection';
import { WhoWeWorkWith } from '@/components/about/WhoWeWorkWith';
import { ValuesSection } from '@/components/home/ValuesSection';

import cardWebDesign from '@/assets/images/card_web_design.png';
import cardWebDev from '@/assets/images/card_web_dev.png';
import cardRedesign from '@/assets/images/card_redesign.png';
import cardSeo from '@/assets/images/card_seo.png';
import cardMarketing from '@/assets/images/card_marketing.png';
import cardSupport from '@/assets/images/card_support.png';
import jamesPortrait from '@/assets/images/team/james.png';
import saraPortrait from '@/assets/images/team/sara.png';
import adamPortrait from '@/assets/images/team/adam.png';



export function AboutContent() {
    const { t, isRTL, language } = useLanguage();
    const router = useRouter();

    const serviceSlugs = [
        'custom-web-design',
        'website-redesign',
        'branding',
        'ui-ux-design',
        'web-development',
        'seo-optimization',
        'maintenance'
    ];

    const whatWeDoIcons = [Layout, Sparkles, PenTool, Target, Code, BarChart, Shield];
    const valuesIcons = [Lightbulb, Target, Zap, Shield];
    const whyChooseIcons = [Globe2, TrendingUp, Cpu, Handshake];
    const teamImages = [jamesPortrait, saraPortrait, adamPortrait];

    // Unique looping animations per icon index
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
        <>
            {/* ─── Hero Section ─── */}
            <section className="relative w-full flex flex-col justify-end overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero/about-bg.webp"
                        alt="About Belk Digital"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    {/* Dark overlay gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
                    {/* Subtle radial glow that echoes the image's blue light */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(59,130,246,0.12),transparent)]" />
                </div>

                {/* Content — same width as ProjectsSection */}
                <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pb-20 pt-40 md:pt-44 flex flex-col items-center gap-8 text-center">

                    {/* Headline — mirrors ProjectsSection mixed-font pattern */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-sans font-[400] tracking-tight leading-[1.08] text-white text-center w-full"
                    >
                        {t.about.hero.heroPart1}{' '}
                        <span className="font-serif italic font-normal">{t.about.hero.heroItalic}</span>{' '}
                        {t.about.hero.heroPart2}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white/55 text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto"
                    >
                        {t.about.hero.heroSubtitle}
                    </motion.p>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                >
                    <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
                </motion.div>
            </section>

            {/* ─── Our Commitment Section ─── */}
            <section className="py-28 bg-black relative overflow-hidden">
                <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative">

                    {/* Curved dark background container */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            borderRadius: '50px',
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                            background: 'linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 70%, #000000 100%)',
                        }}
                    />
                    {/* Bottom fade */}
                    <div
                        className="absolute inset-x-0 bottom-0 h-32 z-0 pointer-events-none"
                        style={{
                            borderBottomLeftRadius: '150px',
                            borderBottomRightRadius: '150px',
                            background: 'linear-gradient(to bottom, transparent, #000)',
                        }}
                    />
                    {/* Ambient glow */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/[0.04] blur-[120px] rounded-full pointer-events-none z-0" />

                    {/* Content */}
                    <div className="relative z-10 py-16">
                        <div className={cn(
                            "flex flex-col lg:flex-row gap-16 lg:gap-24 items-start",
                            isRTL && "lg:flex-row-reverse"
                        )}>

                            {/* Left — heading */}
                            <motion.div
                                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="lg:w-[45%] lg:sticky lg:top-32"
                            >
                                {/* Pill badge */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-8 h-px bg-white/20" />
                                    <span className="text-xs text-white/40 uppercase tracking-[0.3em] font-medium">
                                        Our Commitment
                                    </span>
                                </div>

                                <h2 className={cn(
                                    "text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] font-sans font-[600] tracking-tight leading-[1.1] text-white",
                                    isRTL && "text-right"
                                )}>
                                    {(() => {
                                        const title = t.about.mission.title;
                                        const words = title.split(' ');
                                        const italic = words.slice(-2).join(' ');
                                        const rest = words.slice(0, -2).join(' ');
                                        return <>{rest}{' '}<span className="font-serif italic font-normal">{italic}</span></>;
                                    })()}
                                </h2>
                            </motion.div>

                            {/* Right — body */}
                            <motion.div
                                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                className="lg:w-[55%] flex flex-col gap-8 pt-2"
                            >
                                {/* Decorative accent line */}
                                <div className="w-16 h-[2px] bg-gradient-to-r from-blue-400/60 to-purple-500/60 rounded-full" />

                                <p className={cn(
                                    "text-white/55 text-lg md:text-xl leading-relaxed font-sans",
                                    isRTL && "text-right"
                                )}>
                                    {t.about.mission.body}
                                </p>

                                {/* Stats row */}
                                <div className="flex flex-wrap gap-10 pt-4">
                                    {[
                                        { value: '50+', label: 'Projects Delivered' },
                                        { value: '98%', label: 'Client Satisfaction' },
                                        { value: '10+', label: 'Countries Served' },
                                    ].map((stat, i) => (
                                        <div key={i} className={cn("flex flex-col gap-1", isRTL && "items-end")}>
                                            <span className="text-2xl md:text-3xl font-sans font-[700] text-white tracking-tight">{stat.value}</span>
                                            <span className="text-[11px] text-white/35 uppercase tracking-widest font-medium">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>


            {/* What We Do Section */}
            <section className="section-padding bg-black relative py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                        {/* Left Content (Sticky Sidebar) */}
                        <div className={cn("lg:w-[35%] lg:sticky lg:top-32 mt-4", isRTL && "text-right lg:order-2")}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative z-10"
                            >
                                <h2 className="text-[2.4rem] md:text-[3rem] font-sans font-[600] tracking-tight leading-[1.1] text-white mb-6">
                                    {t.about.whatWeDo.title.split(' ').slice(0, -2).join(' ')}{' '}
                                    <span className="font-serif italic font-normal">
                                        {t.about.whatWeDo.title.split(' ').slice(-2).join(' ')}
                                    </span>
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-0">
                                    {t.about.whatWeDo.subtitle || t.about.hero.subtitle}
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Content (Scrollable Cards) */}
                        <div className={cn("lg:w-[65%] flex flex-col gap-24 lg:gap-32", isRTL && "lg:order-1")}>
                            {t.about.whatWeDo.items.map((item: any, index: number) => {
                                const images = [
                                    cardWebDesign,    // Custom Web Design
                                    cardRedesign,     // Website Redesign
                                    cardMarketing,    // Branding & Identity
                                    cardWebDev,
                                    cardSeo,
                                    cardSupport
                                ];
                                const bgImage = images[index % images.length];

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="relative flex flex-col items-center text-center gap-8 w-full group cursor-pointer bg-[#0C0C0C] dark:bg-white/5 rounded-[2rem] p-8 md:p-12 hover:shadow-xl transition-all duration-500 overflow-hidden"
                                        onClick={() => {
                                            if (serviceSlugs[index]) {
                                                router.push(`/${language}/services/${serviceSlugs[index]}`);
                                            }
                                        }}
                                    >
                                        {/* Layered Image Container */}
                                        <div className="relative w-full max-w-md mx-auto aspect-[4/5] flex flex-col justify-end">
                                            {/* Pseudo-tab background layers */}
                                            <div className="absolute top-0 left-[25%] right-[25%] h-12 bg-white/40 dark:bg-white/10 rounded-t-2xl transition-transform duration-500 group-hover:-translate-y-4" />
                                            <div className="absolute top-4 left-[15%] right-[15%] h-12 bg-white/70 dark:bg-white/20 rounded-t-2xl shadow-sm transition-transform duration-500 group-hover:-translate-y-2 z-10" />

                                            {/* Main Image */}
                                            <div className="relative w-full h-[calc(100%-2rem)] rounded-2xl overflow-hidden shadow-2xl bg-white z-20">
                                                <Image
                                                    src={bgImage}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    placeholder="blur"
                                                />
                                            </div>
                                        </div>

                                        {/* Card Text Content */}
                                        <div className="flex flex-col items-center gap-3 px-2 mt-4 pb-4">
                                            <h3 className="text-2xl md:text-3xl font-sans font-[600] text-white tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="font-sans text-white/60 text-lg max-w-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Bottom fade overlay */}
                                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent rounded-b-[2rem] pointer-events-none z-10" />
                                    </motion.div>
                                );
                            }).slice(0, 3)}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <ValuesSection />

            {/* Who We Work With Section */}
            <WhoWeWorkWith />

            {/* Why Choose Belk Digital Section */}
            <section className="py-28 bg-black relative">

                <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative">

                    {/* Curved card background */}
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
                                    {t.about.whyChoose.badge || 'The Belk Digital Advantage'}
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
                                {t.about.whyChoose.title.split(',')[0]
                                    ? <>
                                        {t.about.whyChoose.title.split(',')[0]},{' '}
                                        <span className="font-serif italic font-normal">
                                            {t.about.whyChoose.title.split(',').slice(1).join(',').trim()}
                                        </span>
                                    </>
                                    : <>
                                        {t.about.whyChoose.title.split(' ').slice(0, -2).join(' ')}{' '}
                                        <span className="font-serif italic font-normal">
                                            {t.about.whyChoose.title.split(' ').slice(-2).join(' ')}
                                        </span>
                                    </>
                                }
                            </motion.h2>
                        </div>

                        {/* Icon Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                            {t.about.whyChoose.items.map((item: any, index: number) => {
                                const Icon = whyChooseIcons[index % whyChooseIcons.length];
                                const anim = iconAnimations[index % iconAnimations.length];
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-60px' }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex flex-col items-center text-center gap-5"
                                    >
                                        {/* Animated icon */}
                                        <motion.div
                                            animate={anim.animate}
                                            transition={anim.transition}
                                        >
                                            <Icon className="w-20 h-20 text-white" strokeWidth={1.25} />
                                        </motion.div>

                                        <h3 className="font-sans font-[600] text-white text-xl tracking-tight leading-snug">
                                            {item.title}
                                        </h3>

                                        <p className="font-sans text-white/50 text-sm leading-relaxed max-w-[220px]">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-28 bg-black relative">

                <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative">


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
                                    {t.about.team.badge || 'Our Team'}
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
                                {t.about.team.titlePart1}{' '}
                                <span className="font-serif italic font-normal">{t.about.team.titleItalic}</span>{' '}
                                {t.about.team.titlePart2}
                            </motion.h2>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="font-sans text-white/50 text-lg max-w-xl leading-relaxed"
                            >
                                {t.about.team.subtitle}
                            </motion.p>
                        </div>

                        {/* Team Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                            {t.about.team.members.map((member: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Member Portrait */}
                                    <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700 bg-neutral-900 border border-white/5 group-hover:border-white/20">
                                        <Image
                                            src={teamImages[index % teamImages.length]}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    </div>

                                    {/* Name & Role */}
                                    <h3 className="font-sans font-[600] text-white text-2xl tracking-tight mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="font-sans text-white/50 text-base leading-relaxed uppercase tracking-widest text-xs font-medium">
                                        {member.role}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}