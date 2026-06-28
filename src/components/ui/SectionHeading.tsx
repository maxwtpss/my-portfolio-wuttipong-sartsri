import React from 'react';
import { motion } from 'motion/react';

export const SectionHeading = ({ title, subtitle }: { title: string, subtitle: React.ReactNode }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-20 lg:mb-24"
    >
        <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#B28753] mb-4 md:mb-6">{title}</h2>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
            {subtitle}
        </div>
    </motion.div>
);
