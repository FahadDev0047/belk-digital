"use client";

import React, { useEffect, useRef, useState } from 'react';

interface NotchedContainerProps {
    children: React.ReactNode;
    className?: string;
    notchWidth?: number;
    notchDepth?: number;
    cornerRadius?: number;
}

export default function NotchedContainer({
    children,
    className = '',
    notchWidth = 300,
    notchDepth = 40,
    cornerRadius = 30
}: NotchedContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Generate the SVG path
    const generatePath = (w: number, h: number) => {
        if (w === 0 || h === 0) return '';

        const r = cornerRadius;
        // Constrain notch width to ensure it fits with corners (plus some padding)
        const nw = Math.min(notchWidth, w - (r * 2) - 40);
        const nd = notchDepth;
        const cx = w / 2;

        // Notch curve control points
        // We want a smooth S-curve into the notch
        const curveSize = 20; // Size of the transition curve

        // Start after top-left corner
        let path = `M 0 ${r}`;

        // Top-left rounded corner
        path += ` A ${r} ${r} 0 0 1 ${r} 0`;

        // Line to notch start
        const notchStartX = cx - nw / 2;
        path += ` L ${notchStartX - curveSize} 0`;

        // Notch entry curve (smooth transition down)
        // Cubic bezier: C control1 control2 end
        path += ` C ${notchStartX} 0, ${notchStartX} ${nd}, ${notchStartX + curveSize} ${nd}`;

        // Line across notch bottom
        const notchEndX = cx + nw / 2;
        path += ` L ${notchEndX - curveSize} ${nd}`;

        // Notch exit curve (smooth transition up)
        path += ` C ${notchEndX} ${nd}, ${notchEndX} 0, ${notchEndX + curveSize} 0`;

        // Line to top-right corner
        path += ` L ${w - r} 0`;

        // Top-right rounded corner
        path += ` A ${r} ${r} 0 0 1 ${w} ${r}`;

        // Right side
        path += ` L ${w} ${h - r}`;

        // Bottom-right rounded corner
        path += ` A ${r} ${r} 0 0 1 ${w - r} ${h}`;

        // Bottom side
        path += ` L ${r} ${h}`;

        // Bottom-left rounded corner
        path += ` A ${r} ${r} 0 0 1 0 ${h - r}`;

        // Close path
        path += ` Z`;

        return path;
    };

    const path = generatePath(dimensions.width, dimensions.height);

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            {/* The clipping container */}
            <div
                className="relative overflow-hidden w-full h-full"
                style={{
                    clipPath: `path('${path}')`,
                    // Fallback for initial render or older browsers
                    borderRadius: path ? '0' : `${cornerRadius}px`
                }}
            >
                {children}
            </div>

            {/* The SVG Border Overlay */}
            <svg
                className="absolute inset-0 pointer-events-none w-full h-full z-20"
                width="100%"
                height="100%"
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                preserveAspectRatio="none"
            >
                <path
                    d={path}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>

            {/* Inner shadow simulation (optional, might require separate SVG or mask) */}
            {/* Note: clip-path removes standard box-shadow. 
                 If we need inner shadow, we might need a separate inset shadow layer masked by the same path.
                 For now, we'll rely on the border and internal styling. 
             */}
        </div>
    );
}
