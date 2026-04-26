"use client";
import { useState } from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = t.faq.items || [];

  return (
    <section className="relative py-24 md:py-32 bg-black transition-colors duration-300 overflow-hidden font-sans">
      {/* Background Image */}
      <img
        src="/assets/liq.png"
        alt="Liquid Background"
        className="absolute bottom-0 left-1/2 w-[250%] md:w-[150%] lg:w-[120vw] opacity-30 pointer-events-none z-0 mix-blend-screen -translate-x-1/2 translate-y-[15%]"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-[500] text-white mb-6 tracking-tight"
          >
            {t.faq.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            {t.faq.subtitle || "We are here to help you with any questions you may have. If you don't find what you need, please contact us at "}
            <a href="mailto:contact@belkdigital.com" className="text-white hover:underline transition-all">contact@belkdigital.com</a>
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`backdrop-blur-lg border border-white/[0.08] rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-white/[0.05]' : 'bg-black/20 hover:bg-white/[0.03]'}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-6 md:px-8 md:py-8 flex items-center gap-6 text-left focus:outline-none"
                >
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className={`text-lg md:text-xl font-[500] transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 pl-[72px] md:pl-[80px] text-gray-400 text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
