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
    <section className="py-20 bg-[#000] dark:bg-[#1a1b1e]">
      <div className="container-wide">
        <div className="relative overflow-hidden bg-[#0D0D0D] dark:bg-[#1a1b1e] rounded-[40px] px-8 py-16 lg:px-16 lg:py-24">

          {/* Background FAQ Watermark */}
          <div className="pointer-events-none absolute top-[50%] left-[5%] -translate-y-[50%] select-none z-0">
            <span className="text-[180px] sm:text-[250px] lg:text-[400px] font-bold text-blue-600/20 dark:text-white/[0.03] leading-none tracking-tighter hover:text-white transition-colors duration-300">
              FAQ
            </span>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2d3342] dark:text-white mb-4">
                {t.faq.title}
              </h2>
              <p className="text-[#647084] dark:text-gray-400 text-lg mb-12">
                {t.faq.subtitle}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/60 dark:bg-black/20 shadow-sm rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <Phone className="w-5 h-5 text-[#2d3342] dark:text-white" />
                  </div>
                  <span className="text-[#2d3342] dark:text-gray-200 font-medium">+41 123 456 123</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/60 dark:bg-black/20 shadow-sm rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <Mail className="w-5 h-5 text-[#2d3342] dark:text-white" />
                  </div>
                  <span className="text-[#2d3342] dark:text-gray-200 font-medium">chris@fusioo.design</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {faqs.slice(0, 4).map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#FEFCFF] dark:bg-[#25262b] rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-6 flex items-start justify-between gap-4 text-left"
                  >
                    <div className="flex gap-6 items-start pr-4">
                      <span className="text-[#9ca3af] font-medium text-lg pt-0.5">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-[#2d3342] dark:text-white' : 'text-[#4b5563] dark:text-gray-300'} hover:text-[#2d3342] dark:hover:text-white`}>
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 mt-1 flex-shrink-0 text-[#9ca3af] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 ml-[46px] text-[#647084] dark:text-gray-400 leading-relaxed text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
