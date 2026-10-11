import { ArrowLeft, ArrowRight, Construction } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getOtherProjects } from "@/app/data/projects";
import cadImg from "@/imports/image-16.png";

const color = "#2563eb";

interface Props {
  onBack: () => void;
  onNavigateToProject: (id: string) => void;
}

function ProjectNavigation({ onNavigateToProject }: { onNavigateToProject: (id: string) => void }) {
  const others = getOtherProjects("uprights");
  return (
    <div className="mt-20 border-t border-slate-200 pt-12">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Other Projects</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {others.slice(0, 3).map((p) => (
          <button
            key={p.id}
            onClick={() => onNavigateToProject(p.id)}
            className="text-left p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: p.color }}>{p.category}</span>
            <span className="text-sm font-semibold text-slate-800 group-hover:text-slate-900">{p.title}</span>
            <ArrowRight className="w-3 h-3 text-slate-400 mt-2 group-hover:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>
    </div>
  );
}

const timelineSteps = [
  {
    label: "01",
    title: "Project Context",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          As part of Northwestern's Baja SAE team, I am designing the front uprights for our 2027 competition
          car. The upright — also called the steering knuckle — is one of the most structurally critical
          components in the suspension system. It houses the wheel bearing, connects to the upper and lower
          control arms via ball joints, and transmits steering inputs from the tie rod to the wheel.
        </p>
        <p>
          Because the upright sits at the intersection of braking, cornering, and bump loads simultaneously,
          it must be both light and stiff. I am designing it from scratch in SolidWorks, targeting a billet aluminum
          solution optimized for the 2027 car's revised suspension geometry.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[
            { label: "Team", value: "Northwestern Baja SAE" },
            { label: "Car", value: "2027 Competition Vehicle" },
            { label: "Role", value: "Suspension Subsystem" },
            { label: "Status", value: "In Progress", highlight: true },
          ].map((item) => (
            <div key={item.label} className="bg-slate-50 rounded-lg p-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
              <p className={`text-sm font-semibold mt-0.5 ${item.highlight ? "" : "text-slate-800"}`}
                style={item.highlight ? { color } : {}}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    media: (
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
        <ImageWithFallback
          src={cadImg}
          alt="Baja SAE front upright CAD iteration"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200">
          CAD iteration — SolidWorks
        </div>
      </div>
    )
  },
  {
    label: "02",
    title: "Design Requirements",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          Uprights must survive worst-case combined loading: full braking while cornering over a large bump.
          The design has to accommodate:
        </p>
        <ul className="space-y-2 text-sm">
          {[
            "Upper and lower ball joint interfaces sized to team-selected Aurora bearings",
            "Wheel bearing bore sized for the 2027 hub assembly",
            "Tie rod pickup point compatible with the revised steering geometry",
            "Clearance for the caliper mount and rotor diameter",
            "Material: 6061-T6 aluminum billet (target), pending FEA validation",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ backgroundColor: color }}>
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-500 mt-4">
          Suspension geometry (kingpin inclination, caster, scrub radius) was handed off from the geometry
          sub-team and drives the hard mounting constraints on the design.
        </p>
      </div>
    ),
    media: (
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Key Targets</p>
        {[
          { label: "Material", value: "6061-T6 Al" },
          { label: "Target Mass", value: "< 400 g each" },
          { label: "FOS (yield)", value: "≥ 2.0" },
          { label: "Ball Joint", value: "Aurora HEIM series" },
          { label: "Bearing", value: "Team 2027 spec" },
        ].map((row) => (
          <div key={row.label} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
            <span className="text-sm text-slate-500">{row.label}</span>
            <span className="text-sm font-mono font-semibold text-slate-800">{row.value}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    label: "03",
    title: "CAD Development",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          The current iteration was built around the confirmed mounting geometry. The hub bore and ball
          joint tabs were defined first as hard constraints, then the connecting structure was developed
          around them. Ribbing and fillets were added to route load paths efficiently between the
          suspension pickup points and the bearing housing.
        </p>
        <p>
          The geometry is still evolving — several features (the steering arm tab geometry, caliper mount
          boss, and the anti-dive brace interface) are pending final geometry freeze from other subsystems.
        </p>
        <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Current Iteration</p>
          <p className="text-sm text-blue-800">
            Shown in image: hub bore centered, upper and lower ball joint flanges roughed in,
            structural ribs drafted along primary load path from lower ball joint to bearing centerline.
          </p>
        </div>
      </div>
    ),
    media: (
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
        <ImageWithFallback
          src={cadImg}
          alt="Front upright CAD"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },
  {
    label: "04",
    title: "Next Steps",
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          Once the geometry is frozen across all interfacing subsystems, the design will move into
          FEA validation. The analysis will apply combined braking and cornering loads extracted from
          the team's vehicle dynamics model, with bump inputs sized to worst-case track conditions.
        </p>
        <p>
          After FEA, the design will be refined based on stress concentrations and deflection results,
          then reviewed with the team's manufacturing advisor for machinability. The goal is a part
          that can be machined in-house on the team's Haas CNC mill.
        </p>
        <div className="space-y-2 mt-4">
          {[
            { step: "Geometry freeze (all subsystems)", done: false },
            { step: "FEA — combined load cases in SolidWorks", done: false },
            { step: "Design iteration based on FEA results", done: false },
            { step: "Machinability review", done: false },
            { step: "Final drawings & manufacturing", done: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${item.done ? "border-transparent" : "border-slate-300"}`}
                style={item.done ? { backgroundColor: color, borderColor: color } : {}} />
              <span className={item.done ? "text-slate-700 line-through" : "text-slate-500"}>{item.step}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    media: (
      <div className="bg-slate-50 rounded-2xl p-6 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center min-h-48">
        <Construction className="w-8 h-8 text-slate-300 mb-3" />
        <p className="text-sm font-semibold text-slate-400">FEA results coming soon</p>
        <p className="text-xs text-slate-300 mt-1">Pending geometry freeze</p>
      </div>
    )
  }
];

export function ProjectBajaUprights({ onBack, onNavigateToProject }: Props) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white" style={{ backgroundColor: color }}>
            In Progress
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
              Baja SAE · Northwestern
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Front Uprights
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Designing the front steering knuckles for Northwestern Baja SAE's 2027 competition car —
            from suspension geometry constraints through CAD and into FEA validation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />

          <div className="space-y-16">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative pl-16">
                <div
                  className="absolute left-[1.125rem] top-3 w-4 h-4 rounded-full border-4 border-white"
                  style={{
                    backgroundColor: color,
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
                  }}
                />

                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-2xl mb-2">{step.title}</h3>
                  </div>
                </div>

                <div className="grid gap-8 items-start lg:grid-cols-2">
                  <div
                    className="bg-white p-8 rounded-2xl"
                    style={{
                      borderLeft: `4px solid ${color}`,
                      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
                    }}
                  >
                    {step.content}
                  </div>
                  {step.media && (
                    <div>{step.media}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ProjectNavigation onNavigateToProject={onNavigateToProject} />
      </div>
    </div>
  );
}
