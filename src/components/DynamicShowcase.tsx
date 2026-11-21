'use client';

import React from 'react';
import MasterThesisCard from './MasterThesisCard';
import ProjectsCard, { ProjectCardItem } from './ProjectsCard';
import { TabId } from './TechStackBar';
import { sapProjectsList, SapProjectItem } from './RohdeSapModal';
import { 
  Workflow, 
  Snowflake, 
  Database, 
  Brain, 
  ArrowRight 
} from 'lucide-react';

interface DynamicShowcaseProps {
  activeTab: TabId;
  onOpenThesisDetails: () => void;
  onOpenPowerBIProject: (project?: ProjectCardItem) => void;
  onOpenSapProject?: (project: SapProjectItem) => void;
  onOpenSnowflakeProject?: () => void;
  onOpenSqlProject?: () => void;
  onOpenSiemensCreditProject?: () => void;
  onOpenSchaefflerAiProject?: () => void;
}

export default function DynamicShowcase({
  activeTab,
  onOpenThesisDetails,
  onOpenPowerBIProject,
  onOpenSapProject,
  onOpenSnowflakeProject,
  onOpenSqlProject,
  onOpenSiemensCreditProject,
  onOpenSchaefflerAiProject,
}: DynamicShowcaseProps) {
  if (activeTab === 'thesis') {
    return (
      <div className="w-full animate-in fade-in duration-150">
        <MasterThesisCard onOpenDetails={onOpenThesisDetails} />
      </div>
    );
  }

  if (activeTab === 'powerbi') {
    return (
      <div className="w-full animate-in fade-in duration-150">
        <ProjectsCard onOpenProject={onOpenPowerBIProject} />
      </div>
    );
  }

  if (activeTab === 'sap') {
    return (
      <div className="w-full space-y-3 animate-in fade-in duration-150">
        {sapProjectsList.map((proj) => (
          <div 
            key={proj.id}
            onClick={() => onOpenSapProject?.(proj)}
            className="w-full p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-indigo-800">
                  {proj.company} • {proj.badge}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {proj.title}
                </h4>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 group-hover:bg-indigo-600 text-white transition-all shrink-0">
              <span>Open Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (activeTab === 'snowflake') {
    return (
      <div className="w-full space-y-3 animate-in fade-in duration-150">
        {/* Project 1: Snowflake Cost Monitoring Data Modeling */}
        <div 
          onClick={() => onOpenSnowflakeProject?.()}
          className="w-full p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200 shrink-0">
              <Snowflake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-cyan-800">
                Siemens • Cloud Data Engineering
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                Snowflake Data Modeling & Preparation
              </h4>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 group-hover:bg-cyan-600 text-white transition-all shrink-0">
            <span>Open Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Project 2: Regional Customer Credit Eligibility Pipeline */}
        <div 
          onClick={() => onOpenSiemensCreditProject?.()}
          className="w-full p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200 shrink-0">
              <Snowflake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-cyan-800">
                Siemens • Commercial Financing
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                Regional Customer Credit Eligibility Pipeline
              </h4>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 group-hover:bg-cyan-600 text-white transition-all shrink-0">
            <span>Open Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'sql') {
    return (
      <div className="w-full space-y-3 animate-in fade-in duration-150">
        {/* Project 1: Siemens Cloud Telemetry */}
        <div 
          onClick={() => onOpenSqlProject?.()}
          className="w-full p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-blue-800">
                Siemens • SQL
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Cloud Telemetry Aggregation & Access Auditing
              </h4>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 group-hover:bg-blue-600 text-white transition-all shrink-0">
            <span>Open Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Project 2: Siemens Regional Credit Eligibility Pipeline */}
        <div 
          onClick={() => onOpenSiemensCreditProject?.()}
          className="w-full p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-blue-800">
                Siemens • Commercial Financing
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Regional Customer Credit Eligibility Pipeline
              </h4>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 group-hover:bg-blue-600 text-white transition-all shrink-0">
            <span>Open Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'genai') {
    return (
      <div className="w-full space-y-3 animate-in fade-in duration-150">
        <div 
          onClick={() => onOpenSchaefflerAiProject?.()}
          className="w-full p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-emerald-800">
                Schaeffler • Gen-AI
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Brake System Data AI Assistant
              </h4>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 group-hover:bg-emerald-700 text-white transition-all shrink-0">
            <span>Open Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
