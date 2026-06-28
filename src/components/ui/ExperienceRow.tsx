import React from 'react';
import { motion } from 'motion/react';

export function ExperienceRow({ role, company, period, description, achievements }: { role: string, company: string, period: string, description: string, achievements: string[] }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-16"
        >
            <div className="md:col-span-12 lg:col-span-4">
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#B28753] mb-2 md:mb-3">{period}</p>
                <h3 className="text-2xl md:text-3xl font-medium text-zinc-900 mb-2 md:mb-3 leading-tight">{role}</h3>
                <p className="text-lg md:text-xl text-zinc-500">{company}</p>
            </div>
            <div className="md:col-span-12 lg:col-span-8">
                <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 leading-relaxed mb-6 md:mb-10 font-light">
                    {description}
                </p>
                <div className="space-y-3 md:space-y-4">
                    {achievements.map((item, idx) => {
                        const parts = item.split(': ');
                        return (
                            <div key={idx} className="flex items-start gap-3 md:gap-4 text-zinc-600 border-l border-[#B28753]/30 pl-4 md:pl-6 py-0.5 md:py-1">
                                {parts.length > 1 ? (
                                    <span className="text-base md:text-lg"><strong className="text-zinc-900 font-medium">{parts[0]}:</strong> {parts[1]}</span>
                                ) : (
                                    <span className="text-base md:text-lg">{item}</span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
