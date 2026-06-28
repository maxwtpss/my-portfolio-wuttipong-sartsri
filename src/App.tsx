import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { translations, Language } from './translations';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const t = translations[language];

  useEffect(() => {
      const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
          setShowBackToTop(window.scrollY > window.innerHeight * 0.8);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
      if (isMobileMenuOpen) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'unset';
      }
  }, [isMobileMenuOpen]);

  return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
          <Navbar 
              t={t}
              isScrolled={isScrolled}
              language={language}
              setLanguage={setLanguage}
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
          />

          <HeroSection t={t} />
          <ExpertiseSection t={t} />
          <ExperienceSection t={t} />
          <AboutSection t={t} />
          <EducationSection t={t} />
          <Footer t={t} />

          <AnimatePresence>
              {showBackToTop && (
                  <motion.button
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      onClick={scrollToTop}
                      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-zinc-900 text-white shadow-lg hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B28753] focus:ring-offset-2 flex items-center justify-center opacity-90 hover:opacity-100"
                      aria-label="Back to top"
                  >
                      <ArrowUp className="w-6 h-6" />
                  </motion.button>
              )}
          </AnimatePresence>
      </div>
  );
}
