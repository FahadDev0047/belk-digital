"use client";
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CenterTracingBeam } from '@/components/ui/center-tracing-beam';

interface ServiceItemProps {
    service: any;
    index: number;
    language: string;
    isRTL: boolean;
    total: number;
}

function ServiceRow({ service, index, language, isRTL, total }: ServiceItemProps) {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.4, margin: "-10% 0px -10% 0px" });

    const isLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={cn(
                "relative flex items-center w-full min-h-[320px] md:min-h-[440px] py-12 md:py-20",
            )}
        >
            <div className={cn(
                "w-full flex flex-col transition-all duration-700 ease-out",
                // Mobile base styles: full width, push content past the left beam
                "pl-[72px] sm:pl-20 items-start text-left",
                // Mobile animation
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",

                // Desktop styles:
                "md:w-1/2 md:pl-0",
                isLeft ? [
                    "md:items-end md:text-right md:mr-auto md:pr-20 lg:pr-28",
                    !isInView && "md:-translate-x-12"
                ] : [
                    "md:items-start md:text-left md:ml-auto md:pl-20 lg:pl-28",
                    !isInView && "md:translate-x-12"
                ]
            )}>
                <ServiceContent service={service} index={index} language={language} align={isLeft ? "right" : "left"} t={t} />
            </div>
        </div>
    );
}

function ServiceContent({
    service, index, language, align, t
}: { service: any; index: number; language: string; align: "left" | "right"; t: any }) {
    return (
        <>
            <span className="text-xs font-black text-white/25 tracking-[0.4em] uppercase mb-4 block">
                {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className={cn(
                "text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter leading-[0.95] mb-5",
            )}>
                {(service.shortTitle || service.title).split('\n').map((line: string, i: number) => (
                    <span key={i} className="block">{line}</span>
                ))}
            </h3>

            <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-xs mb-8">
                {service.description}
            </p>

            <Link
                href={service.link}
                className="group inline-flex items-center gap-2 text-white/70 text-sm font-semibold hover:text-white transition-colors"
            >
                {t.expertise.learnDetails}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
        </>
    );
}

export function ExpertiseSection() {
    const { language, t, isRTL } = useLanguage();
    const services = t.services.items;

    // Compute node positions: evenly spaced, alternating left/right
    // Each node y is the center of its row (1/(2n), 3/(2n), 5/(2n)…)
    const n = services.length;
    const nodes = services.map((_: any, i: number) => ({
        y: (2 * i + 1) / (2 * n),
        left: i % 2 === 0,
    }));

    return (
        <section className="relative bg-bg text-white py-40 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-32"
                >
                    <div className="w-16 h-px bg-white/40 mb-8" />
                    <span className="text-white/60 font-bold tracking-[0.4em] uppercase text-xs mb-6">
                        {t.services.badge}
                    </span>
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-[500] tracking-tighter text-white max-w-4xl leading-[0.85]">
                        {(() => {
                            const words = t.expertise.title.split(' ');
                            if (words.length <= 1) return t.expertise.title;
                            const italic = words.slice(-1).join(' ');
                            const rest = words.slice(0, -1).join(' ');
                            return <>{rest} <span className="font-serif italic font-normal">{italic}</span></>;
                        })()}
                    </h2>
                </motion.div>

                {/* Center Tracing Beam wraps all service rows */}
                <CenterTracingBeam nodes={nodes}>
                    <div className="flex flex-col relative">
                        {services.map((service: any, index: number) => (
                            <ServiceRow
                                key={index}
                                service={{
                                    ...service,
                                    link: `/${language}/services/${service.slug}`
                                }}
                                index={index}
                                language={language}
                                isRTL={isRTL}
                                total={n}
                            />
                        ))}
                    </div>
                </CenterTracingBeam>

            </div>
        </section>
    );
}
