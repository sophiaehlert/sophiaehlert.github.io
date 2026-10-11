import React from "react";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, CheckCircle2, Ruler, Beaker, Wrench, BarChart3, Calculator, PenTool, ClipboardCheck, Layers } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectNavigation } from "./ProjectNavigation";
import { getOtherProjects } from "@/app/data/projects";
import bridgeImage from "figma:asset/a3a1e1ac758aed0b6d4a63a8aca73a1872ff4262.png";
import cadModel from "figma:asset/6183e5457a13fdb3b846fede472336e2f1788d02.png";
import feaResults from "figma:asset/6d64d9c7ed73bccbe9d6c84bec9faf2571211e4d.png";
import bridgeTesting from "figma:asset/de40da7ac188c9107654d4d8269c20161683404d.png";
import bridgeLifted from "figma:asset/83edaebdcd54b4cb0e4ff5a33980d476276d4438.png";

interface ProjectBridgeProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export function ProjectBridge({ onBack, onNavigateToProject }: ProjectBridgeProps) {
  const steps = [
    {
      title: "Concept Selection & FEA",
      icon: <BarChart3 className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg mb-2">
            We explored multiple bridge typologies and lifting mechanisms, including:
          </p>
          <ul className="text-slate-600 space-y-1 list-disc pl-4">
            <li>truss vs cable-supported systems</li>
            <li>Bascule, sliding, and vertical-lift actuation</li>
          </ul>
          <p className="text-gray-600 text-lg">
            Early FEA on a full truss concept showed it was significantly overbuilt for a 50 lb requirement. That insight allowed us to pivot before committing to fabrication, toward a more material-efficient design, reducing PLA volume while ensuring predicted deflections remained well below the 1cm limit.
          </p>
          <p className="text-gray-600 text-lg">
            We ultimately selected a <strong>cable-supported vertical lift bridge.</strong> Cable support reduced girder bending moments by transferring load axially, and the vertical lift mechanism allowed the girders to remain structurally continuous during actuation.
          </p>
        </div>
      ),
      media: (
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
          <ImageWithFallback 
            src={feaResults} 
            alt="FEA Displacement Analysis on early truss prototype" 
            className="w-full h-auto"
          />
          <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
            Displacement Analysis: Early Truss Concept
          </div>
        </div>
      )
    },
    {
      title: "Structural Analysis & Design",
      icon: <Calculator className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            To optimize stiffness while minimizing material usage, we modeled the bridge as two parallel girders connected by stiff crossbeams and supported by elastic cables.
          </p>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-inner font-mono">
            <p className="mb-4 uppercase text-xs tracking-widest text-slate-400 font-bold">Total Bending Stiffness:</p>
            <p className="text-3xl text-[#35612f] font-bold">EI<sub>tot</sub> = 2EI<sub>g</sub></p>
            <p className="text-sm text-slate-500 mt-4 italic font-sans">where I<sub>g</sub> is the second moment of area of a single girder.</p>
          </div>
        </div>
      ),
      media: (
        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 font-mono shadow-xl flex flex-col justify-center h-full">
          <p className="text-slate-600 font-sans mb-8 leading-relaxed italic text-base">
            Maximum midspan deflection was predicted using beam theory and superposition, with cable forces modeled as linear springs.
          </p>
          <div className="space-y-6">
            <p className="text-2xl text-[#35612f] font-bold">δ<sub>max</sub> = δ<sub>free</sub> + (k<sub>tot</sub> / EI<sub>tot</sub>) c<sub>mid</sub></p>
            <div className="space-y-2 pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold font-sans">k<sub>tot</sub> = 17,297.5 N/m</p>
              <p className="text-[#35612f] font-bold text-xl uppercase tracking-tighter">k = EA / (L sin²(θ))</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Prototyping & Iteration",
      icon: <Wrench className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            All components were CAD modeled and 3D printed. An initial prototype revealed issues with gear slippage and unintended load transfer, leading to:
          </p>
          <ul className="space-y-4">
            {[
              "Reduced axle spacing for better mesh",
              "Added load-bearing platforms for stability",
              "Revised cable anchoring geometry"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-lg text-slate-700 font-light">
                <CheckCircle2 className="w-6 h-6 text-[#35612f] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
      media: (
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
          <ImageWithFallback 
            src={cadModel} 
            alt="Final CAD prototype with dimensions" 
            className="w-full h-auto"
          />
          <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
            Final CAD Model with Dimensions
          </div>
        </div>
      )
    },
    {
      title: "Load Testing & Validation",
      icon: <Beaker className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <p className="text-gray-600 text-lg">
            Experimental validation was conducted using a calibrated load cell. The bridge was tested to its design limit of 50 lbs, with continuous deflection monitoring.
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl border-l-4 border-l-[#35612f]">
              <h5 className="font-bold text-[#35612f] mb-2 uppercase tracking-widest text-xs">Predicted (50 lbs)</h5>
              <p className="text-3xl font-black text-slate-900">0.7625 cm</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl border-l-4 border-l-[#35612f]">
              <h5 className="font-bold text-[#35612f] mb-2 uppercase tracking-widest text-xs">Measured (52.97 lbs)</h5>
              <p className="text-3xl font-black text-slate-900">0.7590 cm</p>
            </div>
            <div className="bg-green-50 p-5 rounded-2xl border border-green-100 flex items-center gap-4 shadow-sm">
              <CheckCircle2 className="text-green-600 w-8 h-8" />
              <div>
                <p className="font-bold text-green-900 uppercase tracking-widest text-xs">Validation Success</p>
                <p className="font-black text-green-800 text-xl">Error: 0.46%</p>
              </div>
            </div>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback 
              src={bridgeTesting} 
              alt="Bridge undergoing 50lb load test" 
              className="w-full h-auto"
            />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Experimental Validation: 50lb Load Test
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback 
              src={bridgeLifted} 
              alt="Physical prototype in lifted position" 
              className="w-full h-auto"
            />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Functional Test: Vertical Lift Clearance
            </div>
          </div>
        </div>
      )
    },
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
            <span className="text-[#35612f] font-bold text-xl uppercase tracking-wider text-right block font-sans">Retractable Bridge</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-20">
        {/* Header Section */}
        <header className="mb-24 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-[#35612f] font-bold mb-6 uppercase tracking-widest text-sm">
            <Layers className="w-6 h-6" />
            <span>Course Project | Structural Design & Analysis</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 leading-tight">
            Retractable Cable-Supported Bridge
          </h1>
          <p className="text-2xl text-slate-600 mb-12 font-light leading-relaxed">
            Designed, analyzed, and 3D printed a retractable PLA bridge supporting 50+ lbs with &lt;1cm deflection. Validated theoretical models with 0.46% experimental error.
          </p>
          
          <div className="aspect-video relative rounded-3xl overflow-hidden mb-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-200">
            <ImageWithFallback
              src={bridgeImage}
              alt="Bridge engineering model"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Summary Box */}
          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-wider">Project Overview</h3>
            <p className="text-slate-700 text-xl leading-relaxed mb-12 font-light">
              This project involved designing, analyzing, and fabricating a retractable PLA bridge capable of spanning a 15-inch gap, lifting to create a 3-inch by 5-inch clearance, and safely supporting 50+ lbs while limiting midspan deflection to under 1 cm. All structural components were 3D printed in PLA, with fishing wire used as cable supports. The goal wasn't just to make it strong, but to accurately predict its behavior and validate the model experimentally.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pt-10 border-t border-slate-200">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Payload</p>
                <p className="font-bold text-slate-900 text-lg uppercase tracking-tight">50+ lbs</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Span</p>
                <p className="font-bold text-slate-900 text-lg uppercase tracking-tight">15 inches</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Error</p>
                <p className="font-bold text-slate-900 text-lg uppercase tracking-tight">0.46%</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Safety Factor</p>
                <p className="font-bold text-slate-900 text-lg uppercase tracking-tight">6.3x</p>
              </div>
            </div>
          </div>
        </header>

        {/* Timeline Section */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-20 justify-center">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Design Process & Iterations</h2>
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
                  className="absolute left-[1.125rem] top-3 w-4 h-4 rounded-full border-4 border-white shadow-lg"
                  style={{
                    backgroundColor: index % 3 === 0 ? '#35612f' : index % 3 === 1 ? '#e8a559' : '#c86f4d',
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
                    className="bg-white p-8 rounded-2xl shadow-lg border-l-4 [&_ul]:pl-4"
                    style={{
                      borderLeftColor: index % 3 === 0 ? '#35612f' : index % 3 === 1 ? '#e8a559' : '#c86f4d',
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
              </div>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="mt-20 pt-12 border-t border-gray-100">
          <h2 className="text-4xl font-black text-slate-900 mb-16 text-center uppercase tracking-tight">Final Performance Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-[#35612f] text-white p-10 rounded-[2.5rem] text-center shadow-2xl shadow-[#35612f]/20 border-b-8 border-black/20">
              <p className="text-6xl font-black mb-4">52.97</p>
              <p className="text-white/70 text-sm uppercase font-black tracking-widest">Lbs Supported</p>
            </div>
            <div className="bg-[#35612f] text-white p-10 rounded-[2.5rem] text-center shadow-2xl shadow-[#35612f]/20 border-b-8 border-black/20">
              <p className="text-6xl font-black mb-4">&lt; 1cm</p>
              <p className="text-white/70 text-sm uppercase font-black tracking-widest">Total Deflection</p>
            </div>
            <div className="bg-[#35612f] text-white p-10 rounded-[2.5rem] text-center shadow-2xl shadow-[#35612f]/20 border-b-8 border-black/20 sm:col-span-2 lg:col-span-1">
              <p className="text-6xl font-black mb-4">0.5%</p>
              <p className="text-white/70 text-sm uppercase font-black tracking-widest">Model Accuracy</p>
            </div>
          </div>
          <div className="mt-16 bg-slate-50 p-12 rounded-3xl border border-slate-200 text-slate-700 shadow-inner">
            <p className="text-xl font-light leading-relaxed italic text-center">
              Met all performance, material, and budget constraints. Experimental results matched analytical predictions within 0.5% error, validating the robust engineering workflow applied to this structural challenge.
            </p>
          </div>
        </section>

        {/* Back Button Footer */}
        <div className="mt-32 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center px-12 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-[#35612f] transition-all duration-300 gap-3 group shadow-2xl hover:scale-105 uppercase tracking-widest text-sm"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            Back to Projects
          </button>
          
          <ProjectNavigation 
            projects={getOtherProjects("bridge")}
            onNavigate={onNavigateToProject}
          />
        </div>
      </main>
    </div>
  );
}