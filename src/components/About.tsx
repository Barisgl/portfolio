'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/portfolioData';
import { 
  User, 
  Languages, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle2,
  Workflow
} from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  const corePillars = [
    {
      icon: TrendingUp,
      title: {
        en: 'Supply Chain Analytics & Optimization',
        de: 'Supply Chain Analytics & Optimierung',
      },
      desc: {
        en: 'Translating manufacturing & procurement constraints into data-driven visibility: OTIF tracking, safety stock calibration, supplier performance.',
        de: 'Übersetzung von Beschaffungs- und Fertigungsdaten in messbare Kennzahlen: OTIF, Sicherheitsbestände, Lieferantenbewertung.',
      },
    },
    {
      icon: Workflow,
      title: {
        en: 'Automated Reporting Workflows',
        de: 'Automatisierte Reporting-Prozesse',
      },
      desc: {
        en: 'Eliminating repetitive spreadsheet maintenance by architecting robust Power BI and SQL data models that update continuously.',
        de: 'Ablösung manueller Tabellenkalkulationen durch belastbare, kontinuierlich aktualisierte Power BI- und SQL-Datenmodelle.',
      },
    },
    {
      icon: Lightbulb,
      title: {
        en: 'Advanced Querying & Data Science',
        de: 'Erweiterte SQL- & Python-Analytik',
      },
      desc: {
        en: 'Extracting clean insights from massive ERP and data lake tables using Snowflake SQL window functions, CTEs, and Python statistical libraries.',
        de: 'Strukturierung großer Datenmengen aus ERP- und Data-Lake-Systemen mittels modernem SQL (Fensterfunktionen, CTEs) und Python.',
      },
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F5F0E8]/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Column: Bio & Story */}
          <div className="w-full md:w-7/12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <User className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Professional Profile' : 'Profil & Werdegang'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {language === 'en'
                ? 'Engineering precision meets data-driven supply chain insight'
                : 'Ingenieurmäßige Präzision trifft auf datenbasierte Supply-Chain-Optimierung'}
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              {profileData.bio[language]}
            </p>

            {/* Core Competencies Cards */}
            <div className="grid gap-4 pt-4">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-start gap-4 hover:border-blue-300 transition-all"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {pillar.title[language]}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {pillar.desc[language]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Key Details & Languages */}
          <div className="w-full md:w-5/12 space-y-6">
            {/* Languages Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg border-b border-stone-100 pb-3">
                <Languages className="w-5 h-5 text-blue-600" />
                <span>{language === 'en' ? 'Languages' : 'Sprachkenntnisse'}</span>
              </div>

              <div className="space-y-4">
                {profileData.languages.map((langItem, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-slate-800">
                        {langItem.name[language]}
                      </span>
                      <span className="text-xs font-semibold text-blue-600">
                        {langItem.level[language]}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                        style={{
                          width:
                            idx === 0
                              ? '90%'
                              : idx === 1
                              ? '80%'
                              : '100%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Highlights Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                {language === 'en' ? 'Key Background Highlights' : 'Wichtigste Stationen'}
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Rohde & Schwarz:</strong>{' '}
                    {language === 'en'
                      ? 'Supply Chain KPI dashboards & SAP integration.'
                      : 'Supply Chain KPI-Dashboards & SAP-Datenanbindung.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Siemens & adidas:</strong>{' '}
                    {language === 'en'
                      ? 'Large-scale transactional analytics & Power BI reporting.'
                      : 'Skalierbare Transaktionsanalysen & Power BI Reporting.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">TH Ingolstadt:</strong>{' '}
                    {language === 'en'
                      ? 'M.Sc. Digital Procurement & Sustainable Supply Chain.'
                      : 'M.Sc. Digitaler Einkauf & Nachhaltiges Supply Chain Management.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
