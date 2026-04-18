"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Globe, Cpu, Handshake } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { HoverEffect } from '../ui/card-hover-effect';

const icons = [Target, Globe, Cpu, Handshake];

export function WhyChooseSection() {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#FEFCFF] dark:bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={cn("text-center max-w-3xl mx-auto mb-16", isRTL && "text-right")}
        >
          <span className="badge-accent mb-4 inline-block">{t.whyChoose.badge}</span>
          <h2 className="text-headline mb-4">{t.whyChoose.title}</h2>
          <p className="text-subtitle">{t.whyChoose.subtitle}</p>
        </motion.div>

        <HoverEffect
          items={t.whyChoose.features.map((feature: any, index: number) => ({
            title: feature.title,
            description: feature.description,
            icon: icons[index]
          }))}
        />
      </div>
    </section>
  );
}
