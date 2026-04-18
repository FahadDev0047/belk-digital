"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function ProcessSection() {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={cn("text-center max-w-3xl mx-auto mb-16", isRTL && "text-right")}
        >
          <span className="badge-accent mb-4 inline-block">{t.process.badge}</span>
          <h2 className="text-headline mb-4">{t.process.title}</h2>
          <p className="text-subtitle">{t.process.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.process.steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={cn(
                "relative bg-card rounded-2xl p-8 border border-border",
                isRTL && "text-right"
              )}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-accent-warm flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>

              <div className="text-5xl font-display font-bold text-muted/50 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
