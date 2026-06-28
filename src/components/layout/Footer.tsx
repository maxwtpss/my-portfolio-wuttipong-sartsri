import React from 'react';
import { Mail, Phone, Linkedin, Github, BookOpen } from 'lucide-react';
import { Translation } from '../../translations';

interface FooterProps {
  t: Translation;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer id="contact" className="py-16 md:py-24 lg:py-32 bg-zinc-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 md:mb-8">
                {t.contact.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-500 mb-10 md:mb-16 max-w-2xl mx-auto">
                {t.contact.subtitle}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                <a href="mailto:wuttipong.sartsri@gmail.com" className="inline-flex items-center gap-3 px-8 py-5 bg-zinc-900 text-white rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors w-full md:w-auto justify-center">
                    <Mail className="w-5 h-5" /> wuttipong.sartsri@gmail.com
                </a>
                <a href="tel:0948299360" className="inline-flex items-center gap-3 px-8 py-5 border border-zinc-300 text-zinc-900 rounded-full text-lg font-medium hover:bg-zinc-100 transition-colors w-full md:w-auto justify-center">
                    <Phone className="w-5 h-5" /> 094-8299360
                </a>
            </div>

            <div className="flex items-center justify-center gap-4 md:gap-8 mb-24">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 p-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded-full transition-all">
                    <Linkedin className="w-6 h-6" />
                    <span className="font-medium text-base hidden sm:block">LinkedIn</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-2 p-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded-full transition-all">
                    <Github className="w-6 h-6" />
                    <span className="font-medium text-base hidden sm:block">GitHub</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="flex items-center gap-2 p-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded-full transition-all">
                    <BookOpen className="w-6 h-6" />
                    <span className="font-medium text-base hidden sm:block">Medium</span>
                </a>
            </div>

            <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
                <p>© {new Date().getFullYear()} {t.contact.rights}</p>
                <p className="mt-2 md:mt-0 font-medium">{t.contact.builtWith}</p>
            </div>
        </div>
    </footer>
  );
}
