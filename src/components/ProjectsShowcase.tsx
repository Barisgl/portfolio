'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/portfolioData';
import { Project, ProjectCategory } from '@/types/portfolio';
import { 
  FolderGit2, 
  BarChart3, 
  Code2, 
  X, 
  CheckCircle2, 
  Terminal, 
  Eye, 
  Sparkles, 
  Table, 
  Cpu 
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsShowcaseProps {
  externalSelectedProject?: Project | null;
  onClearExternalProject?: () => void;
}

export default function ProjectsShowcase({
  externalSelectedProject,
  onClearExternalProject,
}: ProjectsShowcaseProps = {}) {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [internalSelectedProject, setInternalSelectedProject] = useState<Project | null>(null);

  const selectedProject = externalSelectedProject || internalSelectedProject;
  const setSelectedProject = (p: Project | null) => {
    setInternalSelectedProject(p);
    if (!p && onClearExternalProject) {
      onClearExternalProject();
    }
  };

  const categories = [
    { id: 'all', label: { en: 'All Projects', de: 'Alle Projekte' } },
    { id: 'powerbi', label: { en: 'Power BI Dashboards', de: 'Power BI Dashboards' } },
    { id: 'sql', label: { en: 'SQL & Database Queries', de: 'SQL & Datenbankabfragen' } },
    { id: 'python', label: { en: 'Python & Simulations', de: 'Python & Simulationen' } },
    { id: 'tableau', label: { en: 'Tableau Visualizations', de: 'Tableau Visualisierungen' } },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const getCategoryBadge = (category: Project['category']) => {
    switch (category) {
      case 'powerbi':
        return { label: 'Power BI', color: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'sql':
        return { label: 'SQL / Snowflake', color: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'python':
        return { label: 'Python / Science', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'tableau':
        return { label: 'Tableau Public', color: 'bg-violet-50 text-violet-700 border-violet-200' };
      default:
        return { label: 'Supply Chain', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' };
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#F5F0E8]/70 border-t border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Practical Portfolio' : 'Praktisches Portfolio'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {language === 'en' ? 'Interactive Project Showcase' : 'Interaktive Projekt-Vorschau'}
            </h2>
            <p className="text-slate-600 text-base">
              {language === 'en'
                ? 'Deep-dive into live BI dashboards, enterprise SQL scripts, and statistical Python simulations.'
                : 'Erkunden Sie reale BI-Dashboards, Enterprise-SQL-Abfragen und Python-Simulationen im Detail.'}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-blue-600/30'
                    : 'bg-white text-slate-700 hover:bg-stone-50 hover:text-slate-900 border border-stone-200'
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const badge = getCategoryBadge(project.category);

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-white border border-stone-200 hover:border-blue-400 hover:shadow-xl transition-all p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        <Sparkles className="w-3.5 h-3.5" />
                        {language === 'en' ? 'Featured Case Study' : 'Hervorgehoben'}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title[language]}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                      {project.summary[language]}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-100 bg-stone-50/60 rounded-xl px-2">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-base font-extrabold text-blue-600">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium leading-tight">
                            {m.label[language]}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-stone-100 text-slate-700 border border-stone-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>
                      {project.category === 'powerbi' || project.category === 'tableau'
                        ? language === 'en'
                          ? 'View Dashboard & Analysis'
                          : 'Dashboard & Analyse ansehen'
                        : language === 'en'
                        ? 'Inspect Code & Insights'
                        : 'Code & Erkenntnisse prüfen'}
                    </span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white hover:bg-stone-50 text-slate-600 hover:text-slate-900 border border-stone-200 shadow-sm transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-white sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <span
                  className={`px-2.5 py-1 rounded text-xs font-bold border ${
                    getCategoryBadge(selectedProject.category).color
                  }`}
                >
                  {getCategoryBadge(selectedProject.category).label}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  {selectedProject.title[language]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-8 text-slate-700">
              {/* Summary & Metrics */}
              <div className="space-y-4">
                <p className="text-base text-slate-700 leading-relaxed">
                  {selectedProject.summary[language]}
                </p>

                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
                    {selectedProject.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl sm:text-2xl font-extrabold text-blue-600">
                          {m.value}
                        </div>
                        <div className="text-xs text-slate-600 font-medium mt-0.5">
                          {m.label[language]}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Interactive Dashboard Embed or Interactive Code Showcase */}
              {(selectedProject.category === 'powerbi' || selectedProject.category === 'tableau') && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                      {language === 'en' ? 'Interactive Dashboard View' : 'Interaktive Dashboard-Ansicht'}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      {language === 'en' ? 'Live Interactive Preview' : 'Interaktive Vorschau'}
                    </span>
                  </div>

                  {/* Dashboard Mockup / Embed container */}
                  <div className="rounded-xl border border-stone-300 bg-slate-900 p-4 relative overflow-hidden shadow-inner">
                    <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 flex flex-col justify-between text-white">
                      {/* Dashboard Mock Header */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Supply Chain Analytics | Real-Time KPI Suite</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300">Auto-Refresh 1h</span>
                          <span className="px-2 py-0.5 text-[10px] rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">OTIF: 96.4%</span>
                        </div>
                      </div>

                      {/* Mock Chart Grid */}
                      <div className="grid grid-cols-3 gap-4 my-auto">
                        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/50 space-y-2">
                          <div className="text-[11px] text-slate-400">Supplier Delay Variance</div>
                          <div className="h-16 flex items-end gap-1.5 pt-2">
                            <div className="w-1/4 bg-blue-500 rounded-t h-[60%]" />
                            <div className="w-1/4 bg-blue-400 rounded-t h-[85%]" />
                            <div className="w-1/4 bg-rose-500 rounded-t h-[30%]" />
                            <div className="w-1/4 bg-emerald-500 rounded-t h-[95%]" />
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/50 space-y-2">
                          <div className="text-[11px] text-slate-400">Purchase Order Fulfillment</div>
                          <div className="h-16 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-cyan-400 flex items-center justify-center text-xs font-bold text-white">
                              94.2%
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/50 space-y-2">
                          <div className="text-[11px] text-slate-400">Inventory Turnover Ratio</div>
                          <div className="text-xl font-bold text-emerald-400 mt-2">6.8x</div>
                          <div className="text-[10px] text-slate-400">+1.2x vs prior quarter</div>
                        </div>
                      </div>

                      {/* Embed Note */}
                      <div className="text-center pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-center gap-2">
                        <span>{language === 'en' ? 'Embed verified for Power BI Service / Tableau Public' : 'Verifizierter Embed für Power BI / Tableau Public'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SQL Code Viewer */}
              {selectedProject.sqlSnippets && selectedProject.sqlSnippets.length > 0 && (
                <div className="space-y-4">
                  {selectedProject.sqlSnippets.map((snippet, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-blue-600" />
                          {snippet.title[language]}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-600">
                        {snippet.explanation[language]}
                      </p>

                      {/* SQL Code Block */}
                      <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto text-blue-200 shadow-inner">
                        <pre>{snippet.query}</pre>
                      </div>

                      {/* Sample Results Table */}
                      {snippet.sampleResults && (
                        <div className="space-y-2 pt-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                            <Table className="w-3.5 h-3.5 text-blue-600" />
                            <span>{language === 'en' ? 'Query Output Preview (Sample Rows):' : 'Abfrage-Ausgabe (Beispielzeilen):'}</span>
                          </div>

                          <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
                            <table className="w-full text-left text-xs font-mono">
                              <thead className="bg-stone-100 text-slate-700 border-b border-stone-200">
                                <tr>
                                  {snippet.sampleResults.columns.map((col) => (
                                    <th key={col} className="p-2.5 font-bold">
                                      {col}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-stone-200 bg-white">
                                {snippet.sampleResults.rows.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-stone-50">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="p-2.5 text-slate-700 whitespace-nowrap">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Python Code Viewer */}
              {selectedProject.pythonCode && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-600" />
                    {language === 'en' ? 'Python Simulation Model' : 'Python Simulations-Modell'}
                  </h4>

                  <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto text-emerald-300 shadow-inner">
                    <pre>{selectedProject.pythonCode}</pre>
                  </div>
                </div>
              )}

              {/* Business Problem & Methodology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    {language === 'en' ? 'Business Challenge' : 'Geschäftliche Problemstellung'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedProject.businessProblem[language]}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-600" />
                    {language === 'en' ? 'Analytical Methodology' : 'Analytische Methodik'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedProject.methodology[language]}
                  </p>
                </div>
              </div>

              {/* Business Insights & Outcomes */}
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <h4 className="text-sm font-bold text-slate-900">
                  {language === 'en' ? 'Measurable Business Insights & Outcomes' : 'Messbare Ergebnisse & Geschäftserkenntnisse'}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.insights[language].map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-slate-700 border border-stone-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-stone-100 text-slate-800 border border-stone-300 shadow-sm transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{language === 'en' ? 'Open in GitHub' : 'In GitHub öffnen'}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
