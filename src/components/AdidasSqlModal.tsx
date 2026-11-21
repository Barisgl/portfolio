'use client';

import React, { useState } from 'react';
import { 
  X, 
  Database, 
  Code2, 
  TrendingUp, 
  Layers, 
  Users, 
  DollarSign, 
  Sparkles,
  GitMerge,
  BarChart2
} from 'lucide-react';

interface AdidasSqlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdidasSqlModal({ 
  isOpen, 
  onClose 
}: AdidasSqlModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'harmonization' | 'sql'>('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-4 flex flex-col max-h-[96vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-stone-200 bg-[#FAF7F2] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-blue-800 tracking-wider uppercase">
                  adidas • Self-Initiated Project • Exasol & DBeaver
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                Campaign Performance Benchmarking
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

        {/* Tab Sequence */}
        <div className="flex flex-wrap items-center justify-start gap-1.5 px-4 sm:px-6 pt-2.5 pb-2 border-b border-stone-100 bg-white text-xs font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-blue-700 text-white font-bold shadow-xs'
                : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Problem & Impact</span>
          </button>

          <button
            onClick={() => setActiveTab('harmonization')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'harmonization'
                ? 'bg-blue-100/90 text-blue-950 font-bold'
                : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <GitMerge className="w-3.5 h-3.5 text-blue-700" />
            <span>Unified Data Model</span>
          </button>

          <button
            onClick={() => setActiveTab('sql')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'sql'
                ? 'bg-blue-100/90 text-blue-950 font-bold'
                : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Exasol SQL Pipeline</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-3 sm:p-5 overflow-y-auto space-y-4 text-slate-700 flex-1 bg-stone-50/50 text-xs">

          {/* TAB 1: OVERVIEW & IMPACT */}
          {activeTab === 'overview' && (
            <div className="space-y-3">
              {/* Context Summary Card */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Database className="w-4 h-4 text-blue-600" />
                  <span>Eliminating Fragmented Collaboration Reporting</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Historically, each major brand collaboration (from Gucci and Prada to Bad Bunny) lived in its own isolated dashboard backed by heavy, disparate transactional tables. Comparing campaign performance required switching across 10 separate reports—creating severe data latency and cognitive friction for executive leadership.
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  I resolved this by architecting a centralized Collaboration Benchmarking data model directly inside <strong>Exasol</strong> using <strong>DBeaver</strong>. Standardized the underlying schemas across all 10 collaboration tables and engineered an optimized SQL layer to calculate standardized commercial and demographic KPIs.
                </p>
              </div>

              {/* Before vs After Impact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider">
                    Legacy Architecture
                  </span>
                  <div className="text-xs font-bold text-rose-950">10 Isolated Dashboards</div>
                  <ul className="text-[11px] text-rose-900/80 space-y-1 list-disc list-inside">
                    <li>Disparate schemas across 10 collaboration datasets.</li>
                    <li>Minutes of loading latency per dashboard switch.</li>
                    <li>Inability to benchmark revenue vs audience acquisition side-by-side.</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                    Engineered Solution
                  </span>
                  <div className="text-xs font-bold text-emerald-950">Harmonized Exasol Model</div>
                  <ul className="text-[11px] text-emerald-900/80 space-y-1 list-disc list-inside">
                    <li>Single unified semantic layer via optimized SQL unions.</li>
                    <li>Query response times reduced from minutes to sub-seconds.</li>
                    <li>Immediate side-by-side Gen-Z acquisition vs luxury ROI analysis.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SCHEMA HARMONIZATION */}
          {activeTab === 'harmonization' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <GitMerge className="w-4 h-4 text-blue-600" />
                  <span>Standardizing 10 Distinct Campaign Schemas</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Each collaboration table contained inconsistent field naming conventions, varying date formats, and disparate customer attributes. Unified them into a single analytical contract:
                </p>
              </div>

              {/* 4 Standardized Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Commercial Performance</span>
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Standardized Net Revenue, Gross Margin, and Average Order Value (AOV) across all brand partner product lines.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>New Customer Acquisition</span>
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Calculated first-time buyer acquisition rates by cross-referencing global historical customer order logs.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Audience Demographics</span>
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Harmonized Age Brackets (&lt;25 Gen-Z vs 25-34 Millennials vs 35+) and Gender distribution flags across retail touchpoints.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                    <Layers className="w-3.5 h-3.5 text-amber-600" />
                    <span>Collaborator Tagging</span>
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Categorized campaigns by collaboration tier (High Luxury: Gucci, Prada vs Streetwear / Culture: Bad Bunny, Pharrell).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EXASOL SQL PIPELINE */}
          {activeTab === 'sql' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-blue-600" />
                  <span>Exasol In-Memory SQL Pipeline (Developed via DBeaver)</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Leveraged Exasol&apos;s columnar in-memory calculation engine using standardized <code>UNION ALL</code> blocks and conditional aggregations to feed downstream reporting:
                </p>
              </div>

              {/* SQL Code Snippet */}
              <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-400">Campaign Harmonization Logic (Sample)</span>
                  <span className="text-[10px] font-mono text-slate-400">Exasol SQL (DBeaver)</span>
                </div>
                <pre className="p-2.5 rounded-lg bg-slate-950 font-mono text-[10px] text-blue-300 overflow-x-auto leading-relaxed">
{`-- Exasol Optimized Harmonization View
CREATE OR REPLACE VIEW V_CAMPAIGN_BENCHMARK_UNIFIED AS
WITH harmonized_transactions AS (
    SELECT 'Gucci' AS campaign_name, 'Luxury' AS tier, customer_id, order_id, order_date, net_sales_eur, is_new_customer, age_group, gender FROM raw_collab_gucci
    UNION ALL
    SELECT 'Bad Bunny' AS campaign_name, 'Culture' AS tier, customer_id, order_id, order_date, net_sales_eur, is_new_customer, age_group, gender FROM raw_collab_bad_bunny
    -- (Standardized across all 10 collaboration tables)
)
SELECT 
    campaign_name,
    tier,
    COUNT(DISTINCT order_id) AS total_orders,
    SUM(net_sales_eur) AS total_revenue_eur,
    ROUND(AVG(net_sales_eur), 2) AS avg_order_value_eur,
    ROUND(COUNT(CASE WHEN is_new_customer = 1 THEN 1 END) * 100.0 / COUNT(*), 1) AS new_customer_acq_rate_pct,
    ROUND(COUNT(CASE WHEN age_group = '<25' THEN 1 END) * 100.0 / COUNT(*), 1) AS gen_z_share_pct
FROM harmonized_transactions
GROUP BY campaign_name, tier;`}
                </pre>
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
