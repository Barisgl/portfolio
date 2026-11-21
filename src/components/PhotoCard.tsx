/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { User, FileText } from 'lucide-react';

export default function PhotoCard() {
  return (
    <div className="w-full h-full p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#E4F0FB]/95 via-[#D7E8F7]/90 to-[#CBE3F5]/95 backdrop-blur-md border-2 border-white/80 shadow-[0_0_25px_rgba(56,189,248,0.4)] flex flex-col items-center justify-center text-center">
      <div className="relative mx-auto w-32 h-32 rounded-2xl p-1 bg-white/90 border border-white shadow-md group overflow-hidden shrink-0">
        <div className="w-full h-full rounded-xl bg-slate-100 flex flex-col items-center justify-center text-slate-400 relative overflow-hidden">
          <User className="w-12 h-12 text-slate-400" />
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

      <div className="mt-3 text-center">
        <h2 className="text-lg font-bold text-slate-900 leading-tight">Barış Gül</h2>
        <p className="text-xs text-blue-800 font-semibold mt-0.5">Supply Chain & Data Analytics</p>
        <p className="text-[11px] text-slate-600 font-medium mt-0.5">Ingolstadt, Germany</p>

        <div className="mt-3 flex justify-center">
          <a
            href="/Baris-Gul-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold bg-white/95 hover:bg-white text-blue-900 border border-sky-300 shadow-2xs hover:shadow-sm transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Open CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}
