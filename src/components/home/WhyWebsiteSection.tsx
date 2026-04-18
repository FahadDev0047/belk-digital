"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Shield, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

const icons = [Clock, Shield, Globe, TrendingUp];

export function WhyWebsiteSection() {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide">
        <div className={cn(
          "grid lg:grid-cols-2 gap-16 items-center",
          isRTL && "lg:grid-flow-dense"
        )}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={isRTL ? "lg:col-start-2" : ""}
          >
            <span className="badge-accent mb-4 inline-block">{t.whyWebsite.badge}</span>
            <h2 className={cn("text-headline mb-4", isRTL && "text-right")}>
              {t.whyWebsite.title}
            </h2>
            <p className={cn("text-subtitle mb-10", isRTL && "text-right")}>
              {t.whyWebsite.subtitle}
            </p>

            <div className="space-y-6">
              {t.whyWebsite.points.map((point: any, index: number) => {
                const Icon = icons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className={cn(
                      "flex gap-4",
                      isRTL && "flex-row-reverse text-right"
                    )}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{point.title}</h3>
                      <p className="text-body">{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "relative",
              isRTL ? "lg:col-start-1 lg:row-start-1" : ""
            )}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-warm/5 rounded-3xl" />

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 right-8 p-6 bg-card rounded-2xl shadow-large border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-20 bg-muted/50 rounded mt-4" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-12 -right-4 p-4 bg-card rounded-xl shadow-medium border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">+127%</div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 -left-4 p-4 bg-card rounded-xl shadow-medium border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-warm/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-accent-warm" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">24/7</div>
                    <div className="text-xs text-muted-foreground">Online</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
