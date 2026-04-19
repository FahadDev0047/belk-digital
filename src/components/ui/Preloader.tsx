"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Show preloader for 2.5 seconds total
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303] overflow-hidden"
        >
          {/* Subtle radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

          <div className="relative flex flex-col items-center gap-6">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
                transition: { 
                  duration: 1, 
                  ease: "easeOut",
                  delay: 0.5 
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 1.1, 
                filter: "blur(5px)",
                transition: { duration: 0.4, ease: "easeIn" }
              }}
              className="relative"
            >
              <img 
                src="/logo.png" 
                alt="Belk Digital" 
                className="h-24 md:h-32 w-auto object-contain"
              />
              
              {/* Subtle glow behind logo */}
              <motion.div 
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-white/5 blur-2xl rounded-full -z-10"
              />
            </motion.div>

            {/* Loading Indicator */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: 120, 
                opacity: 1,
                transition: { duration: 1.5, ease: "easeInOut", delay: 1 }
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent relative overflow-hidden"
            >
              <motion.div
                animate={{ 
                  x: ["-100%", "100%"],
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
