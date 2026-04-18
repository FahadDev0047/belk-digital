"use client";

import { motion } from 'framer-motion';
import { FileText, CheckCircle, XCircle, Scale, AlertTriangle, RefreshCw, CreditCard, Ban } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

const iconMap = {
    acceptance: FileText,
    servicesUsage: CheckCircle,
    intellectualProperty: Scale,
    payment: CreditCard,
    refund: RefreshCw,
    liability: XCircle,
    prohibited: Ban,
    warranties: AlertTriangle,
};

export default function Terms() {
    const { language, t, isRTL } = useLanguage();

    const sections: { icon: any; title: string; content: string[] }[] = Object.entries(t.terms.sections).map(([key, section]: [string, any]) => ({
        icon: iconMap[key as keyof typeof iconMap],
        title: section.title,
        content: section.items,
    }));

    return (
        <>
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-background via-background to-muted pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

                    <div className="container-wide relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className={cn("text-center max-w-3xl mx-auto", isRTL && "text-right")}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-warm/10 mb-6">
                                <Scale className="w-5 h-5 text-accent-warm" />
                                <span className="text-sm font-medium text-accent-warm">{t.terms.badge}</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
                                {t.terms.title} <span className="text-accent-warm">{t.terms.titleHighlight}</span>
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                {t.terms.subtitle}
                            </p>

                            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span>{t.terms.lastUpdated}</span>
                                <span>•</span>
                                <span>{t.terms.effectiveDate}</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="section-padding">
                    <div className="container-wide">
                        <div className="grid gap-8 lg:gap-12">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-accent-warm/50 transition-colors"
                                >
                                    <div className={cn("flex items-start gap-4 mb-6", isRTL && "flex-row-reverse")}>
                                        <div className="w-12 h-12 rounded-xl bg-accent-warm/10 flex items-center justify-center flex-shrink-0">
                                            <section.icon className="w-6 h-6 text-accent-warm" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-display font-bold">{section.title}</h2>
                                    </div>

                                    <ul className={cn("space-y-4", isRTL && "text-right")}>
                                        {section.content.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-warm mt-2 flex-shrink-0" />
                                                <p className="text-muted-foreground leading-relaxed">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Agreement Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 bg-gradient-to-br from-accent-warm/10 to-accent-warm/5 border border-accent-warm/20 rounded-2xl p-8 md:p-10"
                        >
                            <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse")}>
                                <FileText className="w-8 h-8 text-accent-warm flex-shrink-0" />
                                <div>
                                    <h2 className="text-2xl font-display font-bold mb-3">{t.terms.governing.title}</h2>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {t.terms.governing.description}
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.terms.governing.description2}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
