import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Code2, Cog, Palette, Calculator, Hammer, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Mechanical Design & CAD",
    icon: Cog,
    color: "#35612f", // Primary green
    skills: ["SOLIDWORKS", "NX", "Onshape", "Fusion 360", "Reverse Engineering", "DFM", "Assembly Design", "Mechanical Design"]
  },
    {
    title: "Software & Computation",
    icon: Code2,
    color: "#6b8f71", // Sage
    skills: ["Python", "C / C++", "MATLAB", "Java", "ROS", "Simulation Modeling", "Debugging & Memory Management"]
  },
  {
    title: "Analysis & Simulation",
    icon: Calculator,
    color: "#e8a559", // Amber
    skills: ["FEA", "Structural Analysis", "Multibody Dynamics", "Numerical Methods", "Stress Analysis", "Lagrangian Mechanics"]
  },
  {
    title: "Human-Centered Design",
    icon: Palette,
    color: "#c86f4d", // Terracotta
    skills: ["Inclusive Design", "User Research", "Ergonomics", "Design Thinking", "Accessibility"]
  },
  {
    title: "Manufacturing & Prototyping",
    icon: Hammer,
    color: "#35612f", // Primary green
    skills: ["Additive Manufacturing", "Prototype Fabrication", "Manual Machining (Mill & Lathe)", "Material Selection"]
  },
  {
    title: "Systems & Project Management",
    icon: Lightbulb,
    color: "#6b8f71", // Sage
    skills: ["Workflow Design", "SOP Development", "Technical Documentation", "Cross-Functional Collaboration"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl text-[#35612f]">
              Skills & <span className="relative inline-block">
                <span className="relative z-10">Expertise</span>
                {/* Squiggly underline under Expertise */}
                <svg 
                  className="absolute -bottom-1 left-0 w-full h-3" 
                  viewBox="0 0 150 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2 4C20 2 35 6 50 4C65 2 80 6 95 4C110 2 125 6 140 4C143 4 146 5 148 4" 
                    stroke="#6b8f71" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow border-gray-100 hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-lg transition-transform hover:scale-110" 
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="font-sans hover:shadow-sm transition-all duration-200"
                        style={{ 
                          borderColor: `${category.color}30`,
                          color: '#334155'
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}