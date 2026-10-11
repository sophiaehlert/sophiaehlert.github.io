import React from "react";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, PlayCircle, Layers, Cpu, Zap, Activity, Calculator, Settings } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectNavigation } from "./ProjectNavigation";
import { getOtherProjects } from "@/app/data/projects";
import cubliDiagram from "figma:asset/a2d62d47a56e9097d95d872afbc3b407791e767c.png";
import cubliSystemVars from "figma:asset/bfb38ca9dbb8a8dbcc9a2f427090b4def9966026.png";
import cubliFrictionalGif from "figma:asset/3e1c3485279b6714cc700b797487ad680ffad74b.png";

interface ProjectCubliProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export function ProjectCubli({ onBack, onNavigateToProject }: ProjectCubliProps) {
  const steps = [
    {
      title: "System Modeling",
      icon: <Layers className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            The system consists of a rigid cube with a centrally mounted flywheel. The configuration is described by the cube’s planar position and rotation, along with the flywheel’s rotation relative to the cube. I defined reference frames for the world, cube center of mass, flywheel, and cube corners.
          </p>
          <p className="text-gray-600 text-lg">
            Rigid-body kinematics were formulated using <strong>SE(2) transformations</strong>, allowing the positions and velocities of the flywheel and cube corners to be computed directly in the world frame.
          </p>
        </div>
      ),
      media: (
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
          <ImageWithFallback 
            src={cubliSystemVars} 
            alt="Cubli System Variables and Reference Frames" 
            className="w-full h-auto"
          />
          <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
            System Variables and Reference Frames
          </div>
        </div>
      )
    },
    {
      title: "Dynamics & Actuation",
      icon: <Calculator className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            The equations of motion were derived using a Lagrangian formulation, accounting for translational and rotational kinetic energy of both bodies.
          </p>
          <p className="text-gray-600 text-lg">
            The applied torque induces equal and opposite rotational effects on the cube, enabling the characteristic tipping and balance behavior of the Cubli system.
          </p>
        </div>
      ),
      media: (
        <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 shadow-inner flex flex-col justify-center h-full">
          <p className="text-lg sm:text-xl md:text-2xl font-mono text-[#35612f] mb-4 text-center whitespace-nowrap">d/dt (∂L/∂q̇) − ∂L/∂q = Q</p>
          <p className="text-xs text-slate-400 mt-4 text-center uppercase tracking-widest font-bold font-sans">Where L = KE - PE and Q represents motor torque.</p>
        </div>
      )
    },
    {
      title: "Impact & Contact Modeling",
      icon: <Settings className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            Ground contact was handled using an event-based impact model triggered when a cube corner crossed the ground plane with downward velocity. I implemented two distinct versions:
          </p>
          <ul className="text-base text-gray-600 space-y-4">
            <li className="flex gap-3">
              <span className="font-bold text-[#35612f]">•</span>
              <span><strong>Idealized:</strong> Elastic, frictionless impacts enforcing momentum balance.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#35612f]">•</span>
              <span><strong>Realistic:</strong> Introduced Coulomb friction and inelastic collisions.</span>
            </li>
          </ul>
        </div>
      ),
      media: (
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 border border-slate-200 rounded-2xl bg-white shadow-xl border-b-4 border-b-[#35612f]">
            <h4 className="font-bold text-[#35612f] mb-3 text-sm uppercase tracking-wider">Idealized Physics</h4>
            <p className="text-xl text-slate-900 font-mono">H<sup>+</sup> = H<sup>−</sup></p>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold font-sans">(Hamiltonian Conserved)</p>
          </div>
          <div className="p-6 border border-slate-200 rounded-2xl bg-white shadow-xl border-b-4 border-b-[#35612f]">
            <h4 className="font-bold text-[#35612f] mb-3 text-sm uppercase tracking-wider">Realistic Physics</h4>
            <p className="text-xl text-slate-900 font-mono italic">ẏ<sup>+</sup> = −e ẏ<sup>−</sup>, |λ<sub>f</sub>| = μ λ<sub>n</sub></p>
          </div>
        </div>
      )
    },
    {
      title: "Simulation Results",
      icon: <Activity className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            The comparison between models highlighted how friction and energy dissipation influence system behavior. The realistic model exhibited decaying bounce heights and horizontal motion induced by friction impulses.
          </p>
        </div>
      ),
      media: (
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden aspect-video relative shadow-2xl">
              <iframe 
                src="https://drive.google.com/file/d/1QJ8-BbXA_roWLOgBh8Ui99qUKSTh7ThI/preview" 
                className="w-full h-full"
                allow="autoplay"
                title="Case A: Elastic Model Simulation"
              />
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative z-10">
              <p className="font-bold text-xs uppercase tracking-widest text-[#35612f]">Case A: Elastic Model</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden aspect-video relative shadow-2xl">
              <iframe 
                src="https://drive.google.com/file/d/1TlGBWffLZC7hk-Q65mbAFkLYp9F_RHgs/preview" 
                className="w-full h-full"
                allow="autoplay"
                title="Case B: Frictional Model Simulation"
              />
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative z-10">
              <p className="font-bold text-xs uppercase tracking-widest text-[#35612f]">Case B: Frictional Model</p>
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
            <span className="text-[#35612f] font-bold text-xl uppercase tracking-wider text-right block font-sans">Cubli Physics Simulation</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-20">
        {/* Header Section */}
        <header className="mb-24 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-[#35612f] font-bold mb-6 uppercase tracking-widest text-sm">
            <Cpu className="w-6 h-6" />
            <span>Course Project | Dynamic Systems & Modeling</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 leading-tight">
            2D Cubli Physics Simulation
          </h1>
          <p className="text-2xl text-slate-600 mb-12 font-light leading-relaxed">
            Developed a physics-based simulation of the Cubli system using Lagrangian mechanics. Modeled inelastic collisions and Coulomb friction with Python.
          </p>
          
          <div className="aspect-video relative rounded-3xl overflow-hidden mb-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] bg-white border border-slate-200 p-12">
            <ImageWithFallback
              src={cubliDiagram}
              alt="Cubli dynamics diagram"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Summary Box */}
          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Project Overview</h3>
            <p className="text-slate-700 text-xl leading-relaxed mb-10 font-light">
              This project focused on developing a 2D physics-based simulation of the Cubli, a cube that tips and balances on its edges using an internal reaction wheel. My goal was to model the coupled dynamics between the cube and flywheel from first principles, while accurately capturing edge and corner impacts with the ground.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Context / Org</p>
                <p className="font-semibold text-slate-900">Machine Dynamics Course</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Location</p>
                <p className="font-semibold text-slate-900">Evanston, IL</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Duration</p>
                <p className="font-semibold text-slate-900">Nov 2025 - Dec 2025</p>
              </div>
            </div>
          </div>
        </header>

        {/* Timeline Section */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-20 justify-center">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Methodology & Implementation</h2>
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
                    className="bg-white p-8 rounded-2xl shadow-lg border-l-4"
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
        <section className="mt-24 pt-20 border-t border-gray-100">
          <div className="flex items-center gap-4 mb-12">
            <Activity className="w-10 h-10 text-[#35612f]" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Key Observations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="mt-1 bg-[#35612f]/10 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-[#35612f]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg uppercase mb-2">Energy Recovery</h4>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">The elastic model produced idealized bouncing behavior with full energy recovery and symmetric motion, verifying the Hamiltonian conservation.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 bg-[#35612f]/10 p-3 rounded-xl">
                  <Activity className="w-6 h-6 text-[#35612f]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg uppercase mb-2">Contact Realism</h4>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">Comparing the two versions underscored the importance of accurate contact modeling when simulating real-world mechanical systems where friction is non-negligible.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-inner">
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm border-b border-slate-200 pb-4">Technical Skills Applied</h4>
              <ul className="grid grid-cols-1 gap-4 text-lg text-slate-700 font-light">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#35612f]"></span> Python (Numerical simulation)</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#35612f]"></span> Rigid-body & Multibody Dynamics</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#35612f]"></span> Lagrangian Mechanics</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#35612f]"></span> Impact and Contact Modeling</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#35612f]"></span> Friction & Energy Dissipation</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#35612f]"></span> Numerical Methods (Euler/RK4)</li>
              </ul>
            </div>
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
            projects={getOtherProjects("cubli")}
            onNavigate={onNavigateToProject}
          />
        </div>
      </main>
    </div>
  );
}