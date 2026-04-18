import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/lib/i18n-config';

function getLocale(request: NextRequest): string {
    return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // 1. Exclude static files and API routes explicitly
    if (
        pathname.startsWith('/_next') || // Next.js internals
        pathname.startsWith('/api') ||   // API routes
        pathname.startsWith('/static') || // Static files
        pathname.includes('.') // Files with extensions (e.g. favicon.ico, images)
    ) {
        return NextResponse.next();
    }

    // 2. Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // 3. Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // Construct new URL
        const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);

        console.log(`Middleware: Redirecting ${pathname} to ${newUrl.pathname}`);
        return NextResponse.redirect(newUrl);
    }
}


