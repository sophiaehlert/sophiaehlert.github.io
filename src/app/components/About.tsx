import { Card, CardContent } from "@/app/components/ui/card";
import { GraduationCap, Target, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import headshot from "figma:asset/29825ea806256585ffc643b3e6348f8e65734005.png";

interface AboutProps {
  onViewAboutMe?: () => void;
}

export function About({ onViewAboutMe }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-16 gap-12 items-center mb-16">
          <div className="lg:col-span-5">
            {/* Polaroid-style Photo */}
            <div className="relative inline-block transform hover:rotate-1 transition-transform duration-300">
              {/* Polaroid frame with shadow */}
              <div className="bg-white p-3 sm:p-4 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback 
                    src={headshot} 
                    alt="Sophia Ehlert" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative tape */}
            </div>
          </div>
          
          <div className="lg:col-span-11 space-y-6">
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl sm:text-5xl text-[#35612f]">About Me</h2>
              {/* Squiggly underline */}
              <svg 
                className="absolute -bottom-2 left-0 w-48 h-3" 
                viewBox="0 0 200 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2 6C15 3 30 9 45 6C60 3 75 9 90 6C105 3 120 9 135 6C150 3 165 9 180 6C185 5 190 7 198 6" 
                  stroke="#c86f4d" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Hi, I'm Sophia — a second-year Mechanical Engineering student at Northwestern University pursuing a Certificate in Design. I'm a <span className="relative inline-block px-1.5 py-0.5">
                <span className="relative z-10">hands-on engineer</span>
                <span className="absolute inset-0 bg-[#6b8f71]/20 rotate-[-1deg]"></span>
              </span> who loves bridging the gap between user-centered design and practical manufacturing, turning real needs into buildable, reliable solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              I bring a blend of creativity and technical knowledge to my projects and see <span className="relative inline-block px-1.5 py-0.5">
                <span className="relative z-10 font-medium">iteration</span>
                <span className="absolute inset-0 bg-[#e8a559]/25 rotate-1"></span>
              </span> as a key part of the design process. I enjoy testing assumptions, incorporating feedback, and improving ideas through hands-on prototyping and analysis.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              I can be reached via <a href="mailto:sophiaehlert@u.northwestern.edu" className="text-primary hover:underline">email</a> or <a href="https://www.linkedin.com/in/sophia-ehlert/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>.
            </p>
            {onViewAboutMe && (
              <div className="pt-4 flex items-center gap-3">
                <span className="text-lg text-gray-700 font-medium">More About Me</span>
                <button
                  onClick={onViewAboutMe}
                  className="bg-[#35612f] hover:bg-[#2a4e25] text-white rounded-full w-10 h-10 p-0 flex items-center justify-center transition-colors"
                  aria-label="View more about me"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
