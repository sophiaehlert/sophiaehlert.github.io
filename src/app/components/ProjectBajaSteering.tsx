import React from "react";
import { Button } from "@/app/components/ui/button";
import { 
  ArrowLeft, 
  Settings, 
  Wrench, 
  Search, 
  DraftingCompass, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck,
  Calculator,
  Container,
  Activity,
  Maximize2,
  FileText,
  Target
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectNavigation } from "./ProjectNavigation";
import { getOtherProjects } from "@/app/data/projects";
import assemblyImg from "figma:asset/7bd13f99f33e640202f7685f464933dcf84fe33c.png";
import plugDrawing from "figma:asset/05718377d7686b34345aa956a78105e94171a3fe.png";
import tubeDrawing from "figma:asset/ca2ff32d8dc780b1af28633cc5a2ca960e3b2aac.png";
import linkFullAssembly from "figma:asset/cac8d1618930cd85f4e2401668ab2f5520c66393.png";
import latheImg from "figma:asset/9d4d6417b34b18da7fcac880949c2661ef963779.png";
import bajaActionImg from "figma:asset/229998b3e75a77322b6bd97698155ec057b92ef3.png";
import bajaJumpImg from "figma:asset/9b71e36913a9f5f95e7f816dc3d7d2280e7757e2.png";
import finalIntegrationImg from "figma:asset/e9a8c45c9b159f45af9dc9ec19d269dd863aa447.png";

interface ProjectBajaSteeringProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export function ProjectBajaSteering({ onBack, onNavigateToProject }: ProjectBajaSteeringProps) {
  const steps = [
    {
      title: "Design Objectives & System Architecture",
      icon: <Target className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            Baja vehicles endure high vibration, repeated impact loads, and aggressive terrain. These components must be lightweight yet durable enough to maintain alignment under stress.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wider">Primary Goals:</h4>
            <ul className="space-y-3">
              {[
                "Withstand high dynamic and shock loads",
                "Maintain precise alignment under load",
                "Allow quick toe adjustment",
                "Maximize thread engagement for strength",
                "Be fully manufacturable in-house"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-base text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#35612f] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#35612f]/5 p-6 rounded-xl border border-[#35612f]/10">
            <p className="text-sm text-slate-600 leading-relaxed italic">
              Using opposite-handed rod ends allows toe adjustment by simply rotating the link body — a standard motorsport practice for fast track-side tuning.
            </p>
          </div>
        </div>
      ),
      media: (
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
          <ImageWithFallback 
            src={bajaJumpImg} 
            alt="Northwestern Baja SAE vehicle jumping over tires during competition" 
            className="w-full h-auto" 
          />
          <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
            Baja SAE Competition Vehicle
          </div>
        </div>
      )
    },
    {
      title: "Geometry & Thread Engagement",
      icon: <Calculator className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            The most important constraint was ensuring safe thread engagement at maximum extension. For the 3/8-24 rod ends, I required a minimum engagement of 1.5x thread diameter, or 0.5265".
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Min Engagement</p>
                <p className="text-2xl font-bold text-slate-900">0.5625 in</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Thread Spec</p>
                <p className="text-2xl font-bold text-slate-900">3/8-24 UNF</p>
              </div>
            </div>
            <p className="text-slate-600 text-base italic">
              I used this criteria to calculate the main tube length relative to chassis hard points.
            </p>
          </div>
        </div>
      ),
      media: (
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">System Components</h4>
          <div className="space-y-4">
            {[
              { label: "RH Rod End", val: "PCYMR6T" },
              { label: "LH Rod End", val: "PCYML6T" },
              { label: "Jam Nuts", val: "3/8-24 Thin" },
              { label: "Bungs", val: "4130 UNF" },
              { label: "Main Body", val: "4130 1\" OD" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">{item.label}</span>
                <span className="text-xs font-mono bg-[#35612f]/10 px-2 py-1 rounded text-[#35612f] font-bold">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "CAD Modeling & System Integration",
      icon: <DraftingCompass className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            Once the geometry was defined, I modeled the assembly in SolidWorks, and checked:
          </p>
          <ul className="text-gray-600 space-y-1 list-disc pl-4">
            <li>Interface with uprights and steering rack</li>
            <li>Clearance during maximum suspension travel and steering lock</li>
            <li>No interference with surrounding components</li>
          </ul>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm mt-6">
            <ImageWithFallback 
              src={linkFullAssembly} 
              alt="Steering Link Full Assembly SolidWorks" 
              className="w-full h-auto" 
            />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Steering Link Assembly
            </div>
          </div>
        </div>
      ),
      media: (
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
          <ImageWithFallback 
            src={assemblyImg} 
            alt="Baja SAE Steering Assembly SolidWorks Render" 
            className="w-full h-auto" 
          />
          <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
            Integration into Full Suspension Assembly
          </div>
        </div>
      )
    },
    {
      title: "Technical Drawings & Manufacturing",
      icon: <Wrench className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            I created technical drawings for each custom component, applying GD&T principles to ensure proper press-fits and thread quality. Then, I manufactured each part using the manual lathe. This involved precise facing, center drilling, tapping, and external turning to achieve a reliable press-fit.
          </p>
        </div>
      ),
      media: (
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
          <ImageWithFallback 
            src={latheImg}
            alt="Lathe machining of steering component" 
            className="w-full h-auto"
          />
          <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
            Manual Lathe Machining
          </div>
        </div>
      )
    },
    {
      title: "Final Integration & Validation",
      icon: <Activity className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            The completed steering links were integrated into the 2026 vehicle's front suspension, enabling rapid track-side adjustments.
          </p>
          <div className="bg-[#35612f]/5 p-6 rounded-xl border border-[#35612f]/20">
            <h4 className="font-bold text-[#35612f] text-sm mb-2 uppercase tracking-wider">Field Performance</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              The steering links successfully withstood rigorous test driving conditions, including rough terrain and high-impact maneuvers, with no failures or structural issues observed.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            {["SolidWorks", "GD&T", "Lathe Machining", "TIG Welding", "DFM"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-[#35612f]/10 text-[#35612f] rounded-full text-xs font-bold uppercase tracking-wider font-sans">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
      media: (
        <div className="relative">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback 
              src={finalIntegrationImg}
              alt="Baja vehicle final integration" 
              className="w-full h-auto"
            />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Final Integration
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-[#35612f] font-bold text-xl uppercase tracking-wider text-right block font-sans">Northwestern Baja</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-20">
        <header className="mb-24 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-[#35612f] font-bold mb-6 uppercase tracking-widest text-sm">
            <Settings className="w-6 h-6" />
            <span>Mechanical Engineering & Manufacturing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 leading-tight">
            Baja SAE Steering Links
          </h1>
          <p className="text-2xl text-slate-600 mb-12 font-light leading-relaxed">
            Design & Manufacturing of <span className="relative inline-block px-2 py-1">
              <span className="relative z-10 font-medium">Adjustable Tie Rod Assemblies</span>
              <span className="absolute inset-0 bg-[#35612f]/10 -rotate-1 rounded"></span>
            </span> for Northwestern University's Baja SAE Competition Vehicle.
          </p>
          
          <div className="aspect-video relative rounded-3xl overflow-hidden mb-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-200">
            <ImageWithFallback 
              src={assemblyImg} 
              alt="Baja SAE Steering Assembly SolidWorks Render" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Project Overview</h3>
            <p className="text-slate-700 text-xl leading-relaxed mb-10 font-light">
              For the 2026 Baja competition vehicle, I led the design and manufacturing of our steering links (tie rods). These connect the steering rack to the uprights and directly affect toe, steering feel, and front-end response.
              <br /><br />
              The goal was to design a system that was strong, adjustable, and fully manufacturable in-house, while keeping it simple and reliable.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-slate-200">
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Role</p><p className="font-bold text-slate-900 uppercase text-sm">Design & MFG Lead</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Context / Org</p><p className="font-bold text-slate-900 uppercase text-sm">Baja SAE</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Location</p><p className="font-bold text-slate-900 uppercase text-sm">Evanston, IL</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Duration</p><p className="font-bold text-slate-900 uppercase text-sm">Sept 2025 - Feb 2026</p></div>
            </div>
          </div>
        </header>

        <section className="relative">
          <div className="flex items-center gap-4 mb-20 justify-center">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Technical Process & Development</h2>
          </div>
          
          {/* Vertical Timeline - Left Justified */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative mb-16 pl-16"
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-[1.125rem] top-3 w-4 h-4 rounded-full border-4 border-white"
                  style={{
                    backgroundColor: index % 3 === 0 ? '#35612f' : index % 3 === 1 ? '#e8a559' : '#c86f4d',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                  }}
                />

                {/* Step Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-2xl mb-2">{step.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div 
                    className="bg-white p-8 rounded-2xl"
                    style={{
                      borderLeft: `4px solid ${index % 3 === 0 ? '#35612f' : index % 3 === 1 ? '#e8a559' : '#c86f4d'}`,
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {step.content}
                  </div>
                  
                  {step.media && (
                    <div>
                      {step.media}
                    </div>
                  )}
                </div>

                {/* Additional Content */}
                {step.additionalContent && (
                  <div className="grid lg:grid-cols-2 gap-8 mt-3">
                    <div>
                      {step.additionalContent}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-48 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center px-12 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-[#35612f] transition-all duration-300 gap-3 group shadow-2xl hover:scale-105 uppercase tracking-widest text-sm"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            Back to Projects
          </button>
          
          <ProjectNavigation 
            projects={getOtherProjects("baja")}
            onNavigate={onNavigateToProject}
          />
        </div>
      </main>
    </div>
  );
}