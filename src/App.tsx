import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowDownRight, Briefcase, GraduationCap, 
  Mail, Phone, Monitor, PenTool, Layout, BrainCircuit,
  Menu, X, ArrowUp, Linkedin, Github, BookOpen
} from 'lucide-react';
import { translations, Language } from './translations';

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: React.ReactNode }) => (
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
          {/* Navigation */}
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

          {/* Mobile Menu */}
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

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center bg-zinc-950 text-white overflow-hidden pt-20">
              <div className="absolute inset-0 z-0 pointer-events-none transform-gpu overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#B28753]/20 blur-3xl md:blur-[80px] rounded-full will-change-transform opacity-70"></div>
                  <div className="absolute bottom-1/4 right-1/8 w-72 h-72 md:w-96 md:h-96 bg-[#B28753]/10 blur-3xl md:blur-[80px] rounded-full will-change-transform opacity-70"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pt-16">
                  <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                      <h1 className="text-[13vw] sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[1.1] md:leading-none mb-8 md:mb-12 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                          <span>{t.hero.firstName}</span>
                          <span>{t.hero.lastName}<span className="text-[#B28753]">.</span></span>
                      </h1>
                      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
                          <div className="md:col-span-8">
                             <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                                  {t.hero.role} <br className="hidden md:block" />
                                  {t.hero.subtitle}
                              </p>
                          </div>
                          <div className="md:col-span-4 flex justify-start md:justify-end mt-4 md:mt-0">
                              <a href="#expertise" className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white text-zinc-950 rounded-full hover:bg-zinc-200 hover:scale-105 transition-all">
                                  <ArrowDownRight className="w-8 h-8" />
                              </a>
                          </div>
                      </div>
                  </motion.div>
              </div>
          </section>

          {/* Expertise Section */}
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

          {/* Experience Section */}
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

          {/* Profile Overview (About) */}
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

          {/* Education & Certs */}
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

          {/* Footer Contact */}
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

function ExpertiseCard({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) {
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
            <ul className="space-y-3 md:space-y-5 mt-auto">
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

function ExperienceRow({ role, company, period, description, achievements }: { role: string, company: string, period: string, description: string, achievements: string[] }) {
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
