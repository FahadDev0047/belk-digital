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
    <section className="py-20 bg-[#000] dark:bg-[#1a1b1e] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#000] rounded-[50px] px-8 md:px-12 lg:px-16 py-16 md:py-20 overflow-hidden"
        >
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4"
          />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#cfff71] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cfff71] rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {title || t.cta.title}
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                {subtitle || "Let's discuss how we can help you achieve your digital goals and create an exceptional online presence."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={`/${language}/contact`}
                  className="inline-flex items-center gap-2 bg-[#cfff71] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#b8e65f] transition-all transform hover:scale-105"
                >
                  {button || t.cta.button}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href={`/${language}/services`}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  {buttonSecondary || t.hero.ctaSecondary}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div >
    </section >
  );
}
