'use client';

import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  Code2,
  FileSpreadsheet,
  TrendingUp,
  Layers,
  Sparkles,
  Maximize2,
  CheckCircle2,
  AlertTriangle,
  Rocket,
  Shield,
  Crown,
  Star
} from 'lucide-react';
import Image from 'next/image';

interface SiemensSegmentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PageKPI {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
  warn?: boolean;
}

interface SegmentationPage {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  kpis: PageKPI[];
  highlights: string[];
}

const DASHBOARD_PAGES: SegmentationPage[] = [
  {
    id: 1,
    title: 'Segmentation Strategy & Account Directory',
    subtitle: 'Strategic Account Classification & Risk Alert Filtering',
    image: '/projects/siemens-segmentation/page_1.png',
    kpis: [
      { label: '2025 Total Revenue', value: '€23.29M', sub: 'Across 80 Accounts' },
      { label: 'YoY Portfolio Growth', value: '+14.2%', sub: '2024 vs. 2025 Velocity' },
      { label: 'Avg Package Score', value: '2.11 / 3.0', sub: 'Tier Depth Index', highlight: true },
    ],
    highlights: [
      'Multi-dimensional segmentation matrix grouping 80 enterprise accounts into Premium (5), Gold (14), and Silver (61).',
      'Dynamic Risk Alert filter immediately isolating 8 high-revenue accounts with declining YoY momentum.',
      'Comprehensive Strategic Account Directory tracking line-level billings, package tiers, and expansion readiness.',
    ],
  },
  {
    id: 2,
    title: 'Executive Overview & Customer Segmentation',
    subtitle: 'Macro Revenue Contribution & Industry Vertical Breakdown',
    image: '/projects/siemens-segmentation/page_2.png',
    kpis: [
      { label: 'Active Enterprise Clients', value: '80', sub: '9 European Verticals' },
      { label: 'Contracted Service ARR', value: '€931 Tsd.', sub: '64 Active SLAs' },
      { label: 'Top Domain: Hardware', value: '39.18%', sub: '€9.12M Installed Base' },
    ],
    highlights: [
      'Domain revenue split: Hardware (39.18%), Services (33.95%), and Software (26.87%) across €23.29M total billing.',
      'Industry vertical ranking led by Automotive & E-Mobility, Food & Beverage FMCG, and Chemical & Process Industries.',
      'Executive dashboard layout providing immediate C-suite visibility into commercial performance and customer health.',
    ],
  },
  {
    id: 3,
    title: 'Software & Industrial Digital Solution',
    subtitle: 'PLM, SCADA & IoT Adoption Across Industrial Verticals',
    image: '/projects/siemens-segmentation/page_3.png',
    kpis: [
      { label: 'Active Software Clients', value: '79', sub: '98.8% Client Penetration' },
      { label: 'Total Software Billings', value: '€11.94M', sub: 'Licenses & Maintenance' },
      { label: 'Avg SW Order Value', value: '€28.9 Tsd.', sub: 'Enterprise Deal Size', highlight: true },
    ],
    highlights: [
      'Product suite distribution highlighting Teamcenter PLM, Industrial AI, and WinCC SCADA market penetration.',
      '100% stacked vertical tier analysis tracking Advanced vs. Standard vs. Basic software package adoption.',
      'Automated priority up-sell queue identifying high-revenue accounts currently constrained to Basic license tiers.',
    ],
  },
  {
    id: 4,
    title: 'Physical Products & Hardware Systems',
    subtitle: 'Factory Automation Equipment, PLCs & Drives Portfolio',
    image: '/projects/siemens-segmentation/page_4.png',
    kpis: [
      { label: 'Total Hardware Revenue', value: '€17.37M', sub: 'Physical Systems' },
      { label: 'Units Delivered', value: '2,000+', sub: 'DCS, PLCs & Inverters' },
      { label: 'Hardware Share %', value: '39.75%', sub: 'Core Automation Baseline' },
    ],
    highlights: [
      'Equipment family breakdown led by SIMATIC PCS 7 DCS Stations, SINAMICS S120 Drives, and SIMATIC S7-1500 PLCs.',
      'Hardware tier adoption tracking mission-critical redundancy vs. standard standalone controllers.',
      'Priority target list highlighting accounts with expanding hardware footprints ready for modern DCS migration.',
    ],
  },
];

export default function SiemensSegmentationModal({ 
  isOpen, 
  onClose 
}: SiemensSegmentationModalProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'schema' | 'dax' | 'outcomes'>('dashboard');
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
              <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-700">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-teal-800 tracking-wider uppercase">
                    Siemens • Digital Industries & Smart Infrastructure
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-teal-100 text-teal-900 px-1.5 py-0.5 rounded border border-teal-300">
                    <Sparkles className="w-2.5 h-2.5" />
                    4 Dashboard Pages
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  B2B Customer Segmentation & Commercial Intelligence
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
                    ? 'bg-teal-700 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:bg-stone-100'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Power BI Dashboards (4)</span>
              </button>

              <button
                onClick={() => setActiveTab('schema')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'schema'
                    ? 'bg-teal-100/90 text-teal-950 font-bold'
                    : 'text-slate-600 hover:bg-stone-100'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-teal-700" />
                <span>Star Schema & Power Query</span>
              </button>

              <button
                onClick={() => setActiveTab('dax')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'dax'
                    ? 'bg-teal-100/90 text-teal-950 font-bold'
                    : 'text-slate-600 hover:bg-stone-100'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-teal-700" />
                <span>DAX Semantic Layer</span>
              </button>

              <button
                onClick={() => setActiveTab('outcomes')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'outcomes'
                    ? 'bg-teal-100/90 text-teal-950 font-bold'
                    : 'text-slate-600 hover:bg-stone-100'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-teal-700" />
                <span>Portfolio Outcomes & Actions</span>
              </button>
            </div>

            {/* Page Navigator (shown on dashboard tab) */}
            {activeTab === 'dashboard' && (
              <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-lg">
                {DASHBOARD_PAGES.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePageIndex(idx)}
                    className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                      activePageIndex === idx
                        ? 'bg-white text-teal-900 shadow-xs'
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
            
            {/* TAB 1: 4-PAGE POWER BI DASHBOARD */}
            {activeTab === 'dashboard' && (
              <div className="space-y-4 animate-in fade-in duration-150">
                
                {/* Active Page Info & Navigation Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-3 rounded-xl border border-stone-200">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
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
                  className="relative w-full rounded-xl overflow-hidden border border-slate-700 bg-[#0F223D] shadow-md group cursor-pointer transition-all hover:border-teal-500/60"
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
                      <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
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
                    Key Visuals & Analytical Insights
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-slate-700">
                    {currentPage.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

            {/* TAB 2: STAR SCHEMA & POWER QUERY */}
            {activeTab === 'schema' && (
              <div className="space-y-4 animate-in fade-in duration-150 text-xs">
                
                {/* Architecture Overview */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Layers className="w-4 h-4 text-teal-600" />
                      <span>Relational Star Schema (Zero Pre-Aggregated Summary Bloat)</span>
                    </div>
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      4 Clean CSV Datasets
                    </span>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    Eliminated all pre-aggregated legacy Excel sheets in favor of a normalized relational schema connecting line-item transactional orders and SLA service contracts directly to customer master data and product catalogs.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 space-y-1.5">
                      <span className="font-bold text-slate-900 block">fact_sales_orders (1,466 rows)</span>
                      <p className="text-[11px] text-slate-600">
                        Invoice ID, Fiscal Year (2024–2025), Customer ID, Material SKU, Quantity, Unit Price, Line Total, Payment Terms.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 space-y-1.5">
                      <span className="font-bold text-slate-900 block">dim_customers (80 enterprise accounts)</span>
                      <p className="text-[11px] text-slate-600">
                        Company Name, Industry (Automotive, Food & Bev, Chemical, Machinery, etc.), City, Country, Region, Credit Limit.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 space-y-1.5">
                      <span className="font-bold text-slate-900 block">dim_products_catalog (20 families)</span>
                      <p className="text-[11px] text-slate-600">
                        SKU, Product Family Name (SIMATIC PCS 7, Teamcenter, SINAMICS, WinCC), Base Cost, List Price.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 space-y-1.5">
                      <span className="font-bold text-slate-900 block">fact_service_contracts (64 contracts)</span>
                      <p className="text-[11px] text-slate-600">
                        Contract ID, Customer ID, SLA Response Time (4h, 12h, 48h), Annual Contract Fee ARR (€931 Tsd. total).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Power Query Feature Engineering Pattern */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-3">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                    <span>The SKU Enterprise Encoding Pattern & M Transformations</span>
                  </div>

                  <div className="p-3 rounded-lg bg-teal-50 border border-teal-200 font-mono text-[11px] text-teal-950 font-bold">
                    [DOMAIN]_[SUBTYPE]_[TIER]_[FAMILY]_[CODE]
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Constructed a deterministic enterprise material parser inside Power Query (M) to extract commercial hierarchy directly from raw ERP strings without database schema mutations:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="font-bold text-slate-900 block mb-0.5">SW_LIC_ADV_PLM_5503</span>
                      <span className="text-slate-600">Software • License • Advanced (3) • PLM</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="font-bold text-slate-900 block mb-0.5">HW_PLC_ADV_PCS7_3030</span>
                      <span className="text-slate-600">Hardware • PLC/DCS • Advanced (3) • PCS 7</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="font-bold text-slate-900 block mb-0.5">SRV_MNT_STD_8X5_0202</span>
                      <span className="text-slate-600">Services • SLA • Standard (2) • 8x5 Support</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 3: DAX SEMANTIC LAYER */}
            {activeTab === 'dax' && (
              <div className="space-y-4 animate-in fade-in duration-150 text-xs">
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Code2 className="w-4 h-4 text-teal-600" />
                      <span>Production DAX Measures (Financial & Operational KPIs)</span>
                    </div>
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      DAX Semantic Layer
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-[11px]">
                    
                    {/* Financials */}
                    <div className="p-3 rounded-lg bg-stone-900 text-stone-100 space-y-1">
                      <span className="text-teal-400 font-bold font-sans block text-xs">1. Core Financial Momentum</span>
                      <p><span className="text-cyan-400">Total Revenue</span> = SUM(fact_sales_orders[Line_Total_EUR])</p>
                      <p><span className="text-cyan-400">Revenue 2024</span> = CALCULATE([Total Revenue], fact_sales_orders[Fiscal_Year] = 2024)</p>
                      <p><span className="text-cyan-400">Revenue 2025</span> = CALCULATE([Total Revenue], fact_sales_orders[Fiscal_Year] = 2025)</p>
                      <p><span className="text-cyan-400">YoY Growth %</span> = DIVIDE([Revenue 2025] - [Revenue 2024], [Revenue 2024], 0)</p>
                    </div>

                    {/* Domain Billings */}
                    <div className="p-3 rounded-lg bg-stone-900 text-stone-100 space-y-1">
                      <span className="text-teal-400 font-bold font-sans block text-xs">2. Domain Billings</span>
                      <p><span className="text-cyan-400">Software Revenue</span> = CALCULATE([Total Revenue], fact_sales_orders[Offering_Domain] = "Software")</p>
                      <p><span className="text-cyan-400">Hardware Revenue</span> = CALCULATE([Total Revenue], fact_sales_orders[Offering_Domain] = "Hardware")</p>
                      <p><span className="text-cyan-400">Services Revenue</span> = CALCULATE([Total Revenue], fact_sales_orders[Offering_Domain] = "Services")</p>
                      <p><span className="text-cyan-400">Total Contract ARR</span> = SUM(fact_service_contracts[Annual_Contract_Fee_EUR])</p>
                    </div>

                    {/* Operational Depth */}
                    <div className="p-3 rounded-lg bg-stone-900 text-stone-100 space-y-1 md:col-span-2">
                      <span className="text-teal-400 font-bold font-sans block text-xs">3. Tier Depth & Operational Scope</span>
                      <p><span className="text-cyan-400">Avg Package Score</span> = AVERAGE(fact_sales_orders[Tier_Score]) <span className="text-stone-400">// Advanced=3, Standard=2, Basic=1</span></p>
                      <p><span className="text-cyan-400">Customer Count</span> = DISTINCTCOUNT(dim_customers[Customer_ID]) <span className="text-stone-400">// 80 Accounts</span></p>
                      <p><span className="text-cyan-400">Hardware Share %</span> = DIVIDE([Hardware Revenue], [Total Revenue], 0)</p>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: PORTFOLIO OUTCOMES & ACTIONS */}
            {activeTab === 'outcomes' && (
              <div className="space-y-4 animate-in fade-in duration-150 text-xs">
                
                {/* 3 Tier Outcomes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Premium */}
                  <div className="p-4 rounded-xl bg-white border border-amber-300 shadow-2xs space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <Crown className="w-4 h-4 text-amber-500" />
                      <span>👑 Premium Clients (5 Accounts)</span>
                    </div>
                    <div className="text-xl font-black text-slate-900">
                      €6.82M <span className="text-xs font-semibold text-slate-500">(29.3% Share)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Top enterprise accounts with deep DCS and multi-user PLM adoption. Require dedicated key-account executive sponsorship.
                    </p>
                  </div>

                  {/* Gold */}
                  <div className="p-4 rounded-xl bg-white border border-teal-300 shadow-2xs space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <Star className="w-4 h-4 text-teal-600" />
                      <span>⭐ Gold Clients (14 Accounts)</span>
                    </div>
                    <div className="text-xl font-black text-slate-900">
                      €8.94M <span className="text-xs font-semibold text-slate-500">(38.4% Share)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Mid-to-high volume accounts scaling rapidly. Prime target for cross-selling comprehensive 24/7 service SLAs.
                    </p>
                  </div>

                  {/* Silver */}
                  <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <Shield className="w-4 h-4 text-slate-500" />
                      <span>🛡️ Silver Clients (61 Accounts)</span>
                    </div>
                    <div className="text-xl font-black text-slate-900">
                      €7.53M <span className="text-xs font-semibold text-slate-500">(32.3% Share)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Base equipment and transactional license buyers. Managed via digital portal channels and automated campaigns.
                    </p>
                  </div>

                </div>

                {/* Automated Action Triggers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-rose-900">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>⚠️ At-Risk Accounts (8 Accounts Flagged)</span>
                    </div>
                    <p className="text-[11px] text-rose-800 leading-relaxed">
                      Premium and Gold accounts exhibiting negative YoY revenue contraction (e.g., Alpine Precision Robotics -14.3%, Bavaria Motor Works -19.4%). Automatically triggers immediate customer-success intervention.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-emerald-900">
                      <Rocket className="w-4 h-4 text-emerald-600" />
                      <span>🚀 Premium Candidates (7 Accounts Flagged)</span>
                    </div>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      Gold accounts expanding at &gt; +20% YoY growth (e.g., Bursa Precision Machining +222.9%, Bremen Heavy Forging +143.9%). Prioritized for immediate enterprise contract upgrades.
                    </p>
                  </div>

                </div>

              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 border-t border-stone-200 bg-stone-50 shrink-0 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Full B2B Segmentation Model & DAX Semantic Layer Verified</span>
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