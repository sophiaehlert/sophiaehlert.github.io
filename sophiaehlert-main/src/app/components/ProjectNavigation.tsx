import React from "react";
import { Project } from "@/app/data/projects";
import { ArrowRight } from "lucide-react";

interface ProjectNavigationProps {
  projects: Project[];
  onNavigate: (projectId: string) => void;
}

export function ProjectNavigation({ projects, onNavigate }: ProjectNavigationProps) {
  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-slate-600 text-sm uppercase tracking-widest font-bold mb-6 font-sans text-center">
        Explore Other Projects
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onNavigate(project.id)}
            className="group relative px-6 py-3 rounded-full font-sans font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg border-2"
            style={{
              borderColor: project.color,
              color: project.color,
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = project.color;
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = project.color;
            }}
          >
            <span className="flex items-center gap-2">
              {project.shortTitle}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <span className="text-xs text-slate-500 font-normal normal-case tracking-normal">
                {project.category}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
