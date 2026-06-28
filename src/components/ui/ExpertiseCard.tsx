import React from 'react';
import { motion } from 'motion/react';

export function ExpertiseCard({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 lg:p-10 bg-white rounded-3xl shadow-sm border border-zinc-100 flex flex-col h-full"
        >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B28753]/10 text-[#B28753] rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-[#B28753]/20">
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 md:mb-8 text-zinc-900">{title}</h3>
            <ul className="space-y-3 md:space-y-5">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 md:gap-4 text-zinc-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B28753] mt-2 md:mt-2.5 shrink-0" />
                        <span className="leading-relaxed text-base md:text-lg">{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
