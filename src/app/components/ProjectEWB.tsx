import React from "react";
import { Button } from "@/app/components/ui/button";
import { 
  ArrowLeft, 
  Globe, 
  GraduationCap, 
  Map, 
  HardHat, 
  Users, 
  ClipboardList, 
  CheckCircle2, 
  Construction, 
  Droplets,
  Sprout,
  Calendar,
  Layout,
  Hammer
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectNavigation } from "./ProjectNavigation";
import { getOtherProjects } from "@/app/data/projects";
import ewbHero from "figma:asset/9db817b6e51a2b84db0e8998d45f990a36e2bf36.png";

interface ProjectEWBProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export function ProjectEWB({ onBack, onNavigateToProject }: ProjectEWBProps) {
  const assessmentHighlights = [
    {
      title: "Site Evaluation",
      description: "Surveyed school grounds using Trimble mapping; assessed soil quality for construction feasibility.",
      icon: <Map className="w-5 h-5" />
    },
    {
      title: "Community Engagement",
      description: "Met with municipal authorities and school leadership to align on priorities and local contributions.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Construction Planning",
      description: "Identified phased priorities: road access, primary block (7 classrooms), and nursery block.",
      icon: <Layout className="w-5 h-5" />
    },
    {
      title: "Materials & Techniques",
      description: "Evaluated local materials like ISSBs, balancing sustainability, cost, and feasibility.",
      icon: <Hammer className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-[#35612f] transition-colors gap-2 font-bold uppercase text-sm tracking-wider"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
          <div className="hidden sm:block">
            <span className="text-[#35612f] font-bold text-xl uppercase tracking-wider text-right block font-sans">Engineers Without Borders</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="mb-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-[#35612f] font-semibold mb-4">
            <Globe className="w-5 h-5" />
            <span>International Project Lead</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Kapchorwa, Uganda: Ebenezer Socio Nursery & Primary School
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Leading Northwestern University's EWB Student Chapter to design and construct sustainable primary school facilities in Kapchorwa, Uganda.
          </p>
          
          <div className="aspect-video relative rounded-2xl overflow-hidden mb-12 shadow-2xl border border-slate-200">
            <ImageWithFallback 
              src={ewbHero} 
              alt="Design and construction of school facilities in Kapchorwa, Uganda" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Project Overview</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              As a project lead for Northwestern University's Engineers Without Borders Student Chapter, I co-manage the international team working to design and construct sustainable school facilities in Kapchorwa, Uganda. The project focuses on improving access, building durable classroom blocks, and supporting long-term community development through locally appropriate engineered solutions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Role</p>
                <p className="font-semibold text-slate-900">Project Manager</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Context / Org</p>
                <p className="font-semibold text-slate-900">EWB Northwestern</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Location</p>
                <p className="font-semibold text-slate-900">Kapchorwa, Uganda</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Duration</p>
                <p className="font-semibold text-slate-900">Jan 2025 - PRESENT</p>
              </div>
            </div>
          </div>
        </header>

        {/* Contributions Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <ClipboardList className="w-8 h-8 text-[#35612f]" />
            <h2 className="text-3xl font-bold text-slate-900">Key Contributions</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                <HardHat className="w-6 h-6 text-[#35612f]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Leadership & Safety</h4>
              <p className="text-slate-600 leading-relaxed">
                Served as Health & Safety Officer for 2025 Assessment Trip, creating travel protocols and safety plans for international field work. Mentored student team members through complex design phases.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                <Map className="w-6 h-6 text-[#35612f]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Technical Mapping</h4>
              <p className="text-slate-600 leading-relaxed">
                Conducted on-site topographic mapping and soil testing to inform grading, drainage, and classroom block design using professional surveying equipment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                <Construction className="w-6 h-6 text-[#35612f]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Project Management</h4>
              <p className="text-slate-600 leading-relaxed">
                Managing project documentation, phased construction plans, and deliverables for permitting and approval, ensuring long-term project viability.
              </p>
            </div>
          </div>
        </section>

        {/* Assessment Trip Timeline/Highlights */}
        <section className="mb-24 py-16 bg-[#35612f]/5 rounded-[3rem] px-8 md:px-16 border border-[#35612f]/10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#35612f] text-white rounded-full text-sm font-bold mb-4 font-sans">
              <Calendar className="w-4 h-4" />
              Sept 2025 Assessment Trip
            </div>
            <h2 className="text-3xl font-bold">Field Research & Data Collection</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentHighlights.map((highlight, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="text-[#35612f] mb-4">{highlight.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{highlight.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact & Next Steps */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Impact & Vision</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our 2025 work established the foundation for a multi-year partnership with the Kapchorwa community, moving from theoretical planning to data-driven design. The project is now positioned for funding and contractor engagement.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phased Road Access</h4>
                    <p className="text-sm text-slate-500">Secured data for vital site access improvements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Soil Quality Validation</h4>
                    <p className="text-sm text-slate-500">Confirmed feasibility for Interlocking Stabilized Soil Blocks (ISSBs).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Community Alignment</h4>
                    <p className="text-sm text-slate-500">Co-developed priorities with school leadership and government and signed an MOU.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#35612f] text-white p-10 rounded-[2rem] relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-6">Upcoming Phases</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 bg-white/20 rounded-full" />
                  <div>
                    <p className="text-[#8fbc8f] font-bold text-xs uppercase mb-1">Phase 1</p>
                    <p className="font-bold">Detailed Block Design</p>
                    <p className="text-white/80 text-sm mt-1">Finalizing structural engineering for 4 classrooms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-white/20 rounded-full" />
                  <div>
                    <p className="text-[#8fbc8f] font-bold text-xs uppercase mb-1">Phase 2</p>
                    <p className="font-bold">Competitive Bidding</p>
                    <p className="text-white/80 text-sm mt-1">Selecting local contractors for primary construction.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-white/20 rounded-full" />
                  <div>
                    <p className="text-[#8fbc8f] font-bold text-xs uppercase mb-1">Phase 3</p>
                    <p className="font-bold">Groundbreaking</p>
                    <p className="text-white/80 text-sm mt-1">On-site construction management and quality control.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mt-20">
          <button 
            onClick={onBack}
            className="inline-flex items-center px-12 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-[#35612f] transition-all duration-300 gap-3 group shadow-2xl hover:scale-105 uppercase tracking-widest text-sm"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            Back to Projects
          </button>
          
          <ProjectNavigation 
            projects={getOtherProjects("ewb")}
            onNavigate={onNavigateToProject}
          />
        </div>
      </main>
    </div>
  );
}