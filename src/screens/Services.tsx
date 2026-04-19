"use client";
import Image from 'next/image';
import { Globe } from "@/components/ui/globe";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { ArrowRight, Palette, RefreshCw, Fingerprint, Layout, Code, Search, Wrench, ShoppingBag, Database, Check, Target, Zap, Shield, Lightbulb, Globe as GlobeIcon } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';
import { ExpertiseSection } from '@/components/home/ExpertiseSection';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const serviceIcons: Record<string, any> = {
  'custom-web-design': Palette,
  'website-redesign': RefreshCw,
  'branding': Fingerprint,
  'ui-ux-design': Layout,
  'web-development': Code,
  'seo-optimization': Search,
  'maintenance': Wrench,
  'shopify-development': ShoppingBag,
  'custom-cms': Database,
};

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
  ],
};

const Services = () => {
  const { slug } = useParams();
  const { language, t, isRTL } = useLanguage();

  const serviceSlug = Array.isArray(slug) ? slug[0] : slug;

  if (serviceSlug) {
    const service = t.services.items.find((s: any) => s.slug === serviceSlug) as any;
    const Icon = serviceIcons[serviceSlug] || Palette;

    if (!service) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold mb-4 text-white">Service not found</h1>
            <Link href={`/${language}/services`} className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              {t.nav.services}
            </Link>
          </div>
        </div>
      );
    }

    const replacePlaceholders = (text: string, replacement: string) => {
      return text?.replace('{service}', replacement) || text;
    };

    return (
      <div className="bg-[#0A0A0A] min-h-screen text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-60 overflow-hidden min-h-[85vh] flex flex-col justify-end">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/service-detail-bg.webp"
              alt={service.title}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(59,130,246,0.12),transparent)] z-10" />
          </div>

          <div className="container-wide relative z-30 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={cn("max-w-4xl", isRTL && "mr-0 ml-auto text-right")}
            >
              <Link
                href={`/${language}/services`}
                className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group"
              >
                <ArrowRight className={cn("w-4 h-4 transition-transform group-hover:-translate-x-1", isRTL ? "" : "rotate-180")} />
                {t.nav.services}
              </Link>

              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                   <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs font-sans font-medium tracking-widest uppercase">
                  Service Detail
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-[600] tracking-tight leading-[1.1] mb-8 text-white">
                {(service?.detailTitle || service?.title).split(' ').slice(0, -2).join(' ')}{' '}
                <span className="font-serif italic font-normal text-white/90">
                  {(service?.detailTitle || service?.title).split(' ').slice(-2).join(' ')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed font-sans">
                {service?.detailSubtitle || service?.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who This Service Is For */}
        {service?.whoFor && (
          <section className="py-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="container-wide relative z-10">
              <h2 className={cn("text-3xl md:text-5xl font-sans font-[600] text-white mb-16", isRTL && "text-right")}>
                {t.services.common?.whoForTitle || "Who This Service Is For"}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.whoFor.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "group p-8 rounded-[32px] bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300",
                      isRTL && "text-right"
                    )}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-5 h-5 text-white/60 group-hover:text-white" />
                    </div>
                    <span className="font-sans font-medium text-lg text-white/80 group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* What's Included & Benefits */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-white/20" />
                  <h2 className={cn("text-3xl md:text-4xl font-sans font-[600] text-white", isRTL && "text-right")}>
                    {replacePlaceholders(t.services.common?.includesTitle || "What's Included", service.title)}
                  </h2>
                </div>
                <div className="space-y-4">
                  {service?.includes?.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        "flex items-center gap-5 p-6 bg-white/[0.02] backdrop-blur-sm rounded-[24px] border border-white/5 group hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300",
                        isRTL && "flex-row-reverse"
                      )}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                        <Check className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-sans text-lg text-white/70 group-hover:text-white transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-white/20" />
                  <h2 className={cn("text-3xl md:text-4xl font-sans font-[600] text-white", isRTL && "text-right")}>
                    {replacePlaceholders(t.services.common?.benefitsTitle || "Key Benefits", service.title)}
                  </h2>
                </div>
                <div className="space-y-4">
                  {service?.benefits?.map((benefit: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        "flex items-center gap-5 p-6 bg-white/[0.05] rounded-[24px] border border-white/10 group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300",
                        isRTL && "flex-row-reverse"
                      )}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-sans font-medium text-lg text-white group-hover:text-white">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        {service?.whyChoose && (
          <section className="py-32 relative overflow-hidden">
            <div className="container-wide relative z-10">
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-6 block">
                   Premium Quality
                </span>
                <h2 className="text-4xl md:text-6xl font-sans font-[600] text-white">
                  {replacePlaceholders(t.services.common?.whyChooseTitle || "Why Choose Us", service.title)}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {service.whyChoose.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-500 relative overflow-hidden group",
                      isRTL && "text-right"
                    )}
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] -mr-32 -mt-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <h3 className="text-2xl font-sans font-[600] mb-6 text-white group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed text-lg group-hover:text-white/70 transition-colors font-sans">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process Detail Component */}
        {service?.process && (
          <section className="py-32 relative overflow-hidden bg-black/20">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24 max-w-3xl mx-auto"
              >
                <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-6 block">
                  How We Deliver
                </span>
                <h2 className="text-4xl md:text-6xl font-sans font-[600] text-white mb-8">
                  {replacePlaceholders(t.services.common?.processTitle || "Our Process", service.title)}
                </h2>
                <p className="text-xl text-white/50 font-sans">
                  A high-fidelity methodology designed for world-class results
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.process.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn("relative group h-full", isRTL && "text-right")}
                  >
                    <div className="relative h-full bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-[32px] p-10 hover:border-white/20 transition-all duration-500 flex flex-col group">
                      <div className="absolute top-6 right-8 text-[6rem] font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none select-none font-sans leading-none">
                        0{index + 1}
                      </div>

                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:bg-white/10 transition-all duration-500">
                        <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{String(index + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="relative z-10 mt-auto">
                        <h3 className="font-sans font-[600] text-2xl text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/50 leading-relaxed text-base group-hover:text-white/80 transition-colors font-sans">
                          {item.description}
                        </p>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-b-[32px]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Growth Support */}
        {service?.growthSupport && (
          <section className="py-40 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] aspect-square bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
            <div className="container-wide text-center max-w-5xl mx-auto relative z-10">
               <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-10 border border-white/10">
                   <GlobeIcon className="w-10 h-10 text-white/40" />
                </div>
                <h2 className="text-4xl md:text-7xl font-sans font-[600] mb-12 text-white tracking-tight">
                  {t.services.common?.growthTitle || "How This Supports Growth"}
                </h2>
              </motion.div>
              <p className="text-2xl md:text-3xl leading-relaxed text-white/50 font-serif italic mx-auto max-w-4xl">
                "&quot;{service.growthSupport}&quot;"
              </p>
            </div>
          </section>
        )}

        <CTASection
          title={replacePlaceholders(t.services.common?.ctaTitle, service.title)}
          subtitle={t.services.common?.ctaSubtitle}
        />
      </div>
    );
  }

  // Services listing page
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
          {/* Subtle radial glow that echoes the blue light */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(59,130,246,0.12),transparent)] z-10" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pb-20 pt-40 md:pt-44 flex flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-sans font-[600] text-white mb-8 tracking-tight leading-[1.1]">
              {t.services.heroPart1}{' '}
              <span className="font-serif italic font-normal text-white/90">{t.services.heroItalic}</span>{' '}
              {t.services.heroPart2}
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t.services.heroSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Globe Component - Bottom Centered */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[70%] w-full max-w-[1200px] aspect-square z-999 opacity-90 pointer-events-none">
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

      <ExpertiseSection />

      {/* What We Cover — Values-style */}
      {t.services.whatWeCover && (() => {
        const coverIcons = [Lightbulb, Target, Zap, Shield];
        const coverAnimations = [
          { animate: { rotate: 360 }, transition: { duration: 8, repeat: Infinity, ease: 'linear' as const } },
          { animate: { scale: [1, 1.18, 1] }, transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const } },
          { animate: { y: [0, -8, 0] }, transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' as const } },
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

              {/* Content on top of the card */}
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
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs font-sans font-medium tracking-widest uppercase">
                      What We Cover
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
                    {t.services.whatWeCover.title.split('&')[0].trim()
                      ? <>
                        {t.services.whatWeCover.title.split('Cover')[0].trim()}{' '}
                        <span className="font-serif italic font-normal">
                          Cover
                        </span>
                      </>
                      : t.services.whatWeCover.title
                    }
                  </motion.h2>
                </div>

                {/* Icon Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                  {t.services.whatWeCover.items.map((item: any, index: number) => {
                    const Icon = coverIcons[index % coverIcons.length];
                    const anim = coverAnimations[index % coverAnimations.length];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center gap-5"
                      >
                        {/* Animated Icon */}
                        <motion.div
                          animate={anim.animate}
                          transition={anim.transition}
                        >
                          <Icon className="w-20 h-20 text-white" strokeWidth={1.25} />
                        </motion.div>

                        {/* Title */}
                        <h3 className="font-sans font-[600] text-white text-xl tracking-tight leading-snug">
                          {item.title}
                        </h3>

                        {/* Description */}
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
        );
      })()}


      {/* Who Our Services Are For */}
      {t.services.whoFor && (
        <section className="py-24 bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center">
          <div className="container-wide w-full mb-12">
            <h2 className={cn("text-[2.8rem] sm:text-[3.8rem] md:text-[4.5rem] font-sans font-[600] tracking-tight leading-[1.1] text-white text-center")}>
              {t.services.whoFor.title.split(' ').length > 1 ? (
                <>
                  {t.services.whoFor.title.split(' ').slice(0, -2).join(' ')}{' '}
                  <span className="font-serif italic font-normal">
                    {t.services.whoFor.title.split(' ').slice(-2).join(' ')}
                  </span>
                </>
              ) : t.services.whoFor.title}
            </h2>
          </div>
          <div className="w-full relative flex flex-col items-center justify-center antialiased">
            <InfiniteMovingCards
              items={t.services.whoFor.items.map((item: any) => ({
                quote: item.description,
                name: item.title,
                title: "", // We don't have a 3rd field in our data
              }))}
              direction="right"
              speed="slow"
            />
          </div>
        </section>
      )}


      <CTASection
        title={t.services.cta?.title}
        subtitle={t.services.cta?.subtitle}
        button={t.services.cta?.button}
        buttonSecondary={t.services.cta?.buttonSecondary}
      />
    </>
  );
};

export default Services;
