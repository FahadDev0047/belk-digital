"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Palette, RefreshCw, Fingerprint, Layout, Code, Search, Wrench, ShoppingBag, Database } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { HoverEffect } from '../ui/card-hover-effect';

const icons = [Palette, RefreshCw, Fingerprint, Layout, Code, Search, Wrench, ShoppingBag, Database];

export function ServicesSection() {
  const { language, t, isRTL } = useLanguage();
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
          <span className="badge-accent mb-4 inline-block">{t.services.badge}</span>
          <h2 className="text-headline mb-4">{t.services.title}</h2>
          <p className="text-subtitle">{t.services.subtitle}</p>
        </motion.div>

        <HoverEffect
          items={t.services.items.map((service: any, index: number) => ({
            title: service.title,
            description: service.description,
            icon: icons[index],
            link: `/${language}/services/${service.slug}`
          }))}
          className="lg:grid-cols-3"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href={`/${language}/services`}
            className="btn-outline inline-flex items-center gap-2"
          >
            {t.services.viewAll}
            <ArrowRight className={cn("w-4 h-4", isRTL && "rotate-180")} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
