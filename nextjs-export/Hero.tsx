"use client";

import FloatingScene from "./FloatingScene";
import HeroContent from "./HeroContent";

export default function Hero() {
    return (
        <div className="relative min-h-screen overflow-hidden hero-bg">
            <FloatingScene />
            <HeroContent />
        </div>
    );
}
