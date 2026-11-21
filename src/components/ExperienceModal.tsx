'use client';

import React from 'react';
import { 
  X, 
  Briefcase, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  description?: string;
  bullets: string[];
  technologies: string[];
}

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-200 bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase">
                Work Experience Details
              </span>
              <h3 className="text-base font-bold text-slate-900">
                {experience.company}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-slate-700 max-h-[75vh] overflow-y-auto">
          {/* Role & Period Info */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="text-sm font-bold text-slate-900">
                  {experience.role}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{experience.location}</span>
                  <span>•</span>
                  <span>{experience.period}</span>
                </div>
              </div>

              {experience.badge && (
                <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  {experience.badge}
                </span>
              )}
            </div>
          </div>

          {/* Key Responsibilities & Contributions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Key Responsibilities & Deliverables</span>
            </h4>

            <div className="space-y-2.5">
              {experience.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50/70 border border-stone-200 text-xs font-medium text-slate-800 leading-relaxed"
                >
                  <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <span>Tools & Platforms Applied</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-100 text-slate-700 border border-stone-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="text-[11px] text-slate-500 font-medium">
            From official CV • Barış Gül
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-sm"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
