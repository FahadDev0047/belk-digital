"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { ChevronDown, Search, HelpCircle, MessageCircle, Sparkles, Plus, Minus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CTASection } from '@/components/home/CTASection';
import { getFAQData } from '@/i18n/faqData';
import Image from 'next/image';

const FAQ = () => {
  const { t, language, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const faqData = getFAQData(language);

  const filteredCategories = faqData.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden min-h-[60vh] flex flex-col justify-center border-b border-white/5">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/service-detail-bg.webp"
            alt="FAQ Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(59,130,246,0.15),transparent)] z-10" />
        </div>

        <div className="container-wide relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={cn("max-w-4xl text-center mx-auto", isRTL && "text-right")}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs font-sans font-medium tracking-widest uppercase mb-8"
            >
              <HelpCircle className="w-3 h-3" />
              {t.faq.badge}
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-[600] tracking-tight leading-[1.1] mb-8 text-white">
              {t.faq.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="font-serif italic font-normal text-white/90">
                {t.faq.title.split(' ').at(-1)}
              </span>
            </h1>
            
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
              {t.faq.subtitle}
            </p>

            {/* Premium Search */}
            <div className="relative max-w-xl mx-auto group">
              <div className="absolute inset-0 bg-blue-600/20 blur-[40px] opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="relative flex items-center">
                <Search className="absolute left-6 w-5 h-5 text-white/30 group-focus-within:text-white transition-colors z-10" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search your questions..."
                  className={cn(
                    "pl-16 pr-6 h-16 rounded-full border-white/10 bg-white/[0.03] backdrop-blur-2xl text-white placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-white/30 transition-all duration-300 text-lg",
                    isRTL && "text-right pr-16 pl-6"
                  )}
                />
                <div className="absolute right-4 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Esc
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container-wide max-w-4xl relative z-10">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-20 last:mb-0"
            >
              <div className="flex items-center gap-6 mb-10">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white/40" />
                 </div>
                 <h2 className={cn(
                  "text-2xl md:text-3xl font-sans font-[600] text-white",
                  isRTL && "text-right"
                )}>
                  {category.name}
                </h2>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <div className="space-y-6">
                {category.questions.map((item, index) => {
                  const key = `${catIndex}-${index}`;
                  const isOpen = !!openItems[key];
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        "group rounded-[32px] border transition-all duration-500 overflow-hidden",
                        isOpen 
                          ? "bg-white/[0.05] border-white/20 shadow-2xl" 
                          : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                      )}
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className={cn(
                          "w-full px-8 py-8 flex items-center justify-between gap-6 text-left relative z-10",
                          isRTL && "flex-row-reverse text-right"
                        )}
                      >
                        <span className={cn(
                          "text-xl font-sans font-medium transition-colors duration-300",
                          isOpen ? "text-white" : "text-white/70 group-hover:text-white"
                        )}>
                          {item.q}
                        </span>
                        
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 shrink-0",
                          isOpen 
                            ? "bg-white text-black border-white rotate-180" 
                            : "bg-white/5 border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white"
                        )}>
                          <ChevronDown className="w-5 h-5 transition-transform" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                          >
                            <div className={cn(
                              "px-8 pb-10 text-lg leading-relaxed text-white/50 font-sans border-t border-white/5 pt-8 mx-8",
                              isRTL && "text-right"
                            )}>
                              {item.a}
                              
                              <div className="mt-8 flex items-center gap-3 text-sm text-white/20 font-bold uppercase tracking-widest">
                                 <MessageCircle className="w-4 h-4" />
                                 Was this helpful?
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/[0.02] rounded-[40px] border border-white/5"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                 <Search className="w-8 h-8 text-white/20" />
              </div>
              <p className="text-xl text-white/40 font-sans">No results found for “{searchQuery}”</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-6 text-white hover:underline underline-offset-8 font-bold uppercase tracking-widest text-xs"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default FAQ;
