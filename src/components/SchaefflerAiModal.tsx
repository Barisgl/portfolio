'use client';

import React from 'react';
import { 
  X, 
  Brain, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  AppWindow, 
  Bot 
} from 'lucide-react';

interface SchaefflerAiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SchaefflerAiModal({ 
  isOpen, 
  onClose 
}: SchaefflerAiModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-4 flex flex-col max-h-[96vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-stone-200 bg-[#FAF7F2] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-800 tracking-wider uppercase">
                Schaeffler • Gen-AI
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Brake System Data AI Assistant
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
          
          {/* Project Summary */}
          <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
            <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Project Summary</span>
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Created an AI assistant prototype to analyze brake system data, connecting a Power Apps user interface with Power Automate workflows and Azure OpenAI.
            </p>
          </div>

          {/* Workflow & Components */}
          <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs">
            <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-700" />
              <span>Implementation</span>
            </span>
            
            <div className="space-y-2 pt-1 text-[11px]">
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-stone-50 border border-stone-200">
                <AppWindow className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Power Apps:</strong> Built the front-end interface to test and query brake system data.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-stone-50 border border-stone-200">
                <Workflow className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Power Automate:</strong> Orchestrated the workflow to feed processed brake data into the assistant.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-stone-50 border border-stone-200">
                <Bot className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Azure OpenAI (Assistant):</strong> Analyzed the incoming brake data and provided automated insights.
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Tech Pills */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Azure OpenAI (Gen-AI)',
                'Power Apps',
                'Power Automate'
              ].map((tool) => (
                <span 
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-slate-800 font-semibold text-[11px]"
                >
                  {tool}
                </span>
              ))}
            </div>
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
