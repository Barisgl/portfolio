'use client';

import React, { useState } from 'react';
import { 
  X, 
  Snowflake, 
  Database, 
  Layers, 
  Table, 
  CheckCircle2,
  FileCode2,
  Server,
  BarChart3,
  ArrowRight
} from 'lucide-react';

interface SnowflakeCostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPowerBiDashboard?: () => void;
}

export default function SnowflakeCostModal({ 
  isOpen, 
  onClose,
  onOpenPowerBiDashboard 
}: SnowflakeCostModalProps) {
  const [activeTab, setActiveTab] = useState<'foundation' | 'dimensions' | 'views'>('foundation');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-4 flex flex-col max-h-[96vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-stone-200 bg-[#FAF7F2] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700">
              <Snowflake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Snowflake Data Modeling & Preparation
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {onOpenPowerBiDashboard && (
              <button
                onClick={onOpenPowerBiDashboard}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold transition-colors cursor-pointer"
              >
                <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
                <span>View Power BI Dashboard</span>
                <ArrowRight className="w-3 h-3 text-amber-600" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Sequence */}
        <div className="flex flex-wrap items-center justify-start gap-1.5 px-4 sm:px-6 pt-2.5 pb-2 border-b border-stone-100 bg-white text-xs font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('foundation')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'foundation'
                ? 'bg-cyan-700 text-white font-bold shadow-xs'
                : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Role & Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('dimensions')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'dimensions'
                ? 'bg-cyan-100/90 text-cyan-950 font-bold'
                : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <Table className="w-3.5 h-3.5 text-cyan-700" />
            <span>Dimensional Modeling</span>
          </button>

          <button
            onClick={() => setActiveTab('views')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'views'
                ? 'bg-cyan-100/90 text-cyan-950 font-bold'
                : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-700" />
            <span>Curated Analytical Views</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-3 sm:p-5 overflow-y-auto space-y-4 text-slate-700 flex-1 bg-stone-50/50">

          {/* TAB 1: ROLE & OVERVIEW */}
          {activeTab === 'foundation' && (
            <div className="space-y-3 text-xs">
              {/* Foundation Statement Card */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Database className="w-4 h-4 text-cyan-600" />
                  <span>Data Foundation & Preparation Objective</span>
                </div>
                <div className="p-3 rounded-lg bg-cyan-50/50 border border-cyan-200/80 text-[11px] text-slate-700 leading-relaxed space-y-2">
                  <p>
                    Engineered the enterprise cloud data foundation inside Snowflake by centralizing and structuring unindexed, scattered <code>ACCOUNT_USAGE</code> telemetry—spanning warehouse metering, multi-tier storage footprints, and query execution logs.
                  </p>
                  <p>
                    Architected a formal dimensional modeling framework (<code>DIM_PROJECTS</code>, <code>DIM_USERS</code>, <code>DIM_WAREHOUSES</code>) to map low-level infrastructure events directly to organizational cost centers and project owners, publishing curated analytical views for enterprise-grade FinOps governance.
                  </p>
                </div>
              </div>

              {/* Scope Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Server className="w-4 h-4 text-cyan-600" />
                    <span>Raw Infrastructure Telemetry Ingested</span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                    <li><code>WAREHOUSE_METERING_HISTORY</code> (Hourly credit consumption)</li>
                    <li><code>TABLE_STORAGE_METRICS</code> (Active, Time Travel, Fail-safe bytes)</li>
                    <li><code>QUERY_HISTORY</code> (Execution times, query types, user sessions)</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Data Engineering Deliverables</span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                    <li>Standardized dimensional schemas with business ownership.</li>
                    <li>Daily aggregation pipelines eliminating unindexed log bloat.</li>
                    <li>Pre-computed object access timestamps and storage tiers.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DIMENSIONAL MODELING */}
          {activeTab === 'dimensions' && (
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Table className="w-4 h-4 text-cyan-600" />
                  <span>Dimensional Tables Built in Snowflake</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Raw Snowflake logs only carry infrastructure codes. Created 3 dimensional tables to assign organizational ownership to raw telemetry:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <span className="text-[10px] font-bold text-cyan-700 font-mono">DIM_PROJECTS</span>
                  <div className="text-xs font-bold text-slate-900">Project Ownership</div>
                  <p className="text-[10px] text-slate-500">
                    Maps virtual warehouses and database schemas to 8 business projects (e.g., Finance, Marketing, AI PoC) with cost center tags.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <span className="text-[10px] font-bold text-cyan-700 font-mono">DIM_WAREHOUSES</span>
                  <div className="text-xs font-bold text-slate-900">Compute Sizing</div>
                  <p className="text-[10px] text-slate-500">
                    Standardizes warehouse sizing (X-Small to 3X-Large), auto-suspend policies, and cost center attribution.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <span className="text-[10px] font-bold text-cyan-700 font-mono">DIM_USERS</span>
                  <div className="text-xs font-bold text-slate-900">User & Service Roles</div>
                  <p className="text-[10px] text-slate-500">
                    Distinguishes between automated ETL pipeline service accounts and interactive business analyst users.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CURATED ANALYTICAL VIEWS */}
          {activeTab === 'views' && (
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <FileCode2 className="w-4 h-4 text-cyan-600" />
                  <span>Curated Analytical SQL Views</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Instead of querying raw logs, structured these 4 clean, pre-aggregated analytical views inside Snowflake:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="font-bold text-cyan-800 font-mono text-[11px]">V_DAILY_CREDIT_USAGE</div>
                  <p className="text-[10px] text-slate-600">
                    Daily compute credit consumption and credit expenditure pre-aggregated by project and warehouse.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="font-bold text-cyan-800 font-mono text-[11px]">V_PROJECT_STORAGE_SUMMARY</div>
                  <p className="text-[10px] text-slate-600">
                    Project-level storage footprint across Active, Time Travel, and Fail-safe tiers.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="font-bold text-cyan-800 font-mono text-[11px]">V_LAST_ACCESS_PER_OBJECT</div>
                  <p className="text-[10px] text-slate-600">
                    Table-level access telemetry (days since last SELECT read vs days since last DML write).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="font-bold text-cyan-800 font-mono text-[11px]">V_DECOMMISSION_CANDIDATES</div>
                  <p className="text-[10px] text-slate-600">
                    Curated list of dormant, unqueried database objects with calculated storage footprints.
                  </p>
                </div>
              </div>
            </div>
          )}

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
