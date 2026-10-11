import React, { useState } from "react";
import { ArrowLeft, Wrench, Calculator, DraftingCompass, FlaskConical, CheckCircle2, Activity, Target, ChevronDown, ChevronUp } from "lucide-react";
import { ProjectNavigation } from "./ProjectNavigation";
import { getOtherProjects } from "@/app/data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import brakePhoto from "@/imports/image.png";
import fbdDiagram from "@/imports/image-1.png";
import cadAssemblyImg from "@/imports/image-3.png";
import finalTestPhoto from "@/imports/image-13.png";
import cadInitialImg from "@/imports/image-4.png";
import initialFEADisp from "@/imports/image-14.png";
import initialFEAStress from "@/imports/image-15.png";
import cadIteratedBoth from "@/imports/image-8.png";
import feaStress from "@/imports/image-9.png";
import feaDisplacement from "@/imports/image-10.png";
import testingPhoto1 from "@/imports/image-11.png";
import testingPhoto2 from "@/imports/image-12.png";

interface ProjectBrakeCalipersProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export function ProjectBrakeCalipers({ onBack, onNavigateToProject }: ProjectBrakeCalipersProps) {
  const [mathExpanded, setMathExpanded] = useState(false);

  const steps = [
    {
      title: "Design Requirements & Needs Analysis",
      icon: <Target className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            We began by defining 18 functional needs and 21 quantifiable metrics drawn from ISO 4210 bicycle safety standards and internal team requirements. The highest-priority needs all scored 5/5.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wider">Priority-5 Requirements:</h4>
            <ul className="space-y-3">
              {[
                "Sufficient stopping force (≤15 m from 25 km/h)",
                "Handlebar-controlled operation (ISO 4210-4 compliant)",
                "Low rider input force (≤180 N lever force)",
                "Lightweight assembly (<200 g)",
                "Consistent performance under repeated braking",
                "No unintended contact with the wheel",
                "Performance maintained in wet conditions"
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
              Using SLS Nylon 12 as the print material, we targeted a fatigue life of 20,000 cycles — estimated from a commuter cyclist braking 6 times per ride, twice daily over 5 years.
            </p>
          </div>
        </div>
      ),
      media: (
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
          <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Key Performance Targets</h4>
          {[
            { label: "Braking Distance (dry, 25 km/h)", ideal: "7.5 m", marginal: "≤ 15 m" },
            { label: "Lever Force", ideal: "100 N", marginal: "≤ 180 N" },
            { label: "Assembly Weight", ideal: "150 g", marginal: "< 200 g" },
            { label: "Handle Deflection Limit", ideal: "—", marginal: "≤ 11 mm" },
            { label: "Max Fatigue Stress (Nylon 12)", ideal: "—", marginal: "33.15 MPa" },
            { label: "Cost", ideal: "$25", marginal: "< $130" },
          ].map((row, i) => (
            <div key={i} className="bg-white rounded-lg border border-slate-100 px-4 py-3 shadow-sm">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wide mb-1">{row.label}</p>
              <div className="flex gap-4">
                <span className="text-xs font-mono text-[#35612f] font-bold">Ideal: {row.ideal}</span>
                <span className="text-xs font-mono text-slate-500">Marginal: {row.marginal}</span>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Hand Calculations & Load Path Analysis",
      icon: <Calculator className="w-6 h-6" />,
      fullWidth: true,
      content: (
        <div className="space-y-8">
          {/* Brief summary */}
          <p className="text-gray-600 text-lg">
            To get realistic boundary conditions for FEA, I built a first-principles model connecting the brake lever's mechanical advantage, the dual-pivoting caliper geometry, and tire-road friction. Constraining the cable attachment points to the same height (<em>r</em><sub>cable,1</sub> = <em>r</em><sub>cable,2</sub>) ensured equal clamping force on both sides of the rim. Working backward from the ISO stopping distance — 25 km/h to rest in 7.5 m for a 76.5 kg system — I arrived at the 255 N cable tension and 147 N pad friction force used as loads in FEA.
          </p>

          {/* FBD full width */}
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
            <ImageWithFallback
              src={fbdDiagram}
              alt="Free body diagram of bicycle brake system showing handle lever, caliper arms (left in blue, right in red), and moment arm labels r_in, r_out, r_cable, r_pad"
              className="w-full h-auto object-contain"
            />
            <div className="p-3 text-[10px] text-slate-400 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Figure 4. Free body diagram of brake system
            </div>
          </div>

          {/* FEA load outputs — always visible */}
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-3">Loads applied in FEA</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Cable Tension (T)", val: "255 N", sub: "applied at cable mount" },
                { label: "Normal Force (N)", val: "245 N", sub: "pad on rim" },
                { label: "Friction Force (Fₐ)", val: "147 N", sub: "at pad-rim interface" },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-[#35612f]/5 rounded-xl border border-[#35612f]/15 text-center">
                  <p className="text-3xl font-black text-[#35612f]">{s.val}</p>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">{s.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Collapsible full derivation */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => setMathExpanded(v => !v)}
              className="w-full flex items-center justify-between px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
            >
              <span className="font-bold text-slate-700 text-sm uppercase tracking-wider">Full Derivation</span>
              {mathExpanded
                ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
            </button>

            {mathExpanded && (
              <div className="px-8 pb-8 pt-6 space-y-8 bg-white">

                {/* Known values */}
                <div>
                  <p className="text-gray-600 mb-4">The following values were constrained by the bike geometry, and were measured as the following:</p>
                  <div className="space-y-1.5 pl-2">
                    {[
                      [<><em>r</em><sub>in</sub></>, "2 cm"],
                      [<><em>r</em><sub>out</sub></>, "9 cm"],
                      [<><em>r</em><sub>pad</sub></>, "47.5 mm"],
                    ].map(([sym, val], i) => (
                      <p key={i} className="text-gray-700 text-base">
                        <span className="font-medium">{sym}</span> = {val}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Moment equations */}
                <div className="space-y-4">
                  <p className="text-gray-600">To ensure that the normal force acting on the rim from both brake pads were equal, we constrained the caliper geometry so that the cable points were positioned vertically above each other (<span className="italic">r</span><sub>cable,1</sub> = <span className="italic">r</span><sub>cable,2</sub>). Using sum of moments, we derived the following relationships:</p>
                  <div className="space-y-3 py-2">
                    <div className="flex items-center justify-between gap-6 pl-8 pr-4 py-3 bg-slate-50 rounded-lg border-l-2 border-slate-300">
                      <span className="text-slate-800 text-base"><em>T</em> = (<em>r</em><sub>in</sub> / <em>r</em><sub>out</sub>) · <em>F</em><sub>in</sub></span>
                      <span className="text-slate-400 text-sm shrink-0">(1)</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 pl-8 pr-4 py-3 bg-slate-50 rounded-lg border-l-2 border-slate-300">
                      <span className="text-slate-800 text-base"><em>N</em><sub>1</sub> = <em>N</em><sub>2</sub> = (<em>r</em><sub>in</sub> · <em>r</em><sub>cable</sub> · <em>r</em><sub>pad</sub>) / <em>r</em><sub>out</sub></span>
                      <span className="text-slate-400 text-sm shrink-0">(2)</span>
                    </div>
                  </div>
                </div>

                {/* Energy section */}
                <div className="space-y-4">
                  <p className="text-gray-600">From there, we correlated normal force to braking distance. Max braking force occurs when the tire starts to slip on the ground, and the wheel is locked entirely by the brakes. At max braking force, the brake pads are not doing any work on the tire, and conservation of energy gives us:</p>
                  <div className="pl-8 pr-4 py-3 bg-slate-50 rounded-lg border-l-2 border-slate-300 flex items-center justify-between gap-6">
                    <span className="text-slate-800 text-base"><span className="italic">F</span><sub>fr</sub> · <span className="italic">d</span> = ½<span className="italic">mv</span><sub>0</sub>²</span>
                    <span className="text-slate-400 text-sm shrink-0">(3)</span>
                  </div>
                  <p className="text-gray-600">where <span className="italic">m</span> is the combined mass of the bicycle and its rider, <span className="italic">v</span><sub>0</sub> is the initial velocity of the bike at the point of braking, <span className="italic">d</span> is the stopping distance, and <span className="italic">F</span><sub>fr</sub> is the force of friction between the tire and the road.</p>
                  <p className="text-gray-600">Sum of moments about the center of bike tire gives the following equation:</p>
                  <div className="pl-8 pr-4 py-3 bg-slate-50 rounded-lg border-l-2 border-slate-300 flex items-center justify-between gap-6">
                    <span className="text-slate-800 text-base"><span className="italic">F</span><sub>fr</sub> · <span className="italic">r</span><sub>tire</sub> = <span className="italic">F</span><sub>fb</sub> · <span className="italic">r</span><sub>brake</sub></span>
                    <span className="text-slate-400 text-sm shrink-0">(4)</span>
                  </div>
                  <p className="text-gray-600">where <span className="italic">r</span><sub>tire</sub> is the radius of the tire, <span className="italic">r</span><sub>brake</sub> is the distance from the center of the tire to the brake pad, and <span className="italic">F</span><sub>fb</sub> is the frictional force of the brake pad on the tire rim, which can be represented as:</p>
                  <div className="pl-8 pr-4 py-3 bg-slate-50 rounded-lg border-l-2 border-slate-300 flex items-center justify-between gap-6">
                    <span className="text-slate-800 text-base"><span className="italic">F</span><sub>fb</sub> = μ<span className="italic">N</span></span>
                    <span className="text-slate-400 text-sm shrink-0">(5)</span>
                  </div>
                  <p className="text-gray-600">where μ is the coefficient of friction between the rubber brake pad and the tire rim. Rearranging equations (3) and (4) to get rid of the force of friction of the road (<span className="italic">F</span><sub>fr</sub>), and plugging in (5), we get:</p>
                  <div className="pl-8 pr-4 py-3 bg-slate-50 rounded-lg border-l-2 border-slate-300 flex items-center justify-between gap-6">
                    <span className="text-slate-800 text-base">μ<span className="italic">N</span> · <span className="italic">r</span><sub>brake</sub> / <span className="italic">r</span><sub>tire</sub> · <span className="italic">d</span> = ½<span className="italic">mv</span><sub>0</sub>²</span>
                    <span className="text-slate-400 text-sm shrink-0">(6)</span>
                  </div>
                  <p className="text-gray-600">Substituting in (2) for the normal force, we get an equation describing the relationship between input force (<span className="italic">F</span><sub>in</sub>) and stopping distance (<span className="italic">d</span>):</p>
                  <div className="pl-8 pr-4 py-3 bg-slate-50 rounded-lg border-l-2 border-slate-300 flex items-center justify-between gap-6">
                    <span className="text-slate-800 text-base"><span className="italic">F</span><sub>in</sub> = (<span className="italic">mv</span><sub>0</sub>² · <span className="italic">r</span><sub>pad</sub> · <span className="italic">r</span><sub>out</sub> · <span className="italic">r</span><sub>tire</sub>) / (4<span className="italic">d</span> · <span className="italic">r</span><sub>in</sub> · <span className="italic">r</span><sub>cable</sub> · <span className="italic">r</span><sub>brake</sub>)</span>
                    <span className="text-slate-400 text-sm shrink-0">(7)</span>
                  </div>
                </div>

                {/* Assumptions and plug-in */}
                <div className="space-y-4">
                  <p className="text-gray-600">We assumed a combined mass of the bicycle and its rider (<span className="italic">m</span>) of 76.5 kg, and a coefficient of friction between the brake pad (rubber) and the steel rim (μ) of 0.6. The following values were measured from the bike:</p>
                  <div className="space-y-1.5 pl-2">
                    <p className="text-gray-700 text-base"><em>r</em><sub>tire</sub> = 34.25 cm</p>
                    <p className="text-gray-700 text-base"><em>r</em><sub>brake</sub> = 30.5 cm</p>
                  </div>
                  <p className="text-gray-600">From the stopping distance requirement defined by ISO standards, we used <span className="italic">v</span><sub>0</sub> = 25 km/h and <span className="italic">d</span> = 7.5 m.</p>
                  <p className="text-gray-600">We used a value of <span className="italic">r</span><sub>cable</sub> = 45.5 mm (a design parameter which was defined in our CAD). From equation (7) above:</p>
                </div>

                {/* Final solve */}
                <div className="bg-slate-900 rounded-xl p-6 space-y-3">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-4">Solving</p>
                  {([
                    [<><em>F</em><sub>in</sub> = 56.85 N</>, "(from Eq. 7)"],
                    [<><em>T</em> = 255 N</>, "(from Eq. 1)"],
                    [<><em>N</em> = 245 N</>, "(from Eq. 2)"],
                    [<><em>F</em><sub>fb</sub> = μ<em>N</em> = 0.6 × 245 = 147 N</>, "(from Eq. 5)"],
                  ] as [React.ReactNode, string][]).map(([result, src], i) => (
                    <div key={i} className="flex items-baseline justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                      <span className="text-white text-base">{result}</span>
                      <span className="text-slate-500 text-sm">{src}</span>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "CAD Design & FEA — Initial Iteration",
      icon: <DraftingCompass className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            We modeled the caliper arms in NX using the design space constraints (rim size, mounting clearances, frame geometry) and ran FEA with SLS Nylon 12 material properties.
          </p>
          <p className="text-gray-600">
            Cable tension was applied vertically at the mounting point; the brake pad was constrained against the fixed rim with a frictional force in the direction of wheel spin. A pin constraint allowed rotation at the mounting hole.
          </p>
          <div className="bg-red-50 p-5 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-700 text-sm mb-3 uppercase tracking-wider">Initial FEA Results — Failed</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Right caliper deflection", val: "22.07 mm", bad: true },
                { label: "Left caliper deflection", val: "5.08 mm", bad: true },
                { label: "Right max stress", val: "268.42 MPa", bad: true },
                { label: "Left max stress", val: "202.38 MPa", bad: true },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-red-100">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wide mb-1">{s.label}</p>
                  <p className="text-lg font-bold text-red-600">{s.val}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-red-600 mt-3 italic">Allowable deflection: 11 mm / Allowable stress: 33.15 MPa</p>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-3">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback
              src={cadInitialImg}
              alt="NX CAD model of the initial left and right brake caliper arms"
              className="w-full h-auto object-contain"
            />
            <div className="bg-slate-50 p-2 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Initial Caliper Arms — NX
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback
              src={initialFEADisp}
              alt="Nodal displacement from initial FEA — left and right caliper arms"
              className="w-full h-auto object-contain"
            />
            <div className="bg-slate-50 p-2 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Nodal Displacement — Initial FEA [mm]
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback
              src={initialFEAStress}
              alt="Von Mises stress distribution from initial FEA — left and right caliper arms"
              className="w-full h-auto object-contain"
            />
            <div className="bg-slate-50 p-2 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Von Mises Stress — Initial FEA [MPa]
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Iterative Redesign & Topology Optimization",
      icon: <Wrench className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            We iterated through multiple FEA cycles, adding material strategically along the outer edges of the caliper arms to create an I-beam-like cross-section — increasing moment of inertia and reducing bending.
          </p>
          <div className="space-y-3">
            <p className="text-gray-600">
              We also ran topology optimization to identify regions of unnecessary material along the load paths. While we used the optimization results as a guide rather than a prescriptive output, it confirmed our instinct to add thickness near pin and cable attachment points.
            </p>
          </div>
          <div className="bg-[#e8a559]/10 p-5 rounded-xl border border-[#e8a559]/30">
            <h4 className="font-bold text-slate-800 text-sm mb-3 uppercase tracking-wider">After Final FEA Iteration</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Left caliper deflection", val: "1.949 mm", good: true },
                { label: "Right caliper deflection", val: "3.543 mm", good: true },
                { label: "Left max stress", val: "38.72 MPa" },
                { label: "Right max stress", val: "46.85 MPa" },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-[#e8a559]/20">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wide mb-1">{s.label}</p>
                  <p className={`text-lg font-bold ${s.good ? "text-[#35612f]" : "text-slate-700"}`}>{s.val}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3 italic">
              Deflection well within 11 mm limit. Stress exceeds endurance limit but below ultimate strength — single-cycle FOS of 1.5. Acceptable given lower expected cycle count.
            </p>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-3">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback
              src={cadIteratedBoth}
              alt="Iterated left and right caliper arms in NX"
              className="w-full h-auto object-contain"
            />
            <div className="bg-slate-50 p-2 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Iterated Caliper Arms — NX
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback
              src={feaStress}
              alt="Von Mises stress distribution in left and right caliper arms from FEA"
              className="w-full h-auto object-contain"
            />
            <div className="bg-slate-50 p-2 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Von Mises Stress Distribution [MPa]
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback
              src={feaDisplacement}
              alt="Nodal Z displacement in left and right caliper arms from FEA"
              className="w-full h-auto object-contain"
            />
            <div className="bg-slate-50 p-2 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Nodal Z Displacement [mm]
            </div>
          </div>
        </div>
      )
    },
    {
      title: "3D Printing & Initial Physical Testing",
      icon: <FlaskConical className="w-6 h-6" />,
      reverse: true,
      content: (
        <div className="space-y-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 text-sm mb-3 uppercase tracking-wider">Initial Test Results</h4>
            <div className="space-y-2">
              {[
                { metric: "Braking Distance", measured: "14.6 m", marginal: "≤ 15 m", pass: true },
                { metric: "Lever Force", measured: "120 N", marginal: "≤ 180 N", pass: true },
                { metric: "Assembly Weight", measured: "53.7 g", marginal: "< 200 g", pass: true },
                { metric: "Pad-to-Rim Clearance", measured: "6 mm", marginal: "≤ 10 mm", pass: true },
                { metric: "User Confidence", measured: "4/5", marginal: "> 4", pass: false },
                { metric: "Cost", measured: "$25", marginal: "< $130", pass: true },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between bg-white rounded-lg border border-slate-100 px-4 py-2.5">
                  <span className="text-sm text-slate-700">{row.metric}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-slate-800">{row.measured}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.pass ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {row.pass ? "PASS" : "MARGINAL"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-3">
          <p className="text-gray-600 text-base">
            We printed the calipers in SLS Nylon 12 and assembled them on a test bicycle. Physical testing revealed the brake pads were positioned too low to fully contact the rim — the caliper arms extended too far downward.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <ImageWithFallback
                src={testingPhoto1}
                alt="Initial brake caliper assembly on bike during testing — cable routing view"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "1" }}
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
              <ImageWithFallback
                src={testingPhoto2}
                alt="Initial brake caliper assembly on bike during testing — caliper close-up"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "1" }}
              />
            </div>
          </div>
          <div className="bg-slate-50 p-2 text-[10px] text-slate-500 text-center rounded-lg border border-slate-200 uppercase tracking-widest font-bold font-sans">
            Initial Testing Assembly
          </div>
        </div>
      )
    },
    {
      title: "Design Revision & Final Testing",
      icon: <Activity className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            We shortened the caliper arm height, re-modeled the full assembly against the bike frame and rim in CAD to verify fit, and thinned the brake pad attachment points by 1 mm to reduce weight further.
          </p>
          <p className="text-gray-600">
            FEA on the revised design confirmed improved stiffness: combined deflection dropped to 5.133 mm (FOS = 2.14 on deflection), well within the 11 mm limit.
          </p>
          <div className="bg-[#35612f]/5 p-5 rounded-xl border border-[#35612f]/10">
            <h4 className="font-bold text-[#35612f] text-sm mb-3 uppercase tracking-wider">Final Results</h4>
            <div className="space-y-2">
              {[
                { metric: "Braking Distance", lab8: "14.6 m", lab10: "12.9 m", improved: true, note: "↑ Improved" },
                { metric: "Lever Force (full depress)", lab8: "120 N", lab10: "130 N", improved: true, note: "↑ Stiffer" },
                { metric: "Assembly Weight", lab8: "53.7 g", lab10: "45.6 g", improved: true, note: "↑ Improved" },
                { metric: "User Confidence", lab8: "4/5", lab10: "4/5", improved: null, note: null },
              ].map((row, i) => (
                <div key={i} className="bg-white rounded-lg border border-[#35612f]/10 px-4 py-3">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wide mb-1.5">{row.metric}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-mono text-slate-600">{row.lab8}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Initial</span>
                    </div>
                    <span className="text-slate-200">→</span>
                    <div className="flex flex-col items-center">
                      <span className={`text-sm font-mono font-bold ${row.improved === true ? "text-[#35612f]" : row.improved === false ? "text-amber-600" : "text-slate-600"}`}>{row.lab10}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Final</span>
                    </div>
                    {row.note && <span className="ml-auto text-xs text-[#35612f] font-bold">{row.note}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            {["NX", "FEA", "Topology Optimization", "SLS Nylon 12", "3D Printing", "DFM", "ISO 4210"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-[#35612f]/10 text-[#35612f] rounded-full text-xs font-bold uppercase tracking-wider font-sans">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
      media: (
        <div className="space-y-3">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback
              src={cadAssemblyImg}
              alt="NX CAD model of the final brake caliper assembly mounted on the bicycle frame and wheel rim"
              className="w-full h-auto object-contain"
            />
            <div className="bg-slate-50 p-2 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Final Caliper Assembly — NX
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <ImageWithFallback
              src={finalTestPhoto}
              alt="Final revised brake caliper design printed and assembled on test bike"
              className="w-full h-auto object-cover"
            />
            <div className="bg-slate-50 p-2 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Final Design — Assembled on Test Bike
            </div>
          </div>
          <div className="bg-[#35612f]/5 p-5 rounded-xl border border-[#35612f]/10 text-center">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wide mb-1">Deflection Factor of Safety</p>
            <p className="text-4xl font-black text-[#35612f]">2.14</p>
            <p className="text-xs text-slate-500 mt-1">11 mm limit / 5.133 mm actual</p>
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
            <span className="text-[#35612f] font-bold text-xl uppercase tracking-wider text-right block font-sans">Design & Manufacturing</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-20">
        <header className="mb-24 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-[#35612f] font-bold mb-6 uppercase tracking-widest text-sm">
            <Wrench className="w-6 h-6" />
            <span>3D Printing, FEA & Mechanical Design</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 leading-tight">
            3D-Printed Bicycle Brake Calipers
          </h1>
          <p className="text-2xl text-slate-600 mb-12 font-light leading-relaxed">
            Designed, analyzed, and fabricated{" "}
            <span className="relative inline-block px-2 py-1">
              <span className="relative z-10 font-medium">SLS Nylon 12 brake calipers</span>
              <span className="absolute inset-0 bg-[#35612f]/10 -rotate-1 rounded"></span>
            </span>{" "}
            from scratch — using hand calculations, iterative FEA, topology optimization, and physical testing to achieve ISO-compliant stopping performance.
          </p>

          {/* Hero photo */}
          <div className="rounded-3xl overflow-hidden mb-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-200">
            <div className="aspect-video relative">
              <ImageWithFallback
                src={brakePhoto}
                alt="3D-printed SLS Nylon 12 brake calipers assembled on bicycle wheel rim, with team number 27 embossed on the caliper arm"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="bg-slate-50 p-3 text-[10px] text-slate-500 text-center border-t border-slate-200 uppercase tracking-widest font-bold font-sans">
              Northwestern University · Intro to Design and Manufacturing · Spring 2026 · Team 27
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Project Overview</h3>
            <p className="text-slate-700 text-xl leading-relaxed mb-10 font-light">
              As CAD and FEA Lead for Team 27, I led the NX modeling and FEA analysis for a 3D-printed bicycle brake caliper designed from scratch. The goal was to build a caliper that was as lightweight as possible while meeting ISO 4210 safety standards.
              <br /><br />
              The final SLS Nylon 12 calipers came in at 45.6 g and achieved a braking distance of 12.9 m from 25 km/h — comfortably within the ISO 15 m limit.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-slate-200">
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Role</p><p className="font-bold text-slate-900 uppercase text-sm">CAD & FEA Lead</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Context</p><p className="font-bold text-slate-900 uppercase text-sm">Intro to Design & MFG</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Team</p><p className="font-bold text-slate-900 uppercase text-sm">Team 27 (5 members)</p></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Quarter</p><p className="font-bold text-slate-900 uppercase text-sm">Spring 2026</p></div>
            </div>
          </div>
        </header>

        <section className="relative">
          <div className="flex items-center gap-4 mb-20 justify-center">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Technical Process & Development</h2>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />

            {steps.map((step, index) => (
              <div key={index} className="relative mb-16 pl-16">
                <div
                  className="absolute left-[1.125rem] top-3 w-4 h-4 rounded-full border-4 border-white"
                  style={{
                    backgroundColor: index % 3 === 0 ? "#35612f" : index % 3 === 1 ? "#e8a559" : "#c86f4d",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
                  }}
                />

                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-2xl mb-2">{step.title}</h3>
                  </div>
                </div>

                <div className={`grid gap-8 items-start ${step.fullWidth ? "grid-cols-1" : "lg:grid-cols-2"}`}>
                  {step.reverse && step.media && <div>{step.media}</div>}
                  <div
                    className="bg-white p-8 rounded-2xl"
                    style={{
                      borderLeft: `4px solid ${index % 3 === 0 ? "#35612f" : index % 3 === 1 ? "#e8a559" : "#c86f4d"}`,
                      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
                    }}
                  >
                    {step.content}
                  </div>
                  {!step.fullWidth && !step.reverse && step.media && <div>{step.media}</div>}
                </div>
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
            projects={getOtherProjects("brake")}
            onNavigate={onNavigateToProject}
          />
        </div>
      </main>
    </div>
  );
}
