'use client';

import React from 'react';
import { 
  X, 
  Workflow, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Calendar, 
  TrendingUp, 
  BarChart3, 
  Share2, 
  AlertTriangle 
} from 'lucide-react';

export interface SapProjectItem {
  id: string;
  title: string;
  company: string;
  badge: string;
  summary: string;
  details: string;
  tools: string[];
}

export const sapProjectsList: SapProjectItem[] = [
  {
    id: 'sap-bottleneck-automation',
    title: 'Bottleneck (Engpass) Workflow Automation',
    company: 'Rohde & Schwarz',
    badge: 'SAP • Power Automate • SharePoint',
    summary: 'Automated bottleneck data collection and SAP updates using Power Automate and SharePoint Online, eliminating manual updates.',
    details: 'Engineered an automated end-to-end cloud pipeline replacing manual Excel bottleneck tracking. New component shortage entries in SharePoint trigger automated Power Automate flows that sync and update shortage records directly in SAP.',
    tools: ['SAP SCM', 'Power Automate', 'SharePoint Online', 'Process Automation']
  },
  {
    id: 'sap-allocation-powerbi',
    title: 'Allocation Process Modernization',
    company: 'Rohde & Schwarz',
    badge: 'SAP • Power BI',
    summary: 'Transformed static weekly SAP order allocation reporting into an interactive Power BI dashboard for executive leadership.',
    details: 'Migrated legacy static allocation reports into an interactive Power BI dashboard. Enabled supply chain leadership to dynamically filter component allocation timelines, identify constraints, and accelerate order release cycles.',
    tools: ['Power BI', 'SAP SCM', 'Data Modeling', 'KPI Reporting']
  },
  {
    id: 'sap-allocation-reporting',
    title: 'Weekly Allocation Cycle Reporting',
    company: 'Rohde & Schwarz',
    badge: 'SAP Operations',
    summary: 'Tracked and reported weekly order allocation timelines in SAP, monitoring constrained component distribution.',
    details: 'Managed the end-to-end weekly order allocation reporting cycle within SAP. Tracked critical component delivery dates against pending production orders to maintain delivery reliability.',
    tools: ['SAP SCM', 'Order Allocation', 'Supply Planning']
  },
  {
    id: 'sap-forecasting-dashboards',
    title: 'Demand Forecasting & Dashboard Maintenance',
    company: 'Rohde & Schwarz',
    badge: 'SAP Operations',
    summary: 'Maintained operational supply chain dashboards and updated demand and supply planning forecast data directly in SAP.',
    details: 'Maintained regular updates of operational supply chain dashboards. Processed demand and supply planning forecast figures in SAP to align production capacity with procurement lead times.',
    tools: ['SAP SCM', 'Forecasting', 'Dashboard Maintenance']
  },
];

interface RohdeSapModalProps {
  project: SapProjectItem | null;
  onClose: () => void;
}

export default function RohdeSapModal({ 
  project, 
  onClose 
}: RohdeSapModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-4 flex flex-col max-h-[96vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-stone-200 bg-[#FAF7F2] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700">
              <Workflow className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-indigo-800 tracking-wider uppercase">
                {project.company} • {project.badge}
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-slate-700 flex-1 bg-stone-50/50 text-xs">
          {/* Overview */}
          <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
            <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Project Summary</span>
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Operational Details */}
          <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
            <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>SAP Implementation & Scope</span>
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              {project.details}
            </p>
          </div>

          {/* Tools & Tech Pills */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span 
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-slate-800 font-semibold text-[11px]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 sm:px-6 border-t border-stone-200 bg-stone-50 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-sm cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
