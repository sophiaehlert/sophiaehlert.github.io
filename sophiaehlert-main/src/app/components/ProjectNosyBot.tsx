import React from "react";
import { ArrowLeft, Cpu, Wind, BarChart3, Radio, Layers, Microscope, FlaskConical } from "lucide-react";
import { ProjectNavigation } from "./ProjectNavigation";
import { getOtherProjects } from "@/app/data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import sensorPhoto from "@/imports/image-17.png";
import gantryPhoto from "@/imports/image-18.png";
import entropyPlot from "@/imports/image-19.png";
import signaturePlot from "@/imports/image-20.png";

const color = "#7c3aed";

interface ProjectNosyBotProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

function Check() {
  return (
    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function Circle() {
  return <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex-shrink-0" />;
}

export function ProjectNosyBot({ onBack, onNavigateToProject }: ProjectNosyBotProps) {
  const otherProjects = getOtherProjects("nosybot");

  const steps = [
    {
      icon: <Layers className="w-5 h-5" />,
      label: "01",
      title: "The Question",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            I've been doing research in the{" "}
            <span className="font-semibold text-slate-900">Interactive & Emergent Autonomy Lab</span>{" "}
            under Professor Todd Murphey, working with PhD student Max Sun. The lab works on giving
            robots better ways to sense and act in the world — and one thread of that is smell.
          </p>
          <p>
            Olfaction is interesting for robotics for a few reasons. Unlike vision, which gives you
            a lot of information from a fixed position, smell is inherently spatial — you have to
            move around to figure out where a scent is coming from. Blind mice do this naturally,
            forming spatial maps using smell alone. Getting a robot to do the same thing is the
            longer-term goal here.
          </p>
          <p>
            The first step was building a sensor platform that could actually collect useful data.
            That's NosyBot.
          </p>
        </div>
      ),
      media: (
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">At a Glance</p>
          {[
            { label: "Lab", value: "IEA Lab · Northwestern" },
            { label: "PI", value: "Prof. Todd Murphey" },
            { label: "Collaborator", value: "Max Sun (PhD)" },
            { label: "Sensors", value: "8× BME688 (MOx)" },
            { label: "Microcontroller", value: "ESP32 Feather V2" },
            { label: "Test platform", value: "XCarve gantry (ROS)" },
            { label: "Status", value: "Active", highlight: true },
          ].map((row) => (
            <div key={row.label} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
              <span className="text-sm text-slate-500">{row.label}</span>
              <span className={`text-sm font-semibold ${row.highlight ? "" : "text-slate-800 font-mono"}`}
                style={row.highlight ? { color } : {}}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      )
    },
    {
      icon: <FlaskConical className="w-5 h-5" />,
      label: "02",
      title: "Finding a Signal",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Early experiments ran each BME688 at a fixed temperature between 100–400°C and logged
            raw gas resistance. The idea was to treat the sensor array like a spectrometer — different
            temperatures would highlight different VOC characteristics. It worked, but only sort of:
            you had to wait a long time for stable readings, and the data was sluggish to respond
            to new scents.
          </p>
          <p>
            The insight that changed things came around late June: instead of measuring resistance
            directly, take the <span className="font-semibold text-slate-900">temperature derivative</span> —
            how resistance changes across the thermal setpoints. Framed another way, it's like an
            "event camera" for scents. You're looking at the shape of the response curve rather than
            its absolute value, which strips out a lot of drift and makes different scents much more
            distinct from each other.
          </p>
          <p>
            Later, we also switched to{" "}
            <span className="font-semibold text-slate-900">time derivatives</span> (dR/dt) for a
            different reason: speed. Instead of waiting for steady state, track the "impact shockwave"
            the moment a scent hits the sensors. This made the data reactive enough to be useful for
            an active learning loop where the robot is actually moving.
          </p>
        </div>
      ),
      media: (
        <div className="bg-violet-50 rounded-2xl p-6 border border-violet-100 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">Sensing approaches explored</p>
          {[
            {
              label: "Raw resistance",
              desc: "Baseline. Works, but slow to settle and sensitive to drift.",
              status: "baseline"
            },
            {
              label: "Temperature derivative (dR/dT)",
              desc: "\"Event camera\" of scents — reads the shape of the response curve across thermal nodes. More distinctive and drift-resistant.",
              status: "key"
            },
            {
              label: "Time derivative (dR/dt)",
              desc: "Tracks the moment a scent arrives rather than the steady state. Fast enough for a moving robot.",
              status: "key"
            },
            {
              label: "PID baseline control",
              desc: "Sets a target resistance and measures the control effort required to maintain it — introduces a new class of features.",
              status: "explored"
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 items-start">
              <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{
                backgroundColor: item.status === "key" ? color : item.status === "baseline" ? "#94a3b8" : "#c4b5fd"
              }} />
              <div>
                <p className="text-sm font-semibold text-violet-900">{item.label}</p>
                <p className="text-xs text-violet-700 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      icon: <Radio className="w-5 h-5" />,
      label: "03",
      title: "The Hardware",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            The sensor module houses eight BME688 sensors arranged in an octagonal 3D-printed
            enclosure, with a reversible fan at the center. The octagonal layout keeps sensor-to-sensor distance
            consistent and avoids the kind of geometric clustering that would introduce measurement
            variability.
          </p>
          <p>
            All eight sensors share a single I2C bus through a TCA9548A multiplexer. The ESP32
            firmware reads them with non-blocking async calls — the heater fires and the ADC
            converts in the background while the loop moves on to the next sensor, keeping the
            data stream consistent without any one sensor holding things up.
          </p>
          <p>
            The fan runs in both directions: forward to flush the chamber and reset the baseline,
            then reverse to draw a scent plume across the array. That "breathing" cycle is what
            gives the module its name.
          </p>
        </div>
      ),
      media: (
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-square">
          <ImageWithFallback
            src={sensorPhoto}
            alt="Interior of olfactory sensor housing — 8 BME688 sensors arranged in octagonal ring with central fan"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-white">
            Sensor module interior — 8× BME688 + reversible fan
          </div>
        </div>
      )
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      label: "04",
      title: "ROS Integration & Gantry Testing",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Once the sensor was working, the next step was getting it onto a robot. I built a{" "}
            <span className="font-semibold text-slate-900">ROS package</span> that wraps the sensor
            pipeline as a node and communicates with an XCarve gantry we're using as a test platform
            in the lab. The gantry gives precise 2D positioning, which makes it possible to run
            systematic spatial experiments.
          </p>
          <p>
            The ROS package exposes services for absolute and relative movement, a raster scan that
            sweeps the whole workspace in a grid pattern, and an autonomous control toggle that hands
            movement over to the algorithm. Three topics publish the sensor data in real time: gas
            resistance, humidity, and gantry position.
          </p>
          <p>
            The main experiment so far: place an orange and a lemon at known positions in the
            workspace, discretize it into a{" "}
            <span className="font-semibold text-slate-900">6×6 grid</span>, and traverse every edge
            three times for uniform coverage. The sensor is stimulated by movement (state transitions),
            not by sitting still — so covering every edge matters more than visiting every node.
          </p>
          <div className="mt-2 bg-slate-900 rounded-xl p-4 border border-slate-700 space-y-2 font-mono text-xs leading-relaxed">
            <p className="text-slate-400 mb-2">ROS services / topics</p>
            {[
              { cmd: "/xcarve_acquire", desc: "Acquire the machine" },
              { cmd: "/raster_scan", desc: "Grid sweep — speed & line spacing configurable" },
              { cmd: "/toggle_autonomous_control", desc: "Hand off to algorithm" },
              { cmd: "/gas_resistance  /humidity", desc: "Sensor data (published topics)" },
            ].map((row) => (
              <div key={row.cmd} className="border-b border-slate-800 pb-1.5 last:border-0 last:pb-0">
                <span className="text-violet-400">{row.cmd}</span>
                <span className="text-slate-500 ml-2"># {row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      media: (
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <ImageWithFallback
            src={gantryPhoto}
            alt="Sensor module mounted on XCarve gantry with scent sample cups fixed to the spoilboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-white">
            XCarve gantry test setup — scent sources fixed to spoilboard
          </div>
        </div>
      )
    },
    {
      icon: <Microscope className="w-5 h-5" />,
      label: "05",
      title: "What the Data Shows",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            The orange vs. lemon experiment produced some results that were more interesting than
            expected. After running uniform coverage three times (about 2 hours of data total), we
            visualized the entropy at each grid location using measurements from all transitions
            through that node.
          </p>
          <p>
            The entropy distribution came out{" "}
            <span className="font-semibold text-slate-900">bimodal with higher uncertainty near the scent sources</span>,
            which looks like a Fisher information structure — the sensor is most informative exactly
            where it's most uncertain, which is useful for planning where to sample next. The
            signatures are also consistent across days, which was a relief.
          </p>
          <p>
            The other useful framing: collecting data on the gantry with known scent positions is
            equivalent to collecting partially labeled data. We already know where the orange and
            lemon are, so when we look at the data afterward, we can take snapshots from just before
            and after each exposure and look at which channels spiked — without needing to manually
            press a button at the right moment. The algorithm does the same thing: uses the spatial
            heat map to identify regions of interest, then analyzes those slices to distinguish sources.
          </p>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <ImageWithFallback
              src={entropyPlot}
              alt="Entropy distribution over 6×6 grid — two clear hotspots at orange and lemon source locations"
              className="w-full h-auto"
            />
            <div className="px-4 py-2.5 border-t border-slate-100">
              <p className="text-xs text-slate-500">Entropy distribution — higher uncertainty clusters around each scent source</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <ImageWithFallback
              src={signaturePlot}
              alt="12 repeated measurements of orange vs lemon — each mini-grid shows 8-sensor resistance response (red = increase, blue = decrease)"
              className="w-full h-auto"
            />
            <div className="px-4 py-2.5 border-t border-slate-100">
              <p className="text-xs text-slate-500">Orange vs. lemon — 12 repeated measurements each. Each mini-grid shows the 8-sensor resistance response after exposure</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Wind className="w-5 h-5" />,
      label: "06",
      title: "What's Next",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            The current work is extending the CVAE approach — since the sensor is stimulated by
            movement rather than position, the problem maps better to a discrete graph-traverse
            variant of ergodic control, where you're targeting proportional coverage of state
            transitions rather than states.
          </p>
          <p>
            We're also working on{" "}
            <span className="font-semibold text-slate-900">OLAF</span> (Olfactory Language Active
            Foundation Model) — a model that would generalize across scent classes and environments.
            A simulation environment for testing the architecture is also in progress.
          </p>
          <p>
            Hardware-side, the olfactory sensor module is ready for integration with a mobile platform. The longer-term
            goal is deploying it on a quadruped with an onboard GPU for real-time inference, and
            running field experiments where the robot localizes an unknown chemical source from scratch.
          </p>
        </div>
      ),
      media: (
        <div className="space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Progress</p>
          {[
            { label: "Initial sensor characterization (coffee, wine, expo, eucalyptus)", done: true },
            { label: "Temperature & time derivative sensing approaches", done: true },
            { label: "Real-time Python GUI with auto/manual modes", done: true },
            { label: "ROS package (sensor node + gantry control)", done: true },
            { label: "Sensor module hardware — designed, built, and tested", done: true },
            { label: "Orange vs. lemon gantry experiment (6×6 grid)", done: true },
            { label: "CVAE on state-transition data", done: true },
            { label: "Simulation environment for architecture testing", done: true },
            { label: "OLAF model development", done: false },
            { label: "Multi-scent experiments (3+ sources)", done: false },
            { label: "Mobile robot integration", done: false },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              {item.done ? <Check /> : <Circle />}
              <span className={item.done ? "text-slate-700" : "text-slate-400"}>{item.label}</span>
            </div>
          ))}
        </div>
      )
    }
  ];

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
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
            IEA Lab · Northwestern
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-video">
          <ImageWithFallback
            src={sensorPhoto}
            alt="NosyBot sensor module interior — 8 BME688 sensors in octagonal housing with central fan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero text */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
              Robotics Research
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full text-white font-bold uppercase tracking-widest" style={{ backgroundColor: color }}>
              Active
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            NosyBot
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            An open-source olfactory sensing platform for mobile robotics — custom sensor hardware,
            a ROS-integrated gantry test bed, and a machine learning pipeline working toward a robot
            that can navigate to a scent source without being told where to look.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />
          <div className="space-y-16">
            {steps.map((step, idx) => (
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
                  <div>{step.media}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <ProjectNavigation projects={otherProjects} onNavigate={onNavigateToProject} />
        </div>
      </div>
    </div>
  );
}
