import React from 'react';
import { Translation } from '../../translations';
import { SectionHeading } from '../ui/SectionHeading';
import { ExperienceRow } from '../ui/ExperienceRow';

interface ExperienceSectionProps {
  t: Translation;
}

export function ExperienceSection({ t }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeading 
                title={t.experience.title} 
                subtitle={<>{t.experience.subtitle1} <br className="hidden sm:block"/> {t.experience.subtitle2}</>}
            />

            <div className="space-y-12 md:space-y-16 lg:space-y-20">
                <ExperienceRow 
                    role={t.experience.jobs[0].role}
                    company={t.experience.jobs[0].company}
                    period={t.experience.jobs[0].period}
                    description={t.experience.jobs[0].description}
                    achievements={t.experience.jobs[0].achievements}
                />

                <div className="h-px bg-zinc-200 w-full" />

                <ExperienceRow 
                    role={t.experience.jobs[1].role}
                    company={t.experience.jobs[1].company}
                    period={t.experience.jobs[1].period}
                    description={t.experience.jobs[1].description}
                    achievements={t.experience.jobs[1].achievements}
                />
            </div>
        </div>
    </section>
  );
}
