'use client';

import React from 'react';
import { 
  X, 
  Brain, 
  Sparkles, 
  Network, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  GraduationCap,
  BellRing
} from 'lucide-react';

interface ThesisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThesisModal({ isOpen, onClose }: ThesisModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-200 bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#003865]/10 border border-[#003865]/20 text-[#003865]">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#003865] tracking-wider uppercase">
                Master Thesis Architecture • TH Ingolstadt
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Multi-Agent LLM Coordination Across Enterprise ERPs
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-slate-700 max-h-[75vh] overflow-y-auto">
          {/* Executive Research Objective Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#003865]/10 via-blue-50/40 to-stone-50 border border-[#003865]/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#003865]">
              <Sparkles className="w-4 h-4 text-[#003865]" />
              <span>Core Objective & System Vision</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Eliminating cross-functional silos by deploying specialized, autonomous LLM agents across all departmental ERP systems throughout the enterprise. Instead of static database locks or delayed manual communications, the multi-agent network autonomously monitors operational events and synchronizes vital decisions across all interconnected business units in real time.
            </p>
          </div>

          {/* Generalized Enterprise Multi-Agent Coordination Scenario */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Network className="w-3.5 h-3.5 text-blue-600" />
              <span>Multi-Agent Operational Coordination Lifecycle</span>
            </h4>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <div className="font-bold text-slate-900">Departmental ERP Event Trigger</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    An operational change, priority shift, order modification, or supply constraint is registered within any departmental ERP module.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#003865]/15 text-[#003865] font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <div>
                  <div className="font-bold text-slate-900">Multi-Agent Broadcast & Context Propagation</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    The local LLM agent interprets the business context and immediately broadcasts the updated parameters across the interconnected enterprise agent network.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <div>
                  <div className="font-bold text-amber-900 flex items-center gap-1.5">
                    <span>Proactive Ripple Effect & Bottleneck Warning</span>
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    Downstream agents cross-reference local constraints (capacities, inventory buffers, lead times, resource allocation) and flag potential conflicts in real time before execution commitments are finalized.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">
                  4
                </span>
                <div>
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <span>Collaborative Multi-Agent Consensus</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-[11px] text-emerald-800 mt-0.5">
                    Interconnected agents negotiate trade-offs and present optimized, synchronized contingency options to human decision-makers across all involved departments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Dimensions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Core Architectural Pillars</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <BellRing className="w-3.5 h-3.5 text-[#003865]" />
                  <span>Real-Time Disruption Alerts</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Transforming ERPs from passive data repositories into proactive early-warning networks that continuously anticipate disruption ripple effects.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Agent Negotiation Protocols</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Autonomous consensus protocols allowing departmental agents to exchange constraints, resolve conflicting priorities, and synchronize enterprise actions.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Profile */}
          <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-slate-800">TH Ingolstadt • Digital Procurement & SCM</span>
            </div>
            <span className="text-[11px] font-bold text-[#003865] bg-[#003865]/10 px-2 py-0.5 rounded border border-[#003865]/20">
              Master Thesis
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-stone-200 bg-stone-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-sm"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
