'use client';

import React, { useState } from 'react';
import UnifiedProfileCard from '@/components/UnifiedProfileCard';
import TechStackBar, { TabId } from '@/components/TechStackBar';
import { 
  EducationCard, 
  ExperienceCard, 
  SchoolItem 
} from '@/components/LeftSidebar';
import { ExperienceItem } from '@/components/ExperienceModal';
import EducationModal from '@/components/EducationModal';
import ExperienceModal from '@/components/ExperienceModal';
import DynamicShowcase from '@/components/DynamicShowcase';
import ThesisModal from '@/components/ThesisModal';
import ProjectModal from '@/components/ProjectModal';
import SiemensSegmentationModal from '@/components/SiemensSegmentationModal';
import SnowflakePowerBiModal from '@/components/SnowflakePowerBiModal';
import SnowflakeCostModal from '@/components/SnowflakeCostModal';
import SqlTelemetryModal from '@/components/SqlTelemetryModal';
import SiemensCreditModal from '@/components/SiemensCreditModal';
import RohdeSapModal, { SapProjectItem } from '@/components/RohdeSapModal';
import SchaefflerAiModal from '@/components/SchaefflerAiModal';
import MathDataBackground from '@/components/MathDataBackground';
import { FolderGit2 } from 'lucide-react';
import { ProjectCardItem } from '@/components/ProjectsCard';

export default function Home() {
  const [selectedSchool, setSelectedSchool] = useState<SchoolItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [isThesisModalOpen, setIsThesisModalOpen] = useState(false);
  const [selectedSapProject, setSelectedSapProject] = useState<SapProjectItem | null>(null);
  const [isSnowflakeModalOpen, setIsSnowflakeModalOpen] = useState(false);
  const [isSqlModalOpen, setIsSqlModalOpen] = useState(false);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);
  const [isSchaefflerAiModalOpen, setIsSchaefflerAiModalOpen] = useState(false);
  const [selectedPowerBIProject, setSelectedPowerBIProject] = useState<ProjectCardItem | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>('thesis');

  const handleOpenPowerBIProject = (proj?: ProjectCardItem) => {
    if (proj) {
      setSelectedPowerBIProject(proj);
    }
  };

  return (
    <main className="min-h-screen bg-[#060B14] text-slate-100 p-6 md:p-10 relative overflow-x-hidden">
      <MathDataBackground />
      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        {/* ROW 1: Unified Photo & Profile Banner Card */}
        <UnifiedProfileCard />

        {/* ROW 2:
            Left: Education & Work Experience (350px column)
            Right: Projects Section (Champagne theme container with TechStackBar & DynamicShowcase)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6 items-start">
          <div className="w-full space-y-6">
            <EducationCard onSelectSchool={setSelectedSchool} />
            <ExperienceCard onSelectExperience={setSelectedExperience} />
          </div>

          <div className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EC] to-[#F3EAD9] border border-[#E6D7C3] shadow-sm space-y-4">
            {/* Projects Header & Selector Bar */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 px-1">
                <FolderGit2 className="w-4 h-4 text-[#8C6335]" />
                <h3 className="text-xs font-bold text-[#6E4F28] uppercase tracking-wider">
                  Projects & Technical Showcase
                </h3>
              </div>
              <TechStackBar 
                activeTab={activeTab}
                onSelectTab={setActiveTab}
              />
            </div>

            <div className="pt-1">
              <DynamicShowcase 
                activeTab={activeTab}
                onOpenThesisDetails={() => setIsThesisModalOpen(true)}
                onOpenPowerBIProject={handleOpenPowerBIProject}
                onOpenSapProject={(proj) => setSelectedSapProject(proj)}
                onOpenSnowflakeProject={() => setIsSnowflakeModalOpen(true)}
                onOpenSqlProject={() => setIsSqlModalOpen(true)}
                onOpenSiemensCreditProject={() => setIsCreditModalOpen(true)}
                onOpenSchaefflerAiProject={() => setIsSchaefflerAiModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Education Modal */}
      {selectedSchool && (
        <EducationModal
          school={selectedSchool}
          onClose={() => setSelectedSchool(null)}
        />
      )}

      {/* Work Experience Modal */}
      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}

      {/* Detailed Thesis Research Modal */}
      <ThesisModal
        isOpen={isThesisModalOpen}
        onClose={() => setIsThesisModalOpen(false)}
      />

      {/* Interactive Power BI Project Modal (Operations Command Center) */}
      <ProjectModal
        isOpen={selectedPowerBIProject?.id === 'operation-command'}
        onClose={() => setSelectedPowerBIProject(null)}
      />

      {/* Siemens Customer Segmentation Power BI Modal */}
      <SiemensSegmentationModal
        isOpen={selectedPowerBIProject?.id === 'customer-segmentation-siemens'}
        onClose={() => setSelectedPowerBIProject(null)}
      />

      {/* Snowflake Telemetry & Cost Optimization Power BI Modal */}
      <SnowflakePowerBiModal
        isOpen={selectedPowerBIProject?.id === 'snowflake-cost-monitoring-siemens'}
        onClose={() => setSelectedPowerBIProject(null)}
        onOpenSnowflakeFoundation={() => {
          setSelectedPowerBIProject(null);
          setIsSnowflakeModalOpen(true);
        }}
      />

      {/* Snowflake Data Modeling & Preparation Modal (Only for Snowflake Tab) */}
      <SnowflakeCostModal
        isOpen={isSnowflakeModalOpen}
        onClose={() => setIsSnowflakeModalOpen(false)}
        onOpenPowerBiDashboard={() => {
          setIsSnowflakeModalOpen(false);
          setSelectedPowerBIProject({
            id: 'snowflake-cost-monitoring-siemens',
            title: 'Snowflake Cost Monitoring',
            tag: 'Siemens',
          });
        }}
      />

      {/* SQL Telemetry Aggregation & Access Auditing Modal */}
      <SqlTelemetryModal
        isOpen={isSqlModalOpen}
        onClose={() => setIsSqlModalOpen(false)}
      />

      {/* Siemens Regional Credit Eligibility Pipeline Modal */}
      <SiemensCreditModal
        isOpen={isCreditModalOpen}
        onClose={() => setIsCreditModalOpen(false)}
      />

      {/* Rohde & Schwarz SAP Operations & Automation Modal */}
      <RohdeSapModal
        project={selectedSapProject}
        onClose={() => setSelectedSapProject(null)}
      />

      {/* Schaeffler Brake System Telemetry AI Assistant Modal */}
      <SchaefflerAiModal
        isOpen={isSchaefflerAiModalOpen}
        onClose={() => setIsSchaefflerAiModalOpen(false)}
      />
    </main>
  );
}
