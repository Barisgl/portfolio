'use client';

import React, { useState } from 'react';
import { 
  X, 
  Database, 
  Code2, 
  Globe, 
  Users, 
  Bell, 
  ShieldCheck, 
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface SiemensCreditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiemensCreditModal({ 
  isOpen, 
  onClose 
}: SiemensCreditModalProps) {
  const [activeTab, setActiveTab] = useState<'regions' | 'sql' | 'workflow'>('regions');

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
                  Siemens • Commercial Financing
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded border border-blue-300">
                  Snowflake & SQL Pipeline
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Regional Customer Credit Eligibility Pipeline
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

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-start gap-1.5 px-4 sm:px-6 pt-2.5 pb-2 border-b border-stone-100 bg-white text-xs font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('regions')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'regions'
                ? 'bg-blue-700 text-white font-bold shadow-xs'
                : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>1. Regional Scope & Criteria</span>
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
            <span>2. Snowflake SQL Logic</span>
          </button>

          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'workflow'
                ? 'bg-blue-100/90 text-blue-950 font-bold'
                : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-blue-700" />
            <span>3. Stakeholder Alignment & Handoff</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-3 sm:p-5 overflow-y-auto space-y-4 text-slate-700 flex-1 bg-stone-50/50 text-xs">

          {/* TAB 1: REGIONAL SCOPE & CRITERIA */}
          {activeTab === 'regions' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>Objective: B2B Commercial Financing Eligibility</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Siemens offers commercial credit lines and flexible equipment financing to corporate clients across 3 distinct global regions. My role was to engineer the SQL qualification pipeline in Snowflake to identify, filter, and segment eligible customer cohorts based on regional spending thresholds, payment reliability, and risk governance.
                </p>
              </div>

              {/* 3 Regional Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Europe */}
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs">🇪🇺 Europe (DACH & West)</span>
                    <span className="text-[10px] font-mono font-bold text-blue-700">EUR</span>
                  </div>
                  <ul className="text-[10px] text-slate-500 space-y-1 pt-1">
                    <li>• Min. Annual Spend: <strong>€250K+</strong></li>
                    <li>• On-Time Payment Rate: <strong>≥ 95%</strong></li>
                    <li>• Active Dispute Flag: <strong>False</strong></li>
                  </ul>
                </div>

                {/* UK & Nordics */}
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs">🇬🇧 UK & Nordics</span>
                    <span className="text-[10px] font-mono font-bold text-blue-700">GBP</span>
                  </div>
                  <ul className="text-[10px] text-slate-500 space-y-1 pt-1">
                    <li>• Min. Annual Spend: <strong>£200K+</strong></li>
                    <li>• On-Time Payment Rate: <strong>≥ 95%</strong></li>
                    <li>• Credit Bureau Check: <strong>Approved</strong></li>
                  </ul>
                </div>

                {/* APAC */}
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs">🌏 APAC (Asia-Pacific)</span>
                    <span className="text-[10px] font-mono font-bold text-blue-700">USD</span>
                  </div>
                  <ul className="text-[10px] text-slate-500 space-y-1 pt-1">
                    <li>• Min. Annual Spend: <strong>$300K+</strong></li>
                    <li>• Payment Tenure: <strong>≥ 24 Months</strong></li>
                    <li>• Risk Classification: <strong>Tier 1 / Clean</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SNOWFLAKE SQL LOGIC */}
          {activeTab === 'sql' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-blue-600" />
                  <span>Snowflake SQL Transformation Logic</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Aggregated transactional invoicing and payment history to evaluate customer compliance, applying region-specific threshold segmentation:
                </p>
              </div>

              {/* SQL Code Block */}
              <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-400">Credit Qualification SQL Query (Sample)</span>
                  <span className="text-[10px] font-mono text-slate-400">Snowflake SnowSQL</span>
                </div>
                <pre className="p-2.5 rounded-lg bg-slate-950 font-mono text-[10px] text-blue-300 overflow-x-auto leading-relaxed">
{`-- Regional Credit Eligibility Model in Snowflake
WITH customer_financials AS (
    SELECT 
        c.customer_id,
        c.region_code,
        SUM(o.invoice_amount_usd) AS annual_spend_usd,
        ROUND(COUNT(CASE WHEN o.paid_on_time = TRUE THEN 1 END) * 100.0 / COUNT(*), 2) AS on_time_rate_pct,
        MAX(c.legal_block_flag) AS has_legal_block
    FROM dim_customers c
    JOIN fact_invoices o ON c.customer_id = o.customer_id
    WHERE o.invoice_date >= DATEADD(month, -12, CURRENT_DATE())
    GROUP BY c.customer_id, c.region_code
)
SELECT 
    customer_id,
    region_code,
    annual_spend_usd,
    on_time_rate_pct,
    'QUALIFIED_FOR_CREDIT' AS credit_eligibility_status
FROM customer_financials
WHERE has_legal_block = FALSE
  AND on_time_rate_pct >= 95.0
  AND (
      (region_code = 'EU'   AND annual_spend_usd >= 270000) OR
      (region_code = 'UK'   AND annual_spend_usd >= 250000) OR
      (region_code = 'APAC' AND annual_spend_usd >= 300000)
  );`}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: STAKEHOLDER ALIGNMENT & HANDOFF */}
          {activeTab === 'workflow' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Cross-Functional Delivery Workflow</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Beyond writing the Snowflake SQL logic, I owned the stakeholder alignment and downstream data activation process:
                </p>
              </div>

              {/* 3 Steps Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Step 1 */}
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>1. Regional Stakeholder Q&A</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    Presented qualified client cohorts to commercial heads across Europe, UK, and APAC. Addressed risk policy inquiries and refined regional threshold criteria.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>2. Stakeholder Sign-Off</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    Secured formal business validation and approval from regional directors, finalizing the validated list of eligible accounts.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                    <Bell className="w-3.5 h-3.5 text-amber-600" />
                    <span>3. Data Science Handoff</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    Transferred the approved customer IDs to the Data Science team to trigger automated push notifications and in-portal credit financing offers.
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
