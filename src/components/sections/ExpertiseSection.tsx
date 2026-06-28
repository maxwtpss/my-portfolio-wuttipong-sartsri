import React from 'react';
import { PenTool, Layout, BrainCircuit } from 'lucide-react';
import { Translation } from '../../translations';
import { SectionHeading } from '../ui/SectionHeading';
import { ExpertiseCard } from '../ui/ExpertiseCard';

interface ExpertiseSectionProps {
  t: Translation;
}

export function ExpertiseSection({ t }: ExpertiseSectionProps) {
  return (
    <section id="expertise" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeading 
                title={t.expertise.title} 
                subtitle={<>{t.expertise.subtitle1} <br className="hidden lg:block"/> {t.expertise.subtitle2}</>}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <ExpertiseCard 
                    title={t.expertise.cards[0].title}
                    icon={<PenTool className="w-6 h-6" />}
                    items={t.expertise.cards[0].items}
                />
                <ExpertiseCard 
                    title={t.expertise.cards[1].title}
                    icon={<Layout className="w-6 h-6" />}
                    items={t.expertise.cards[1].items}
                />
                <ExpertiseCard 
                    title={t.expertise.cards[2].title}
                    icon={<BrainCircuit className="w-6 h-6" />}
                    items={t.expertise.cards[2].items}
                />
            </div>
        </div>
    </section>
  );
}
