"use client";
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export function Footer() {
  const { language, t } = useLanguage();
  const footerData = t.footer;

  const navLinks = [
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/work', label: t.nav.work },
    { href: '/locations', label: t.nav.locations },
    { href: '/blog', label: t.nav.blog },
  ];

  // Footer link data mapping from dictionary
  const footerColumns = [
    {
      title: footerData.columns.pages.title,
      links: navLinks,
    },
    {
      title: footerData.columns.socials.title,
      links: footerData.columns.socials.links,
    },
  ];

  // Contact info data from dictionary
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: footerData.contactItems.email,
      href: `mailto:${footerData.contactItems.email}`,
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: footerData.contactItems.phone,
      href: `tel:${footerData.contactItems.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Globe size={18} className="text-[#3ca2fa]" />,
      text: footerData.contactItems.location,
    },
  ];

  // Social media icon mapping
  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'facebook': return <Facebook size={20} />;
      case 'instagram': return <Instagram size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      default: return <Globe size={20} />;
    }
  };

  return (
    <footer className="bg-black relative h-fit rounded-[40px] overflow-hidden m-4 md:m-8 border border-white/[0.05]">
      <div className="max-w-7xl mx-auto p-10 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-6">
            <Link href={`/${language}`} className="flex items-center space-x-3 group">
              <img src="/logo.png" alt={footerData.branding} className="h-12 w-auto transition-transform group-hover:scale-110" />

            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {footerData.description}
            </p>
          </div>

          {/* Footer link sections */}
          {footerColumns.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-base font-bold uppercase tracking-[0.2em] mb-8 opacity-80">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link: any) => (
                  <li key={link.label}>
                    <Link
                      href={link.href.startsWith('http') ? link.href : `/${language}${link.href}`}
                      className="text-white/40 hover:text-[#3ca2fa] transition-colors text-[0.95rem]"
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

          {/* Contact section */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-[0.2em] mb-8 opacity-80">
              {footerData.contactTitle}
            </h4>
            <ul className="space-y-5">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-white/40">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/[0.05] my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-6 md:space-y-0 text-white/30">
          {/* Social icons */}
          <div className="flex space-x-6">
            {footerData.columns.socials.links.map((link: any) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="hover:text-[#3ca2fa] transition-all transform hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
              >
                {getSocialIcon(link.label)}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left font-medium uppercase tracking-widest text-[10px]">
            {footerData.copyright}
          </p>
        </div>
      </div>

      {/* Text hover effect - Expansive layout */}
      <div className="lg:flex hidden h-[22rem] md:h-[30rem] -mt-40 md:-mt-52 -mb-28 md:-mb-36 overflow-hidden">
        <TextHoverEffect text="BELK DIGITAL" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
