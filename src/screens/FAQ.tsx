"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { ChevronDown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CTASection } from '@/components/home/CTASection';
import { getFAQData } from '@/i18n/faqData';

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
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/50 via-background to-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn("max-w-3xl text-center mx-auto", isRTL && "text-right")}
          >
            <span className="badge-accent mb-4 inline-block">{t.faq.badge}</span>
            <h1 className="text-display mb-6">{t.faq.title}</h1>
            <p className="text-subtitle mb-8">{t.faq.subtitle}</p>

            {/* Search */}
            <div className="relative max-w-md mx-auto group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-accent-warm transition-colors z-10" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="pl-12 h-12 rounded-full border-2 border-border/50 bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 focus-visible:ring-offset-0 focus-visible:border-accent-warm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className={cn(
                "text-2xl font-display font-semibold mb-6 pb-4 border-b border-border",
                isRTL && "text-right"
              )}>
                {category.name}
              </h2>

              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const key = `${catIndex}-${index}`;
                  return (
                    <div
                      key={key}
                      className="bg-card rounded-xl border border-border overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className={cn(
                          "w-full px-6 py-4 flex items-center justify-between gap-4 text-left",
                          isRTL && "flex-row-reverse text-right"
                        )}
                      >
                        <span className="font-medium">{item.q}</span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                            openItems[key] && "rotate-180"
                          )}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openItems[key] ? 'auto' : 0,
                          opacity: openItems[key] ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={cn(
                          "px-6 pb-4 text-body",
                          isRTL && "text-right"
                        )}>
                          {item.a}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default FAQ;
