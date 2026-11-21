'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Database, 
  BarChart3, 
  Code2, 
  Workflow, 
  Mail,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const { language } = useLanguage();

  const techBadges = [
    { name: 'Power BI', icon: BarChart3, color: 'text-amber-700 border-amber-200 bg-amber-50/80' },
    { name: 'SQL (Snowflake/PostgreSQL)', icon: Database, color: 'text-blue-700 border-blue-200 bg-blue-50/80' },
    { name: 'Python (Pandas/Scikit)', icon: Code2, color: 'text-emerald-700 border-emerald-200 bg-emerald-50/80' },
    { name: 'SAP ERP', icon: Workflow, color: 'text-indigo-700 border-indigo-200 bg-indigo-50/80' },
    { name: 'Tableau', icon: BarChart3, color: 'text-violet-700 border-violet-200 bg-violet-50/80' },
  ];

  const stats = [
    {
      value: '85%',
      label: { en: 'Manual Time Saved via Automation', de: 'Zeitersparnis durch Automatisierung' },
    },
    {
      value: '3+',
      label: { en: 'Global Brand Rotations (Siemens, adidas)', de: 'Globale Konzernstationen (Siemens, adidas)' },
    },
    {
      value: 'M.Sc.',
      label: { en: 'Digital Procurement & Supply Chain (THI)', de: 'Digitaler Einkauf & Supply Chain (THI)' },
    },
    {
      value: 'C1 / B2',
      label: { en: 'German & English Fluency', de: 'Deutsch (C1) & Englisch (B2)' },
    },
  ];

  return (
    <section className="relative pt-4 pb-12 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-amber-100/30 blur-[110px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/50 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Location & Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-stone-200 text-xs text-slate-700 shadow-sm backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span className="font-medium">{profileData.location[language]}</span>
            <span className="text-stone-300">•</span>
            <span className="text-blue-600 font-semibold">Supply Chain & Data Analytics</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
              Hi, I am <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">{profileData.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 tracking-tight">
              {profileData.title[language]}
            </p>
          </div>

          {/* Tagline / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {profileData.tagline[language]}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {techBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border shadow-sm ${badge.color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{badge.name}</span>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5"
            >
              <span>{language === 'en' ? 'Explore Projects' : 'Projekte ansehen'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#experience"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-stone-50 text-slate-800 border border-stone-200 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span>{language === 'en' ? 'View Work Experience' : 'Berufserfahrung'}</span>
            </a>

            <a
              href={profileData.cvUrl}
              download="Baris-Gul-CV.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-stone-50 text-blue-600 border border-blue-200 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'en' ? 'Download CV' : 'CV Herunterladen'}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4 text-slate-600">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-stone-50 hover:text-blue-600 border border-stone-200 shadow-sm transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-stone-50 hover:text-slate-900 border border-stone-200 shadow-sm transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-xl bg-white hover:bg-stone-50 hover:text-emerald-600 border border-stone-200 shadow-sm transition-colors"
              title="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-10 border-t border-stone-200">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/80 border border-stone-200 shadow-sm text-center hover:border-blue-300 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 mt-1 leading-snug font-medium">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>

          {/* Down Indicator */}
          <div className="pt-6 flex justify-center">
            <a
              href="#about"
              className="text-stone-400 hover:text-slate-600 transition-colors animate-bounce"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
