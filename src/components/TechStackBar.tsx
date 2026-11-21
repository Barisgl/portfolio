'use client';

import React from 'react';
import { 
  BarChart3, 
  Database, 
  Workflow, 
  Snowflake,
  Brain,
  GraduationCap
} from 'lucide-react';

export type TabId = 'thesis' | 'powerbi' | 'sap' | 'snowflake' | 'sql' | 'genai';

interface TechStackBarProps {
  activeTab: TabId;
  onSelectTab: (tabId: TabId) => void;
}

export default function TechStackBar({ activeTab, onSelectTab }: TechStackBarProps) {
  const tabs: {
    id: TabId;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    activeClass: string;
    inactiveClass: string;
    badge?: string;
  }[] = [
    { 
      id: 'thesis',
      name: 'Master Thesis', 
      icon: GraduationCap, 
      activeClass: 'bg-[#003865] text-white border-[#003865] shadow-md shadow-[#003865]/25 ring-2 ring-blue-400/40',
      inactiveClass: 'text-[#003865] bg-blue-50/90 border-blue-200/90 hover:bg-blue-100 hover:border-blue-300',
    },
    { 
      id: 'powerbi',
      name: 'Power BI', 
      icon: BarChart3, 
      activeClass: 'bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-600/25 ring-2 ring-amber-400/40',
      inactiveClass: 'text-amber-800 bg-amber-50/90 border-amber-200/90 hover:bg-amber-100 hover:border-amber-300',
      badge: 'Project'
    },
    { 
      id: 'sap',
      name: 'SAP', 
      icon: Workflow, 
      activeClass: 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/25 ring-2 ring-indigo-400/40',
      inactiveClass: 'text-indigo-800 bg-indigo-50/90 border-indigo-200/90 hover:bg-indigo-100 hover:border-indigo-300',
    },
    { 
      id: 'snowflake',
      name: 'Snowflake', 
      icon: Snowflake, 
      activeClass: 'bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-600/25 ring-2 ring-cyan-400/40',
      inactiveClass: 'text-cyan-800 bg-cyan-50/90 border-cyan-200/90 hover:bg-cyan-100 hover:border-cyan-300',
    },
    { 
      id: 'sql',
      name: 'SQL', 
      icon: Database, 
      activeClass: 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25 ring-2 ring-blue-400/40',
      inactiveClass: 'text-blue-800 bg-blue-50/90 border-blue-200/90 hover:bg-blue-100 hover:border-blue-300',
    },
    { 
      id: 'genai',
      name: 'Gen-AI', 
      icon: Brain, 
      activeClass: 'bg-emerald-700 text-white border-emerald-700 shadow-md shadow-emerald-700/25 ring-2 ring-emerald-400/40',
      inactiveClass: 'text-emerald-800 bg-emerald-50/90 border-emerald-200/90 hover:bg-emerald-100 hover:border-emerald-300',
    },
  ];

  return (
    <div className="w-full p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer hover:scale-105 ${
                isActive ? tab.activeClass : tab.inactiveClass
              }`}
            >
              <Icon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>{tab.name}</span>

              {isActive ? (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              ) : tab.badge ? (
                <span className="text-[9px] font-bold text-amber-800 bg-amber-200/80 px-1.5 py-0.2 rounded-md">
                  {tab.badge}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
