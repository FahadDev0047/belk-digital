"use client";

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight, User, GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import WorldMap from '@/components/ui/world-map';
import Image from 'next/image';

import emailjs from '@emailjs/browser';

declare var grecaptcha: any;

declare global {
  interface Window {
    grecaptcha: any;
  }
}


const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  website: z.string().trim().optional(),
  service: z.string().optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

const Contact = () => {
  const { t, isRTL, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    service: '',
    message: '',
  });

  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const onCaptchaResolved = async (token: string) => {
    try {
      setIsSubmitting(true);
      const validated = contactSchema.parse(formData);

      const commonParams = {
        website: validated.website,
        service: validated.service,
        message: validated.message,
        'g-recaptcha-response': token,
      };

      await Promise.all([
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN_ID!,
          {
            from_name: validated.name,
            from_email: validated.email,
            name: validated.name,
            email: validated.email,
            reply_to: validated.email,
            ...commonParams
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        ),
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER_ID!,
          {
            to_name: validated.name,
            to_email: validated.email,
            name: validated.name,
            email: validated.email,
            ...commonParams
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
      ]);

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', website: '', service: '', message: '' });
      if (widgetIdRef.current !== null) grecaptcha.reset(widgetIdRef.current);

    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onCaptchaResolvedRef = useRef(onCaptchaResolved);
  useEffect(() => {
    onCaptchaResolvedRef.current = onCaptchaResolved;
  });

  useEffect(() => {
    const loadCaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render && captchaRef.current) {
        if (widgetIdRef.current !== null) return;
        try {
          widgetIdRef.current = window.grecaptcha.render(captchaRef.current, {
            'sitekey': '6Lf7lGIsAAAAAPOMz9WpdbBQjzVc-9MJSoprK0bb',
            'size': 'invisible',
            'callback': (token: string) => onCaptchaResolvedRef.current(token)
          });
        } catch (e) {
          console.error("Recaptcha render error:", e);
        }
      }
    };

    if (window.grecaptcha && window.grecaptcha.render) {
      loadCaptcha();
    } else {
      const interval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          clearInterval(interval);
          loadCaptcha();
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      if (widgetIdRef.current !== null) {
        grecaptcha.execute(widgetIdRef.current);
      } else {
        toast({
          title: "Error",
          description: "Security check failed to load. Please refresh.",
          variant: "destructive",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/service-detail-bg.webp"
            alt="Contact Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] z-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(59,130,246,0.12),transparent)] z-10" />
        </div>

        <div className="container-wide relative z-30">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-[1400px] mx-auto">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={cn("space-y-12", isRTL && "text-right")}
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs font-sans font-medium tracking-widest uppercase">
                    Connect With Us
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-[600] tracking-tight leading-[1.05] text-white">
                  {t.contact.title.split(' ').slice(0, -2).join(' ')}{' '}
                  <span className="font-serif italic font-normal text-white/90">
                    {t.contact.title.split(' ').slice(-2).join(' ')}
                  </span>
                </h1>
                
                <p className="text-xl text-white/50 max-w-xl leading-relaxed font-sans">
                  {t.contact.subtitle}
                </p>
              </div>

              {/* Contact Details Cards */}
              <div className="grid gap-6">
                {[
                  { icon: Mail, label: 'Email Us', value: 'contact@belkdigital.com', href: 'mailto:contact@belkdigital.com' },
                  { icon: MessageSquare, label: 'WhatsApp', value: '+91 7759861053', href: 'https://wa.me/917759861053' },
                  { icon: Globe, label: 'Business Inquiry', value: 'contact@belkdigital.com', href: 'mailto:contact@belkdigital.com' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={cn(
                      "group flex items-center gap-6 p-6 rounded-[24px] bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <item.icon className="w-5 h-5 text-white/60 group-hover:text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 block mb-1">{item.label}</span>
                      <span className="text-lg font-sans font-medium text-white group-hover:text-white">{item.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* World Map Overlay */}
              <div className="opacity-40 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none select-none -mx-10 scale-110">
                <WorldMap
                  lineColor="rgba(59,130,246,0.5)"
                  dots={[
                    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
                    { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 48.8566, lng: 2.3522 } },
                    { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: 28.6139, lng: 77.209 } }
                  ]}
                />
              </div>
            </motion.div>

            {/* Right Column - Glass Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/4" />
              
              <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 md:p-12 shadow-2xl overflow-hidden group">
                {/* Internal grid pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className={cn("text-sm font-bold tracking-widest uppercase text-white/40 block ml-1", isRTL && "text-right")}>
                        {t.contact.form.name}
                      </label>
                      <div className="relative group/input">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within/input:text-white transition-colors" />
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={cn("pl-12 bg-white/5 border-white/5 focus-visible:ring-0 focus-visible:border-white/20 rounded-2xl h-14 text-white placeholder:text-white/20 transition-all", isRTL && "text-right pr-12 pl-4")}
                          placeholder={t.contact.form.namePlaceholder}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className={cn("text-sm font-bold tracking-widest uppercase text-white/40 block ml-1", isRTL && "text-right")}>
                        {t.contact.form.email}
                      </label>
                      <div className="relative group/input">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within/input:text-white transition-colors" />
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={cn("pl-12 bg-white/5 border-white/5 focus-visible:ring-0 focus-visible:border-white/20 rounded-2xl h-14 text-white placeholder:text-white/20 transition-all", isRTL && "text-right pr-12 pl-4")}
                          placeholder={t.contact.form.emailPlaceholder}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className={cn("text-sm font-bold tracking-widest uppercase text-white/40 block ml-1", isRTL && "text-right")}>
                      {t.contact.form.website}
                    </label>
                    <div className="relative group/input">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within/input:text-white transition-colors" />
                      <Input
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className={cn("pl-12 bg-white/5 border-white/5 focus-visible:ring-0 focus-visible:border-white/20 rounded-2xl h-14 text-white placeholder:text-white/20 transition-all", isRTL && "text-right pr-12 pl-4")}
                        placeholder={t.contact.form.websitePlaceholder}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className={cn("text-sm font-bold tracking-widest uppercase text-white/40 block ml-1", isRTL && "text-right")}>
                      {t.contact.form.message}
                    </label>
                    <div className="relative group/input">
                      <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-white/20 group-focus-within/input:text-white transition-colors" />
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={cn("pl-12 pt-5 bg-white/5 border-white/5 focus-visible:ring-0 focus-visible:border-white/20 rounded-[24px] min-h-[160px] text-white placeholder:text-white/20 transition-all resize-none", isRTL && "text-right pr-12 pl-4")}
                        placeholder={t.contact.form.messagePlaceholder}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-white/90 rounded-2xl h-16 font-bold text-lg transition-all active:scale-95 group/btn overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? 'Sending...' : t.contact.form.submit}
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </Button>

                  <div className="hidden">
                    <div ref={captchaRef} />
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
