"use client";

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import WorldMap from '@/components/ui/world-map';

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
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    service: '',
    message: '',
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Create a stable callback reference
  const onCaptchaResolved = async (token: string) => {
    try {
      setIsSubmitting(true);

      // We already sanitized/validated data in handleSubmit before calling execute
      // But we need access to the latest formData state here. 
      // Since this function is closed over the state at render time, 
      // ensuring we have the latest data is important.
      // However, since we trigger execute() immediately after validation in the same render cycle,
      // the state should be consistent. Re-parsing to be safe/consistent with flow.
      const validated = contactSchema.parse(formData);

      // Prepare common params
      const commonParams = {
        website: validated.website,
        service: validated.service,
        message: validated.message,
        'g-recaptcha-response': token,
      };

      // Send both emails in parallel
      await Promise.all([
        // 1. Notification to Admin (You)
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN_ID!,
          {
            // Variables mapped for EmailJS template
            from_name: validated.name,
            from_email: validated.email,
            name: validated.name,
            email: validated.email,
            reply_to: validated.email,
            ...commonParams
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        ),
        // 2. Auto-reply to User
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER_ID!,
          {
            // Variables for Auto-reply Template
            to_name: validated.name,
            to_email: validated.email,
            // Fallbacks in case template uses different names
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

  // Store the callback in a ref so useEffect can access the latest version without dependency cycles
  const onCaptchaResolvedRef = useRef(onCaptchaResolved);

  // Update ref when function changes (on every render mostly, but keeps useEffect clean)
  useEffect(() => {
    onCaptchaResolvedRef.current = onCaptchaResolved;
  });

  useEffect(() => {
    const loadCaptcha = () => {
      // @ts-ignore
      if (window.grecaptcha && window.grecaptcha.render && captchaRef.current) {
        if (widgetIdRef.current !== null) return;

        try {
          // @ts-ignore
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

    // @ts-ignore
    if (window.grecaptcha && window.grecaptcha.render) {
      loadCaptcha();
    } else {
      const interval = setInterval(() => {
        // @ts-ignore
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
      // Validate form FIRST
      contactSchema.parse(formData);

      // Execute Captcha if valid
      if (widgetIdRef.current !== null) {
        // @ts-ignore
        grecaptcha.execute(widgetIdRef.current);
      } else {
        // Fallback if captcha failed to load
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
          className: "destructive",
        });
      }
    }
  };

  return (
    <>
      <section className="min-h-screen bg-[#0d0d0d] pt-32 pb-24 text-white relative flex items-center overflow-hidden">
        <div className="container-wide w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start max-w-[1300px] mx-auto">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 pe-0 lg:pe-12 pt-8"
            >
              <div className="w-14 h-14 rounded-[0.85rem] bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 blur-[10px]"></div>
                <Mail className="w-6 h-6 text-[#5b8def] relative z-10" />
                {/* Internal top gradient mimicking glass highlight */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="space-y-4">
                <h1 className={cn("text-4xl sm:text-[2.8rem] font-bold tracking-tight text-[#f5f5f5] mb-2 font-display leading-[1.1]", isRTL && "text-right")}>
                  {t.contact.title}
                </h1>
                <p className={cn("text-[#404040] text-base sm:text-lg leading-relaxed max-w-[460px]", isRTL && "text-right")}>
                  {t.contact.subtitle}
                </p>
              </div>

              <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#a1a1aa] mt-2 font-medium", isRTL && "flex-row-reverse")}>
                <a href="mailto:contact@belkdigital.com" className="hover:text-white transition-colors">contact@belkdigital.com</a>
                <span className="hidden sm:inline opacity-30">•</span>
                <a href="https://wa.me/917759861053" className="hover:text-white transition-colors">+91 7759861053</a>
                <span className="hidden sm:inline opacity-30">•</span>
                <a href="mailto:business@belkdigital.com" className="hover:text-white transition-colors">business@belkdigital.com</a>
              </div>

              {/* Map Graphic Placement */}
              <div className="w-full relative mt-8 flex flex-col items-center justify-center pointer-events-none select-none">
                <WorldMap
                  lineColor="#3d7dffff"
                  dots={[
                    {
                      start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                      end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                    },
                    {
                      start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                      end: { lat: -15.7975, lng: -47.8919 }, // Brazil
                    },
                    {
                      start: { lat: -15.7975, lng: -47.8919 }, // Brazil
                      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                      start: { lat: 51.5074, lng: -0.1278 }, // London
                      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                  ]}
                />
              </div>
            </motion.div>

            {/* Right Column - Form Container */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-[#101010] border border-white/[0.04] rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl h-full flex flex-col"
            >
              {/* Subtle grid background mirroring Aceternity labs */}
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px',
                  WebkitMaskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
                  maskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
                }}
              />
              {/* Fade out top-right grid effect using radial gradient */}

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div>
                  <label className={cn("block text-sm font-semibold mb-2 text-[#e5e5e5]", isRTL && "text-right")}>
                    {t.contact.form.name} *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={cn("bg-[#1f1f1f] border-transparent text-[#a1a1aa] focus-visible:ring-[#27272a] focus-visible:bg-[#27272a] rounded-xl h-12 px-4 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.02)] transition-colors placeholder:text-[#52525b]", isRTL && "text-right")}
                    placeholder={t.contact.form.namePlaceholder}
                    required
                  />
                </div>

                <div>
                  <label className={cn("block text-sm font-semibold mb-2 text-[#e5e5e5]", isRTL && "text-right")}>
                    {t.contact.form.email} *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn("bg-[#1f1f1f] border-transparent text-[#a1a1aa] focus-visible:ring-[#27272a] focus-visible:bg-[#27272a] rounded-xl h-12 px-4 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.02)] transition-colors placeholder:text-[#52525b]", isRTL && "text-right")}
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                  />
                </div>

                <div>
                  <label className={cn("block text-sm font-semibold mb-2 text-[#e5e5e5]", isRTL && "text-right")}>
                    {t.contact.form.website}
                  </label>
                  <Input
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className={cn("bg-[#1f1f1f] border-transparent text-[#a1a1aa] focus-visible:ring-[#27272a] focus-visible:bg-[#27272a] rounded-xl h-12 px-4 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.02)] transition-colors placeholder:text-[#52525b]", isRTL && "text-right")}
                    placeholder={t.contact.form.websitePlaceholder}
                  />
                </div>

                <div className="flex-1">
                  <label className={cn("block text-sm font-semibold mb-2 text-[#e5e5e5]", isRTL && "text-right")}>
                    {t.contact.form.message} *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className={cn("bg-[#1f1f1f] border-transparent text-[#a1a1aa] focus-visible:ring-[#27272a] focus-visible:bg-[#27272a] rounded-xl px-4 py-3 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.02)] resize-none h-[120px] transition-colors placeholder:text-[#52525b]", isRTL && "text-right")}
                    required
                  />
                </div>

                <div className={cn("pt-2", isRTL && "flex justify-end")}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-1/3 min-w-[120px] bg-[#27272a] hover:bg-[#3f3f46] text-[#e5e5e5] border border-white/5 rounded-xl h-11 font-semibold transition-colors shadow-sm"
                  >
                    {isSubmitting ? 'Submitting...' : t.contact.form.submit}
                  </Button>
                </div>

                <div className="hidden">
                  <div ref={captchaRef} />
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
