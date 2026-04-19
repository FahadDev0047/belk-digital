"use client";
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Footer() {
  const { language, t, isRTL } = useLanguage();

  const footerData = t.footer;

  // We map the dictionary keys to ensure we follow the structure we added
  const columns = [
    { ...footerData.columns.pages, key: 'pages' },
    { ...footerData.columns.socials, key: 'socials' },
    { ...footerData.columns.legal, key: 'legal' },
    { ...footerData.columns.register, key: 'register' },
  ];

  return (
    <footer className="bg-[#030303] text-white pt-24 pb-12 overflow-hidden">
      <div className="container-wide">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-32 relative z-10">
          
          {/* Brand/Logo Column */}
          <div className="lg:col-span-1">
            <Link href={`/${language}`} className="flex items-center gap-3 mb-8 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                <img src="/logo.png" alt="Belk Digital" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold tracking-tight uppercase">Belk Digital</span>
            </Link>
            
            <p className="text-white/40 text-sm max-w-xs mb-8 leading-relaxed">
              {footerData.description}
            </p>

            <div className="text-xs text-white/30 font-medium uppercase tracking-widest pt-4 border-t border-white/5 inline-block">
              {footerData.copyright}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((column) => (
            <div key={column.key} className="flex flex-col">
              <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8 opacity-90">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link: any) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href.startsWith('http') ? link.href : `/${language}${link.href}`}
                      className="text-white/50 hover:text-white transition-all duration-300 text-[0.95rem] inline-block hover:translate-x-1"
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Huge Watermark */}
        <div className="mt-12 relative flex justify-center items-center pointer-events-none select-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
          >
            <h2 className="text-[17vw] leading-none font-black tracking-tighter text-center uppercase whitespace-nowrap"
                style={{ 
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255,255,255,0.03)',
                  textShadow: '0 0 30px rgba(255,255,255,0.01)'
                }}>
              Belk Digital
            </h2>
          </motion.div>
        </div>

        {/* Mobile Sub-Footer */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 lg:hidden">
           <p className="text-white/20 text-[10px] uppercase tracking-widest text-center">
             &copy; {new Date().getFullYear()} Belk Digital Industries
           </p>
        </div>
      </div>
    </footer>
  );
}
