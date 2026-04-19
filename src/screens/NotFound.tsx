"use client";

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { Home, ArrowLeft, Ghost, Globe, Search, MessageSquare, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const NotFound = () => {
    const { language, isRTL, t } = useLanguage();

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col relative overflow-hidden">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero/service-detail-bg.webp"
                    alt="Not Found Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(59,130,246,0.1),transparent)] z-10" />
            </div>

            <div className="container-wide flex-1 flex flex-col items-center justify-center relative z-20 pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative mb-12"
                >
                    <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
                    <h1 className="text-[180px] md:text-[300px] font-sans font-black leading-none text-white/5 select-none tracking-tighter">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                         <Ghost className="w-24 h-24 text-white/10" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center max-w-2xl mx-auto px-4"
                >
                    <h2 className="text-4xl md:text-6xl font-sans font-[600] tracking-tight mb-8">
                        {isRTL ? 'تائه في الفضاء؟' : 'Lost in '}
                        <span className="font-serif italic font-normal text-white/90">
                             {isRTL ? 'الرقمي' : 'Digital Space'}
                        </span>
                    </h2>
                    <p className="text-xl text-white/40 mb-16 leading-relaxed font-sans">
                        {isRTL
                            ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى عنوان جديد.'
                            : "The page you're looking for doesn't exist or has been moved to a new digital coordinates."}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href={`/${language}`}
                            className="group flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 transition-all active:scale-95"
                        >
                            <Home className="w-5 h-5" />
                            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="group flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                        >
                            <ArrowLeft className={cn("w-5 h-5 transition-transform group-hover:-translate-x-1", isRTL && "rotate-180")} />
                            {isRTL ? 'رجوع' : 'Go Back'}
                        </button>
                    </div>

                    {/* Quick Explore */}
                    <div className="mt-24 pt-16 border-t border-white/5">
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/20 mb-10">
                            {isRTL ? 'استكشف اتجاهات بديلة' : 'Explore alternative directions'}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {[
                                { label: isRTL ? 'الخدمات' : 'Services', href: `/${language}/services`, icon: Briefcase },
                                { label: isRTL ? 'من نحن' : 'About Us', href: `/${language}/about`, icon: Globe },
                                { label: isRTL ? 'الأسئلة الشائعة' : 'FAQ', href: `/${language}/faq`, icon: Search },
                                { label: isRTL ? 'اتصل بنا' : 'Contact', href: `/${language}/contact`, icon: MessageSquare }
                            ].map((page, index) => (
                                <Link
                                    key={index}
                                    href={page.href}
                                    className="px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 text-sm font-sans font-medium text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                                >
                                    <page.icon className="w-3.5 h-3.5" />
                                    {page.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
