'use client';

import React, { useState } from 'react';
import EducationModal from './EducationModal';
import ExperienceModal, { ExperienceItem } from './ExperienceModal';
import { 
  GraduationCap, 
  ChevronRight, 
  Briefcase,
  ExternalLink 
} from 'lucide-react';

export interface CourseItem {
  name: string;
  grade?: string;
  semester?: string;
  ects: number;
  status: 'completed' | 'in_progress';
  highlight?: boolean;
}

export interface SchoolItem {
  id: string;
  name: string;
  degree: string;
  period: string;
  location: string;
  details: string;
  ectsTotal?: string;
  averageGrade?: string;
  thesisTopic?: string;
  courses?: CourseItem[];
  topics?: string[];
}

export const schoolsData: SchoolItem[] = [
  {
    id: 'thi-master',
    name: 'Technische Hochschule Ingolstadt (THI)',
    degree: 'Master of Science (M.Sc.) — Digital Procurement & Sustainable Supply Chain Management',
    period: '10/2025 – Present',
    location: 'Ingolstadt, Germany',
    details: 'An interdisciplinary M.Sc. bridging technical engineering with strategic procurement and supply chain management. Focuses on data-driven procurement automation (Python, AI), cost & risk engineering, and resilient, sustainable supply networks.',
    ectsTotal: '45.0 ECTS Completed',
    averageGrade: 'Ø 2.4',
    thesisTopic: 'Cross-Departmental ERP Coordination via LLM Agents in SCM',
    courses: [
      {
        name: 'Selected Topics of Digitalization (Ausgewählte Kapitel der Digitalisierung)',
        grade: '1.0',
        semester: 'Summer 2025',
        ects: 5,
        status: 'completed',
        highlight: true,
      },
      {
        name: 'Digital Procurement & Data Science',
        grade: '2.0',
        semester: 'Summer 2026',
        ects: 5,
        status: 'completed',
        highlight: true,
      },
      {
        name: 'Leadership & Social Responsibility',
        grade: '2.0',
        semester: 'Summer 2026',
        ects: 5,
        status: 'completed',
      },
      {
        name: 'Technical Process Qualification Series Production Launch',
        grade: '2.0',
        semester: 'Summer 2026',
        ects: 5,
        status: 'completed',
      },
      {
        name: 'Scientific Work',
        grade: '2.0',
        semester: 'Summer 2025',
        ects: 5,
        status: 'completed',
      },
      {
        name: 'Global Sourcing & Market Analytics',
        grade: '2.7',
        semester: 'Winter 2025',
        ects: 5,
        status: 'completed',
      },
      {
        name: 'Sustainable Supply Chain Management',
        grade: '3.3',
        semester: 'Summer 2026',
        ects: 5,
        status: 'completed',
      },
      {
        name: 'Technology Development & Innovation Management',
        grade: '2.7',
        semester: 'Winter 2025',
        ects: 5,
        status: 'completed',
      },
      {
        name: 'Negotiation Technique & Digitization in Contract Management',
        grade: '2.7',
        semester: 'Winter 2025',
        ects: 5,
        status: 'completed',
      },
      {
        name: 'Cost Engineering & Risk Management',
        semester: 'Ongoing',
        ects: 5,
        status: 'in_progress',
      },
      {
        name: 'Strategic Procurement & Supplier Management',
        semester: 'Ongoing',
        ects: 5,
        status: 'in_progress',
      },
    ],
    topics: [
      'Digital Procurement & Data Science',
      'Global Sourcing & Market Analytics',
      'Sustainable Supply Chain Management',
      'Technical Process Qualification & Production Launch',
      'Selected Topics of Digitalization',
      'Negotiation Technique & Contract Digitization',
    ],
  },
  {
    id: 'uludag-bachelor',
    name: 'Bursa Uludağ University',
    degree: 'Bachelor of Science (B.Sc.) — Industrial Engineering',
    period: '09/2013 – 07/2018',
    location: 'Bursa, Turkey',
    details: 'Rigorous quantitative engineering curriculum covering operations research, mathematical optimization, statistical quality control, database design, and production planning.',
    topics: [
      'Operations Research & Optimization',
      'Statistical Quality Control & Analysis',
      'Production & Inventory Planning',
      'Database Management & Information Systems',
    ],
  },
];

export const experiencesData: ExperienceItem[] = [
  {
    id: 'rohde-schwarz',
    company: 'Rohde & Schwarz',
    role: 'Werkstudent – Supply Chain Management',
    period: '03/2026 – Present',
    location: 'Munich, Germany',
    badge: 'Current Role',
    bullets: [
      'Executed core SAP operations: Bottleneck (Engpass) tracking, forecasting updates, weekly allocation cycle reporting, and dashboard maintenance.',
      'Transformed the SAP allocation process into an interactive Power BI dashboard, streamlining executive decision-making.',
      'Automated the bottleneck (Engpass) data workflow using Power Automate and SharePoint Online, eliminating manual updates.'
    ],
    technologies: ['SAP', 'Power BI', 'Power Automate', 'SharePoint', 'Supply Chain Planning']
  },
  {
    id: 'talent-program',
    company: 'Talent Program (Siemens • adidas • Schaeffler)',
    role: 'Data Analyst & Generative AI Engineer',
    period: '09/2023 – 09/2025',
    location: 'Nuremberg, Germany',
    badge: 'Talent Program',
    bullets: [
      'Siemens (Data Analyst): Analyzed business and customer data, developing data-driven reporting solutions to support management decisions.',
      'adidas (Data Analyst): Analyzed customer and transactional data; built automated reports supporting marketing and finance operations.',
      'Schaeffler (Generative AI Engineer): Developed an AI assistant to analyze brake system data using Power Apps, Power Automate, and Azure OpenAI.'
    ],
    technologies: ['Azure OpenAI', 'Power Apps', 'Power Automate', 'Power BI', 'SQL', 'Snowflake']
  },
  {
    id: 'icterra',
    company: 'Icterra (Project-based)',
    role: 'Data Analyst',
    period: '10/2022 – 05/2023',
    location: 'Munich, Germany',
    bullets: [
      'Analyzed and structured project-related data; developed analytical evaluations to assist project steering and decision-making.'
    ],
    technologies: ['SQL', 'Data Analytics', 'Reporting', 'Project Steering']
  },
  {
    id: 'data-scientist-usa',
    company: 'Data Scientist Intensive',
    role: 'Data Science & Analytics Fellow',
    period: '09/2021 – 08/2022',
    location: 'USA',
    bullets: [
      'Full-time immersive training in data analytics with core focus on data preparation, KPI analytics, and visualization.'
    ],
    technologies: ['SQL', 'Python', 'Tableau', 'Microsoft Azure', 'Data Modeling']
  },
  {
    id: 'production-engineer',
    company: 'Industrial Manufacturing',
    role: 'Industrial Engineer in Production',
    period: '06/2017 – 02/2019',
    location: 'Bursa, Turkey',
    bullets: [
      'Led assembly line cycle-time optimization, line balancing, and material buffer management to increase operational throughput.'
    ],
    technologies: ['Production Planning', 'Process Optimization', 'Lean Manufacturing', 'Operations Research']
  }
];

export function EducationCard({ onSelectSchool }: { onSelectSchool: (school: SchoolItem) => void }) {
  return (
    <div className="w-full h-full p-5 rounded-2xl bg-gradient-to-br from-[#E4F0FB]/95 via-[#D7E8F7]/90 to-[#CBE3F5]/95 backdrop-blur-md border-2 border-white/80 shadow-[0_0_25px_rgba(56,189,248,0.4)] flex flex-col justify-between space-y-3">
      <div className="flex items-center gap-2 border-b border-sky-200/80 pb-2.5">
        <GraduationCap className="w-4 h-4 text-blue-700" />
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          Education & Degrees
        </h3>
      </div>

      <div className="space-y-2.5 pt-0.5 flex-1 flex flex-col justify-around">
        {schoolsData.map((school) => (
          <button
            key={school.id}
            onClick={() => onSelectSchool(school)}
            className="w-full text-left p-3 rounded-xl bg-white/85 hover:bg-white border border-sky-200/80 hover:border-blue-400 transition-all group block shadow-xs"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {school.name}
                </div>
                <div className="text-[11px] text-slate-700 font-medium mt-0.5">
                  {school.degree}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-slate-500">
                    {school.period}
                  </span>
                  {school.ectsTotal && (
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-300">
                      {school.ectsTotal}
                    </span>
                  )}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 mt-1 transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function ExperienceCard({ onSelectExperience }: { onSelectExperience: (exp: ExperienceItem) => void }) {
  return (
    <div className="w-full p-5 rounded-2xl bg-gradient-to-br from-[#E4F0FB]/95 via-[#D7E8F7]/90 to-[#CBE3F5]/95 backdrop-blur-md border-2 border-white/80 shadow-[0_0_25px_rgba(56,189,248,0.4)] space-y-3">
      <div className="flex items-center gap-2 border-b border-sky-200/80 pb-2.5">
        <Briefcase className="w-4 h-4 text-blue-700" />
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          Work Experience
        </h3>
      </div>

      <div className="space-y-2.5 pt-1">
        {experiencesData.map((exp) => (
          <button
            key={exp.id}
            onClick={() => onSelectExperience(exp)}
            className="w-full text-left p-3 rounded-xl bg-white/85 hover:bg-white border border-sky-200/80 hover:border-blue-400 transition-all group block shadow-xs"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {exp.company}
                  </span>
                  {exp.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 border border-blue-200">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-700 font-medium mt-0.5">
                  {exp.role}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {exp.period} • {exp.location}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 mt-1 transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function LeftSidebar() {
  const [selectedSchool, setSelectedSchool] = useState<SchoolItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  return (
    <aside className="w-full space-y-5">
      <EducationCard onSelectSchool={setSelectedSchool} />
      <ExperienceCard onSelectExperience={setSelectedExperience} />

      {selectedSchool && (
        <EducationModal
          school={selectedSchool}
          onClose={() => setSelectedSchool(null)}
        />
      )}

      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </aside>
  );
}
