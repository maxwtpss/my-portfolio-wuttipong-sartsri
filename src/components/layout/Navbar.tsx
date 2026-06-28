import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Translation, Language } from '../../translations';

interface NavbarProps {
  t: Translation;
  isScrolled: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export function Navbar({ t, isScrolled, language, setLanguage, isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200 py-4' : 'bg-transparent py-8'}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
              <span className={`font-bold text-xl tracking-tighter ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>WUTTIPONG<span className="text-[#B28753]">.</span></span>
              <div className="hidden md:flex gap-10 text-sm font-medium">
                  <a href="#expertise" className={`${isScrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-300 hover:text-white'} transition-colors`}>{t.nav.expertise}</a>
                  <a href="#experience" className={`${isScrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-300 hover:text-white'} transition-colors`}>{t.nav.experience}</a>
                  <a href="#about" className={`${isScrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-300 hover:text-white'} transition-colors`}>{t.nav.about}</a>
              </div>
              <div className="hidden md:flex items-center gap-4">
                  <button 
                      onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}
                      className={`font-bold text-sm px-3 py-1.5 rounded-md transition-colors ${isScrolled ? 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100' : 'text-zinc-300 hover:text-white hover:bg-white/10'}`}
                  >
                      {t.nav.switchTo}
                  </button>
                  <a href="#contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${isScrolled ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-white text-zinc-900 hover:bg-zinc-100'}`}>
                      {t.nav.getInTouch}
                  </a>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                  <button 
                      onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}
                      className={`font-bold text-sm px-3 py-1.5 rounded-md transition-colors ${isScrolled ? 'text-zinc-900' : 'text-white'}`}
                  >
                      {t.nav.switchTo}
                  </button>
                  <button 
                      className={`p-2 -mr-2 rounded-md ${isScrolled ? 'text-zinc-900' : 'text-white'}`}
                      onClick={() => setIsMobileMenuOpen(true)}
                  >
                      <Menu className="w-6 h-6" />
                  </button>
              </div>
          </div>
      </nav>

      <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div 
                  key="mobile-menu"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-[60] bg-zinc-950 text-white flex flex-col p-6"
              >
                  <div className="flex justify-between items-center mt-2 mb-16">
                      <span className="font-bold text-xl tracking-tighter">WUTTIPONG<span className="text-[#B28753]">.</span></span>
                      <button 
                          className="p-2 -mr-2 rounded-md text-zinc-400 hover:text-white"
                          onClick={() => setIsMobileMenuOpen(false)}
                      >
                          <X className="w-8 h-8" />
                      </button>
                  </div>
                  <div className="flex flex-col gap-10 text-3xl font-medium px-2">
                      <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#B28753] transition-colors">{t.nav.expertise}</a>
                      <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#B28753] transition-colors">{t.nav.experience}</a>
                      <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#B28753] transition-colors">{t.nav.about}</a>
                      <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#B28753] transition-colors mt-8 pt-8 border-t border-zinc-800">{t.nav.getInTouch}</a>
                  </div>
              </motion.div>
          )}
      </AnimatePresence>
    </>
  );
}
