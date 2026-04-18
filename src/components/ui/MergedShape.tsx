"use client";

import React from 'react';

interface MergedShapeProps extends React.HTMLAttributes<HTMLDivElement> {
    fill?: string;
    children?: React.ReactNode;
}

const MergedShape: React.FC<MergedShapeProps> = ({ fill = "#ffffff", children, style, className, ...props }) => {
    return (
        <div
            className={className}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                ...style,
            }}
            {...props}
        >
            {/*
              Background Structure
              Responsive Split:
              - Mobile (< lg): User provided shape (Main box + bottom tab)
              - Desktop (>= lg): Original split panel shape
            */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">

                {/* --- MOBILE VERSION --- */}
                <div className="lg:hidden w-full h-full relative">
                    {/* Shape 1 (Top Box) - Full width, Height - 80px */}
                    <div
                        className="absolute left-0 top-0 w-full bg-[#ffffff] rounded-[32px_32px_32px_0px]"
                        style={{ height: 'calc(100% - 80px)' }}
                    />

                    {/* Shape 2 (Bottom Tab) - Width 110px, Height 80px */}
                    <div
                        className="absolute left-0 bottom-0 w-[110px] h-[80px] bg-[#ffffff] rounded-[0px_0px_32px_32px]"
                    />

                    {/* Bridge 1 - at left 110px, bottom 80px */}
                    <svg
                        className="absolute left-[110px] w-8 h-8 pointer-events-none"
                        style={{ bottom: '80px' }}
                        viewBox="0 -32 32 32"
                    >
                        <path d="M 0 0 C 0 -23.872 5.76 -32 32 -32 H 0 Z" fill={fill} />
                    </svg>
                </div>


                {/* --- DESKTOP VERSION --- */}
                <div className="hidden lg:flex w-full h-full absolute inset-0">
                    {/* Left Panel (Shape 1) */}
                    <div className="w-[57%] h-full bg-[#ffffff] rounded-[42px_42px_0px_42px]" />

                    {/* Right Panel Container */}
                    <div className="flex w-[43%] h-full flex-col">
                        {/* Negative Space (Top Right) */}
                        <div className="h-[53.5%] w-full" />

                        {/* Bottom Right Panel (Shape 2) */}
                        <div className="h-[46.5%] w-full bg-[#ffffff] rounded-[0px_32px_32px_0px] relative" />
                    </div>

                    {/* Bridge SVG - Desktop Only */}
                    <svg
                        className="absolute left-[57%] top-[53.5%] -mt-8 w-8 h-8"
                        viewBox="0 0 32 32"
                    >
                        <path d="M 0 0 C 0 23.872 5.76 32 32 32 H 0 Z" fill={fill} />
                    </svg>
                </div>

            </div>

            {/* Content Container - Ensure it is on top */}
            <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
                {children}
            </div>
        </div>
    );
};

export default MergedShape;
