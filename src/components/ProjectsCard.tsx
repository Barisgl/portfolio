'use client';

import React from 'react';
import { BarChart3, ArrowRight } from 'lucide-react';

export interface ProjectCardItem {
  id: string;
  title: string;
  tag: string;
  companyBadge?: string;
}

export const powerBiProjectsList: ProjectCardItem[] = [
  {
    id: 'operation-command',
    title: 'Operation Command',
    tag: 'Personal Project',
  },
  {
    id: 'customer-segmentation-siemens',
    title: 'Customer Segmentation',
    tag: 'Siemens',
  },
  {
    id: 'snowflake-cost-monitoring-siemens',
    title: 'Snowflake Cost Monitoring',
    tag: 'Siemens',
  },
];

interface ProjectsCardProps {
  onOpenProject?: (project: ProjectCardItem) => void;
}

export default function ProjectsCard({ onOpenProject }: ProjectsCardProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
      {powerBiProjectsList.map((p) => (
        <div
          key={p.id}
          onClick={() => onOpenProject?.(p)}
          className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between gap-3 group"
        >
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0 mt-0.5">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 uppercase tracking-wide">
                {p.tag}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors mt-1.5 leading-snug">
                {p.title}
              </h4>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Power BI Dashboard</span>
            <span className="inline-flex items-center gap-1 text-slate-900 group-hover:text-amber-600 font-bold transition-colors">
              <span>Open</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
