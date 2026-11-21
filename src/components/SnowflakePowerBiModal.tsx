'use client';

import React, { useState } from 'react';
import { 
  X, 
  BarChart3, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Snowflake, 
  ArrowRight,
  Layers
} from 'lucide-react';
import Image from 'next/image';

interface SnowflakePowerBiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSnowflakeFoundation?: () => void;
}

interface DashboardKPI {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
  warn?: boolean;
}

interface DashboardPage {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  kpis: DashboardKPI[];
  highlights: string[];
}

const DASHBOARD_PAGES: DashboardPage[] = [
  {
    id: 1,
    title: 'Executive Cost & Storage Overview',
    subtitle: 'Compute Spend, Credit Burn-Rate & Storage Tiers',
    image: '/projects/snowflake-monitoring/page_1.png',
    kpis: [
      { label: 'Total Credits Consumed', value: '34,54 Tsd.', sub: 'Across 8 Projects' },
      { label: 'Total Compute Spend', value: '$103,63 Tsd.', sub: 'Warehouse Metering' },
      { label: 'Potential Monthly Saving', value: '$16,70', sub: 'Idle Asset Elimination', highlight: true },
    ],
    highlights: [
      'Daily credit & cost burn-rate tracking against allocated departmental budgets.',
      'Departmental cost attribution across PRJ_DATA_ENG, PRJ_FINANCE, and PRJ_SALES.',
      'Storage tier breakdown comparing Active, Time Travel, and Fail-safe volumes.',
    ],
  },
  {
    id: 2,
    title: 'Usage & Performance',
    subtitle: 'Warehouse Load Heatmap & Query Execution Health',
    image: '/projects/snowflake-monitoring/page_2.png',
    kpis: [
      { label: 'Query Success Rate', value: '97,02%', sub: '6,31 Tsd. Successful' },
      { label: 'Total Queries Executed', value: '6,5 Tsd.', sub: 'WH_ADHOC & WH_BI' },
      { label: 'Failed Queries', value: '2,98%', sub: '190 Execution Failures', warn: true },
    ],
    highlights: [
      'Hourly warehouse load heatmap uncovering concurrency spikes between 02:00 and 23:00.',
      'User query volume segmentation isolating high-frequency analyst sessions.',
      'Top slowest queries audit identifying costly unindexed SELECT and MERGE operations.',
    ],
  },
  {
    id: 3,
    title: 'Storage Optimization & Decommission',
    subtitle: 'Zombie Table Identification & What-If Inactivity Analysis',
    image: '/projects/snowflake-monitoring/page_3.png',
    kpis: [
      { label: 'Decommission Candidates', value: '4 Tables', sub: '>180 Days Inactive', highlight: true },
      { label: 'Reclaimable Storage', value: '680,00 GB', sub: 'Zero Read/Write Activity' },
      { label: 'Annual Estimated Savings', value: '$16,70', sub: 'Immediate FinOps Win' },
    ],
    highlights: [
      'Object access audit combining ACCESS_HISTORY timestamps (Days Since Last Select/DML).',
      'Automated flagging of stale assets (INVOICES, TELEMETRY_LOGS, LLM_TRAINING_CACHE).',
      'Potential monthly savings calculated directly from Snowflake storage pricing models.',
    ],
  },
];

export default function SnowflakePowerBiModal({ 
  isOpen, 
  onClose,
  onOpenSnowflakeFoundation
}: SnowflakePowerBiModalProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'architecture'>('dashboard');
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentPage = DASHBOARD_PAGES[activePageIndex];

  const handlePrevPage = () => {
    setActivePageIndex((prev) => (prev > 0 ? prev - 1 : DASHBOARD_PAGES.length - 1));
  };

  const handleNextPage = () => {
    setActivePageIndex((prev) => (prev < DASHBOARD_PAGES.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
        <div className="relative w-full max-w-6xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-4 flex flex-col max-h-[96vh] animate-in fade-in zoom-in-95 duration-150">
          
          {/* Top Header */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-stone-200 bg-[#FAF7F2] shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-cyan-800 tracking-wider uppercase">
                    Siemens • Cloud FinOps & Analytics
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-cyan-100 text-cyan-900 px-1.5 py-0.5 rounded border border-cyan-300">
                    <Sparkles className="w-2.5 h-2.5" />
                    3 Dashboard Pages
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  Snowflake Telemetry & Cost Optimization Dashboard
                </h3>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 pt-2.5 pb-2 border-b border-stone-100 bg-white text-xs font-semibold shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'dashboard'
                    ? 'bg-slate-900 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:bg-stone-100'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dashboard Pages</span>
              </button>

              <button
                onClick={() => setActiveTab('architecture')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'bg-slate-900 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:bg-stone-100'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-amber-500" />
                <span>Snowflake ➔ Power BI Pipeline</span>
              </button>
            </div>

            {/* Page Navigator (shown on dashboard tab) */}
            {activeTab === 'dashboard' && (
              <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-lg">
                {DASHBOARD_PAGES.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePageIndex(idx)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                      activePageIndex === idx
                        ? 'bg-white text-cyan-900 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Page {p.id}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Modal Content Body */}
          <div className="p-3 sm:p-5 overflow-y-auto space-y-4 text-slate-700 flex-1 bg-stone-50/50">
            
            {/* TAB 1: DASHBOARD VIEW */}
            {activeTab === 'dashboard' && (
              <div className="space-y-4 animate-in fade-in duration-150">
                
                {/* Active Page Info & Navigation Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-3 rounded-xl border border-stone-200">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                      Page {currentPage.id} of {DASHBOARD_PAGES.length}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                      {currentPage.title}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {currentPage.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevPage}
                      className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-slate-700 transition-colors cursor-pointer"
                      title="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextPage}
                      className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-slate-700 transition-colors cursor-pointer"
                      title="Next Page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsZoomed(true)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                      title="View Fullscreen Preview"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Zoom</span>
                    </button>
                  </div>
                </div>

                {/* Dashboard Image Display */}
                <div 
                  onClick={() => setIsZoomed(true)}
                  className="relative w-full rounded-xl overflow-hidden border border-slate-700 bg-[#162338] shadow-md group cursor-pointer transition-all hover:border-cyan-500/60"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  <Image
                    src={currentPage.image}
                    alt={currentPage.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain"
                    priority
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-semibold shadow-lg backdrop-blur-xs flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                      Click to expand
                    </span>
                  </div>
                </div>

                {/* KPI Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentPage.kpis.map((kpi, idx) => (
                    <div 
                      key={idx}
                      className={`p-3.5 rounded-xl border bg-white flex flex-col justify-between ${
                        kpi.highlight 
                          ? 'border-emerald-300 bg-emerald-50/30' 
                          : kpi.warn 
                          ? 'border-rose-300 bg-rose-50/30' 
                          : 'border-stone-200'
                      }`}
                    >
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                        {kpi.label}
                      </span>
                      <div className="text-xl sm:text-2xl font-black text-slate-900 my-1">
                        {kpi.value}
                      </div>
                      <span className="text-[11px] font-medium text-slate-500">
                        {kpi.sub}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Clean Takeaways (No text bloat) */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Analytical Scope & Visuals
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-slate-700">
                    {currentPage.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

            {/* TAB 2: ARCHITECTURE (SNOWFLAKE -> POWER BI) */}
            {activeTab === 'architecture' && (
              <div className="space-y-4 animate-in fade-in duration-150">
                
                {/* Minimalist Scope Division Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-900 to-slate-900 text-white space-y-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Architectural Separation of Concerns
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold">
                    Snowflake Data Foundation ➔ Power BI Analytics & Decisions
                  </h4>
                  <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                    Snowflake acts strictly as the high-throughput telemetry ingestion and dimensional modeling layer. Power BI serves as the executive intelligence layer for cost trends, concurrency heatmaps, and What-If decommission simulation.
                  </p>
                </div>

                {/* 2-Column Architecture Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Snowflake Column */}
                  <div className="p-4 rounded-xl bg-white border border-cyan-200 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-200">
                          <Snowflake className="w-4 h-4" />
                        </div>
                        <h5 className="text-sm font-bold text-slate-900">
                          1. Snowflake (Data Foundation)
                        </h5>
                      </div>
                      <span className="text-[10px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                        Platform Layer
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div>
                        <span className="font-bold text-slate-800 block mb-1">
                          Raw Telemetry Sourced:
                        </span>
                        <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                          <li><code>QUERY_HISTORY</code> (Runtime, errors, query types)</li>
                          <li><code>WAREHOUSE_METERING_HISTORY</code> (Hourly credits)</li>
                          <li><code>TABLE_STORAGE_METRICS</code> (Active, Time Travel, Fail-safe)</li>
                          <li><code>ACCESS_HISTORY</code> (Object read/write audit)</li>
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-stone-100">
                        <span className="font-bold text-slate-800 block mb-1">
                          Dimensions & Staged Views:
                        </span>
                        <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                          <li><code>DIM_PROJECTS</code>, <code>DIM_WAREHOUSES</code>, <code>DIM_USERS</code></li>
                          <li><code>V_DAILY_CREDIT_USAGE</code> (Pre-joined credit burn)</li>
                          <li><code>V_PROJECT_STORAGE_SUMMARY</code> (Storage tiers)</li>
                          <li><code>V_DECOMMISSION_CANDIDATES</code> (Idle tables)</li>
                        </ul>
                      </div>
                    </div>

                    {onOpenSnowflakeFoundation && (
                      <div className="pt-2">
                        <button
                          onClick={onOpenSnowflakeFoundation}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-900 text-xs font-bold border border-cyan-200 transition-colors cursor-pointer"
                        >
                          <span>Inspect Snowflake SQL & DDL Schema</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Power BI Column */}
                  <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                          <BarChart3 className="w-4 h-4" />
                        </div>
                        <h5 className="text-sm font-bold text-slate-900">
                          2. Power BI (Analytics & Decisions)
                        </h5>
                      </div>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Intelligence Layer
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div>
                        <span className="font-bold text-slate-800 block mb-1">
                          Interactive Dashboards & DAX Measures:
                        </span>
                        <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                          <li>Departmental burn-rate tracking & budget burn velocity.</li>
                          <li>Storage tier cost comparison ($ active vs overhead).</li>
                          <li>Hourly warehouse load heatmaps & user query volume.</li>
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-stone-100">
                        <span className="font-bold text-slate-800 block mb-1">
                          FinOps Decision Modeling:
                        </span>
                        <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                          <li>Interactive What-If parameter for inactivity threshold (30/60/90/180 days).</li>
                          <li>Automatic calculation of reclaimable gigabytes and cost savings.</li>
                          <li>Decommission priority queue for data engineering cleanup.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setActiveTab('dashboard')}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span>Open 3-Page Dashboard View</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 border-t border-stone-200 bg-stone-50 shrink-0 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Full Telemetry Pipeline & Dashboard Verified</span>
            </div>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-slate-800 font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      </div>

      {/* Fullscreen Zoom Lightbox */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-2 sm:p-4 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-100"
        >
          <div className="relative w-full max-w-7xl max-h-[92vh] flex flex-col items-center justify-center">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-2 right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
              aria-label="Close zoom"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-[85vh]">
              <Image
                src={currentPage.image}
                alt={currentPage.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-2 text-center text-slate-300 text-xs font-medium bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
              Page {currentPage.id}: {currentPage.title} • (Click anywhere to close)
            </div>
          </div>
        </div>
      )}
    </>
  );
}