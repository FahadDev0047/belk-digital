"use client";
import React from 'react';
import Image from 'next/image';
import { Globe } from "@/components/ui/globe";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { ArrowRight, Building2, CheckCircle2, Globe as GlobeIcon, Shield, Target, Check } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';
import { TracingBeam } from '@/components/ui/tracing-beam';

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.7, 0.7, 0.7] as [number, number, number],
  glowColor: [59 / 255, 130 / 255, 246 / 255] as [number, number, number],
  markerColor: [59 / 255, 130 / 255, 246 / 255] as [number, number, number],
  markers: [
    { location: [14.5995, 120.9842] as [number, number], size: 0.03 },
    { location: [19.076, 72.8777] as [number, number], size: 0.1 },
    { location: [23.8103, 90.4125] as [number, number], size: 0.05 },
    { location: [30.0444, 31.2357] as [number, number], size: 0.07 },
    { location: [39.9042, 116.4074] as [number, number], size: 0.08 },
    { location: [-23.5505, -46.6333] as [number, number], size: 0.1 },
    { location: [19.4326, -99.1332] as [number, number], size: 0.1 },
    { location: [40.7128, -74.006] as [number, number], size: 0.1 },
    { location: [34.6937, 135.5022] as [number, number], size: 0.05 },
    { location: [41.0082, 28.9784] as [number, number], size: 0.06 },
    { location: [51.5074, -0.1278] as [number, number], size: 0.09 },
    { location: [25.2048, 55.2708] as [number, number], size: 0.08 },
    { location: [24.6877, 46.7219] as [number, number], size: 0.07 },
    { location: [-33.8688, 151.2093] as [number, number], size: 0.08 },
    { location: [43.6532, -79.3832] as [number, number], size: 0.07 },
  ],
};

const FLAG_MAP: Record<string, string> = {
  'usa': '/images/flags/us.png',
  'uae': '/images/flags/uae.png',
  'ksa': '/images/flags/saudi-arabia.png',
  'europe': '/images/flags/uk.png',
  'australia': '/images/flags/australia.png',
};

const TIME_ZONES: Record<string, string> = {
  'usa': 'America/New_York',
  'uae': 'Asia/Dubai',
  'ksa': 'Asia/Riyadh',
  'europe': 'Europe/London',
  'australia': 'Australia/Sydney',
  'canada': 'America/Toronto',
};

const cityToRegionMap: Record<string, string> = {
  'new-york': 'usa',
  'los-angeles': 'usa',
  'london': 'europe',
  'dubai': 'gcc',
  'abu-dhabi': 'gcc',
  'riyadh': 'gcc',
  'jeddah': 'gcc',
  'sydney': 'australia',
  'usa': 'usa',
  'uae': 'gcc',
  'ksa': 'gcc',
  'europe': 'europe',
  'uk': 'europe',
  'canada': 'canada',
  'toronto': 'canada',
  'vancouver': 'canada',
  'australia': 'australia',
};

const Locations = () => {
  const { lang, city } = useParams();
  const { language, t, isRTL } = useLanguage();

  const regions = [
    { key: 'usa', flag: '🇺🇸', slug: 'usa', cities: ['new-york', 'los-angeles'] },
    { key: 'uae', flag: '🇦🇪', slug: 'uae', cities: ['dubai', 'abu-dhabi'] },
    { key: 'ksa', flag: '🇸🇦', slug: 'ksa', cities: ['riyadh', 'jeddah'] },
    { key: 'europe', flag: '🇬🇧', slug: 'europe', cities: ['london'] },
    { key: 'australia', flag: '🇦🇺', slug: 'australia', cities: ['sydney'] },
    { key: 'canada', flag: '🇨🇦', slug: 'canada', cities: ['toronto', 'vancouver'] },
  ];

  const locationSlug = Array.isArray(city) ? city[0] : city;

  // City detail page
  if (locationSlug && cityToRegionMap[locationSlug] && t.locations.cityPages) {
    const regionKey = cityToRegionMap[locationSlug];
    const content = (t.locations.cityPages as any)[regionKey];
    const countryFlag = regions.find(r => r.slug === city || r.key === city)?.flag || '🌍';

    if (!content) return null;

    return (
      <>
        {/* City Hero Section — About-style cinematic */}
        <section className="relative w-full flex flex-col justify-end overflow-hidden min-h-[85vh]">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/about-bg.webp"
              alt={content.title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
            {/* Radial blue glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(59,130,246,0.12),transparent)]" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pb-24 pt-44 flex flex-col items-center gap-8 text-center">

            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Link
                href={`/${language}/locations`}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-white/50 text-xs font-medium tracking-widest uppercase hover:bg-white/[0.12] hover:text-white/80 transition-all"
                dir="ltr"
              >
                <ArrowRight className={cn("w-3 h-3", isRTL ? "" : "rotate-180")} />
                {t.locations.viewAll}
              </Link>

              {/* Flag + live time pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                <span className="text-base">{countryFlag}</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
                </span>
                <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">
                  {locationSlug ? (TIME_ZONES[locationSlug] ? new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: TIME_ZONES[locationSlug] }).format(new Date()) : '') : ''}
                </span>
              </div>
            </motion.div>

            {/* Headline — mixed font */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-sans font-[600] tracking-tight leading-[1.08] text-white text-center w-full max-w-5xl"
            >
              {(() => {
                const words = content.title.split(' ');
                const italic = words.slice(-2).join(' ');
                const rest = words.slice(0, -2).join(' ');
                return <>{rest} <span className="font-serif italic font-normal">{italic}</span></>;
              })()}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/55 text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto"
            >
              {content.intro}
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


        {/* Delivering Excellence */}
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
                      const words = content.excellence.title.split(' ');
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
                    {content.excellence.body}
                  </p>

                  {/* Stats row */}
                  <div className="flex gap-10 pt-4">
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


        {/* Why Choose Us */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Ambient top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/[0.05] blur-[120px] rounded-full pointer-events-none" />

          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/50 text-xs font-sans font-medium tracking-widest uppercase">
                  Why Us
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] font-sans font-[600] tracking-tight leading-[1.1] text-white max-w-3xl"
              >
                {(() => {
                  const words = content.whyChoose.title.split(' ');
                  const last = words.at(-1) ?? '';
                  const rest = words.slice(0, -1).join(' ');
                  return <>{rest} <span className="font-serif italic font-normal">{last}</span></>;
                })()}
              </motion.h2>
            </div>

            {/* TracingBeam wraps the items */}
            <TracingBeam className="px-6">
              <div className="max-w-2xl mx-auto relative">
                {content.whyChoose.items.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="mb-16 last:mb-0 group"
                  >
                    {/* Step badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-black tracking-[0.4em] text-white/40 uppercase mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 inline-block" />
                      Reason {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Card */}
                    <div className="relative bg-white/[0.02] border border-white/[0.07] rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.04]">
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at 10% 50%, rgba(99,68,245,0.08), transparent 70%)' }}
                      />
                      {/* Large watermark number */}
                      <span className="absolute bottom-4 right-6 text-[6rem] font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none pointer-events-none leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {/* Accent line */}
                      <div className="w-8 h-[2px] bg-gradient-to-r from-blue-400/50 to-purple-500/50 group-hover:w-20 transition-all duration-500 mb-6 rounded-full" />
                      <h3 className={cn('text-xl md:text-2xl font-sans font-[600] text-white tracking-tight mb-3 relative z-10', isRTL && 'text-right')}>
                        {item.title}
                      </h3>
                      <p className={cn('text-white/45 text-base leading-relaxed font-sans group-hover:text-white/65 transition-colors duration-500 relative z-10 max-w-lg', isRTL && 'text-right')}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TracingBeam>

          </div>
        </section>


        {/* Our Digital Services */}
        <section className="py-28 bg-black relative overflow-hidden">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative">

            {/* Curved faded background container */}
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/[0.04] blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Content */}
            <div className="relative z-10 py-16">

              {/* Section Header */}
              <div className="flex flex-col items-center text-center mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/50 text-xs font-sans font-medium tracking-widest uppercase">
                    What We Offer
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] font-sans font-[600] tracking-tight leading-[1.1] text-white mb-4 max-w-3xl"
                >
                  {(() => {
                    const title = content.services.title as string;
                    const lastWord = title.split(' ').at(-1) ?? '';
                    const rest = title.split(' ').slice(0, -1).join(' ');
                    return <>{rest} <span className="font-serif italic font-normal">{lastWord}</span></>;
                  })()}
                </motion.h2>
              </div>

              {/* Numbered service cards — 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {content.services.items.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative group bg-white/[0.02] border border-white/[0.07] rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-white/15 hover:bg-white/[0.04]"
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.07), transparent 65%)' }}
                    />

                    {/* Large watermark number */}
                    <span className="absolute top-4 right-6 text-[5rem] font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none pointer-events-none leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Accent bar */}
                    <div className="w-8 h-[2px] bg-white/20 group-hover:w-16 group-hover:bg-blue-400/60 transition-all duration-500 mb-6 rounded-full" />

                    {/* Small index label */}
                    <span className="text-[10px] font-black tracking-[0.4em] text-white/25 uppercase mb-3 block">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Service name */}
                    <h3 className={cn(
                      'text-lg md:text-xl font-sans font-[600] text-white leading-snug tracking-tight group-hover:translate-x-1 transition-transform duration-300',
                      isRTL && 'text-right group-hover:-translate-x-1'
                    )}>
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* Who We Work With */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-600/[0.04] blur-[120px] rounded-full pointer-events-none" />

          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative">

            {/* Curved background container */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                borderRadius: '50px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                background: 'linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 70%, #000000 100%)',
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-32 z-0 pointer-events-none"
              style={{
                borderBottomLeftRadius: '150px',
                borderBottomRightRadius: '150px',
                background: 'linear-gradient(to bottom, transparent, #000)',
              }}
            />

            <div className="relative z-10 py-16">

              {/* Section Header */}
              <div className="flex flex-col items-center text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/50 text-xs font-sans font-medium tracking-widest uppercase">
                    Industries
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] font-sans font-[600] tracking-tight leading-[1.1] text-white max-w-3xl"
                >
                  {(() => {
                    const words = content.whoWeWorkWith.title.split(' ');
                    const italic = words.slice(-2).join(' ');
                    const rest = words.slice(0, -2).join(' ');
                    return <>{rest} <span className="font-serif italic font-normal">{italic}</span></>;
                  })()}
                </motion.h2>
              </div>

              {/* Industry tags — responsive wrapping pill grid */}
              <div className="flex flex-wrap justify-center gap-4">
                {content.whoWeWorkWith.items.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 16 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group relative"
                  >
                    <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-400 cursor-default overflow-hidden">
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(99,68,245,0.08), transparent 70%)' }}
                      />
                      {/* Dot accent */}
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-blue-400/70 transition-colors duration-400 shrink-0 relative z-10" />
                      <span className={cn(
                        'font-sans font-[500] text-white/60 group-hover:text-white text-sm md:text-base tracking-tight transition-colors duration-400 relative z-10 whitespace-nowrap',
                        isRTL && 'text-right'
                      )}>
                        {item}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>






        <CTASection
          title={content.cta.title}
          subtitle={content.cta.subtitle}
        />
      </>
    );
  }

  // Locations Index Page 
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full flex flex-col justify-end overflow-hidden bg-[#0A0A0A]">
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
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(59,130,246,0.12),transparent)] z-10" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pb-20 pt-44 md:pt-48 flex flex-col items-center gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs font-sans font-medium tracking-widest uppercase mb-10"
            >
              <GlobeIcon className="w-3.5 h-3.5" />
              {t.locations.badge || "Global Presence"}
            </motion.div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-sans font-[600] tracking-tight leading-[1.05] text-white mb-10">
              {t.locations.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="font-serif italic font-normal text-white/90">
                {t.locations.title.split(' ').at(-1)}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-sans mt-4">
              {t.locations.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Globe Component - Bottom Centered */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[70%] w-full max-w-[1200px] aspect-square z-[999] opacity-90 pointer-events-none">
          <Globe config={GLOBE_CONFIG} />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Locations Grid */}
      <section className="bg-[#000] py-24 md:py-32 overflow-hidden relative">
        {/* Background Accent Gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10 rounded-full" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-white/20" />
                <span className="text-xs text-white/40 uppercase tracking-[0.3em] font-medium">
                  {t.locations.badge || 'Our Locations'}
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white mb-6">
                {t.locations.locationsGridTitle
                  ? <>
                    {t.locations.locationsGridTitle.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="font-serif italic font-normal">{t.locations.locationsGridTitle.split(' ').slice(-1)[0]}</span>
                  </>
                  : <>
                    Global{' '}<span className="font-serif italic font-normal">Presence</span>
                  </>
                }
              </h2>
            </div>
          </motion.div>

          {/* 2x2x2 Grid — all 6 regions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <LocationGridCard
                key={region.key}
                region={region}
                index={index}
                language={language}
                viewBtn={t.locations.locationsGridItemBtn || 'View Location'}
                regionLabel={t.locations.regions[region.key as keyof typeof t.locations.regions]}
                isRTL={isRTL}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver Projects Globally */}
      {t.locations.howWeWork && (
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Ambient top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/[0.05] blur-[120px] rounded-full pointer-events-none" />

          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/50 text-xs font-sans font-medium tracking-widest uppercase">
                  Our Process
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] font-sans font-[600] tracking-tight leading-[1.1] text-white max-w-3xl"
              >
                {(() => {
                  const title = t.locations.howWeWork.title as string;
                  const words = title.split(' ');
                  const last = words.at(-1) ?? '';
                  const rest = words.slice(0, -1).join(' ');
                  return <>{rest} <span className="font-serif italic font-normal">{last}</span></>;
                })()}
              </motion.h2>
            </div>

            {/* TracingBeam wraps the steps */}
            <TracingBeam className="px-6">
              <div className="max-w-2xl mx-auto relative">
                {t.locations.howWeWork.items.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="mb-16 last:mb-0 group"
                  >
                    {/* Step badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-black tracking-[0.4em] text-white/40 uppercase mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 inline-block" />
                      Step {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Card */}
                    <div className="relative bg-white/[0.02] border border-white/[0.07] rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.04]">
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at 10% 50%, rgba(99,68,245,0.08), transparent 70%)' }}
                      />

                      {/* Large watermark number */}
                      <span className="absolute bottom-4 right-6 text-[6rem] font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none pointer-events-none leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* Accent line */}
                      <div className="w-8 h-[2px] bg-gradient-to-r from-blue-400/50 to-purple-500/50 group-hover:w-20 transition-all duration-500 mb-6 rounded-full" />

                      <h3 className="text-xl md:text-2xl font-sans font-[600] text-white tracking-tight mb-3 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-white/45 text-base leading-relaxed font-sans group-hover:text-white/65 transition-colors duration-500 relative z-10 max-w-lg">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TracingBeam>

          </div>
        </section>
      )}

      {/* Digital Services We Provide */}
      {t.locations.servicesWeProvide && (
        <section className="py-28 bg-black relative overflow-hidden">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative">

            {/* Curved faded background container */}
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/[0.04] blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Content */}
            <div className="relative z-10 py-16">

              {/* Section Header */}
              <div className="flex flex-col items-center text-center mb-20">

                {/* Pill badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/8 border border-white/10 text-white/50 text-xs font-sans font-medium tracking-widest uppercase">
                    What We Offer
                  </span>
                </motion.div>

                {/* Mixed-font heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] font-sans font-[600] tracking-tight leading-[1.1] text-white mb-4 max-w-3xl"
                >
                  {(() => {
                    const title = t.locations.servicesWeProvide.title as string;
                    const lastWord = title.split(' ').at(-1) ?? '';
                    const rest = title.split(' ').slice(0, -1).join(' ');
                    return <>{rest} <span className="font-serif italic font-normal">{lastWord}</span></>;
                  })()}
                </motion.h2>
              </div>

              {/* Numbered service cards — 2 columns × 3 rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.locations.servicesWeProvide.items.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative group bg-white/[0.02] border border-white/[0.07] rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-white/15 hover:bg-white/[0.04]"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.07), transparent 65%)' }}
                    />

                    {/* Large watermark number */}
                    <span className="absolute top-4 right-6 text-[5rem] font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none pointer-events-none leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Accent bar */}
                    <div className="w-8 h-[2px] bg-white/20 group-hover:w-16 group-hover:bg-blue-400/60 transition-all duration-500 mb-6 rounded-full" />

                    {/* Small index label */}
                    <span className="text-[10px] font-black tracking-[0.4em] text-white/25 uppercase mb-3 block">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Service name */}
                    <h3 className={cn(
                      'text-lg md:text-xl font-sans font-[600] text-white leading-snug tracking-tight group-hover:translate-x-1 transition-transform duration-400',
                      isRTL && 'text-right group-hover:-translate-x-1'
                    )}>
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}



      <CTASection
        title={t.locations.cta?.title || "Ready to Work with a Global Digital Partner?"}
        subtitle={t.locations.cta?.subtitle || "Let’s discuss how we can support your business—wherever you’re located."}
      />
    </>
  );
};

export default Locations;

function LocationGridCard({
  region,
  index,
  language,
  viewBtn,
  regionLabel,
  isRTL,
}: {
  region: { key: string; flag: string; slug: string; cities: string[] };
  index: number;
  language: string;
  viewBtn: string;
  regionLabel: string;
  isRTL: boolean;
}) {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const updateTime = () => {
      const tz = TIME_ZONES[region.key] || 'UTC';
      const formatted = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: tz,
      }).format(new Date());
      setTime(formatted);
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, [region.key]);

  const flagSrc = FLAG_MAP[region.key];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col p-10 shadow-2xl transition-colors duration-500 group"
      style={{ minHeight: '420px' }}
    >
      {/* Halftone overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '8px 8px' }}
      />

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.08), transparent 70%)' }}
      />

      {/* Top: Flag + Live Time */}
      <div className="flex items-center justify-between mb-auto relative z-10">
        {flagSrc ? (
          <div className="relative w-14 h-9 rounded-lg overflow-hidden ring-1 ring-white/10 shadow-xl">
            <Image src={flagSrc} alt={regionLabel} fill className="object-cover" />
          </div>
        ) : (
          <span className="text-4xl">{region.flag}</span>
        )}

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase">{time}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 relative z-10 flex-1 flex flex-col">
        <span className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-4 block">
          {region.key.toUpperCase()}
        </span>
        <h3 className="text-3xl font-bold tracking-tight text-white mb-4 group-hover:translate-x-1 transition-transform duration-500">
          {regionLabel}
        </h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {region.cities.map((city, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-white/50 capitalize"
            >
              {city.replace(/-/g, ' ')}
            </span>
          ))}
        </div>

        {/* View Location Button */}
        <div className="mt-auto">
          <Link
            href={`/${language}/locations/${region.slug}`}
            className={cn(
              'inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 relative overflow-hidden group/btn',
              isRTL && 'flex-row-reverse'
            )}
          >
            {viewBtn}
            <ArrowRight className={cn('w-4 h-4 transition-transform group-hover/btn:translate-x-1', isRTL && 'rotate-180')} />
          </Link>
        </div>
      </div>

      {/* Decorative watermark SVG (Eiffel Tower / generic landmark shape) */}
      <div className="absolute bottom-0 right-0 w-48 h-80 -mb-16 -mr-8 pointer-events-none z-0 opacity-[0.05]">
        <svg viewBox="0 0 100 200" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0 L52 80 L70 200 L30 200 L48 80 Z M44 60 L56 60 L56 68 L44 68 Z M38 110 L62 110 L64 120 L36 120 Z" />
        </svg>
      </div>
    </motion.div>
  );
}

