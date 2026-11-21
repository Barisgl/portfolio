/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { User, TrendingUp, FileText } from 'lucide-react';

export default function UnifiedProfileCard() {
  return (
    <div className="w-full p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#E4F0FB]/95 via-[#D7E8F7]/90 to-[#CBE3F5]/95 backdrop-blur-md border-2 border-white/80 shadow-[0_0_25px_rgba(56,189,248,0.35)] flex flex-col md:flex-row items-center gap-6 md:gap-8">
      {/* Left: Photo & Personal Meta */}
      <div className="flex flex-col items-center text-center shrink-0 w-full md:w-56">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-white/90 border border-white shadow-md overflow-hidden shrink-0">
          <div className="w-full h-full rounded-xl bg-slate-100 flex flex-col items-center justify-center text-slate-400 relative overflow-hidden">
            <User className="w-10 h-10 text-slate-400" />
            <span className="text-[10px] text-slate-500 font-medium mt-1">Photo</span>
            
            <img
              src="/profile.jpg"
              alt="Barış Gül"
              className="absolute inset-0 w-full h-full object-cover object-top rounded-xl"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        </div>

        <div className="mt-2.5">
          <h2 className="text-lg font-bold text-slate-900 leading-tight">Barış Gül</h2>
          <p className="text-xs text-blue-800 font-semibold mt-0.5">Supply Chain & Data Analytics</p>
          <p className="text-[11px] text-slate-600 font-medium mt-0.5">Ingolstadt, Germany</p>

          <div className="mt-2.5">
            <a
              href="/Baris-Gul-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-bold bg-white/95 hover:bg-white text-blue-900 border border-sky-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Open CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Vertical Divider on Desktop */}
      <div className="hidden md:block w-px self-stretch bg-sky-200/80" />

      {/* Right: Badge & Profile Details */}
      <div className="flex-1 flex flex-col justify-center space-y-3.5">
        <div className="flex justify-center items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-sky-300/80 text-sky-900 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-sky-700" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Supply Chain & Business Intelligence Specialist
            </span>
          </div>
        </div>

        <p className="w-full text-slate-900 text-xs sm:text-sm leading-relaxed sm:leading-loose font-semibold text-justify [text-justify:inter-word]">
          Industrial Engineer specializing in Supply Chain Planning and Data Analytics. Hands-on experience utilizing SAP, Power BI, SQL, and Python to analyze, visualize, and optimize end-to-end supply chain processes. Combines strong operational process understanding with the ability to derive sound, data-driven actionable recommendations from complex enterprise datasets.
        </p>
      </div>
    </div>
  );
}
