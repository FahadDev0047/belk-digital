"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const SPANS = [
    "md:col-span-7",
    "md:col-span-5",
    "md:col-span-5",
    "md:col-span-7"
];

const ASPECT_RATIOS = [
    "aspect-[16/10]",
    "aspect-[4/3]",
    "aspect-[4/3]",
    "aspect-[16/10]"
];

export function ProjectsSection() {
    const { language, t } = useLanguage();
    const projects = t.homeProjects.items;

    return (
        <section className="bg-bg py-24 md:py-32">
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
                            <span className="text-xs text-white/40 uppercase tracking-[0.3em] font-medium">{t.homeProjects.badge}</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white mb-6">
                            {t.homeProjects.titlePart1} <span className="font-serif italic font-normal">{t.homeProjects.titlePart2}</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-lg">
                            {t.homeProjects.subtitle}
                        </p>
                    </div>
                    
                    <Link 
                        href={`/${language}/work`}
                        className="hidden md:inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/10 text-sm font-semibold text-white hover:border-transparent transition-all relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity accent-gradient -z-10" />
                        <div className="absolute inset-[1px] rounded-full bg-black -z-10" />
                        
                        {t.homeProjects.explore}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
                    {projects.map((project: any, index: number) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            span={SPANS[index % 4]} 
                            aspect={ASPECT_RATIOS[index % 4]} 
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, span, aspect, index }: { project: any, span: string, aspect: string, index: number }) {
    const { t, language } = useLanguage();
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
                "group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer",
                span,
                aspect
            )}
        >
            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Halftone Overlay */}
            <div className="absolute inset-0 halftone-pattern opacity-20 mix-blend-multiply transition-opacity group-hover:opacity-5" />

            {/* Hover State: Glassmorphic Transition */}
            <Link 
                href={`/${language}/work`}
                className="absolute inset-0 bg-bg/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6 z-20"
            >
                {/* Pill Label with Animated Border */}
                <div className="relative p-[1px] rounded-full overflow-hidden scale-90 group-hover:scale-100 transition-transform duration-500">
                    {/* Rotating/Animated Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-gradient-shift accent-gradient -z-10" />
                    
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 px-10 py-5 rounded-full flex items-center shadow-2xl">
                        <span className="text-white text-sm font-semibold tracking-tight whitespace-nowrap">
                            {t.homeProjects.cardView} — <span className="font-serif italic font-normal tracking-wide">{project.title}</span>
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
