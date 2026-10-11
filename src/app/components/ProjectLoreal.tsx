import React from "react";
import { Button } from "@/app/components/ui/button";
import lorealHero from "figma:asset/c682c65f518b7546976e9bdcb4b1a9ba53f2e3a5.png";
import markforgedPrinter from "figma:asset/b0c1e96c1c515ed56cf5bd36a593816e0fc7e59d.png";
import replacementPart from "figma:asset/f7a5809415beda953ac82063e02bcddbdc7da550.png";
import originalClip from "figma:asset/4987328492e7d035470d7851404293d3f185b907.png";
import deficientEquipment from "figma:asset/7588da539a2941481569b1fed6581a4bc32b5db1.png";
import { 
  ArrowLeft, 
  FlaskConical, 
  Printer, 
  Settings, 
  Cpu, 
  ShieldAlert, 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  Microscope,
  FileText,
  Clock,
  Coins,
  ShieldCheck
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectNavigation } from "./ProjectNavigation";
import { getOtherProjects } from "@/app/data/projects";

interface ProjectLorealProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export function ProjectLoreal({ onBack, onNavigateToProject }: ProjectLorealProps) {
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
            <span className="text-[#35612f] font-bold text-xl uppercase tracking-wider text-right block font-sans">L'Oréal R&I</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="mb-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-[#35612f] font-semibold mb-4">
            <FlaskConical className="w-5 h-5" />
            <span>R&D Engineering Internship</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            L’Oréal Research & Innovation: Process Engineering & Rapid Prototyping
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Process Engineering & Rapid Prototyping focused on 3D printing workflows, reverse engineering lab equipment, and patent-pending R&D initiatives. 
          </p>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3 mb-12">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Confidentiality Notice:</strong> Due to ongoing patent filings and corporate NDAs, technical specifications and internal project details are limited.
            </p>
          </div>
          
          <div className="aspect-video relative rounded-2xl overflow-hidden mb-12 shadow-2xl border border-slate-200">
            <ImageWithFallback 
              src={lorealHero} 
              alt="L'Oreal R&I Building" 
              className="w-full h-full object-cover object-[center_30%]" 
            />
          </div>

          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Internship Overview</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              During Summer 2025, I worked in L’Oréal’s Research & Innovation division supporting both lab-scale formulation and pilot-scale operations. One of my primary responsibilities was to set up and operationalize a new in-house 3D printing capability for the department, establishing a structured workflow that enabled scientists and engineers to quickly prototype functional components.
            </p>
            <p>
              My role bridged scientific formulation and mechanical engineering, translating experimental needs into practical hardware solutions. Beyond prototyping, I contributed extensively to process validation, SOP development, and safety initiatives — including sound level mapping, inerting validation, and creating training documentation for lab-scale equipment.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Role</p><p className="font-semibold text-slate-900">R&D Intern</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Context / Org</p><p className="font-semibold text-slate-900">L'Oréal USA</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Location</p><p className="font-semibold text-slate-900">Clark, NJ</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Duration</p><p className="font-semibold text-slate-900">Jun 2025 - Aug 2025</p></div>
            </div>
          </div>
        </header>

        {/* 3D Printing Workflow Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Printer className="w-8 h-8 text-[#35612f]" />
                <h2 className="text-3xl font-bold text-slate-900">Building a 3D Printing Workflow</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I was tasked with setting up a structured additive manufacturing workflow to support R&D teams. Over 10 weeks, I:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Researched, set-up, and developed an SOP for the printer",
                  "Established a centralized part request system",
                  "Presented capabilities and rollout to department",
                  "Trained team members in CAD modeling fundamentals",
                  "Created design guidelines for functional lab components",
                  "Managed end-to-end prototyping pipeline (concept -> CAD -> Print)"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#35612f] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#35612f]" />
                  Impact
                </h4>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                    <p className="text-2xl font-bold text-[#35612f]">15+</p>
                    <p className="text-xs text-slate-500 uppercase font-bold">Custom Parts Delivered</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                    <p className="text-2xl font-bold text-[#35612f]">Reduced</p>
                    <p className="text-xs text-slate-500 uppercase font-bold">Lead Times</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <ImageWithFallback 
                  src={markforgedPrinter} 
                  alt="Markforged Industrial 3D Printer" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Capabilities</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Layers className="w-4 h-4 text-[#35612f]" />
                    <span>Iterative Testing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Layers className="w-4 h-4 text-[#35612f]" />
                    <span>Parameter Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reverse Engineering Section */}
        <section className="mb-24 py-16 bg-slate-50 rounded-[3rem] text-slate-900 overflow-hidden relative border border-slate-100">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#35612f]/5 rounded-full -ml-48 -mt-48 blur-3xl"></div>
          <div className="relative z-10 px-8 md:px-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/2] rounded-2xl overflow-hidden border border-slate-200 shadow-sm col-span-2 relative">
                    <ImageWithFallback 
                      src={replacementPart} 
                      alt="Microscope Spring Clip" 
                      className="w-full h-full object-cover object-bottom" 
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#35612f] shadow-sm text-center">
                      Microscope Spring Clip
                    </div>
                  </div>
                  <div className="aspect-[3/2] rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
                    <ImageWithFallback 
                      src={originalClip} 
                      alt="Original Microscope Spring Clip" 
                      className="w-full h-full object-cover object-bottom" 
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm text-center">
                      MISSING CLIP
                    </div>
                  </div>
                  <div className="aspect-[3/2] rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
                    <ImageWithFallback 
                      src={deficientEquipment} 
                      alt="Deficient Equipment" 
                      className="w-full h-full object-cover object-[50%_25%]" 
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm text-center">
                      FUNCTIONAL REPLACEMENT
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-8 h-8 text-[#35612f]" />
                  <h2 className="text-3xl font-bold">Reverse Engineering & Cost Reduction</h2>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Several critical pieces of lab equipment relied on aging or discontinued parts. Waiting on vendors often meant weeks of downtime. I reverse engineered functional replacements and redesigned them for additive manufacturing.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                      <Coins className="w-6 h-6 text-[#35612f]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Material Cost</p>
                      <p className="text-sm text-slate-500">$5-$8 per unit</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#35612f]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">2+ Weeks Saved</p>
                      <p className="text-sm text-slate-500">Reduced lead times for critical lab components</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patent Pending & Process Engineering */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-8 h-8 text-[#35612f]" />
                <h2 className="text-3xl font-bold text-slate-900">Patent-Pending Prototyping</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Working closely with lab chemists, I developed custom 3D-printed accessories to support friction testing for hair analysis on a rheometer system. This required translating experimental testing requirements into mechanical solutions. These designs are currently patent-pending.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Technical Contributions:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#35612f] mt-1.5 shrink-0" />
                    <span>Converting experimental constraints into manufacturable geometries</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#35612f] mt-1.5 shrink-0" />
                    <span>Iterating for repeatability and high precision</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#35612f] mt-1.5 shrink-0" />
                    <span>Collaboration across R&D and process teams</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <Activity className="w-8 h-8 text-[#35612f]" />
                  <h2 className="text-3xl font-bold text-slate-900">Process Engineering</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Beyond prototyping, I supported multiple process engineering initiatives:
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-1">Scale-Up Support</h4>
                  <p className="text-sm text-slate-600">Partnered with lab technicians to scale formulations from lab to pilot scale.</p>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-1">Equipment Training & Standardization</h4>
                  <p className="text-sm text-slate-600">Developed technical training materials for homogenizing mixers and supported operator onboarding.</p>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-1">Inerting Validation</h4>
                  <p className="text-sm text-slate-600">Conducted inerting validation for lab-scale process equipment ensuring safety compliance.</p>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-1">OSHA Sound Mapping</h4>
                  <p className="text-sm text-slate-600">Performed lab-floor sound level mapping and analysis for hazard assessment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Outcome Section */}
        <section className="mb-24">
          <div className="bg-[#35612f] rounded-[2rem] p-12 text-white relative overflow-hidden">

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">Key Outcomes & Skills</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-[#8fbc8f] font-bold uppercase tracking-wider text-sm mb-6">Technical Skills Strengthend</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Additive Manufacturing",
                      "Reverse Engineering",
                      "Tolerance Analysis",
                      "Process Validation",
                      "OSHA Compliance",
                      "CAD Modeling",
                      "Technical Training"
                    ].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium border border-white/20 font-sans">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="-mt-4">
                  <h4 className="text-[#8fbc8f] font-bold uppercase tracking-wider text-sm mb-6">Professional Impact</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#8fbc8f]" />
                      </div>
                      <p className="text-slate-100">Established a scalable rapid-prototyping capability within the R&I department.</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#8fbc8f]" />
                      </div>
                      <p className="text-slate-100">Integrated engineering design directly into scientific R&D workflows.</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#8fbc8f]" />
                      </div>
                      <p className="text-slate-100">Successfully communicated technical capabilities to department leadership.</p>
                    </li>
                  </ul>
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
            projects={getOtherProjects("loreal")}
            onNavigate={onNavigateToProject}
          />
        </div>
      </main>
    </div>
  );
}

function Activity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}