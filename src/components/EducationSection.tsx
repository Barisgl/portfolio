'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationData } from '@/data/portfolioData';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';

export default function EducationSection() {
  const { language } = useLanguage();

  return (
    <section id="education" className="py-20 bg-[#F5F0E8]/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Academic Foundation' : 'Akademischer Werdegang'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {language === 'en' ? 'Education & Qualifications' : 'Ausbildung & Abschlüsse'}
          </h2>
          <p className="text-slate-600 text-base">
            {language === 'en'
              ? 'Combining industrial engineering fundamentals with master-level specialization in digital procurement.'
              : 'Verbindung von ingenieurwissenschaftlichen Grundlagen mit Master-Spezialisierung im digitalen Einkauf.'}
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-slate-700 border border-stone-200">
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {edu.degree[language]}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 mt-1">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Details */}
                {edu.details && (
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {edu.details[language]}
                  </p>
                )}
              </div>

              {/* Topics / Focus Areas */}
              {edu.topics && (
                <div className="pt-4 border-t border-stone-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Core Focus Areas' : 'Studienschwerpunkte'}</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {edu.topics[language].map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span className="truncate">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
