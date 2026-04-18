"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export function JournalSection() {
    const { language, t } = useLanguage();

    const articles = [
        {
            title: t.homeJournal.articles[0].title,
            image: "/images/journal/journal_1.png",
            link: `/${language}/blog`,
        },
        {
            title: t.homeJournal.articles[1].title,
            image: "/images/journal/journal_2.png",
            link: `/${language}/blog`,
        },
        {
            title: t.homeJournal.articles[2].title,
            image: "/images/journal/journal_3.png",
            link: `/${language}/blog`,
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-black transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
                {/* Header */}
                <div className="flex justify-between items-end mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold text-white tracking-tight leading-[1.1]">
                            {t.homeJournal.title}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href={`/${language}/blog`}
                            className="group flex items-center gap-2 px-6 py-2 rounded-full border border-white text-white font-bold text-sm hover:bg-white hover:text-black transition-all duration-300 uppercase"
                        >
                            {t.homeJournal.blog}
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group relative aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer"
                        >
                            <Link href={article.link} className="block w-full h-full">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                                    <h3 className="text-white text-2xl md:text-3xl font-bold leading-[1.15] max-w-[90%] transition-transform duration-500 group-hover:translate-y-[-4px]">
                                        {article.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
