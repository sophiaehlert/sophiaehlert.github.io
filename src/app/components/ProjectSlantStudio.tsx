import React from "react";
import { Button } from "@/app/components/ui/button";
import { 
  ArrowLeft, 
  Palette, 
  Users, 
  Search, 
  Lightbulb, 
  Settings2, 
  CheckCircle2, 
  Heart,
  Magnet,
  Layout,
  Layers
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectNavigation } from "./ProjectNavigation";
import { getOtherProjects } from "@/app/data/projects";

// Technical Assets
import slantStudioMain from "figma:asset/d298e05a89118eb93a91ec0820af18a6dde524c0.png";
import userWheelchair from "figma:asset/056ba4f67229b0fc045735b24a65295ceaa67732.png";
import userJoystick from "figma:asset/35e317c66534a7e8956312391393e06e6df27dfd.png";
import userHandPos from "figma:asset/97d394216a38afc96bd0acb5a726ed5d36f81204.png";
import userBrushGrip from "figma:asset/6d510c0f2532f0799228dc5d42ca17454486d12a.png";
import mockupSlantBoard from "figma:asset/5b7293cbb225f690f901d6ee2e02e084f218d072.png";
import mockupSling from "figma:asset/5ec60650b70eec54d31c89611e5734862d046166.png";
import mockupBrushHolder from "figma:asset/7c7d6317457b08306e626cb6513560395544662a.png";
import slantStudioCAD from "figma:asset/4ef2ac83bea490baeae0a8f8fe6a4011a76fa822.png";
import boardMockup from "figma:asset/5826a0fd91837f72fb6cf2b09c7b56f5b16ea9fc.png";
import paletteMockup from "figma:asset/6a777ea6eab4eba61f7d183d9d7ce4c361f807b0.png";
import mockupReviewFront from "figma:asset/c1b941e0234b1b9435c144ce158db3df65075717.png";
import mockupReviewBack from "figma:asset/789c6bb35beda9a9182e7b1f1d6c9686784e7178.png";
import palettePivot from "figma:asset/854d30cf242b841e3eee3d3cf8d959bb8a30b942.png";
import paletteRefinedTop from "figma:asset/6eddc6991810fdfb8f49e8959d757bb65e488ee6.png";
import paletteRefinedAngle from "figma:asset/7074df232e6b556c06d6932c9459f3aa4a90aacf.png";
import finalInUse from "figma:asset/95fa9a4fefc1a831969fbfed058636f102f0ae46.png";
import securingPaper from "figma:asset/19d53910e052d3fae95ed7583d7071c5e28754e0.png";
import angleAdjustment from "figma:asset/1ecaa287f940d59476a983142351c03f688b4c28.png";
import slantBoardCollapsed from "figma:asset/b56c1c8f056a38bfc2ed90c565400d5a65c39c92.png";
import angleSideView from "figma:asset/564c2d7da8b78af5886d324d61f902b8d28c0ca8.png";
import magneticPaletteDetail from "figma:asset/c4fc4c67e3623cc23a540dadeb78b4452f9d5eb3.png";
import anneAbbott from "figma:asset/0e13fe64ab296965afe104f232a5031d89d83a44.png";
import guidingHands from "figma:asset/4bfbde73816fe875f90bd243ee7239f7fb742644.png";
import pencilGrip from "figma:asset/72de71eb6d7d5a81dee70b1134b54d31eab828a6.png";

interface ProjectSlantStudioProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export function ProjectSlantStudio({ onBack, onNavigateToProject }: ProjectSlantStudioProps) {
  const steps = [
    {
      title: "Understanding the User",
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Jessica is a 21-year-old artist with spastic quadriplegic cerebral palsy. She paints primarily with her left hand while seated in her power wheelchair. Painting is a core form of creative expression and independence for her.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs mb-2 uppercase tracking-wider">Key Challenges:</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><strong>Shoulder fatigue:</strong> Limits painting sessions to ~30 minutes</li>
              <li><strong>Limited reach:</strong> Palette position added 5+ inches of unnecessary extension.</li>
              <li><strong>Difficult setup:</strong> Required help with board angles and binder clips.</li>
              <li><strong>Restricted workspace:</strong> Previous board limited to 8" x 11" canvas.</li>
              <li><strong>Motor limitations:</strong> Swan neck deformities made small clips hard to grip.</li>
            </ul>
          </div>
          <p className="text-sm italic text-gray-500">
            During observation sessions at the Bridges Adult Transition Center, we documented her painting posture, wheelchair dimensions, lean pattern, grip style, and fatigue points.
          </p>
        </div>
      ),
      media: (
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100">
            <div className="aspect-square relative overflow-hidden rounded-sm">
              <ImageWithFallback 
                src={userWheelchair} 
                alt="User wheelchair" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-sm">
              <ImageWithFallback 
                src={userJoystick} 
                alt="Joystick controller" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-sm">
              <ImageWithFallback 
                src={userHandPos} 
                alt="Hand position while painting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-sm">
              <ImageWithFallback 
                src={userBrushGrip} 
                alt="Brush grip detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
            Observational Research: Bridges Transition Center
          </div>
        </div>
      )
    },
    {
      title: "Research & Precedents",
      icon: <Search className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 text-sm">Our secondary research focused on four areas:</p>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">1. Understanding Spasticity</h4>
            <p className="text-gray-600 text-sm">
              Examined how spastic quadriplegia affects muscle tone, fatigue, range of motion, and posture.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">2. Functional Breakdown</h4>
            <div className="flex flex-wrap gap-1">
              {["Dip", "Lift/Reach", "Apply Pressure", "Rinse", "Repeat"].map((step) => (
                <span key={step} className="px-2 py-0.5 bg-slate-100 rounded text-[10px] text-slate-600 border border-slate-200 uppercase font-medium font-sans">{step}</span>
              ))}
            </div>
            <p className="text-gray-600 text-sm">Analyzed the sequence to identify specific strain points.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">3. Market Research</h4>
            <p className="text-gray-600 text-sm">
              Reviewed ergonomic boards, adaptive grips, Guiding Hands (ImaginAble Solutions), and rail systems.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">4. Solutions Used by Other Artists with Mobility Impairments</h4>
            <p className="text-gray-600 text-sm">
              Studying how successful artists like Anne Abbott (finger painting with spastic CP) and Cody Tresierra (mouth painting) work around their symptoms helped inform our decisions on the best possible workspace for Jessica.
            </p>
          </div>
          <div className="bg-slate-50 p-3 rounded border border-slate-200">
            <p className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-1">Key Conclusion:</p>
            <p className="text-slate-600 text-sm">
              Environmental optimization — not mechanical stabilization — offered the greatest opportunity for independence.
            </p>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback src={anneAbbott} alt="Anne Abbott painting" className="w-full h-auto" />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Anne Abbott using her right index finger to paint
              <span className="block mt-1 normal-case italic font-normal tracking-normal opacity-70 text-[9px]">
                (Source: CerebralPalsy.org)
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col">
              <div className="aspect-square bg-slate-50 flex items-center justify-center overflow-hidden">
                <ImageWithFallback src={guidingHands} alt="Guiding Hands product" className="w-full h-auto" />
              </div>
              <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold flex flex-col items-center justify-center min-h-[3.5rem] leading-tight font-sans">
                Guiding Hands
                <span className="block mt-1 normal-case italic font-normal tracking-normal opacity-70 text-[9px]">
                  (Source: ImaginAble Solutions)
                </span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col">
              <div className="aspect-square bg-slate-50 flex items-center justify-center overflow-hidden">
                <ImageWithFallback src={pencilGrip} alt="Corrective pencil grip" className="w-full h-auto" />
              </div>
              <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold flex flex-col items-center justify-center min-h-[3.5rem] leading-tight font-sans">
                Corrective Grip
                <span className="block mt-1 normal-case italic font-normal tracking-normal opacity-70 text-[9px]">
                  (Source: eSpecial Needs)
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Early Concepts & What Didn't Work",
      icon: <Lightbulb className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Our first concepts leaned heavily into mechanical support. We built and tested: <strong>Sliding slant board</strong>, <strong>paintbrush holder</strong>, and <strong>wheelchair-mounted arm sling</strong>.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Key Learnings:</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold text-green-600 uppercase text-xs font-sans">Board:</span> Improved independence & precision.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-orange-600 uppercase text-xs font-sans">Sling:</span> Improved comfort but reduced workspace.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-red-600 uppercase text-xs font-sans">Holder:</span> Lacked stability and was frustrating.
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 italic">
            <strong>Critical Insight:</strong> Some improved comfort, but they introduced complexity and reduced usable workspace. During testing, we noticed that Jessica responded better to solutions that felt intuitive and simple rather than assistive or clinical. That feedback forced us to rethink our assumptions.
          </p>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback src={mockupSlantBoard} alt="Slant Board Mockup" className="w-full h-auto" />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Initial Plywood Slant Board Concept
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <ImageWithFallback src={mockupSling} alt="Sling Mockup" className="w-full h-auto" />
              <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">Arm Sling Mockup</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <ImageWithFallback src={mockupBrushHolder} alt="Brush Holder Mockup" className="w-full aspect-[1.15/1] object-cover object-left" />
              <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">Brush Holder Mockup</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Pivot to Environmental Optimization",
      icon: <Settings2 className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            The turning point came during a simple experiment.
          </p>
          <p className="text-gray-600">
            We temporarily placed the palette directly on the slantboard with the paper instead of on the table in front of her. Immediately, her reach improved and shoulder strain decreased.
          </p>
          <p>
            But at the tilted position, water dripped between paint wells. So the new question became <strong>how can we move the whole board closer without creating new problems?</strong> Instead of adding mechanisms, we began removing them.
          </p>
          <div className="bg-[#35612f]/5 p-3 rounded-lg border border-[#35612f]/10">
            <h4 className="font-bold text-[#35612f] text-xs uppercase tracking-wider mb-1.5">We focused on:</h4>
            <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
              <li>Reducing reach distance</li>
              <li>Simplifying one-handed setup</li>
              <li>Minimizing moving parts</li>
            </ul>
          </div>
        </div>
      ),
      media: (
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
          <ImageWithFallback 
            src={slantStudioCAD} 
            alt="Design Pivot CAD Analysis" 
            className="w-full h-auto"
          />
          <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
            CAD Modeling: Optimizing Vertical Space & Reach
          </div>
        </div>
      )
    },
    {
      title: "Design Review & Plan of Action",
      icon: <CheckCircle2 className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1.5">Core Idea:</h4>
            <p className="text-slate-700 text-sm">
              Relocate the palette so the entire board sits closer to Jessica, eliminating 5+ inches of reach extension.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Review Feedback:</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
              <li>Top paint rows may be hard to see (even at 10° tilt)</li>
              <li>Too many moving parts/failure points</li>
              <li>Paper not secure enough with standard clips</li>
              <li>Adjustment mechanism difficult to reach independently</li>
            </ul>
          </div>
          <div className="bg-[#35612f]/5 p-3 rounded-lg border border-[#35612f]/10">
            <h4 className="font-bold text-[#35612f] text-xs uppercase tracking-wider mb-1.5">Plan of Action:</h4>
            <p className="text-slate-600 text-sm">
              Add magnetic strips for paper security, reduce component count, improve paint visibility via relocation, and simplify the angle adjustment mechanism.
            </p>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback src={boardMockup} alt="Board Mockup" className="w-full h-auto" />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Concept: Integrated 11x14" Work Surface
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback src={paletteMockup} alt="Palette Mockup" className="w-full h-auto" />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Initial Concept: Side-Mounted Staggered Palette
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Performance Testing",
      icon: <Settings2 className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            We built a full-scale mockup to evaluate paint visibility, structural stability, ease of reach, and mechanical feasibility
          </p>
          <div className="bg-[#35612f]/5 p-3 rounded-lg border border-[#35612f]/10">
            <h4 className="font-bold text-[#35612f] text-xs uppercase tracking-wider mb-1.5">Architectural Pivot:</h4>
            <p className="text-slate-600 text-sm mb-2">
              Moved the palette from the side to the <strong>bottom of the board</strong>.
            </p>
            <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
              <li>Improved visibility and reduced visual clutter</li>
              <li>Maintained 0&deg; paint orientation (no dripping)</li>
              <li>Reduced reach by 3–4 inches</li>
              <li>Fewer moving parts simplified construction</li>
            </ul>
            <p className="text-slate-700 text-sm mt-2 font-medium">
              This shift simplified construction and improved ergonomics.
            </p>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback src={mockupReviewFront} alt="Mockup Performance Testing Front" className="w-full h-auto" />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Mockup Review: Front View
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback src={mockupReviewBack} alt="Mockup Performance Testing Back" className="w-full h-auto" />
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Mockup Review: Rear View (Angle Selection)
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Final Refinements",
      icon: <Layers className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">1. Simplified Palette</h4>
              <ul className="text-sm text-gray-600 space-y-0.5 list-disc pl-4">
                <li>Reduced from 9 short rows to 2 long overlapping rows</li>
                <li>Fewer components, better reach, and improved visibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">2. Material Optimization</h4>
              <ul className="text-sm text-gray-600 space-y-0.5 list-disc pl-4">
                <li>Wood for primary palette pieces</li>
                <li>Acrylic support bars for increased rigidity and stability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">3. One-Handed Setup</h4>
              <ul className="text-sm text-gray-600 space-y-0.5 list-disc pl-4">
                <li>Magnetic strip replaces binder clips</li>
                <li>Magnets include loops for easy gripping</li>
                <li>Designed specifically for Jessica’s left-handed use</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <ImageWithFallback src={paletteRefinedTop} alt="Refined Two-Row Palette Top View" className="w-full h-auto" />
              <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">Two-Row Palette: Top View</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <ImageWithFallback src={paletteRefinedAngle} alt="Refined Two-Row Palette Perspective" className="w-full h-auto" />
              <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">Two-Row Palette: Perspective</div>
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
            className="flex items-center text-gray-600 hover:text-[#35612f] transition-colors gap-2 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
          <div className="hidden sm:block">
            <span className="text-[#35612f] font-bold text-xl uppercase tracking-wider text-right block font-sans">SlantStudio</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-[#35612f] font-semibold mb-4">
            <Heart className="w-5 h-5" />
            <span>Human-Centered Design Project</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            SlantStudio: Accessible Painting Workstation
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            An adjustable painting workstation for an artist with cerebral palsy. Designed for creativity and independence through environmental optimization and inclusive research.
          </p>
          
          <div className="aspect-video relative rounded-2xl overflow-hidden mb-12 shadow-2xl border border-slate-200">
            <ImageWithFallback src={slantStudioMain} alt="SlantStudio Final Design" className="w-full h-full object-cover" />
          </div>

          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Project Overview</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              SlantStudio is an adjustable painting workstation designed for Jessica, a 21-year-old artist with cerebral palsy. Shifting focus from "assistive control" to environmental optimization, the design enables independent setup and extended painting sessions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Role</p><p className="font-semibold text-slate-900">Team Member</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Context / Org</p><p className="font-semibold text-slate-900">Academic Project</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Location</p><p className="font-semibold text-slate-900">Evanston, IL</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Duration</p><p className="font-semibold text-slate-900">Jan 2025 - March 2025</p></div>
            </div>
          </div>
        </header>

        <section className="relative mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Design Process & Iterations</h2>
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

        <section className="mt-32 pt-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Design Concept & Rationale</h2>
            <p className="text-gray-600 mb-12">
              The SlantStudio is an adjustable slant board with a built-in watercolor palette that reduces strain by optimizing vertical space. It limits fatigue by bringing the paper closer to the user, enabling longer, more comfortable painting sessions.
            </p>

            <div className="space-y-24">
              {/* Part 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#35612f] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                    <h3 className="text-2xl font-bold text-slate-900">Slant Board with Magnetic Strip</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      The main 14" x 11" wooden work surface features a bottom ledge and a 13" x 3" steel magnetic strip along the top edge.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                      <h4 className="text-[11px] font-bold text-[#35612f] uppercase tracking-wider mb-2">Rationale</h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Jessica previously struggled with binder clips. Our design allows her to rest the paper on the ledge and secure it with one hand using magnets. The magnets feature loops for easy gripping, accommodating the swan neck deformities in her fingers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <ImageWithFallback src={securingPaper} alt="Securing paper with magnets" className="w-full h-auto" />
                  <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
                    One-handed magnetic paper security with loop-grip magnets
                  </div>
                </div>
              </div>

              {/* Part 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                    <ImageWithFallback src={angleSideView} alt="Side view of angle settings" className="w-full h-auto" />
                    <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
                      Side view showing range of inclination settings
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl overflow-hidden shadow-md border border-slate-200">
                      <ImageWithFallback src={angleAdjustment} alt="Angle adjustment bracket" className="w-full h-auto" />
                      <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold leading-tight flex items-center justify-center min-h-[3rem] font-sans">Bracket</div>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md border border-slate-200">
                      <ImageWithFallback src={slantBoardCollapsed} alt="Collapsed slant board" className="w-full h-auto" />
                      <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold leading-tight flex items-center justify-center min-h-[3rem] font-sans">Collapsed</div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#35612f] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                    <h3 className="text-2xl font-bold text-slate-900">Angle Adjustment Mechanism</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      The SlantStudio features four adjustable angle settings and can be fully collapsed to lay flat for easy storage. The picture frame-style stand is attached via durable acrylic hinges and includes a single-side adjustment tab.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                      <h4 className="text-[11px] font-bold text-[#35612f] uppercase tracking-wider mb-2">Rationale</h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        We prioritized simplicity and ease of use for one-handed adjustment. The tab is positioned specifically for Jessica's left-handed use, allowing her to find the most comfortable ergonomic position to reduce strain on her neck and shoulders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#35612f] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                    <h3 className="text-2xl font-bold text-slate-900">Built-in Magnetic Watercolor Palette</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      The palette utilizes vertical space beneath the board with two overlapping shelves. This layout decreases horizontal footprint as the board angle increases, while keeping paints at 0º to prevent dripping.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                      <h4 className="text-[11px] font-bold text-[#35612f] uppercase tracking-wider mb-2">Rationale</h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Moving the palette below the work surface allows the whole board to sit closer to Jessica. Individual magnetic half-pans ensure the paints stay secure even when dipping with pressure, reducing the fatigue caused by reaching across a standard desktop palette.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                    <ImageWithFallback src={magneticPaletteDetail} alt="Magnetic paint pan detail" className="w-full h-auto" />
                    <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
                      Magnetic attachment prevents sliding during use
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-32 p-12 bg-[#35612f] rounded-3xl text-white relative">
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">The Outcome</h3>
                  <p className="text-purple-100 leading-relaxed mb-6">
                    By shifting the design focus from "controlling the hand" to "optimizing the environment," we enabled Jessica to regain independence in her artistic practice.
                  </p>
                  <p className="text-purple-100 leading-relaxed">
                    The final solution reduces reach distance, simplifies setup, and supports longer painting sessions — allowing Jessica to focus on creativity rather than physical strain.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl rotate-2">
                  <ImageWithFallback src={finalInUse} alt="SlantStudio Final Prototype in use" className="w-full h-auto" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            </div>
          </div>
        </section>

        <div className="mt-20 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-[#35612f] transition-colors gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
          
          <ProjectNavigation 
            projects={getOtherProjects("slantstudio")}
            onNavigate={onNavigateToProject}
          />
        </div>
      </main>
    </div>
  );
}