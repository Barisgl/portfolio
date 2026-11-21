'use client';

import React from 'react';
import { 
  Brain, 
  ArrowRight,
  Network,
  AlertTriangle
} from 'lucide-react';

interface MasterThesisCardProps {
  onOpenDetails: () => void;
}

export default function MasterThesisCard({ onOpenDetails }: MasterThesisCardProps) {
  return (
    <div className="w-full h-full p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between hover:border-[#003865]/40 transition-all">
      {/* Top Header & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#003865]/10 text-[#003865] border border-[#003865]/20">
            <Brain className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-[#003865] uppercase tracking-wider">
            Master Thesis • TH Ingolstadt
          </span>
        </div>
      </div>

      {/* Thesis Title & Subtitle */}
      <div className="mt-2.5">
        <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
          Multi-Agent LLM Coordination Across Enterprise ERPs
        </h2>
        <p className="text-[11px] font-semibold text-[#003865] mt-0.5">
          Real-Time Cross-Departmental Information Sharing & Proactive Disruption Warning
        </p>
      </div>

      {/* Generalized Purpose Summary (Cross-Departmental ERP Agent Mesh) */}
      <p className="text-slate-700 text-xs leading-relaxed text-justify [text-justify:inter-word] font-normal mt-2">
        Embedding interconnected autonomous LLM agents directly into departmental ERP systems to eliminate enterprise information silos. Whenever an operational event or modification arises within any departmental module, the multi-agent network instantly evaluates cross-functional dependencies—proactively identifying cascading bottlenecks and alerting all affected departments before decisions cause operational disruptions.
      </p>

      {/* Cross-Departmental Multi-Agent Mesh Flow */}
      <div className="mt-3 p-2.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-2 text-[11px]">
        <div className="flex items-center gap-1.5 text-slate-700 font-semibold truncate">
          <span className="w-2 h-2 rounded-full bg-[#003865] shrink-0" />
          <span className="truncate">Departmental ERP Event</span>
        </div>
        <div className="flex items-center gap-1 text-[#003865] font-semibold shrink-0">
          <Network className="w-3.5 h-3.5 text-[#003865]" />
          <span className="text-[10px] hidden md:inline">Multi-Agent Network</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 shrink-0">
          <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
          <span>Proactive Ripple Warning</span>
        </div>
      </div>

      {/* Charismatic CTA Button */}
      <div className="pt-3 mt-3 flex justify-end border-t border-stone-100">
        <button
          onClick={onOpenDetails}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-[#003865] text-white shadow-sm hover:shadow-[#003865]/20 transition-all hover:-translate-y-0.5"
        >
          <span>Explore Thesis Architecture & Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-blue-300 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
