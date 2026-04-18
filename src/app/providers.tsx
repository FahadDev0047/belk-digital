"use strict";
"use client";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Locale } from "@/lib/i18n-config";

export function Providers({
    children,
    dictionary,
    language,
    dir = 'ltr'
}: {
    children: React.ReactNode;
    dictionary: any;
    language: Locale;
    dir?: 'ltr' | 'rtl';
}) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryClient}>
                <LanguageProvider dictionary={dictionary} language={language} dir={dir}>
                    <TooltipProvider>
                        {children}
                        <Toaster />
                    </TooltipProvider>
                </LanguageProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
