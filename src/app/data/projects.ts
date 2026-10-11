export type ProjectId = "bridge" | "cubli" | "slantstudio" | "baja" | "loreal" | "ewb" | "brake" | "uprights" | "nosybot";

export interface Project {
  id: ProjectId;
  title: string;
  shortTitle: string;
  category: string;
  color: string;
}

export const projects: Record<ProjectId, Project> = {
  bridge: {
    id: "bridge",
    title: "Vertical Lift Bridge",
    shortTitle: "Bridge",
    category: "Structural Design",
    color: "#0ea5e9" // sky blue
  },
  cubli: {
    id: "cubli",
    title: "Self-Balancing Cube",
    shortTitle: "Cubli",
    category: "Mechatronics",
    color: "#8b5cf6" // violet
  },
  slantstudio: {
    id: "slantstudio",
    title: "SlantStudio",
    shortTitle: "SlantStudio",
    category: "Product Design",
    color: "#ec4899" // pink
  },
  baja: {
    id: "baja",
    title: "Baja Steering System",
    shortTitle: "Baja",
    category: "Mechanical Engineering",
    color: "#f59e0b" // amber
  },
  loreal: {
    id: "loreal",
    title: "L'Oréal Research",
    shortTitle: "L'Oréal",
    category: "Research & Development",
    color: "#10b981" // emerald
  },
  ewb: {
    id: "ewb",
    title: "Engineers Without Borders",
    shortTitle: "EWB",
    category: "Sustainable Design",
    color: "#06b6d4" // cyan
  },
  brake: {
    id: "brake",
    title: "3D-Printed Bicycle Brake Calipers",
    shortTitle: "Brake Calipers",
    category: "Design & Manufacturing",
    color: "#c86f4d" // terracotta
  },
  uprights: {
    id: "uprights",
    title: "Baja SAE Front Uprights",
    shortTitle: "Front Uprights",
    category: "Mechanical Engineering",
    color: "#2563eb" // blue
  },
  nosybot: {
    id: "nosybot",
    title: "NosyBot",
    shortTitle: "NosyBot",
    category: "Robotics Research",
    color: "#7c3aed" // violet
  }
};

export const getOtherProjects = (currentProjectId: ProjectId): Project[] => {
  return Object.values(projects).filter(p => p.id !== currentProjectId);
};
