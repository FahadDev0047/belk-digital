"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  button?: string;
  buttonSecondary?: string;
}

export function CTASection({ title, subtitle, button, buttonSecondary }: CTASectionProps) {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden transition-colors duration-300">
      {/* Background Video - Full Section */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4"
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-0" />

      {/* Background Pattern - Moved to Section Level */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#000] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#000] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              {title || t.cta.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              {subtitle || "Let's discuss how we can help you achieve your digital goals and create an exceptional online presence."}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${language}/contact`}
                className="group inline-flex items-center gap-2 bg-[#cfff71] text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-[#b8e65f] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(207,255,113,0.3)]"
              >
                {button || t.cta.button}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${language}/services`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all border-white/30"
              >
                {buttonSecondary || t.hero.ctaSecondary}
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
