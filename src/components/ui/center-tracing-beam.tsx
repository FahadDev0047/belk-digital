"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface NodePosition {
  /** Fraction of the total SVG height (0–1) where this node sits */
  y: number;
  /** true = branch goes left, false = branch goes right */
  left: boolean;
}

interface CenterTracingBeamProps {
  children: React.ReactNode;
  /** Positions of branch nodes — provided by the parent after layout */
  nodes: NodePosition[];
  className?: string;
}

const BRANCH_LEN = 60; // px — horizontal arm length
const DOT_R = 8;       // circle radius
const LINE_W = 500;    // viewBox width

export function CenterTracingBeam({ children, nodes, className }: CenterTracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]),
    { stiffness: 50, damping: 20 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 200]),
    { stiffness: 50, damping: 20 }
  );

  const CX = LINE_W / 2; // center x
  const MOBILE_CX = 16;  // from left
  const MOBILE_BRANCH_LEN = 24;

  const buildDesktopPath = () => {
    if (!svgHeight) return "";
    let d = `M ${CX} 0`;
    nodes.forEach(({ y, left }) => {
      const nodeY = y * svgHeight;
      const branchX = left ? CX - BRANCH_LEN : CX + BRANCH_LEN;
      d += ` V ${nodeY - 12}`;
      d += ` L ${left ? CX - 20 : CX + 20} ${nodeY}`;
      d += ` H ${branchX}`;
      d += ` M ${CX} ${nodeY}`;
    });
    d += ` V ${svgHeight}`;
    return d;
  };

  const buildMobilePath = () => {
    if (!svgHeight) return "";
    let d = `M ${MOBILE_CX} 0`;
    nodes.forEach(({ y }) => {
      const nodeY = y * svgHeight;
      const branchX = MOBILE_CX + MOBILE_BRANCH_LEN;
      d += ` V ${nodeY - 12}`;
      d += ` L ${MOBILE_CX + 12} ${nodeY}`;
      d += ` H ${branchX}`;
      d += ` M ${MOBILE_CX} ${nodeY}`;
    });
    d += ` V ${svgHeight}`;
    return d;
  };

  const desktopPath = buildDesktopPath();
  const mobilePath = buildMobilePath();

  return (
    <motion.div ref={ref} className={cn("relative w-full", className)}>

      {/* ================= DESKTOP SVG (Centered) ================= */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        <svg
          width={LINE_W}
          height={svgHeight}
          viewBox={`0 0 ${LINE_W} ${svgHeight}`}
          className="absolute left-1/2 -translate-x-1/2"
          fill="none"
        >
          <path d={desktopPath} stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
          <path d={desktopPath} stroke="url(#centerGradient)" strokeWidth="1.5" className="motion-reduce:hidden" />

          {nodes.map(({ y, left }, i) => {
            const nodeY = y * svgHeight;
            const circleX = left ? CX - BRANCH_LEN : CX + BRANCH_LEN;
            return (
              <g key={i}>
                <circle cx={circleX} cy={nodeY} r={DOT_R} stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                <circle cx={circleX} cy={nodeY} r={3.5} fill="rgba(59,130,246,0.6)" />
              </g>
            );
          })}

          <circle cx={CX} cy={0} r={DOT_R} stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
          <circle cx={CX} cy={0} r={3.5} fill="rgba(59,130,246,0.7)" />

          <defs>
            <motion.linearGradient id="centerGradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop offset="0.1" stopColor="#18CCFC" />
              <stop offset="0.5" stopColor="#18CCFC" />
              <stop offset="1" stopColor="#18CCFC" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      {/* ================= MOBILE SVG (Left-aligned) ================= */}
      <div className="absolute inset-0 pointer-events-none z-10 block md:hidden">
        <svg
          width={80}
          height={svgHeight}
          viewBox={`0 0 80 ${svgHeight}`}
          className="absolute left-6"
          fill="none"
        >
          <path d={mobilePath} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <path d={mobilePath} stroke="url(#mobileGradient)" strokeWidth="1.5" className="motion-reduce:hidden" />

          {nodes.map(({ y }, i) => {
            const nodeY = y * svgHeight;
            const circleX = MOBILE_CX + MOBILE_BRANCH_LEN;
            return (
              <g key={i}>
                <circle cx={circleX} cy={nodeY} r={DOT_R} stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                <circle cx={circleX} cy={nodeY} r={3.5} fill="rgba(59,130,246,0.6)" />
              </g>
            );
          })}

          <circle cx={MOBILE_CX} cy={0} r={DOT_R} stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
          <circle cx={MOBILE_CX} cy={0} r={3.5} fill="rgba(59,130,246,0.7)" />

          <defs>
            <motion.linearGradient id="mobileGradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop offset="0.1" stopColor="#18CCFC" />
              <stop offset="0.5" stopColor="#18CCFC" />
              <stop offset="1" stopColor="#18CCFC" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
