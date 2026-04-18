"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { Counter } from '@/components/ui/counter';

export function TrustSection() {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding hero-gradient text-primary-foreground">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={cn("text-center max-w-3xl mx-auto mb-16", isRTL && "text-right")}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white/90 mb-4">
            {t.trust.badge}
          </span>
          <h2 className="text-headline mb-4 text-white">{t.trust.title}</h2>
          <p className="text-subtitle text-white/80">{t.trust.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.trust.items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 text-white transition-all duration-300 hover:text-[#cfff71] hover:scale-110 cursor-default inline-block">
                <Counter value={item.value} />
              </div>
              <div className="text-white/70 text-sm md:text-base">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
