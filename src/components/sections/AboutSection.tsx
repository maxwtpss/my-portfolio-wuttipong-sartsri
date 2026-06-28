import React from 'react';
import { Translation } from '../../translations';

interface AboutSectionProps {
  t: Translation;
}

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
             <div className="lg:col-span-4 order-2 lg:order-1">
                 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#B28753] mb-6 md:mb-8">{t.about.title}</h2>
                 <ul className="space-y-4 md:space-y-6 text-zinc-600">
                     <li className="flex gap-4"><span className="w-20 md:w-24 shrink-0 font-medium text-[#B28753] uppercase text-xs tracking-wider pt-0.5">{t.about.dob_label}</span> <span className="text-zinc-900">{t.about.dob_value}</span></li>
                     <li className="flex gap-4"><span className="w-20 md:w-24 shrink-0 font-medium text-[#B28753] uppercase text-xs tracking-wider pt-0.5">{t.about.phone_label}</span> <span className="text-zinc-900">094-8299360 <br/>063-8743559</span></li>
                     <li className="flex gap-4"><span className="w-20 md:w-24 shrink-0 font-medium text-[#B28753] uppercase text-xs tracking-wider pt-0.5">{t.about.email_label}</span> <span className="text-zinc-900 break-all">wuttipong.sartsri@gmail.com</span></li>
                     <li className="flex gap-4"><span className="w-20 md:w-24 shrink-0 font-medium text-[#B28753] uppercase text-xs tracking-wider pt-0.5">{t.about.location_label}</span> <span className="text-zinc-900 whitespace-pre-line">{t.about.location_value}</span></li>
                 </ul>
             </div>
             <div className="lg:col-span-8 order-1 lg:order-2">
                 <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.25] md:leading-tight mb-8 md:mb-12">
                     {t.about.description}
                 </h3>
                 <div className="flex flex-wrap gap-3">
                     {t.about.skills.map((skill) => (
                         <span key={skill} className="px-5 py-2.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-800">
                             {skill}
                         </span>
                     ))}
                 </div>
             </div>
        </div>
    </section>
  );
}
