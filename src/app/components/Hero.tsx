import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex items-center bg-gradient-to-br from-[#87a577]/20 via-[#87a577]/10 to-white relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#35612f]">
            Sophia Ehlert
          </h1>
          
          <div className="relative inline-block">
            <p className="text-2xl sm:text-3xl text-[#35612f]">
              Mechanical Engineer & Designer
            </p>
            {/* Simplified squiggle underline */}
            <svg 
              className="absolute -bottom-1 left-0 w-full max-w-md" 
              height="8" 
              viewBox="0 0 300 8" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.6 }}
            >
              <path 
                d="M2 4C20 2 40 6 60 4C80 2 100 6 120 4C140 2 160 6 180 4C200 2 220 6 240 4C260 2 280 6 298 4" 
                stroke="#c86f4d" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          <p className="text-lg sm:text-xl text-[#696158] leading-relaxed max-w-2xl pt-2">
            Passionate about creating innovative solutions at the intersection of engineering and design.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-[#35612f] hover:bg-[#2a4e25] text-white hover:scale-105 transition-transform"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-[#35612f] text-[#35612f] hover:bg-[#35612f] hover:text-white hover:scale-105 transition-transform bg-transparent"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 pt-6">
            <a
              href="https://www.linkedin.com/in/sophia-ehlert"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/40 backdrop-blur-sm rounded-full hover:bg-white/60 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-[#3d3835]" />
            </a>
            <a
              href="mailto:sophiaehlert@u.northwestern.edu"
              className="p-3 bg-white/40 backdrop-blur-sm rounded-full hover:bg-white/60 transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6 text-[#3d3835]" />
            </a>
            <a
              href="https://github.com/sophiaehlert"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/40 backdrop-blur-sm rounded-full hover:bg-white/60 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-[#3d3835]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
