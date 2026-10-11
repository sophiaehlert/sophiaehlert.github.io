import { useState, useEffect } from "react";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { CadProjects } from "@/app/components/CadProjects";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { AboutMe } from "@/app/components/AboutMe";
import { ProjectBridge } from "@/app/components/ProjectBridge";
import { ProjectCubli } from "@/app/components/ProjectCubli";
import { ProjectSlantStudio } from "@/app/components/ProjectSlantStudio";
import { ProjectBajaSteering } from "@/app/components/ProjectBajaSteering";
import { ProjectLoreal } from "@/app/components/ProjectLoreal";
import { ProjectEWB } from "@/app/components/ProjectEWB";
import { ProjectBrakeCalipers } from "@/app/components/ProjectBrakeCalipers";
import { ProjectBajaUprights } from "@/app/components/ProjectBajaUprights";
import { ProjectNosyBot } from "@/app/components/ProjectNosyBot";

// Main App Component
export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "about-me" | "project-bridge" | "project-cubli" | "project-slantstudio" | "project-baja" | "project-loreal" | "project-ewb" | "project-brake" | "project-uprights" | "project-nosybot">("home");

  useEffect(() => {
    if (currentView !== "home") {
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  const handleNavigateToProject = (projectId: string) => {
    const viewMap: Record<string, typeof currentView> = {
      "bridge": "project-bridge",
      "cubli": "project-cubli",
      "slantstudio": "project-slantstudio",
      "baja": "project-baja",
      "loreal": "project-loreal",
      "ewb": "project-ewb",
      "brake": "project-brake",
      "uprights": "project-uprights",
      "nosybot": "project-nosybot"
    };
    setCurrentView(viewMap[projectId] || "home");
  };

  if (currentView === "project-nosybot") {
    return <ProjectNosyBot
      onBack={() => {
        setCurrentView("home");
        setTimeout(() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "instant" });
        }, 0);
      }}
      onNavigateToProject={handleNavigateToProject}
    />;
  }

  if (currentView === "project-uprights") {
    return <ProjectBajaUprights
      onBack={() => {
        setCurrentView("home");
        setTimeout(() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "instant" });
        }, 0);
      }}
      onNavigateToProject={handleNavigateToProject}
    />;
  }

  if (currentView === "project-brake") {
    return <ProjectBrakeCalipers
      onBack={() => {
        setCurrentView("home");
        setTimeout(() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "instant" });
        }, 0);
      }}
      onNavigateToProject={handleNavigateToProject}
    />;
  }

  if (currentView === "about-me") {
    return <AboutMe onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "project-ewb") {
    return <ProjectEWB 
      onBack={() => {
        setCurrentView("home");
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
        }, 0);
      }}
      onNavigateToProject={handleNavigateToProject}
    />;
  }

  if (currentView === "project-loreal") {
    return <ProjectLoreal 
      onBack={() => {
        setCurrentView("home");
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
        }, 0);
      }}
      onNavigateToProject={handleNavigateToProject}
    />;
  }

  if (currentView === "project-baja") {
    return <ProjectBajaSteering 
      onBack={() => {
        setCurrentView("home");
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
        }, 0);
      }}
      onNavigateToProject={handleNavigateToProject}
    />;
  }

  if (currentView === "project-bridge") {
    return <ProjectBridge 
      onBack={() => {
        setCurrentView("home");
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
        }, 0);
      }}
      onNavigateToProject={handleNavigateToProject}
    />;
  }

  if (currentView === "project-cubli") {
    return <ProjectCubli 
      onBack={() => {
        setCurrentView("home");
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
        }, 0);
      }}
      onNavigateToProject={handleNavigateToProject}
    />;
  }

  if (currentView === "project-slantstudio") {
    return <ProjectSlantStudio 
      onBack={() => {
        setCurrentView("home");
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
        }, 0);
      }}
      onNavigateToProject={handleNavigateToProject}
    />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects 
        onViewProjectBridge={() => setCurrentView("project-bridge")} 
        onViewProjectCubli={() => setCurrentView("project-cubli")}
        onViewProjectSlantStudio={() => setCurrentView("project-slantstudio")}
        onViewProjectBaja={() => setCurrentView("project-baja")}
        onViewProjectLoreal={() => setCurrentView("project-loreal")}
        onViewProjectEWB={() => setCurrentView("project-ewb")}
        onViewProjectBrake={() => setCurrentView("project-brake")}
        onViewProjectUprights={() => setCurrentView("project-uprights")}
        onViewProjectNosyBot={() => setCurrentView("project-nosybot")}
      />
      <CadProjects />
      <About onViewAboutMe={() => setCurrentView("about-me")} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}