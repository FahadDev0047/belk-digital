import { i18n, Locale } from '@/lib/i18n-config';
import { getDictionary } from '@/lib/i18n';
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { Layout as AppLayout } from '@/components/layout/Layout';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { CustomScrollbar } from '@/components/ui/CustomScrollbar';
import { Preloader } from '@/components/ui/Preloader';

import Script from 'next/script';



export const metadata = {
    title: "CodeNovaX",
    description: "Digital Transformation Agency",
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

import JsonLd from '@/components/seo/JsonLd';

export default async function Layout({
    children,
    params
}: {
    children: React.ReactNode,
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={lang} dir={dir} suppressHydrationWarning>
            <head>
                <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet" />
                <JsonLd />
            </head>
            <body className="antialiased">
                <Preloader />
                <Providers dictionary={dict} language={lang as Locale} dir={dir}>
                    <SmoothScroll>
                        <CustomScrollbar />
                        <AppLayout>
                            {children}
                        </AppLayout>
                    </SmoothScroll>
                </Providers>
                <Script src="https://www.google.com/recaptcha/api.js?render=explicit" strategy="afterInteractive" />
            </body>
        </html >
    );
}
