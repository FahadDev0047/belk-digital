"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

// Mapping for flags since dictionaries don't store image paths usually
const FLAG_MAP: Record<string, string> = {
  'US': '/images/flags/us.png',
  'UAE': '/images/flags/uae.png',
  'KSA': '/images/flags/saudi-arabia.png',
  'UK': '/images/flags/uk.png',
  'AU': '/images/flags/australia.png',
  'IN': '/images/flags/india.png',
};

// Simple timezone mapping
const TIME_ZONES: Record<string, string> = {
  'US': 'America/New_York',
  'UAE': 'Asia/Dubai',
  'KSA': 'Asia/Riyadh',
  'UK': 'Europe/London',
  'AU': 'Australia/Sydney',
  'IN': 'Asia/Kolkata',
};

export function LocationsSection() {
  const { language, t } = useLanguage();
  const data = t.homeLocations;
  const locations = data.items.slice(0, 4);

  return (
    <section className="bg-black py-24 md:py-32 overflow-hidden relative">
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-xs text-white/40 uppercase tracking-[0.3em] font-medium">{data.badge}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white mb-6">
              {data.titlePart1} <span className="font-serif italic font-normal">{data.titlePart2}</span>
            </h2>
            <p className="text-white/60 text-lg max-w-lg">
              {data.subtitle}
            </p>
          </div>

          <Link
            href={`/${language}/locations`}
            className="hidden md:inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-white/40 transition-all relative group overflow-hidden"
          >
            <div className="absolute inset-0 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity accent-gradient -z-10" />
            <div className="absolute inset-[1px] rounded-full bg-black -z-10" />

            {data.explore}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* 2x2 Grid (Top 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {locations.map((location: any, index: number) => (
            <LocationCard
              key={index}
              location={location}
              index={index}
              cardView={data.cardView}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({ location, index, cardView, language }: { location: any, index: number, cardView: string, language: string }) {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const updateTime = () => {
      const tz = TIME_ZONES[location.code] || 'UTC';
      const formatted = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: tz,
      }).format(new Date());
      setTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, [location.code]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col p-10 shadow-2xl transition-all duration-500 group"
      style={{ minHeight: '420px' }}
    >
      {/* Halftone overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '8px 8px' }}
      />

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.08), transparent 70%)' }}
      />

      {/* Top Section: Flag & Live Time */}
      <div className="flex items-center justify-between mb-auto relative z-10">
        <div className="relative w-14 h-9 rounded-lg overflow-hidden ring-1 ring-white/10 shadow-xl">
          <Image
            src={FLAG_MAP[location.code]}
            alt={location.country}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase">
            {time}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-8 relative z-10 flex-1 flex flex-col">
        <span className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-4 block">
          {location.code}
        </span>
        <h3 className="text-3xl font-bold tracking-tight text-white mb-4 group-hover:translate-x-1 transition-transform duration-500">
          {location.country}
        </h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {location.cities.map((city: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-white/50"
            >
              {city}
            </span>
          ))}
        </div>

        {/* Visit Button inside card */}
        <div className="mt-auto">
          <Link
            href={`/${language}/locations/${location.slug || ''}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 relative overflow-hidden group/btn"
          >
            {cardView}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Decorative SVG Background */}
      <div
        className={`absolute bottom-0 right-0 w-64 h-[500px] -mb-24 -mr-16 pointer-events-none z-0 transition-opacity duration-500 ${location.code === 'UK' ? 'opacity-20' : 'opacity-[0.06]'
          }`}
      >
        {location.code === 'US' ? (
          <svg
            viewBox="143 33 378 1001"
            className="w-full h-full fill-[#fff]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m145.86 1033.4l-2.51-88.85 20.11-1.3c11.06-0.72 22.86-2.07 26.21-3.02l6.1-1.71v-43.55-43.55l9.68-0.62c14.41-0.92 15.13-2.92 17.1-47.15l1.67-37.6 9.15-1.01 9.15-1.02-0.07-186.99c-0.23-65.96-1.1-143.92-1.93-173.24l-1.53-53.31 5.5-2.09 5.5-2.09-0.59-36.67-0.59-36.67 5.46-4.47c5.1-4.18 5.5-5.69 6-22.77l0.54-18.29 11.03-0.63c8.11-0.46 12.58-1.94 16.92-5.59 3.25-2.73 6.67-4.96 7.61-4.96 3.37 0 14.51-26.47 16.43-39.02 1.08-7.05 2.27-23.79 2.64-37.2 0.68-24.42 3.69-31.62 7.51-36.45 1.13-1.42 1.85-22.377 2.48-37.139 0.62-14.762 2.09-28.482 3.26-30.488 1.16-2.007 2.2-3.191 2.3-2.632 0.09 0.559 0.53 6.047 0.96 12.195 1.4 19.856-0.8 48.202 1.54 58.634 1.25 5.58 10.7 9.14 9.46 39.94-0.69 16.78 2.63 34.38 3.93 39.13 1.29 4.75 3.26 12.18 4.38 16.51s5.52 11.79 9.77 16.58c6.25 7.05 9.44 8.94 16.76 9.94l9.04 1.24-0.62 15.38c-0.48 11.98 0.08 15.96 2.54 18 1.74 1.45 3.16 5.28 3.16 8.52 0 4.41 1.27 6.39 5.03 7.82 5.01 1.9 5.03 2.02 5.59 32.88l0.56 30.98 5.08 1.19 5.08 1.2 1.51 33.45c2.1 46.56 3.77 191.38 3.11 269.22-0.76 89.02-0.26 116.96 2.12 119.35 1.12 1.11 6.46 2.15 11.87 2.31l9.85 0.3v43.59 39.88l5.08 1.43c2.79 0.78 8.49 1.51 12.66 1.63l7.58 0.2 0.55 44.87 0.55 41.16 26.42 1.02 26.43 1.01-0.31 7.12c-0.7 16.22-0.8 62.4-2.21 83.7l-372.6-0.3zm258.82-233.81c0.93-5.03 1.18-15.18 0.57-22.56 5.49-131.29 0.62-262.51-1.13-393.74-0.01-11.53-0.9-22.62-1.99-24.65-12.96-7.16-25.93-5.96-38.89-0.69l-1.35 29.68c-0.75 16.33-0.37 71.76 0.83 123.19 1.2 51.42 1.9 124.59 1.55 162.6l-0.62 69.11-66.25 0.92 0.42-169.59-2.16-215.47c-12.11-5.37-25.02-8.01-37.86 0.03-2.62 1.69-2.93 20.27-2.41 143.81 1.32 309.34 0.38 299.11 0.78 299.1l30.68-0.45c1.94 3.75 1.29-30.07 1.4-30.76l1.02-8.13h40.65 40.65l0.58 21.22c0.32 11.68 0.03 15.9 1.14 17.24l32.39-0.86zm-45.08-512.51l-5.27-13.63c-19.03-3.76-33.09-4.55-53.11-0.38 0 0-4.44 9.57-2.74 12.94 0.19 0.38 33.63-11.63 61.12 1.07zm-77.45-23.98c0-7.64 13.43-8.56 16.26-1.12 1.07 2.8 2.44 5.08 3.05 5.08 0.62 0 1.99-2.28 3.05-5.08 2.49-6.56 11.04-6.97 14.4-0.69 2.1 3.93 3.18 4.31 4.24 1.02 2.72-8.44 11.94-5.98 15.63-0.84 1.69 2.35 2.97 1.84 4.58-1.01 4.45-5.74 8.31-2.98 11.75 1.98 1.9 3.36 2.17 3.35 4.8-0.22 3.74-5.05 10.19-5.5 11.68 0.79 1.05 4.43 1.38 4.6 2.63 1.35 2.63-6.86 1.51-11.6-3.14-13.27-5.88-2.1-68.25-2.67-82.61-0.74-12.67 1.7-15.76 4.96-12.58 13.28 2.32 6.06 6.26 5.72 6.26-0.53zm96.72 100.73l-2.67 12.51 2.35 411.34 5.14-0.51-4.82-423.34zm10.54 0l-2.73 12.51 2.41 411.34 5.08-0.51-4.76-423.34zm-120.3 1.21l-2.67 12.45-1.84 412.73 5.14-0.44-0.63-424.74zm10.54 0l-2.73 12.45-1.84 412.73 5.14-0.44-0.57-424.74zm23.31 403.78l-3.49 5.97-2.48 196.9 6.74-0.25-0.77-202.62zm17.09 0l-3.62 5.97-2.41 196.9 6.79-0.25-0.76-202.62zm23.12 0l-3.49 5.97-2.48 196.9 6.73-0.25-0.76-202.62zm17.09 0l-3.62 5.97-2.42 196.9 6.8-0.25-0.76-202.62zm-128.82 35.12v166.35h8.45l2.1-133.76 5.78 0.82-0.45 132.94h6.23l1.65-132.49h5.33l-0.82 132.49h6.6l1.27-132.11h5.34l-0.38 132.49 9.27 0.83v-149.2l-41.28-5.97-0.19-12.39h-8.9zm187.63 0l-0.19 12.39-41.28 5.97v149.2l9.27-0.83-0.44-132.49h5.39l1.21 132.11h6.61l-0.83-132.49h5.4l1.65 132.49h6.16l-0.38-132.94 5.78-0.82 2.03 133.76h8.52v-166.35h-8.9zm-216.72 55.71v111.85h23.5v-111.85h-23.5zm234.25 0v111.85h23.5v-111.85h-23.5zm32.4 87.08l2.09 24.77h38.37l2.47-21.85-42.93-2.92zm-274.9 1.65l-43.32 2.48 1.65 20.26 40.84 0.38 0.83-23.12zm-40.85 28.26l2.04 49.96 351.31-0.4 2.86-49.56h-356.21zm158.48-687.49l-2.67 13.02-1.84 430.9 5.08-0.51-0.57-443.41zm12.89 0l-2.73 13.02-1.84 430.9 5.14-0.51-0.57-443.41zm17.47 0l-2.67 13.02-1.84 430.9 5.08-0.51-0.57-443.41zm12.89 0l-2.73 13.02-1.84 430.9 5.15-0.51-0.58-443.41zm-87.04-12.46l-1.36 1.83-0.9 62.19 2.51-0.08-0.25-63.94zm6.44 0l-1.35 1.83-0.91 62.19 2.57-0.08-0.31-63.94zm6.6 0l-1.36 1.83-0.91 62.19 2.52-0.08-0.25-63.94zm6.44 0l-1.36 1.83-0.96 62.19 2.62-0.08-0.3-63.94zm84.54 2.47l-1.35 1.74-0.91 58.99 2.52-0.08-0.26-60.65zm6.45 0l-1.36 1.74-0.91 58.99 2.57-0.08-0.3-60.65zm6.59 0l-1.36 1.74-0.91 58.99 2.52-0.08-0.25-60.65zm6.44 0l-1.36 1.74-0.96 58.99 2.62-0.08-0.3-60.65zm-74.39-66.92l-3.97 7.44c11.91-2.97 19.86-2.48 29.79 0l-3.97-6.95-21.85-0.49zm-9.9 11.41l-3.47 5.94c18.7-2.97 33.92-2.48 48.65 0l-2.48-5.45-42.7-0.49zm-23.31 10.91l-3.47 8.94c32.25-2.97 64.01-2.97 95.27 0l-4.46-8.44-87.34-0.5zm42.35-118.59l-1.36 2.36-6.52 78.51 2.52-0.1 5.36-80.77zm6.44 0l-1.35 2.36 5.41 77.81 2.56-0.1-6.62-80.07zm-3.1 12.64l-1.36 1.83-0.96 62.19 2.62-0.08-0.3-63.94zm-39.08 849.81v45.88h16.64v-45.88h-16.64zm20.39 0v45.88h16.64v-45.88h-16.64zm20.77 0v45.88h16.64v-45.88h-16.64zm20.39 0v45.88h16.64v-45.88h-16.64zm-191.95 2.99v9.59h6.16v-9.59h-6.16zm9.91 0v9.59h6.16v-9.59h-6.16zm10.35 0v9.59h6.16v-9.59h-6.16zm9.47 0v9.59h6.16 0.44v-9.59h-0.44-6.16zm9.91 0v9.59h6.16v-9.59h-6.16zm10.35 0v9.59h6.16v-9.59h-6.16zm9.78 0v9.59h0.13 6.03 0.13v-9.59h-0.13-6.03-0.13zm9.91 0v9.59h6.16v-9.59h-6.16zm10.35 0v9.59h6.16v-9.59h-6.16zm9.47 0v9.59h6.16 0.44v-9.59h-0.44-6.16zm9.9 0v9.59h6.17v-9.59h-6.17zm10.36 0v9.59h6.16v-9.59h-6.16zm9.91 0v9.59h6.16v-9.59h-6.16zm96.61 0.44v9.59h6.16v-9.59h-6.16zm9.9 0v9.59h6.17v-9.59h-6.17zm10.36 0v9.59h6.16v-9.59h-6.16zm9.46 0v9.59h6.16 0.45v-9.59h-0.45-6.16zm9.91 0v9.59h6.16v-9.59h-6.16zm10.35 0v9.59h6.17v-9.59h-6.17zm9.79 0v9.59h0.12 6.04 0.12v-9.59h-0.12-6.04-0.12zm9.9 0v9.59h6.17v-9.59h-6.17zm10.36 0v9.59h6.16v-9.59h-6.16zm9.46 0v9.59h6.16 0.45v-9.59h-0.45-6.16zm9.91 0v9.59h6.16v-9.59h-6.16zm10.35 0v9.59h6.16v-9.59h-6.16zm9.91 0v9.59h6.16v-9.59h-6.16zm-203.25 0.19h4.76l-0.25 14.61h-4.7l0.19-14.61zm7.62 0h4.7l-0.19 14.61h-4.76l0.25-14.61zm12.77 0h4.76l-0.25 14.61h-4.7l0.19-14.61zm7.62 0h4.7l-0.19 14.61h-4.77l0.26-14.61zm13.15 0h4.76l-0.25 14.61h-4.7l0.19-14.61zm7.62 0h4.7l-0.19 14.61h-4.77l0.26-14.61zm12.77 0h4.76l-0.25 14.61h-4.7l0.19-14.61zm7.62 0h4.7l-0.19 14.61h-4.77l0.26-14.61zm-201.86 14.42v9.64h6.16v-9.64h-6.16zm9.91 0v9.64h6.16v-9.64h-6.16zm10.35 0v9.64h6.16v-9.64h-6.16zm9.47 0v9.64h6.16 0.44v-9.64h-0.44-6.16zm9.91 0v9.64h6.16v-9.64h-6.16zm10.35 0v9.64h6.16v-9.64h-6.16zm9.78 0v9.64h0.13 6.03 0.13v-9.64h-0.13-6.03-0.13zm9.91 0v9.64h6.16v-9.64h-6.16zm10.35 0v9.64h6.16v-9.64h-6.16zm9.47 0v9.64h6.16 0.44v-9.64h-0.44-6.16zm9.9 0v9.64h6.17v-9.64h-6.17zm10.36 0v9.64h6.16v-9.64h-6.16zm9.91 0v9.64h6.16v-9.64h-6.16zm96.61 0.45v9.59h6.16v-9.59h-6.16zm9.9 0v9.59h6.17v-9.59h-6.17zm10.36 0v9.59h6.16v-9.59h-6.16zm9.46 0v9.59h6.16 0.45v-9.59h-0.45-6.16zm9.91 0v9.59h6.16v-9.59h-6.16zm10.35 0v9.59h6.17v-9.59h-6.17zm9.79 0v9.59h0.12 6.04 0.12v-9.59h-0.12-6.04-0.12zm9.9 0v9.59h6.17v-9.59h-6.17zm10.36 0v9.59h6.16v-9.59h-6.16zm9.46 0v9.59h6.16 0.45v-9.59h-0.45-6.16zm9.91 0v9.59h6.16v-9.59h-6.16zm10.35 0v9.59h6.16v-9.59h-6.16zm9.91 0v9.59h6.16v-9.59h-6.16zm-203.25 3.69h4.76v20.8h-4.76v-20.8zm7.62 0h4.7v20.8h-4.7v-20.8zm12.77 0h4.76v20.8h-4.76v-20.8zm7.62 0h4.7v20.8h-4.7v-20.8zm13.15 0h4.76v20.8h-4.76v-20.8zm7.62 0h4.7v20.8h-4.7v-20.8zm12.77 0h4.76v20.8h-4.76v-20.8zm7.62 0h4.7v20.8h-4.7v-20.8zm-201.86 10.3v9.6h6.16v-9.6h-6.16zm9.91 0v9.6h6.16v-9.6h-6.16zm10.35 0v9.6h6.16v-9.6h-6.16zm9.47 0v9.6h6.16 0.44v-9.6h-0.44-6.16zm9.91 0v9.6h6.16v-9.6h-6.16zm10.35 0v9.6h6.16v-9.6h-6.16zm9.78 0v9.6h0.13 6.03 0.13v-9.6h-0.13-6.03-0.13zm9.91 0v9.6h6.16v-9.6h-6.16zm10.35 0v9.6h6.16v-9.6h-6.16zm9.47 0v9.6h6.16 0.44v-9.6h-0.44-6.16zm9.9 0v9.6h6.17v-9.6h-6.17zm10.36 0v9.6h6.16v-9.6h-6.16zm9.91 0v9.6h6.16v-9.6h-6.16zm96.61 0.4v9.7h6.16v-9.7h-6.16zm9.9 0v9.7h6.17v-9.7h-6.17zm10.36 0v9.7h6.16v-9.7h-6.16zm9.46 0v9.7h6.16 0.45v-9.7h-0.45-6.16zm9.91 0v9.7h6.16v-9.7h-6.16zm10.35 0v9.7h6.17v-9.7h-6.17zm9.79 0v9.7h0.12 6.04 0.12v-9.7h-0.12-6.04-0.12zm9.9 0v9.7h6.17v-9.7h-6.17zm10.36 0v9.7h6.16v-9.7h-6.16zm9.46 0v9.7h6.16 0.45v-9.7h-0.45-6.16zm9.91 0v9.7h6.16v-9.7h-6.16zm10.35 0v9.7h6.16v-9.7h-6.16zm9.91 0v9.7h6.16v-9.7h-6.16z" />
          </svg>
        ) : location.code === 'UK' ? (
          <svg
            viewBox="0 0 205 740"
            className="w-full h-full fill-[#fff] stroke-[#fff]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g id="ben_parts">
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   103.375,733.499 18,733.499 18,687.063 103.375,687.063 104.626,687.063 190.188,687.063 190.188,733.499 104.626,733.499  " id="polygon2" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   103.375,733.499 18,733.499 18,687.063 103.375,687.063 104.626,687.063 190.188,687.063 190.188,733.499 104.626,733.499  " id="polygon4" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   102.188,687.063 18,687.063 18,664.063 103.375,664.063 104.626,664.063 190.188,664.063 190.188,687.063 105.938,687.063    190.188,687.063 190.188,664.063 104.626,664.063 190.188,664.063 190.188,687.063 105.938,687.063  " id="polygon6" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   102.188,687.063 18,687.063 18,664.063 103.375,664.063 104.626,664.063 190.188,664.063 190.188,687.063 105.938,687.063    190.188,687.063 190.188,664.063 104.626,664.063 190.188,664.063 190.188,687.063 105.938,687.063  " id="polygon8" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   103.375,664.063 18,664.063 18,559.313 104.626,559.313 103.375,559.313 190.188,559.313 190.188,664.063 104.626,664.063  " id="polygon10" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   103.375,664.063 18,664.063 18,559.313 104.626,559.313 103.375,559.313 190.188,559.313 190.188,664.063 104.626,664.063  " id="polygon12" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   100.813,559.313 11.125,559.313 11.125,543.499 102.188,543.499 103.375,543.499 194.313,543.499 194.313,559.313 104.626,559.313     " id="polygon14" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   100.813,559.313 11.125,559.313 11.125,543.499 102.188,543.499 103.375,543.499 194.313,543.499 194.313,559.313 104.626,559.313     " id="polygon16" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   103.375,508.438 19,508.438 19,543.499 104.626,543.499 190.188,543.499 190.188,508.438 105.938,508.438  " id="polygon18" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   103.375,508.438 19,508.438 19,543.499 104.626,543.499 190.188,543.499 190.188,508.438 105.938,508.438  " id="polygon20" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="195.876" y1="687.063" x2="12.125" y2="687.063" id="line22" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="194.313" y1="663.938" x2="11.125" y2="663.938" id="line24" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="201.563" y1="543.499" x2="5.438" y2="543.499" id="line26" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="200.438" y1="508.438" x2="5.438" y2="508.438" id="line28" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="173.626" y1="559.313" x2="173.626" y2="733.499" id="line30" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="159.938" y1="559.313" x2="159.938" y2="733.499" id="line32" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="146.126" y1="559.313" x2="146.126" y2="733.499" id="line34" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="132.438" y1="559.313" x2="132.438" y2="733.499" id="line36" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="118.626" y1="559.313" x2="118.626" y2="733.499" id="line38" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="104.626" y1="559.313" x2="104.626" y2="733.499" id="line40" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="90.5" y1="559.313" x2="90.5" y2="733.499" id="line42" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="76.688" y1="559.313" x2="76.688" y2="733.499" id="line44" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="63" y1="559.313" x2="63" y2="733.499" id="line46" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="49.188" y1="559.313" x2="49.188" y2="733.499" id="line48" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="35.5" y1="559.313" x2="35.5" y2="733.499" id="line50" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="180.313" y1="543.499" x2="180.313" y2="558.624" id="line52" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="163.063" y1="543.499" x2="163.063" y2="558.624" id="line54" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="146.001" y1="543.499" x2="146.001" y2="558.624" id="line56" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="128.751" y1="543.499" x2="128.751" y2="558.624" id="line58" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="111.188" y1="543.499" x2="111.188" y2="558.624" id="line60" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="93.938" y1="543.499" x2="93.938" y2="558.624" id="line62" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="76.563" y1="543.499" x2="76.563" y2="558.624" id="line64" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="59.313" y1="543.499" x2="59.313" y2="558.624" id="line66" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="42.188" y1="543.499" x2="42.188" y2="558.624" id="line68" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="24.813" y1="543.499" x2="24.813" y2="558.624" id="line70" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="35.5" y1="543.499" x2="35.5" y2="508.438" id="line72" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="49.188" y1="543.499" x2="49.188" y2="508.438" id="line74" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="63" y1="543.499" x2="63" y2="508.438" id="line76" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="76.688" y1="543.499" x2="76.688" y2="508.438" id="line78" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="90.5" y1="543.499" x2="90.5" y2="508.438" id="line80" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="104.626" y1="543.499" x2="104.626" y2="508.438" id="line82" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="118.313" y1="543.499" x2="118.313" y2="508.438" id="line84" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="132.438" y1="543.499" x2="132.438" y2="508.438" id="line86" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="146.126" y1="543.499" x2="146.126" y2="508.438" id="line88" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="159.688" y1="543.499" x2="159.688" y2="508.438" id="line90" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="173.626" y1="543.499" x2="173.626" y2="508.438" id="line92" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   190.188,543.499 193.876,540.499 196.688,536.813 199.126,532.813 200.251,528.124 200.251,523.563 199.126,518.749    196.688,514.874 193.876,511.188 190.188,508.438  " id="polygon94" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   190.188,543.499 193.876,540.499 196.688,536.813 199.126,532.813 200.251,528.124 200.251,523.563 199.126,518.749    196.688,514.874 193.876,511.188 190.188,508.438  " id="polygon96" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="19,543.499    15.125,540.499 11.875,536.813 9.875,532.813 8.688,528.124 8.688,523.563 9.875,518.749 11.875,514.874 15.125,511.188    19,508.438  " id="polygon98" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="19,543.499    15.125,540.499 11.875,536.813 9.875,532.813 8.688,528.124 8.688,523.563 9.875,518.749 11.875,514.874 15.125,511.188    19,508.438  " id="polygon100" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="13.25,504.063    13.25,390.438 16.688,390.438 16.688,376.499 188.751,376.499 188.751,390.438 192.313,390.438 192.313,504.063  " id="polygon102" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="13.25,504.063    13.25,390.438 16.688,390.438 16.688,376.499 188.751,376.499 188.751,390.438 192.313,390.438 192.313,504.063  " id="polygon104" />
              <rect x="53.625" y="393.749" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="98.5" height="101.625" id="rect106" />
              <rect x="53.625" y="393.749" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="98.5" height="101.625" id="rect108" />
              <polyline fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   163.376,504.063 163.376,393.749 185.313,393.749 185.313,504.063 177.188,504.063 177.188,393.749 171.376,393.749    171.376,504.063  " id="polyline110" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="163.376" y1="470.813" x2="185.313" y2="470.813" id="line112" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="163.376" y1="458.874" x2="185.313" y2="458.874" id="line114" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="163.376" y1="429.624" x2="185.313" y2="429.624" id="line116" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="163.376" y1="419.688" x2="185.313" y2="419.688" id="line118" />
              <polyline fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   20.375,504.063 20.375,393.749 42.375,393.749 42.375,504.063 34.375,504.063 34.375,393.749 28.5,393.749 28.5,504.063  " id="polyline120" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="20.375" y1="470.813" x2="42.375" y2="470.813" id="line122" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="20.375" y1="458.874" x2="42.375" y2="458.874" id="line124" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="20.375" y1="429.624" x2="42.375" y2="429.624" id="line126" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="20.375" y1="419.688" x2="42.375" y2="419.688" id="line128" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="6.563" y1="384.874" x2="199.563" y2="384.874" id="line130" />
              <polygon fill="#000" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   102.188,490.938 100.813,490.938 93.5,489.374 86.813,487.063 80.438,483.374 74.563,479.124 69.875,473.688 65.75,467.813    62.438,461.124 60.75,454.563 59.625,447.438 59.75,440.313 61.188,433.188 63.438,426.499 67,420.374 71.438,414.688    76.688,409.563 82.688,405.874 89.25,402.688 96.063,400.563 103.5,399.313 103.375,399.313 104.626,399.438 112.063,400.563    119.063,403.249 125.313,406.438 131.126,410.999 136.563,415.938 140.251,421.499 143.813,427.938 146.126,434.749    147.251,441.874 146.813,448.749 145.688,455.874 143.563,462.874 140.251,468.999 136.001,475.124 130.751,480.124    125.001,484.249 118.626,487.499 111.751,489.813 104.626,490.938  " id="polygon132" />
              <path fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M102.188,490.938   c-55.596-3.919-54.46-90.533,1.188-91.625c20.958-0.411,45.177,22.151,43.807,43.636   C145.598,467.793,129.345,490.903,102.188,490.938z" id="path134" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="103.375" y1="405.438" x2="103.375" y2="412.563" id="line136" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="123.001" y1="411.124" x2="119.438" y2="418.374" id="line138" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="136.563" y1="427.063" x2="130.001" y2="429.624" id="line140" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="142.563" y1="445.624" x2="135.876" y2="445.624" id="line142" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="138.001" y1="461.874" x2="132.438" y2="460.438" id="line144" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="123.001" y1="479.374" x2="119.438" y2="472.124" id="line146" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="102.813" y1="484.813" x2="102.813" y2="479.124" id="line148" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="83.688" y1="479.374" x2="87.25" y2="472.124" id="line150" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="69" y1="461.874" x2="74.563" y2="460.438" id="line152" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="64" y1="445.624" x2="71.313" y2="445.624" id="line154" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="66.75" y1="432.938" x2="73.688" y2="435.499" id="line156" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="69.875" y1="427.063" x2="76.688" y2="429.624" id="line158" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="83.688" y1="411.124" x2="87.25" y2="418.374" id="line160" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="129.001" y1="437.063" x2="95.25" y2="448.749" id="line162" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="140.001" y1="432.938" x2="133.438" y2="435.499" id="line164" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="102.188" y1="438.749" x2="102.188" y2="460.438" id="line166" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="102.188" y1="473.688" x2="102.188" y2="466.249" id="line168" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   33.375,323.188 29.938,348.125 29.938,376.313 176.626,376.313 176.626,348.125 173.626,323.188  " id="polygon170" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   33.375,323.188 29.938,348.125 29.938,376.313 176.626,376.313 176.626,348.125 173.626,323.188  " id="polygon172" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   102.188,316.313 33.375,316.313 33.375,323.188 102.188,323.188 104.626,323.188 173.626,323.188 173.626,316.313 104.626,316.313     " id="polygon174" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   102.188,316.313 33.375,316.313 33.375,323.188 102.188,323.188 104.626,323.188 173.626,323.188 173.626,316.313 104.626,316.313     " id="polygon176" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   100.063,316.313 38.625,316.313 38.625,307.813 43.063,302.5 49.5,292.688 52.75,283.25 55.875,273.313 58.188,265.063 59,256.625    63.438,256.625 63.438,193.375 67.75,193.375 67.75,189.375 102.188,189.375 136.563,189.375 136.563,193.375 141.251,193.375    141.251,256.625 145.376,256.625 146.688,265.063 148.563,273.313 152.126,283.25 155.126,292.688 161.501,302.5 165.813,307.813    165.813,316.313 104.626,316.313  " id="polygon178" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   100.063,316.313 38.625,316.313 38.625,307.813 43.063,302.5 49.5,292.688 52.75,283.25 55.875,273.313 58.188,265.063 59,256.625    63.438,256.625 63.438,193.375 67.75,193.375 67.75,189.375 102.188,189.375 136.563,189.375 136.563,193.375 141.251,193.375    141.251,256.625 145.376,256.625 146.688,265.063 148.563,273.313 152.126,283.25 155.126,292.688 161.501,302.5 165.813,307.813    165.813,316.313 104.626,316.313  " id="polygon180" />
              <rect x="150.251" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.687" height="19.625" id="rect182" />
              <rect x="150.251" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.687" height="19.625" id="rect184" />
              <rect x="130.438" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.563" height="19.625" id="rect186" />
              <rect x="130.438" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.563" height="19.625" id="rect188" />
              <rect x="110.313" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.75" height="19.625" id="rect190" />
              <rect x="110.313" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.75" height="19.625" id="rect192" />
              <rect x="90.375" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.687" height="19.625" id="rect194" />
              <rect x="90.375" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.687" height="19.625" id="rect196" />
              <rect x="70.438" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.688" height="19.625" id="rect198" />
              <rect x="70.438" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.688" height="19.625" id="rect200" />
              <rect x="50.5" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.562" height="19.625" id="rect202" />
              <rect x="50.5" y="343.875" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="4.562" height="19.625" id="rect204" />
              <rect x="141.563" y="297.125" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.563" height="12.375" id="rect206" />
              <rect x="141.563" y="297.125" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.563" height="12.375" id="rect208" />
              <rect x="113.751" y="297.125" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.437" height="12.375" id="rect210" />
              <rect x="113.751" y="297.125" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.437" height="12.375" id="rect212" />
              <rect x="85.688" y="297.125" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.438" height="12.375" id="rect214" />
              <rect x="85.688" y="297.125" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.438" height="12.375" id="rect216" />
              <rect x="57.625" y="297.125" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.562" height="12.375" id="rect218" />
              <rect x="57.625" y="297.125" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.562" height="12.375" id="rect220" />
              <rect x="127.751" y="269.438" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.375" height="12.437" id="rect222" />
              <rect x="127.751" y="269.438" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.375" height="12.437" id="rect224" />
              <rect x="100.813" y="269.438" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.375" height="12.437" id="rect226" />
              <rect x="100.813" y="269.438" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.375" height="12.437" id="rect228" />
              <rect x="73.688" y="269.438" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.563" height="12.437" id="rect230" />
              <rect x="73.688" y="269.438" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="6.563" height="12.437" id="rect232" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="179.063" y1="317.313" x2="27.938" y2="317.313" id="line234" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="173.626" y1="316.313" x2="173.626" y2="285.688" id="line236" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="176.501" y1="285.688" x2="175.313" y2="283.25" id="line238" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="169.751" y1="285.688" x2="170.751" y2="283.25" id="line240" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="173.938" y1="270.75" x2="173.938" y2="278.875" id="line242" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="33.688" y1="316.313" x2="33.688" y2="285.688" id="line244" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="37.063" y1="286" x2="35.625" y2="283.438" id="line246" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="30.688" y1="286" x2="31.5" y2="283.438" id="line248" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="34.938" y1="271" x2="34.938" y2="279.125" id="line250" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="136.563" y1="256.625" x2="132.751" y2="256.625" id="line252" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="127.188" y1="256.625" x2="122.751" y2="256.625" id="line254" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="117.438" y1="256.625" x2="113.501" y2="256.625" id="line256" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="107.751" y1="256.625" x2="103.5" y2="256.625" id="line258" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="98.063" y1="256.625" x2="93.688" y2="256.625" id="line260" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="88.375" y1="256.625" x2="84.125" y2="256.625" id="line262" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="78.563" y1="256.625" x2="74.438" y2="256.625" id="line264" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="69" y1="256.625" x2="64.563" y2="256.625" id="line266" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="126.438" y1="223.875" x2="126.438" y2="244.5" id="line268" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="117.063" y1="223.875" x2="117.063" y2="244.5" id="line270" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="107.188" y1="223.875" x2="107.188" y2="244.5" id="line272" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="97.625" y1="223.875" x2="97.625" y2="244.5" id="line274" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="87.938" y1="223.875" x2="87.938" y2="244.5" id="line276" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="77.875" y1="223.875" x2="77.875" y2="244.5" id="line278" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="129.001" y1="211.188" x2="129.001" y2="217" id="line280" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="121.626" y1="211.188" x2="121.626" y2="217" id="line282" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="113.751" y1="211.188" x2="113.751" y2="217" id="line284" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="106.501" y1="211.188" x2="106.501" y2="217" id="line286" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="98.813" y1="211.188" x2="98.813" y2="217" id="line288" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="98.813" y1="211.188" x2="98.813" y2="217" id="line288" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="91.375" y1="211.188" x2="91.375" y2="217" id="line290" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="83.813" y1="211.188" x2="83.813" y2="217" id="line292" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="76" y1="211.188" x2="76" y2="217" id="line294" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="141.251" y1="204.625" x2="63.75" y2="204.625" id="line296" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="139.001" y1="194.75" x2="65.75" y2="194.75" id="line298" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   100.063,189.375 68.313,189.375 72.563,178.5 77,165.813 83.813,144.063 86.688,133.375 89.563,123.063 92.813,107.125 95.25,91    98.063,56.688 93.688,55.5 92.25,45.688 101.625,39 110.938,45.688 109.938,55.5 105.626,56.688 106.501,73.625 108.501,91.313    110.938,106.813 113.751,123.063 119.438,144.438 126.438,165.813 131.313,178.25 136.001,189.375 103.5,189.375  " id="polygon300" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   100.063,189.375 68.313,189.375 72.563,178.5 77,165.813 83.813,144.063 86.688,133.375 89.563,123.063 92.813,107.125 95.25,91    98.063,56.688 93.688,55.5 92.25,45.688 101.625,39 110.938,45.688 109.938,55.5 105.626,56.688 106.501,73.625 108.501,91.313    110.938,106.813 113.751,123.063 119.438,144.438 126.438,165.813 131.313,178.25 136.001,189.375 103.5,189.375  " id="polygon302" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="141.251" y1="199.063" x2="141.251" y2="146.625" id="line304" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="135.876" y1="157.563" x2="147.563" y2="157.563" id="line306" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="141.251" y1="142.188" x2="141.251" y2="139.625" id="line308" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="63.75" y1="199.063" x2="63.75" y2="146.625" id="line310" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="58.188" y1="157.563" x2="70" y2="157.563" id="line312" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="63.75" y1="142.188" x2="63.75" y2="139.625" id="line314" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="130.563" y1="189.375" x2="130.313" y2="175.25" id="line316" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="124.188" y1="189.375" x2="124.188" y2="158.875" id="line318" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="117.438" y1="189.375" x2="117.438" y2="138.063" id="line320" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="110.938" y1="189.375" x2="110.938" y2="108.563" id="line322" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="104.626" y1="189.375" x2="104.626" y2="56.688" id="line324" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="73" y1="189.375" x2="73" y2="176.375" id="line326" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="79.688" y1="189.375" x2="79.688" y2="157.875" id="line328" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="86.25" y1="189.375" x2="86.25" y2="135.625" id="line330" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="92.813" y1="189.375" x2="92.813" y2="108.563" id="line332" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="98.938" y1="189.375" x2="98.938" y2="56.688" id="line334" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="108.938" y1="45.688" x2="95.063" y2="45.688" id="line336" />
              <line fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" x1="101.938" y1="39" x2="101.938" y2="17.313" id="line338" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   106.501,12.188 105.626,9.938 104.063,8.188 101.625,7.5 99.25,8.188 97.5,9.938 96.813,12.188 97.5,14.625 99.25,16.313    101.625,16.938 104.063,16.313 105.626,14.625  " id="polygon340" />
              <polygon fill="#fff" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="   106.501,12.188 105.626,9.938 104.063,8.188 101.625,7.5 99.25,8.188 97.5,9.938 96.813,12.188 97.5,14.625 99.25,16.313    101.625,16.938 104.063,16.313 105.626,14.625  " id="polygon342" />
            </g>
          </svg>
        ) : (
          <svg
            viewBox="0 0 375.89999 1541.4"
            className="w-full h-full fill-[#fff]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 1516.6v-24.75h14.4c9.4 0 14.4-0.1042 14.4-0.3 0-0.1929 3-0.3 8.4-0.3h8.4v-7.9462-7.9461l10.575-0.079 10.575-0.079 0.08006-7.725 0.08006-7.725h11.095 11.095v-96.909c0-92.022 0.02649-96.919 0.525-97.099 0.28875-0.1042 0.87191-0.4293 1.2959-0.7225 0.93397-0.6459 6.422-2.0526 12.129-3.1089 2.31-0.4276 4.841-0.922 5.6246-1.0987l1.4246-0.3213 0.0754-99.762 0.0755-99.762 3.75-1.7271c2.0625-0.9499 6.0788-2.5133 8.925-3.4742l5.175-1.7471v-115.46-115.46l0.675-0.57048c3.7826-3.1968 18.413-11.376 20.349-11.376 0.16701 0 0.27556-54.838 0.27556-139.22v-139.22l1.0375-2.2455c3.1668-6.854 7.7704-12.417 14.276-17.252 4.0261-2.992 3.5769 1.5138 3.5853-35.963 0.007-30.721 0.0357-32.434 0.60653-36.133 1.05-6.8027 1.9646-10.02 3.4671-12.196l0.74497-1.0789 0.0661-33.721 0.0661-33.721 0.95868-1.9587c1.3677-2.7944 3.6859-5.7251 6.1124-7.7275l2.0959-1.7296-0.0127-51.237-0.0127-51.237 0.76479-3.7123c1.2731-6.1795 2.5641-10.014 4.4609-13.251l1.0827-1.8474v-41.017c0-40.18 0.0123-41.058 0.6015-43.037 1.0457-3.5113 2.3063-6.2084 4.1807-8.9452l1.8178-2.6541v-24.798-24.798h1.65 1.65v-41.25-41.25h1.8 1.8v48.9 48.9h1.5 1.5v29.4c0 25.933 0.0531 29.4 0.45 29.4 0.39603 0 0.45 2.7167 0.45 22.65v22.65h2.4 2.4v47.85 47.85h2.1 2.1v42.124 42.124l1.8826 1.3434c1.0354 0.73884 2.7904 2.3057 3.9 3.482l2.0174 2.1386v53.844c0 36.137 0.0999 53.844 0.30373 53.844 1.1961 0 3.7563 5.9158 4.6741 10.8l0.7046 3.75 0.009 56.775c0.005 31.226 0.12275 56.775 0.26201 56.775 0.32742 0 7.5531 5.6992 10.766 8.4916l2.4834 2.1584 0.00021 54.6 0.00021 54.6 0.81329 4.5 0.8133 4.5 0.16026 69.427 0.16026 69.427 3.15 1.1261c1.7325 0.61935 5.3438 2.2375 8.025 3.5959l4.875 2.4698 0.001 112.38 0.001 112.38 6.3739 1.6257c3.5056 0.8942 6.8126 1.7443 7.3489 1.8891l0.975 0.2634v93.436 93.436l0.975-0.01c0.53625 0 4.1138 0.4208 7.95 0.9441l6.975 0.9515v71.656 71.656h10.35 10.35v7.8 7.8h10.2 10.2v8.1 8.1h22.05 22.05v24.75 24.75h-187.95-187.95v-24.75z" />
          </svg>
        )}
      </div>
    </motion.div>
  );
}
