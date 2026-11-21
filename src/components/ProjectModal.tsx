'use client';

import React, { useState } from 'react';
import { 
  X, 
  BarChart3, 
  Database, 
  Sparkles, 
  TrendingUp, 
  Factory, 
  Package, 
  Truck, 
  Sliders, 
  Brain,
  DollarSign,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ZoomIn
} from 'lucide-react';
import Image from 'next/image';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  liveDashboardUrl?: string;
}

const REPORT_PAGES = [
  {
    id: 1,
    title: 'Manufacturing Operations',
    subtitle: 'Machine Downtime & AI Kaizen Countermeasures',
    image: '/projects/operations-command/page_1.png',
  },
  {
    id: 2,
    title: 'Inventory & SC',
    subtitle: 'Real-time Stock Health & Shortage Alerts',
    image: '/projects/operations-command/page_2.png',
  },
  {
    id: 3,
    title: 'Procurement Intelligence',
    subtitle: 'Supplier Sourcing & Lead-Time Reliability',
    image: '/projects/operations-command/page_3.png',
  },
  {
    id: 4,
    title: 'Customer Delivery Risk',
    subtitle: 'Global Sales & Contractual Penalty Exposure',
    image: '/projects/operations-command/page_4.png',
  },
  {
    id: 5,
    title: 'Executive Profitability & What-If',
    subtitle: 'Gross Profit & Kaizen Decision Modeling',
    image: '/projects/operations-command/page_5.png',
  },
];

export default function ProjectModal({ 
  isOpen, 
  onClose,
  liveDashboardUrl
}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'live' | 'business' | 'technical'>('live');
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [kaizenReduction, setKaizenReduction] = useState<number>(25);

  if (!isOpen) return null;

  const currentPage = REPORT_PAGES[activePageIndex];

  // Real-time What-If Kaizen simulation
  const baselineDowntimeLoss = 409840;
  const simulatedSavings = Math.round((baselineDowntimeLoss * kaizenReduction) / 100);
  const baselineProfit = 72900000;
  const simulatedProfit = baselineProfit + simulatedSavings;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
        <div className="relative w-full max-w-6xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-4 animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[96vh]">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-stone-200 bg-[#FAF7F2] shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-amber-700 tracking-wider uppercase">
                    Power BI Flagship Case Study • Personal Project
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded border border-amber-300">
                    <Sparkles className="w-2.5 h-2.5" />
                    5 Interactive Pages
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  Operations Command Center
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

          {/* Top Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 pt-2.5 pb-2 border-b border-stone-100 bg-white text-xs font-semibold shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setActiveTab('live')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'live'
                    ? 'bg-amber-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:bg-stone-100'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Power BI Dashboard Pages</span>
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'business'
                    ? 'bg-amber-100/90 text-amber-900 font-bold'
                    : 'text-slate-600 hover:bg-stone-100'
                }`}
              >
                Executive Summary
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'technical'
                    ? 'bg-amber-100/90 text-amber-900 font-bold'
                    : 'text-slate-600 hover:bg-stone-100'
                }`}
              >
                Technical Architecture
              </button>
            </div>

            {activeTab === 'live' && (
              <button
                onClick={() => setIsZoomed(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-slate-700 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen HD</span>
              </button>
            )}
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-3 sm:p-5 overflow-y-auto space-y-4 text-slate-700 flex-1 bg-stone-50/50">
            {/* TAB 1: POWER BI REPORT PAGES VIEWER */}
            {activeTab === 'live' && (
              <div className="space-y-3">
                {/* Power BI Page Switcher Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-xl bg-white border border-stone-200 shadow-2xs">
                  {/* Page Tabs */}
                  <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                    {REPORT_PAGES.map((page, idx) => (
                      <button
                        key={page.id}
                        onClick={() => setActivePageIndex(idx)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          activePageIndex === idx
                            ? 'bg-slate-900 text-white shadow-xs'
                            : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                          activePageIndex === idx ? 'bg-amber-500 text-slate-950' : 'bg-stone-200 text-slate-600'
                        }`}>
                          {page.id}
                        </span>
                        <span className="hidden sm:inline">{page.title}</span>
                      </button>
                    ))}
                  </div>

                  {/* Navigation controls */}
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-[11px] text-slate-500 font-mono mr-1">
                      {activePageIndex + 1} / {REPORT_PAGES.length}
                    </span>
                    <button
                      onClick={() => setActivePageIndex((prev) => (prev > 0 ? prev - 1 : REPORT_PAGES.length - 1))}
                      className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-slate-600 transition-colors cursor-pointer"
                      title="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActivePageIndex((prev) => (prev < REPORT_PAGES.length - 1 ? prev + 1 : 0))}
                      className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-slate-600 transition-colors cursor-pointer"
                      title="Next Page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Report Canvas Container */}
                <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-lg bg-slate-950 group">
                  <div className="relative w-full aspect-[16/9] cursor-pointer" onClick={() => setIsZoomed(true)}>
                    <Image
                      src={currentPage.image}
                      alt={currentPage.title}
                      fill
                      priority
                      className="object-contain"
                    />
                    {/* Hover Hint */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 text-white text-xs font-bold backdrop-blur-xs shadow-lg">
                        <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                        Click to view Fullscreen HD
                      </span>
                    </div>
                  </div>

                  {/* Bottom Canvas Status Bar */}
                  <div className="flex items-center justify-between px-3 py-2 bg-slate-900 text-[11px] text-slate-300 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-bold text-white">{currentPage.title}</span>
                      <span className="text-slate-500 hidden sm:inline">•</span>
                      <span className="text-slate-400 hidden sm:inline">{currentPage.subtitle}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 font-mono text-[10px]">
                      <span>Page {activePageIndex + 1} of 5</span>
                      <span>•</span>
                      <span>Power BI VertiPaq Star Schema</span>
                    </div>
                  </div>
                </div>

                {/* Kaizen What-If Simulator (Always Available) */}
                <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <Sliders className="w-3.5 h-3.5" />
                      <span>Interactive Kaizen What-If Decision Simulator</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      DAX Parameter: [Kaizen_Reduction_%]
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-300">Target Downtime Reduction:</span>
                        <span className="font-extrabold text-amber-400">{kaizenReduction}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={50}
                        step={5}
                        value={kaizenReduction}
                        onChange={(e) => setKaizenReduction(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                        <span>0% (Baseline)</span>
                        <span>25%</span>
                        <span>50% (Max Kaizen)</span>
                      </div>
                    </div>

                    <div className="flex gap-4 sm:border-l sm:border-slate-800 sm:pl-4">
                      <div>
                        <div className="text-[10px] text-slate-400">Recovered Savings:</div>
                        <div className="text-sm sm:text-base font-extrabold text-emerald-400">
                          +${simulatedSavings.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Simulated Gross Profit:</div>
                        <div className="text-sm sm:text-base font-extrabold text-white">
                          ${(simulatedProfit / 1000000).toFixed(2)}M
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: EXECUTIVE SUMMARY */}
            {activeTab === 'business' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* 1. Manufacturing Downtime Economics */}
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Factory className="w-4 h-4 text-amber-600" />
                      <span>Manufacturing Downtime Economics</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Monitors 4,650h downtime across work centers ($85–$140/hr). Embedded Gemini AI automatically prescribes preventive maintenance countermeasures for root causes.
                    </p>
                  </div>

                  {/* 2. Inventory Health & Working Capital */}
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Package className="w-4 h-4 text-emerald-600" />
                      <span>4-Tier Inventory Health & Working Capital</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Classifies stock into Critical Shortage (&lt;50% safety buffer), Low Stock, Healthy, and Overstocked across fabric, trim, and finished goods warehouses.
                    </p>
                  </div>

                  {/* 3. Global Sourcing & Lead Time Reliability */}
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Truck className="w-4 h-4 text-blue-600" />
                      <span>Global Sourcing & Expedited Freight Risk</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Tracks key tier-1 suppliers (BASF, YKK, Coats, Toray, Vibram). Highlights emergency air freight premiums paid to prevent line shutdowns.
                    </p>
                  </div>

                  {/* 4. Commercial Revenue & Penalty Exposure */}
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <DollarSign className="w-4 h-4 text-purple-600" />
                      <span>Retail B2B SLAs & Late Penalty Avoidance</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Evaluates retail channel orders (Zalando, Foot Locker, Decathlon). Identifies orders past SLA committed dates to avoid daily contractual penalties.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: TECHNICAL ARCHITECTURE */}
            {activeTab === 'technical' && (
              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Database className="w-4 h-4 text-blue-600" />
                      <span>Database & Data Modeling Layer</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      PostgreSQL 16+ on Neon Serverless Cloud. 14 3NF normalized tables with audit timestamps, paired with 5 analytical views for zero-latency OLAP query decoupling.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4 text-amber-600" />
                      <span>Power BI VertiPaq & DAX Engine</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      In-memory columnar Star Schema model. Row-context columns (`StockHealthStatus`), iterative measures (`SUMX`), and programmatic `GENERATESERIES` What-If parameter tables.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Brain className="w-4 h-4 text-violet-600" />
                      <span>Native M-Code REST AI Integration</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Custom Power Query M-code calling Google Gemini REST API (`generateContent`) at refresh time to generate row-level Kaizen countermeasures directly in Power BI visuals.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>Autonomous ReAct Copilot</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Python 3.13 + Gemini 3.5 Lite + Streamlit ReAct loop with read-only SQL safety sandbox, exposed via Cloudflare SSL Tunnel for natural language data querying.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-100 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-slate-700">
                  <span>Neon PostgreSQL (14 Tables)</span>
                  <span>➔</span>
                  <span>Star Schema Views</span>
                  <span>➔</span>
                  <span>Power BI (VertiPaq)</span>
                  <span>➔</span>
                  <span>Gemini M-Code Kaizen</span>
                  <span>➔</span>
                  <span className="text-violet-700 font-bold">Autonomous ReAct Copilot</span>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-4 py-3 sm:px-6 border-t border-stone-200 bg-stone-50 flex items-center justify-between shrink-0">
            <div className="text-[11px] text-slate-500 font-medium">
              Category: <span className="font-bold text-slate-800">Manufacturing Operations & AI Analytics</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-sm cursor-pointer"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN HD LIGHTBOX */}
      {isZoomed && (
        <div className="fixed inset-0 z-60 bg-black/95 flex flex-col p-2 sm:p-4 animate-in fade-in duration-150">
          <div className="flex items-center justify-between px-3 py-2 text-white shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold text-amber-400">
                {currentPage.title}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                (Page {activePageIndex + 1} of 5 • HD 2880x1635)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActivePageIndex((prev) => (prev > 0 ? prev - 1 : REPORT_PAGES.length - 1))}
                className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Prev
              </button>
              <button
                onClick={() => setActivePageIndex((prev) => (prev < REPORT_PAGES.length - 1 ? prev + 1 : 0))}
                className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Next
              </button>
              <button
                onClick={() => setIsZoomed(false)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white transition-colors cursor-pointer ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative flex-1 w-full overflow-auto flex items-center justify-center p-2">
            <Image
              src={currentPage.image}
              alt={currentPage.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
