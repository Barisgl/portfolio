'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { skillsData } from '@/data/portfolioData';
import { 
  BarChart, 
  Database, 
  Workflow, 
  Layers, 
  Code2, 
  CheckCircle 
} from 'lucide-react';

export default function SkillsSection() {
  const { language } = useLanguage();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'supply-chain':
        return Workflow;
      case 'bi-visualization':
        return BarChart;
      case 'databases-sql':
        return Database;
      default:
        return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Layers className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Core Capabilities' : 'Kernkompetenzen'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {language === 'en' ? 'Technical Skills & Tooling' : 'Fachliche & Technische Fähigkeiten'}
          </h2>
          <p className="text-slate-600 text-base">
            {language === 'en'
              ? 'Organized across domain expertise, business intelligence, query engineering, and data science platforms.'
              : 'Strukturiert nach Fachexpertise, Business Intelligence, Datenbanken und Programmierwerkzeugen.'}
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => {
            const Icon = getCategoryIcon(category.id);

            return (
              <div
                key={category.id}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-5"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.title[language]}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all shadow-sm"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-stone-200 group-hover:text-blue-700">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
