'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/portfolioData';
import { 
  Globe, 
  Download, 
  Menu, 
  X
} from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: { en: 'About', de: 'Über mich' } },
    { href: '#experience', label: { en: 'Experience', de: 'Erfahrung' } },
    { href: '#projects', label: { en: 'Projects', de: 'Projekte' } },
    { href: '#skills', label: { en: 'Skills', de: 'Fähigkeiten' } },
    { href: '#education', label: { en: 'Education', de: 'Ausbildung' } },
    { href: '#contact', label: { en: 'Contact', de: 'Kontakt' } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              BG
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base tracking-tight flex items-center gap-2">
                {profileData.name}
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  Available
                </span>
              </div>
              <div className="text-xs text-slate-500 hidden sm:block">
                Supply Chain & Analytics
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-stone-200/50 transition-colors"
              >
                {link.label[language]}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-white/80 hover:bg-white border border-stone-200 shadow-sm transition-all"
              title={language === 'en' ? 'Switch to German' : 'Auf Englisch wechseln'}
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{language === 'en' ? 'DE' : 'EN'}</span>
            </button>

            {/* CV Download CTA */}
            <a
              href={profileData.cvUrl}
              download="Baris-Gul-CV.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/20 transition-all hover:shadow-blue-600/30"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Download CV' : 'CV Herunterladen'}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-md text-xs font-bold text-slate-700 bg-white border border-stone-200 shadow-sm"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-stone-200/60"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2]/95 border-b border-stone-200/90 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-stone-200/50"
            >
              {link.label[language]}
            </a>
          ))}
          <div className="pt-3 border-t border-stone-200">
            <a
              href={profileData.cvUrl}
              download="Baris-Gul-CV.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white shadow"
            >
              <Download className="w-4 h-4" />
              {language === 'en' ? 'Download CV (PDF)' : 'Lebenslauf herunterladen (PDF)'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
