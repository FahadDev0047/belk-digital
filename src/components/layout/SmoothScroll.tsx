"use client";

import { ReactNode, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollProvider, useScrollContext } from '@/context/ScrollContext';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
    children: ReactNode;
}

function SmoothScrollInner({ children }: SmoothScrollProps) {
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);
    const { setLenis } = useScrollContext();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;
        setLenis(lenis);

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            lenisRef.current = null;
            // Note: We don't nullify context here to prevent flicker if unmounting/remounting,
            // but ideally we should only wrap content that persists.
        };
    }, [setLenis]);

    useEffect(() => {
        // Immediate scroll to top on route change
        lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    return <>{children}</>;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    return (
        <ScrollProvider>
            <SmoothScrollInner>{children}</SmoothScrollInner>
        </ScrollProvider>
    );
}
