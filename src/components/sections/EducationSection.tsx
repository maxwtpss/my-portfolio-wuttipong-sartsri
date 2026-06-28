import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { Translation } from '../../translations';

interface EducationSectionProps {
  t: Translation;
}

export function EducationSection({ t }: EducationSectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            
            <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-8 md:mb-10 lg:mb-16 flex items-center gap-3 md:gap-4">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-[#B28753]" /> {t.education.title}
                </h2>
                <div className="space-y-12">
                    <div className="relative pl-5 md:pl-6 border-l border-zinc-800">
                        <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-[#B28753] mt-1 md:mt-0"></div>
                        <p className="text-[#B28753] font-mono text-xs md:text-sm mb-2 md:mb-3">{t.education.period}</p>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-1 md:mb-2 text-zinc-100">{t.education.university}</h3>
                        <p className="text-lg md:text-xl text-zinc-400 mb-4 md:mb-6 leading-snug">{t.education.degree}</p>
                        <ul className="text-zinc-500 space-y-1.5 md:space-y-2 text-sm md:text-base">
                            <li>{t.education.major}</li>
                            <li>{t.education.minor}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-8 md:mb-10 lg:mb-16 flex items-center gap-3 md:gap-4">
                    <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-[#B28753]" /> {t.certifications.title}
                </h2>
                <div className="space-y-8 md:space-y-12">
                    {t.certifications.certs.map((cert, idx) => (
                        <div key={idx} className="group border-b border-zinc-800 pb-6 md:pb-10">
                            <p className="text-[#B28753] font-mono text-xs md:text-sm mb-2 md:mb-3">{cert.period}</p>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-3 text-zinc-100">{cert.name}</h3>
                            <p className="text-zinc-400 text-base md:text-lg">{cert.issuer}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  );
}
