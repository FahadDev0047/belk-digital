"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { Search, Map, PenTool, Rocket } from 'lucide-react'; // Removed ArrowRight

const icons = [Search, Map, PenTool, Rocket];

export function ApproachSection() {
    const { t, isRTL } = useLanguage();

    const containerAnim = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemAnim = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
    };

    return (
        <section className="py-32 bg-[#0B0515] relative overflow-hidden">
            {/* Ambient Lighting Effect */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[#6633ff]/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={cn("text-center max-w-4xl mx-auto mb-24 lg:mb-32", isRTL && "text-right")}
                >
                    <span className="text-xs font-bold tracking-[0.5em] uppercase text-[#cfff71] mb-6 block">
                        OUR METHODOLOGY
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter leading-tight">
                        {t.about.approach.title}
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto">
                        {t.about.approach.subtitle || 'Delivering digital success through a proven, structured methodology.'}
                    </p>
                </motion.div>

                {/* Vertical Zigzag Timeline Container */}
                <motion.div
                    variants={containerAnim}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Central Vertical Spine (Desktop only) */}
                    <div className="hidden lg:block absolute left-1/2 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

                    {/* Timeline Items */}
                    <div className="space-y-16 lg:space-y-24">
                        {t.about.approach.items.map((item: any, index: number) => {
                            const Icon = icons[index % icons.length];
                            const stepNumber = index + 1;
                            const isLeft = index % 2 === 0;

                            const renderVisual = (idx: number) => {
                                return (
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative w-full h-48 bg-[#120a22] rounded-md border border-white/5 flex items-center justify-center overflow-hidden group-hover:border-white/10 transition-all duration-500 mb-8"
                                    >
                                        {/* Dark Mode Abstract UI Elements */}
                                        {idx === 0 && (
                                            <div className="w-2/3 h-2/3 bg-white/5 rounded-md shadow-inner border border-white/10 flex flex-col p-4 gap-3 relative backdrop-blur-sm">
                                                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center mb-1 border border-white/10">
                                                    <Icon className="w-5 h-5 text-white/70 group-hover:text-[#cfff71] transition-colors" />
                                                </div>
                                                <div className="w-full h-2 bg-white/10 rounded-full" />
                                                <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                                                <motion.div
                                                    animate={{ x: [0, 10, 0], opacity: [0.2, 1, 0.2] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="absolute right-4 top-4 w-4 h-4 bg-[#cfff71] rounded-full shadow-[0_0_15px_rgba(207,255,113,0.5)]"
                                                />
                                            </div>
                                        )}
                                        {idx === 1 && (
                                            <div className="w-full h-full p-4 flex items-center justify-center relative">
                                                <div className="absolute inset-x-8 top-1/2 h-px bg-white/10" />
                                                <div className="w-16 h-16 bg-[#05030b] rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 z-10 flex items-center justify-center group-hover:border-[#cfff71]/30 transition-colors">
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>
                                                <motion.div
                                                    className="absolute w-3 h-3 bg-[#cfff71] rounded-full shadow-[0_0_10px_rgba(207,255,113,0.8)]"
                                                    animate={{ x: [-50, 50], opacity: [0, 1, 0] }}
                                                    transition={{ duration: 2.5, repeat: Infinity }}
                                                />
                                            </div>
                                        )}
                                        {idx === 2 && (
                                            <div className="relative w-32 h-40 bg-white/5 border border-white/10 rounded-md rotate-6 flex flex-col items-center pt-6 shadow-2xl backdrop-blur-md group-hover:border-white/20 transition-colors">
                                                <Icon className="w-8 h-8 text-white mb-4" />
                                                <div className="w-16 h-1.5 bg-white/20 rounded-full mb-3" />
                                                <div className="w-10 h-1.5 bg-white/10 rounded-full" />
                                                <motion.div
                                                    className="absolute -right-5 top-14 w-12 h-12 bg-[#0d0a1a] border border-white/10 rounded-sm flex items-center justify-center shadow-xl -rotate-12"
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity }}
                                                >
                                                    <div className="w-3 h-3 bg-[#cfff71] rounded-full shadow-[0_0_10px_rgba(207,255,113,0.5)]" />
                                                </motion.div>
                                            </div>
                                        )}
                                        {idx === 3 && (
                                            <div className="flex items-center gap-4">
                                                <motion.div
                                                    animate={{ y: [0, -10, 0] }}
                                                    transition={{ duration: 2.5, repeat: Infinity }}
                                                    className="w-16 h-16 bg-[#cfff71] text-black rounded-sm flex items-center justify-center shadow-[0_0_40px_rgba(207,255,113,0.3)]"
                                                >
                                                    <Icon className="w-8 h-8" />
                                                </motion.div>
                                                <div className="flex flex-col gap-2">
                                                    <div className="w-24 h-8 bg-white/10 rounded-sm border border-white/20 flex items-center justify-center text-[11px] font-black text-white tracking-[0.2em] backdrop-blur-sm">
                                                        {t.about.approach.growth || 'LAUNCH'}
                                                    </div>
                                                    <div className="w-16 h-4 bg-white/5 rounded-sm" />
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            };

                            return (
                                <motion.div
                                    key={index}
                                    variants={itemAnim}
                                    className="relative flex flex-col lg:flex-row items-center w-full group"
                                >
                                    {/* Physical Connecting Stepped Line (Desktop only) */}
                                    {/* This creates the right-down-right or left-down-left snake pathway to the center spine */}
                                    <div className={cn(
                                        "hidden lg:block absolute top-[50%] h-[2px] bg-gradient-to-r transition-all duration-700 w-[calc(50%-45%)]",
                                        isLeft 
                                            ? "left-[45%] from-white/10 to-[#cfff71]/30 group-hover:to-[#cfff71]" 
                                            : "right-[45%] from-[#cfff71]/30 to-white/10 group-hover:from-[#cfff71]"
                                    )} />

                                    {/* Center Node on Spine */}
                                    <div className="hidden lg:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full border-2 border-[#0B0515] bg-[#cfff71]/50 group-hover:bg-[#cfff71] -translate-x-1/2 -translate-y-1/2 z-20 transition-colors duration-500 shadow-[0_0_15px_rgba(207,255,113,0)] group-hover:shadow-[0_0_15px_rgba(207,255,113,0.8)]" />

                                    {/* Empty flex spacer for the opposite side on Desktop */}
                                    <div className={cn("hidden lg:block w-[45%]", isLeft ? "order-2" : "order-1")} />

                                    {/* Card Container */}
                                    <div className={cn(
                                        "w-full lg:w-[45%] relative z-10",
                                        isLeft ? "order-1" : "order-2"
                                    )}>
                                        <div className="bg-[#05030b] rounded-md p-8 md:p-10 border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-700 flex flex-col relative overflow-hidden shadow-2xl">
                                            
                                            {/* Faint Background Number for depth */}
                                            <div className="absolute top-6 right-6 text-[100px] font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 pointer-events-none select-none">
                                                0{stepNumber}
                                            </div>

                                            {/* Render Abstract Visual Stage Component */}
                                            {renderVisual(index)}

                                            <div className="relative z-10 flex flex-col items-start gap-4">
                                                
                                                <span className="text-[11px] font-black tracking-[0.3em] text-[#cfff71] uppercase">
                                                    {t.about.approach.stepLabels?.[index] || `PHASE 0${stepNumber}`}
                                                </span>

                                                <h3 className="text-2xl font-display font-bold text-white tracking-tight">{item.title}</h3>
                                                
                                                <p className="text-base text-white/40 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                                                    {item.description}
                                                </p>

                                                {/* Dynamic horizontal hover stroke */}
                                                <div className="w-12 h-1 bg-white/10 rounded-full mt-4 group-hover:bg-[#cfff71] group-hover:w-full transition-all duration-700" />
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
