import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { Translation } from '../../translations';

interface HeroSectionProps {
  t: Translation;
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-zinc-950 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#B28753]/20 blur-3xl md:blur-[80px] rounded-full opacity-70"></div>
            <div className="absolute bottom-1/4 right-1/8 w-72 h-72 md:w-96 md:h-96 bg-[#B28753]/10 blur-3xl md:blur-[80px] rounded-full opacity-70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pt-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-[13vw] sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[1.1] md:leading-none mb-8 md:mb-12 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    <span>{t.hero.firstName}</span>
                    <span>{t.hero.lastName}<span className="text-[#B28753]">.</span></span>
                </h1>
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
                    <div className="md:col-span-8">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                            {t.hero.role} <br className="hidden md:block" />
                            {t.hero.subtitle}
                        </p>
                    </div>
                    <div className="md:col-span-4 flex justify-start md:justify-end mt-4 md:mt-0">
                        <a href="#expertise" className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white text-zinc-950 rounded-full hover:bg-zinc-200 hover:scale-105 transition-all">
                            <ArrowDownRight className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
