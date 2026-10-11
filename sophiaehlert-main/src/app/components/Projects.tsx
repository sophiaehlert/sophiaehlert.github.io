import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cubliDiagram from "figma:asset/a2d62d47a56e9097d95d872afbc3b407791e767c.png";
import bridgeImage from "figma:asset/a3a1e1ac758aed0b6d4a63a8aca73a1872ff4262.png";
import slantStudioMain from "figma:asset/d298e05a89118eb93a91ec0820af18a6dde524c0.png";
import assemblyImg from "figma:asset/7bd13f99f33e640202f7685f464933dcf84fe33c.png";
import lorealHero from "figma:asset/c682c65f518b7546976e9bdcb4b1a9ba53f2e3a5.png";
import ewbHero from "figma:asset/9db817b6e51a2b84db0e8998d45f990a36e2bf36.png";
import brakePhoto from "@/imports/image.png";
import uprightsCAD from "@/imports/image-16.png";
import nosybotPhoto from "@/imports/image-17.png";

export function Projects({
  onViewProjectBridge,
  onViewProjectCubli,
  onViewProjectSlantStudio,
  onViewProjectBaja,
  onViewProjectLoreal,
  onViewProjectEWB,
  onViewProjectBrake,
  onViewProjectUprights,
  onViewProjectNosyBot
}: {
  onViewProjectBridge?: () => void;
  onViewProjectCubli?: () => void;
  onViewProjectSlantStudio?: () => void;
  onViewProjectBaja?: () => void;
  onViewProjectLoreal?: () => void;
  onViewProjectEWB?: () => void;
  onViewProjectBrake?: () => void;
  onViewProjectUprights?: () => void;
  onViewProjectNosyBot?: () => void;
}) {
  const projects = [
    {
      title: "L'Oréal R&I Internship",
      description: "Process Engineering & Rapid Prototyping focused on 3D printing workflows, reverse engineering lab equipment, and patent-pending R&D initiatives.",
      image: lorealHero,
      tags: ["Additive Manufacturing", "Process Engineering", "R&D", "Reverse Engineering", "Onshape"],
      isCaseStudy: true,
      onView: onViewProjectLoreal
    },
    {
      title: "Baja SAE Steering Links",
      description: "Design and manufacturing of adjustable tie rod assemblies for an off-road racing vehicle. Optimized for high vibration, impact loads, and fast track-side toe tuning.",
      image: assemblyImg,
      tags: ["SOLIDWORKS", "Mechanical Design", "Manual Machining", "DFM"],
      isCaseStudy: true,
      onView: onViewProjectBaja
    },
    {
      title: "EWB: Uganda School Infrastructure",
      description: "Leading Northwestern University's EWB Student Chapter to design and construct sustainable primary school facilities in Kapchorwa, Uganda. Managed assessment trips, mapping, and safety protocols.",
      image: ewbHero,
      tags: ["Project Management", "Civil Design", "Autodesk Civil 3D", "Revit", "Sustainable Design"],
      isCaseStudy: true,
      onView: onViewProjectEWB
    },
    {
      title: "3D-Printed Bicycle Brake Calipers",
      description: "Designed SLS Nylon 12 brake calipers from scratch for a Northwestern D&M course — hand calculations, iterative FEA, topology optimization, and physical testing to achieve ISO 4210-compliant stopping performance.",
      image: brakePhoto,
      tags: ["NX", "FEA", "Topology Optimization", "SLS 3D Printing", "DFM"],
      isCaseStudy: true,
      onView: onViewProjectBrake
    },
    {
      title: "Baja SAE Front Uprights",
      description: "Designing the front steering knuckles for Northwestern Baja SAE's 2027 competition car — from suspension geometry constraints through CAD iteration and into FEA validation. In progress.",
      image: uprightsCAD,
      tags: ["SOLIDWORKS", "FEA", "Suspension Design", "DFM", "DFA", "CAM", "CNC Machining"],
      isCaseStudy: true,
      onView: onViewProjectUprights,
      inProgress: true
    },
    {
      title: "NosyBot",
      description: "An open-source electronic nose platform for mobile robotics — 8-channel MOx sensor array, active aerodynamic flow control, real-time Python GUI, and a path toward scent-source navigation. Research in Northwestern's IEA Lab.",
      image: nosybotPhoto,
      tags: ["ESP32", "C++", "Python", "PyQt5", "ROS", "Hardware-in-the-Loop"],
      isCaseStudy: true,
      onView: onViewProjectNosyBot,
      inProgress: true
    },
    {
      title: "2D Cubli Physics Simulation",
      description: "Developed a physics-based simulation of the Cubli system using Lagrangian mechanics. Modeled inelastic collisions and Coulomb friction with Python.",
      image: cubliDiagram,
      tags: ["Python", "Multibody Dynamics", "Simulation", "Lagrangian Mechanics", "Numerical Methods"],
      isCaseStudy: true,
      onView: onViewProjectCubli
    },
    {
      title: "SlantStudio: Accessible Painting Workstation",
      description: "An adjustable painting workstation for an artist with cerebral palsy. Designed for creativity and independence through environmental optimization and inclusive research.",
      image: slantStudioMain,
      tags: ["Human-Centered Design", "Inclusive Design", "Ergonomics", "Fabrication"],
      isCaseStudy: true,
      onView: onViewProjectSlantStudio
    },
    {
      title: "Retractable Cable-Supported Bridge",
      description: "Designed, analyzed, and 3D printed a retractable PLA bridge supporting 50+ lbs with <1cm deflection. Validated theoretical models with 0.46% experimental error.",
      image: bridgeImage,
      tags: ["Structural Analysis", "Stress & Deflection Analysis", "FEA", "3D Printing", "Onshape"],
      isCaseStudy: true,
      onView: onViewProjectBridge
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl mb-4 text-[#35612f]">Featured Projects</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects that demonstrate my technical skills and design thinking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-lg transition-shadow border-gray-100 flex flex-col ${project.isCaseStudy ? 'cursor-pointer' : ''}`}
              onClick={project.isCaseStudy ? project.onView : undefined}
            >
              <div className="aspect-[3/2] overflow-hidden bg-gray-100 relative group">
                {project.noImage ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-violet-50 gap-2">
                    <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .292 2.798-1.132 2.798H4.931c-1.424 0-2.133-1.799-1.132-2.798L5 14.5" />
                      </svg>
                    </div>
                    <span className="text-xs text-violet-400 font-semibold">Photos coming soon</span>
                  </div>
                ) : (
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${project.title.includes("L'Oréal") ? "object-[center_30%]" : ""}`}
                  />
                )}
                {project.inProgress && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-blue-600 text-white px-2.5 py-1 rounded-full">
                    In Progress
                  </span>
                )}
              </div>
              <CardHeader className="flex-grow pt-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 font-sans">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.isCaseStudy ? (
                    <Button 
                      size="sm" 
                      className="bg-[#35612f] hover:bg-[#2a4e25] text-white border-0 rounded-full w-10 h-10 p-0 flex items-center justify-center ml-auto"
                      onClick={project.onView}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <>
                      <Button size="sm" variant="outline" className="flex-1 border-gray-200 hover:bg-gray-50" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-white" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Details
                        </a>
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}