"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { Award, Users, Globe, BarChart3, Shield, CheckCircle2 } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';

const Work = () => {
    const { t, isRTL } = useLanguage();

    const stats = [
        { value: '50+', label: t.hero.stats.projects, icon: Award },
        { value: '300+', label: t.hero.stats.clients, icon: Users },
        { value: '45+', label: t.hero.stats.countries, icon: Globe },
        { value: '98%', label: t.trust.items[1].label, icon: BarChart3 },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-muted/50 via-background to-background">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={cn("max-w-4xl text-center mx-auto", isRTL && "text-right")}
                    >
                        <span className="badge-accent mb-4 inline-block">{t.work.badge}</span>
                        <h1 className="text-display mb-6 text-4xl md:text-5xl lg:text-6xl">
                            {t.work.title}{' '}
                            <span className="hero-text-gradient">{t.work.titleHighlight}</span>
                        </h1>
                        <p className="text-subtitle text-xl md:text-2xl text-muted-foreground">
                            {t.work.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding pt-0">
                <div className="container-wide">
                    {t.work.statsTitle && (
                        <h2 className="text-3xl font-display font-bold text-center mb-10">{t.work.statsTitle}</h2>
                    )}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/20 transition-colors"
                            >
                                <stat.icon className="w-10 h-10 text-accent-warm mx-auto mb-4" />
                                <div className="text-4xl font-display font-bold mb-2">{stat.value}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Case Studies (New Section) */}
            <section className="section-padding bg-muted/30">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn("text-center max-w-3xl mx-auto mb-16", isRTL && "text-right")}
                    >
                        <h2 className="text-headline mb-4">{t.work.caseStudies?.title || 'Featured Case Studies'}</h2>
                        {/* Filter Labels */}
                        <div className="flex flex-wrap justify-center gap-2 mt-6">
                            {(t.work.caseStudies?.filters || []).map((filter: string, index: number) => (
                                <span key={index} className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground">
                                    {filter}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Placeholder Grid for Case Studies */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-card rounded-xl overflow-hidden border border-border group cursor-pointer hover:shadow-lg transition-all">
                                <div className="h-48 bg-muted w-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-semibold text-accent-warm mb-2 uppercase tracking-wide">
                                        Case Study
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Global Digital Project</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Delivering measurable growth and outcome-based results for a global partner.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="section-padding">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn("text-center max-w-3xl mx-auto mb-16", isRTL && "text-right")}
                    >
                        <span className="badge-accent mb-4 inline-block">{t.work.methodologyBadge}</span>
                        <h2 className="text-headline mb-4">{t.work.methodologyTitle}</h2>
                        <p className="text-subtitle">
                            {t.work.methodologySubtitle}
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {t.work.methodology.map((item: { title: string, description: string }, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "flex gap-6 items-start bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-colors",
                                    isRTL && "flex-row-reverse text-right"
                                )}
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent-warm/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-accent-warm font-bold">{String(index + 1).padStart(2, '0')}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                                    <p className="text-body">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="section-padding bg-muted/30">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn("text-center max-w-3xl mx-auto mb-16", isRTL && "text-right")}
                    >
                        <span className="badge-accent mb-4 inline-block">{t.work.industriesBadge}</span>
                        <h2 className="text-headline mb-4">{t.work.industriesTitle}</h2>
                        <p className="text-subtitle">
                            {t.work.industriesSubtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {t.work.industries.map((industry: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={cn(
                                    "flex items-center gap-3 bg-card rounded-xl p-4 border border-border hover:shadow-sm transition-shadow",
                                    isRTL && "flex-row-reverse"
                                )}
                            >
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                                <span className="font-medium text-sm">{industry}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Statement */}
            <section className="section-padding hero-gradient text-primary-foreground">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
                        <h2 className="text-headline mb-6">{t.work.trust.title}</h2>
                        {/* Micro Proof Line */}
                        {t.work.trust.subtitle && (
                            <p className="text-lg text-primary-foreground/90 mb-4 font-medium italic">
                                "&quot;{t.work.trust.subtitle}&quot;"
                            </p>
                        )}
                        <p className="text-xl text-primary-foreground/80 mb-8">
                            {t.work.trust.body}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
                            {t.work.trust.items.map((item: string, index: number) => (
                                <span key={index}>✓ {item}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Clients Choose Us Again (New Section) */}
            {t.work.whyAgain && (
                <section className="section-padding">
                    <div className="container-wide">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-16"
                        >
                            <h2 className="text-headline mb-4">{t.work.whyAgain.title}</h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {t.work.whyAgain.items.map((item: any, index: number) => (
                                <div key={index} className={cn("p-6 rounded-xl bg-card border border-border flex flex-col gap-3", isRTL && "text-right")}>
                                    <h3 className="text-xl font-bold text-accent-warm">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            <CTASection
                title={t.work.cta?.title || "Ready to Build Results Like These for Your Business?"}
                subtitle={t.work.cta?.subtitle || "Let’s discuss how we can deliver measurable growth for your digital initiatives."}
            />
        </>
    );
};

export default Work;
