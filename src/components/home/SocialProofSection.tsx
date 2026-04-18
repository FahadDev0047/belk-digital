"use client";

import React, { useEffect, useRef } from 'react';

const brands = [
  { name: 'Vortex', letter: 'V' },
  { name: 'Nimbus', letter: 'N' },
  { name: 'Prysma', letter: 'P' },
  { name: 'Cirrus', letter: 'C' },
  { name: 'Kynder', letter: 'K' },
  { name: 'Halcyn', letter: 'H' },
];

export function SocialProofSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;

    const fadeLoop = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;

      if (duration > 0) {
        if (currentTime < 0.5) {
          video.style.opacity = (currentTime / 0.5).toString();
        } else if (duration - currentTime < 0.5) {
          video.style.opacity = ((duration - currentTime) / 0.5).toString();
        } else {
          video.style.opacity = "1";
        }
      }

      animationFrameId = requestAnimationFrame(fadeLoop);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => { });
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', () => {
      animationFrameId = requestAnimationFrame(fadeLoop);
    });

    // Start playing
    video.play().catch(() => { });

    return () => {
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{ opacity: 0 }}
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000] via-transparent to-[#000] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-16 pb-24 px-4 gap-20">
        <div className="h-40 w-full" /> {/* Spacer div for video visibility */}

        {/* Logo Marquee */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="text-foreground/50 text-sm whitespace-nowrap shrink-0 text-center md:text-left font-sans">
            Relied on by brands <br className="hidden md:block" /> across the globe
          </div>

          <div className="relative flex overflow-hidden flex-1 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex shrink-0 animate-marquee gap-16 min-w-[200%] sm:min-w-full">
              {/* Duplicated for seamless scrolling */}
              {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-xs font-semibold text-foreground/80 shrink-0">
                    {brand.letter}
                  </div>
                  <span className="text-base font-semibold text-foreground font-sans">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
