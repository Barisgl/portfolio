'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experiencesData } from '@/data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Sparkles
} from 'lucide-react';

export default function ExperienceTimeline() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Career Progression' : 'Berufliche Stationen'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {language === 'en' ? 'Work Experience' : 'Berufserfahrung'}
          </h2>
          <p className="text-slate-600 text-base">
            {language === 'en'
              ? 'Proven track record in supply chain analytics, business intelligence, and process optimization.'
              : 'Fundierte Praxiserfahrung in Supply Chain Analytics, Business Intelligence und Prozessoptimierung.'}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-stone-300 ml-4 md:ml-6 space-y-12">
          {experiencesData.map((exp, index) => {
            const isFirst = index === 0;

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    isFirst
                      ? 'bg-blue-600 border-white ring-4 ring-blue-100'
                      : 'bg-white border-stone-400 group-hover:border-blue-500'
                  }`}
                />

                {/* Experience Card */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-4">
                  {/* Top Bar: Company & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-slate-900 tracking-tight">
                          {exp.company}
                        </span>
                        {isFirst && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                            {language === 'en' ? 'Current' : 'Aktuell'}
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold text-blue-600 mt-0.5">
                        {exp.role[language]}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period[language]}
                      </span>
                      <span className="inline-flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location[language]}
                      </span>
                    </div>
                  </div>

                  {/* Highlight */}
                  {exp.highlight && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-800 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{exp.highlight[language]}</span>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <ul className="space-y-2 text-sm text-slate-700">
                    {exp.responsibilities[language].map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Used */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 text-slate-700 border border-stone-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
