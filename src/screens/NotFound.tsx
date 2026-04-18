"use client";
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { Home, ArrowLeft } from 'lucide-react';

import { cn } from '@/lib/utils';

const NotFound = () => {
    const { language, isRTL } = useLanguage();

    return (
        <>


            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-warm/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cool/5 rounded-full blur-3xl" />
                </div>

                <div className={cn("container-wide text-center px-4", isRTL && "rtl")}>
                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className="text-[150px] md:text-[250px] font-display font-bold leading-none bg-gradient-to-br from-accent-warm to-accent-cool bg-clip-text text-transparent">
                            404
                        </h1>
                    </div>

                    {/* Message */}
                    <div className="max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            {isRTL ? 'عذراً، الصفحة غير موجودة' : 'Oops! Page Not Found'}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            {isRTL
                                ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
                                : "The page you're looking for doesn't exist or has been moved."}
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href={`/${language}`}
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            <Home className="w-5 h-5" />
                            {isRTL ? 'العودة للرئيسية' : 'Go to Homepage'}
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="btn-outline inline-flex items-center gap-2"
                        >
                            <ArrowLeft className={cn("w-5 h-5", isRTL && "rotate-180")} />
                            {isRTL ? 'رجوع' : 'Go Back'}
                        </button>
                    </div>

                    {/* Helpful links */}
                    <div className="mt-16">
                        <p className="text-sm text-muted-foreground mb-4">
                            {isRTL ? 'أو تصفح هذه الصفحات المفيدة:' : 'Or browse these helpful pages:'}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href={`/${language}/services`}
                                className="text-sm text-accent-warm hover:underline"
                            >
                                {isRTL ? 'الخدمات' : 'Services'}
                            </Link>
                            <Link
                                href={`/${language}/about`}
                                className="text-sm text-accent-warm hover:underline"
                            >
                                {isRTL ? 'من نحن' : 'About Us'}
                            </Link>
                            <Link
                                href={`/${language}/contact`}
                                className="text-sm text-accent-warm hover:underline"
                            >
                                {isRTL ? 'اتصل بنا' : 'Contact'}
                            </Link>
                            <Link
                                href={`/${language}/faq`}
                                className="text-sm text-accent-warm hover:underline"
                            >
                                {isRTL ? 'الأسئلة الشائعة' : 'FAQ'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;

