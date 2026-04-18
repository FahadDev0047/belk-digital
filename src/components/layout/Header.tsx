"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages } from '@/lib/i18n-config';
import { useTheme } from "next-themes";
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ... (useEffect for body scroll remains the same)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: `/${language}`, label: t.nav.home },
    { href: `/${language}/about`, label: t.nav.about },
    { href: `/${language}/services`, label: t.nav.services },
    { href: `/${language}/work`, label: t.nav.work },
    { href: `/${language}/locations`, label: t.nav.locations },
    { href: `/${language}/blog`, label: t.nav.blog },
    { href: `/${language}/faq`, label: t.nav.faq },
    { href: `/${language}/contact`, label: t.nav.contact },
  ];

  const isActiveLink = (href: string) => {
    return pathname === href || pathname === href + '/';
  };

  const isHome = pathname === '/' || pathname === `/${language}` || pathname === `/${language}/`;

  const textColor = 'text-white';

  const textColorFaded = 'text-white/70';

  const navLinkColor = 'text-white';

  const navLinkHoverColor = 'hover:text-white';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          'pointer-events-auto border',
          isScrolled
            ? 'mt-6 bg-black/60 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-full py-3 px-3 border-white/10'
            : 'w-full bg-transparent border-transparent py-4 px-4'
        )}
        style={{
          width: isScrolled ? "auto" : "100%",
          maxWidth: isScrolled ? "none" : "100vw",
        }}
      >
        <motion.div layout className={cn(
          "flex items-center justify-between mx-auto",
          isScrolled ? "gap-8 pr-2 pl-2" : "container-wide"
        )}>
          {/* Logo */}
          <Link
            href={`/${language}`}
            prefetch={false}
            onClick={(e) => {
              // e.preventDefault(); // Next.js Link handles this
              // window.location.href = `/${language}`; // Avoid hard reload if possible
            }}
            className="relative z-50 flex items-center gap-2 pointer-events-auto"
          >
            <motion.img
              layout
              src="/logo.png"
              alt="CodeNovaX"
              className={cn(
                "transition-all duration-300 block",
                isScrolled ? "h-8" : "h-10"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className={cn(
              "hidden lg:flex items-center gap-6",
              isRTL && "flex-row-reverse"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={cn(
                  'relative py-1 text-[15px] leading-[20px] font-normal transition-colors',
                  navLinkColor,
                  'after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100',
                  isActiveLink(link.href)
                    ? 'after:origin-bottom-left after:scale-x-100 font-medium'
                    : cn(textColorFaded, navLinkHoverColor),
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <motion.div
            layout
            className={cn(
              "hidden lg:flex items-center gap-2",
              isRTL && "flex-row-reverse"
            )}
          >
            {/* Language Selector */}
            {/* ... (Language Selector remains the same) */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors hover:text-white hover:bg-white/10",
                  textColorFaded
                )}
              >
                <Globe className="w-4 h-4" />
                {!isScrolled && <motion.span layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{language.toUpperCase()}</motion.span>}
                <ChevronDown className={cn("w-4 h-4 transition-transform", isLangMenuOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "absolute top-full mt-2 rounded-xl shadow-lg border min-w-[150px] p-1 z-[100] bg-neutral-900 border-white/10",
                      isRTL ? 'left-0' : 'right-0'
                    )}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={cn(
                          'w-full px-3 py-2 text-sm text-left transition-colors rounded-lg',
                          language === lang.code
                            ? 'bg-white/10 text-white font-medium'
                            : 'text-white/70 hover:bg-white/5 hover:text-white',
                          isRTL && 'text-right'
                        )}
                      >
                        {lang.nativeName}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "flex items-center justify-center w-9 h-9 rounded-full transition-colors hover:text-white hover:bg-white/10",
                textColorFaded
              )}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* CTA Button */}
            <Link
              href={`/${language}/contact`}
              className={cn(
                "flex items-center gap-2 relative transition-all duration-200",
                "bg-[#cfff71]/80 backdrop-blur-md text-[rgb(1,2,2)] font-medium text-[14px] leading-[18px]",
                "border border-white/40",
                "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_2px_8px_rgba(0,0,0,0.1)]",
                "hover:bg-white/30 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_4px_12px_rgba(0,0,0,0.15)]",
                "px-4 py-1.5 rounded-full"
              )}
            >
              <motion.span layout>{t.nav.bookCall}</motion.span>
              {isScrolled && <motion.span layout initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="text-xs"></motion.span>}
            </Link>
          </motion.div>

          {/* ... (Mobile Menu Button remains same) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden relative z-50 p-2 rounded-lg transition-colors",
              isMobileMenuOpen ? "hidden" : "text-white hover:bg-white/10"
            )}
          >
            <Menu className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-40 lg:hidden pointer-events-auto"
          >
            {/* Top Right Actions */}
            <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.05 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative p-3 rounded-full bg-foreground/10 backdrop-blur-sm text-foreground hover:bg-foreground/20 transition-colors shadow-lg"
              >
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute inset-0 m-auto h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </motion.button>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ delay: 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-full bg-foreground/10 backdrop-blur-sm text-foreground hover:bg-foreground/20 transition-colors shadow-lg"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center min-h-screen gap-6 p-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-2xl font-normal uppercase transition-colors',
                      isActiveLink(link.href)
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 mt-4"
              >
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                        language === lang.code
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>


              </motion.div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Link
                  href={`/${language}/contact`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-accent bg-white/20 backdrop-blur-md text-[rgb(1,2,2)] font-medium text-[14px] leading-[18px] border border-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_2px_8px_rgba(0,0,0,0.1)] px-4 py-1.5 rounded-full"
                >
                  {t.nav.bookCall}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
