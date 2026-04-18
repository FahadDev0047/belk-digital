"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/lib/i18n-config';

interface LanguageContextType {
    language: Locale;
    setLanguage: (lang: Locale) => void;
    t: any;
    dir: 'ltr' | 'rtl';
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
    dictionary: any;
    language: Locale;
    dir?: 'ltr' | 'rtl';
}

export function LanguageProvider({
    children,
    dictionary,
    language,
    dir = 'ltr'
}: LanguageProviderProps) {
    const router = useRouter();
    const pathname = usePathname();

    const setLanguage = (lang: Locale) => {
        if (!pathname) return;
        const segments = pathname.split('/');
        // URL is usually /lang/... so segments[1] is lang
        // If pathname starts with /, segments[0] is empty.
        if (segments.length > 1) {
            segments[1] = lang;
        } else {
            segments.push(lang);
        }
        const newUrl = segments.join('/');
        router.push(newUrl);
    };

    const isRTL = dir === 'rtl';

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            t: dictionary,
            dir,
            isRTL
        }}>
            <div dir={dir} className="contents">
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
