'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function ProfileIntro() {
  return (
    <div className="w-full h-full p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-center gap-6">
      {/* Centered Badge with Generous Distance */}
      <div className="flex justify-center items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200 text-blue-700 shadow-2xs">
          <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Supply Chain & Business Intelligence Specialist
          </span>
        </div>
      </div>

      {/* Profile Detail Text with Clean Distance */}
      <p className="w-full text-slate-700 text-xs sm:text-sm leading-relaxed sm:leading-loose font-normal text-justify [text-justify:inter-word]">
        Industrial Engineer specializing in Supply Chain Planning and Data Analytics. Hands-on experience utilizing SAP, Power BI, SQL, and Python to analyze, visualize, and optimize end-to-end supply chain processes. Combines strong operational process understanding with the ability to derive sound, data-driven actionable recommendations from complex enterprise datasets.
      </p>
    </div>
  );
}
