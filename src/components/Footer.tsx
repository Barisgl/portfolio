'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/portfolioData';
import { 
  Mail, 
  Download, 
  ArrowUp
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-stone-200 bg-[#EFE9DF]/80 text-slate-600 relative overflow-hidden">
      {/* Contact Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {language === 'en'
                ? 'Interested in discussing an opportunity or project?'
                : 'Interesse an einem fachlichen Austausch oder einer Zusammenarbeit?'}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              {language === 'en'
                ? 'Feel free to connect on LinkedIn or reach out directly via email. I am always open to exchanging ideas around supply chain analytics and business intelligence.'
                : 'Vernetzen Sie sich gerne auf LinkedIn oder schreiben Sie mir direkt per E-Mail. Ich freue mich auf den Austausch rund um Supply Chain Analytics und Business Intelligence.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>{language === 'en' ? 'Connect on LinkedIn' : 'Auf LinkedIn vernetzen'}</span>
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs bg-white hover:bg-stone-50 text-slate-800 border border-stone-200 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>{language === 'en' ? 'Send Email' : 'E-Mail senden'}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 font-medium">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-sm">
              BG
            </div>
            <span className="font-bold text-slate-800">
              {profileData.name}
            </span>
            <span className="text-stone-400">•</span>
            <span>{profileData.location[language]}</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a
              href={profileData.cvUrl}
              download="Baris-Gul-CV.pdf"
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV (PDF)</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-stone-100 text-slate-600 hover:text-slate-900 border border-stone-200 shadow-sm transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
