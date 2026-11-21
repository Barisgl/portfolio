'use client';

import React from 'react';
import { SchoolItem } from './LeftSidebar';
import { 
  X, 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Cpu,
  TrendingDown,
  Leaf
} from 'lucide-react';

interface EducationModalProps {
  school: SchoolItem | null;
  onClose: () => void;
}

export default function EducationModal({ school, onClose }: EducationModalProps) {
  if (!school) return null;

  const isTHI = school.id === 'thi-master';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-200 bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase">
                Academic Degree Profile
              </span>
              <h3 className="text-base font-bold text-slate-900">
                {school.name}
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
          {/* Degree & Period */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="text-sm font-bold text-slate-900">
                  {school.degree}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{school.location}</span>
                  <span>•</span>
                  <span>{school.period}</span>
                </div>
              </div>

              {/* Highlights Pill */}
              {school.ectsTotal && (
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {school.ectsTotal}
                  </span>
                  {school.averageGrade && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      Grade: {school.averageGrade}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Master Thesis Topic Banner */}
            {school.thesisTopic && (
              <div className="mt-2 pt-2 border-t border-stone-200 flex items-center gap-2 text-xs text-blue-900 font-semibold bg-blue-50/60 p-2.5 rounded-lg">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  <strong>Master Thesis / Research Topic:</strong> {school.thesisTopic}
                </span>
              </div>
            )}
          </div>

          {/* Quick & Understandable Programme Summary */}
          {isTHI ? (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Master's Program Overview — At a Glance</span>
              </h4>

              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50/50 to-stone-50 border border-blue-100 space-y-3">
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  This Master of Science bridges the gap between <strong>technical engineering</strong> and <strong>strategic commercial leadership</strong>. It prepares professionals to replace intuitive decisions with data-driven models, automated digital procurement, and crisis-resilient supply networks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700">
                      <Cpu className="w-3.5 h-3.5 text-blue-600" />
                      <span>Data Science & AI</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Automating procurement using Python, predictive data analysis, and AI/LLM models.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-stone-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700">
                      <TrendingDown className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Cost Engineering</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Target & Should-Costing, manufacturing cost driver analysis, and supplier risk modeling.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-stone-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Sustainability</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Carbon footprint reduction, ethical sourcing compliance, and supply chain resilience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            school.details && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-slate-500" />
                  <span>Program Overview</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed bg-stone-50 p-3 rounded-xl border border-stone-200">
                  {school.details}
                </p>
              </div>
            )
          )}

          {/* Official Courses Table / List (Extracted from Notenblatt) */}
          {school.courses && school.courses.length > 0 ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Official Coursework & Completed Modules ({school.courses.length})</span>
                </h4>
                <span className="text-[11px] text-slate-500 font-medium">Verified by THI Notenblatt</span>
              </div>

              <div className="overflow-hidden rounded-xl border border-stone-200 shadow-2xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100/80 text-slate-700 border-b border-stone-200">
                    <tr>
                      <th className="py-2.5 px-3 font-bold">Module / Subject Name</th>
                      <th className="py-2.5 px-3 font-bold text-center">Semester</th>
                      <th className="py-2.5 px-3 font-bold text-center">ECTS</th>
                      <th className="py-2.5 px-3 font-bold text-right">Grade / Mark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white font-medium">
                    {school.courses.map((course, idx) => {
                      const isTopGrade = course.grade === '1.0';
                      const isExcellent = course.grade === '2.0';

                      return (
                        <tr 
                          key={idx} 
                          className={`hover:bg-stone-50/80 transition-colors ${
                            course.highlight ? 'bg-blue-50/30' : ''
                          }`}
                        >
                          <td className="py-2.5 px-3 text-slate-900">
                            <div className="font-semibold">{course.name}</div>
                          </td>
                          <td className="py-2.5 px-3 text-center text-slate-500 text-[11px]">
                            {course.semester}
                          </td>
                          <td className="py-2.5 px-3 text-center text-slate-600 font-bold">
                            {course.ects}
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            {course.status === 'completed' ? (
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-extrabold ${
                                  isTopGrade
                                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                    : isExcellent
                                    ? 'bg-blue-100 text-blue-800 border border-blue-300'
                                    : 'bg-stone-100 text-slate-700 border border-stone-200'
                                }`}
                              >
                                {course.grade}
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                                In Progress
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Bachelor's topics */
            school.topics && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Key Engineering Disciplines & Topics</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {school.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="text-[11px] text-slate-500 font-medium">
            TH Ingolstadt • Faculty of Industrial Engineering
          </div>
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
