'use client';

import React from 'react';
import { 
  X, 
  Database, 
  Code2, 
  CheckCircle2, 
  Clock, 
  Filter,
  Layers
} from 'lucide-react';

interface SqlTelemetryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SqlTelemetryModal({ 
  isOpen, 
  onClose 
}: SqlTelemetryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-4 flex flex-col max-h-[96vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-stone-200 bg-[#FAF7F2] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-blue-800 tracking-wider uppercase">
                Siemens • SQL
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Cloud Telemetry Aggregation & Access Auditing
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
          
          {/* Executive Overview */}
          <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>Overview & Scope</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Engineered analytical SQL logic to transform millions of scattered infrastructure event logs into structured, curated views. Focused on time-series telemetry aggregation, read vs. write query classification, and modular view definitions.
            </p>
          </div>

          {/* 3 Core SQL Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>1. Time-Series Aggregation</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Applied <code>DATE_TRUNC</code> and grouping sets to transform granular hourly compute metering logs into standardized daily usage metrics.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                <Filter className="w-3.5 h-3.5 text-indigo-600" />
                <span>2. Access-Type Segregation</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Evaluated <code>QUERY_TYPE</code> using conditional <code>CASE</code> statements to distinguish ETL writes (<code>INSERT</code>/<code>UPDATE</code>) from business consumption (<code>SELECT</code>).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                <Layers className="w-3.5 h-3.5 text-teal-600" />
                <span>3. Modular View Layer</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Defined 4 centralized SQL views to encapsulate business rules, preventing repeated full-table scans on raw operational metadata.
              </p>
            </div>
          </div>

          {/* SQL Logic Pattern Preview */}
          <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-blue-400">Access Pattern Classification Logic (Sample)</span>
              <span className="text-[10px] font-mono text-slate-400">SnowSQL DDL</span>
            </div>
            <pre className="p-2.5 rounded-lg bg-slate-950 font-mono text-[10px] text-blue-300 overflow-x-auto leading-relaxed">
{`-- Identify Table Consumption vs. Write-Only Pipelines
SELECT 
    t.table_name,
    t.project_id,
    MAX(CASE WHEN q.query_type = 'SELECT' THEN q.start_time END) AS last_read_time,
    MAX(CASE WHEN q.query_type IN ('INSERT','UPDATE','MERGE') THEN q.start_time END) AS last_write_time,
    DATEDIFF('day', MAX(CASE WHEN q.query_type = 'SELECT' THEN q.start_time END), CURRENT_TIMESTAMP()) AS days_since_last_read
FROM dim_tables t
LEFT JOIN query_history q ON t.table_name = q.target_table
GROUP BY t.table_name, t.project_id;`}
            </pre>
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
