import { ArrowLeft, Mountain, Camera } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import snowbirdImage from "figma:asset/299973c746b89a3b174e275857cc51463151f047.png";
import lakeMonroeImage from "figma:asset/70a49e2a60f13914779bd9dfa8cc3ffbc3c9bad8.png";
import parkCityImage from "figma:asset/e7d778eff2e1a26028b94f7680dfbf7db45deb59.png";
import icelandImage from "figma:asset/2551fbc05a6ffef6f15ef14b0c2a400087f7a019.png";
import yosemiteImage from "figma:asset/455bddd4a0a0df06bac8aa1500a44698020622a0.png";
import waterfallImage from "figma:asset/19745f7992280b7a692aea5c8decacb5ecee2773.png";
import monkeyImage from "figma:asset/f3bd95c18531bfc29eaf82a1532e6749ce9adbcc.png";
import beachImage from "figma:asset/d949427cbf89cf826e9ccce5ca3c2e07eb762665.png";
import hillsImage from "figma:asset/14df723da318f4833a192094e75a9bbf64302f27.png";
import blackSandImage from "figma:asset/ffc6a1b5fb605db9990757f0520554cd34e695b9.png";
import muralImage from "figma:asset/d4831682022e565c49e8e17eb589678e88ddd925.png";
import halfDomeImage from "figma:asset/47c1ffc15d5d71b7f801f259f27c0e5081c2ab67.png";
import streetImage from "figma:asset/14bd4bf63c9948e5c579ab85a6756a4dcd84564f.png";
import skiMountainImage from "figma:asset/633b2e8b32fb5552d473894984faf1ca5e09928a.png";
import northernLightsImage from "figma:asset/7860d6eda7f9cabd8aa47b39e6fb1989d5aa45ef.png";
import kayakImage from "figma:asset/480238f6cb07f64aad286f9952f6f3ea72ca9391.png";
import grasshopperImage from "figma:asset/e9612f9c7348707a66470a2b585a5651314bcf51.png";
import gibraltarMonkeyImage from "figma:asset/36874a1a242dad59b5a71ae9e5c36df4c9c6309a.png";
import sunsetBirdsImage from "figma:asset/01d6fe21bd3a2ac7d5af89c748fe1bd1c4e2a071.png";
import chipmunkImage from "figma:asset/3eeab44b7008955ff56dfeb964d4c2efd02ebf0e.png";
import palmTreesImage from "figma:asset/9ee718811f0b49c6c5279fd0425f4234063e76c1.png";
import sunsetStreetImage from "figma:asset/684a4d54014717142d15d70a0c87d18393e7c142.png";
import vernalFallImage from "figma:asset/5591b98896960b37f811df10978ef3922d8afa09.png";
import icelandRoadImage from "figma:asset/e60119013f07fc2347b271930d9ea70f3ed444df.png";

interface AboutMeProps {
  onBack: () => void;
}

export function AboutMe({ onBack }: AboutMeProps) {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#35612f] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl text-[#35612f] mb-6">More About Me</h1>
            <p className="text-xl text-gray-700 font-light">
              A few things I do when I'm not in the shop or classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Outdoors & Adventure */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="w-7 h-7 text-[#6b8f71]" />
              <h2 className="text-3xl sm:text-4xl text-[#35612f]">Outdoors</h2>
            </div>
            <p className="text-lg text-gray-700 font-light">
              I spend a lot of time outside—skiing and (more recently) attempting to snowboard in the winter, and hiking, sailing, and surfing in the summer. I love the challenge of learning a new sport, even if I'm still a pretty terrible snowboarder and an equally questionable surfer.
            </p>
          </div>
          
          {/* Photo Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative">
              <div className="bg-white p-4 shadow-lg">
                <img 
                  src={yosemiteImage}
                  alt="Yosemite, California - August 31, 2021" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-['Averia_Serif_Libre'] text-gray-700 text-sm italic mt-3 text-center">
                  Yosemite, California • Aug 2021
                </p>
              </div>
            </div>

            <div className="relative md:mt-8">
              <div className="bg-white p-4 shadow-lg">
                <img 
                  src={lakeMonroeImage}
                  alt="Lake Monroe, Florida - September 2025" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-['Averia_Serif_Libre'] text-gray-700 text-sm italic mt-3 text-center">
                  Lake Monroe, Florida • Sept 2025
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-4 shadow-lg">
                <img 
                  src={icelandImage}
                  alt="Höfn í Hornafirði, Iceland - April 1, 2024" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-['Averia_Serif_Libre'] text-gray-700 text-sm italic mt-3 text-center">
                  Höfn í Hornafirði, Iceland • Apr 2024
                </p>
              </div>
            </div>

            <div className="relative md:col-span-2">
              <div className="bg-white p-4 shadow-lg">
                <img 
                  src={snowbirdImage}
                  alt="Snowbird Ski Resort, Utah - Dec 27, 2019" 
                  className="w-full aspect-[3/2] object-cover"
                />
                <p className="font-['Averia_Serif_Libre'] text-gray-700 text-sm italic mt-3 text-center">
                  Snowbird, Utah • Dec 2019
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-4 shadow-lg">
                <img 
                  src={parkCityImage}
                  alt="Park City, Utah - December 2021" 
                  className="w-full aspect-[3/4] object-cover"
                />
                <p className="font-['Averia_Serif_Libre'] text-gray-700 text-sm italic mt-3 text-center">
                  Park City, Utah • Dec 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="py-20 bg-[#f5f1ed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-7 h-7 text-[#c86f4d]" />
              <h2 className="text-3xl sm:text-4xl text-[#35612f]">Photography</h2>
            </div>
            <p className="text-lg text-gray-700 font-light max-w-3xl">
              I love to take photos of the places I visit. Here are some of my favorite shots.
            </p>
          </div>
          
          {/* Photography Grid */}
          <div className="grid md:grid-cols-6 gap-3 auto-rows-[250px]" style={{ gridAutoFlow: 'dense' }}>
            {/* Waterfall - tall portrait */}
            <div className="relative md:col-span-2 md:row-span-3">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={waterfallImage}
                  alt="Waterfall" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Beach - landscape */}
            <div className="relative md:col-span-4 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={beachImage}
                  alt="Beach" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Monkey - small square */}
            <div className="relative md:col-span-2 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={monkeyImage}
                  alt="Monkey" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mural - square */}
            <div className="relative md:col-span-2 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={muralImage}
                  alt="Mural" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Palm Trees - tall portrait */}
            <div className="relative md:col-span-2 md:row-span-3">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={palmTreesImage}
                  alt="Palm Trees" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hills - landscape */}
            <div className="relative md:col-span-2 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={hillsImage}
                  alt="Hills" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Black Sand - landscape */}
            <div className="relative md:col-span-4 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={blackSandImage}
                  alt="Black Sand Beach" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Grasshopper - square */}
            <div className="relative md:col-span-2 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={grasshopperImage}
                  alt="Grasshopper" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Half Dome - wide landscape */}
            <div className="relative md:col-span-4 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={halfDomeImage}
                  alt="Half Dome" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Vernal Fall - portrait */}
            <div className="relative md:col-span-2 md:row-span-3">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={vernalFallImage}
                  alt="Vernal Fall" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Street - portrait */}
            <div className="relative md:col-span-2 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={streetImage}
                  alt="Street Scene" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Ski Mountain - hero landscape */}
            <div className="relative md:col-span-4 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={skiMountainImage}
                  alt="Ski Mountain" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Chipmunk - square */}
            <div className="relative md:col-span-2 md:row-span-1">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={chipmunkImage}
                  alt="Chipmunk" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Northern Lights - landscape */}
            <div className="relative md:col-span-3 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={northernLightsImage}
                  alt="Northern Lights" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Sunset Birds - portrait */}
            <div className="relative md:col-span-3 md:col-start-4 md:row-span-3">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={sunsetBirdsImage}
                  alt="Sunset Birds" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Gibraltar Monkey - landscape */}
            <div className="relative md:col-span-3 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={gibraltarMonkeyImage}
                  alt="Gibraltar Monkey" 
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>

            {/* Kayak - wide landscape */}
            <div className="relative md:col-span-3 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={kayakImage}
                  alt="Kayak" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Sunset Street - landscape */}
            <div className="relative md:col-span-3 md:row-span-3">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={sunsetStreetImage}
                  alt="Sunset Street" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Iceland Road - wide landscape */}
            <div className="relative md:col-span-3 md:row-span-2">
              <div className="bg-white p-3 shadow-lg h-full">
                <img 
                  src={icelandRoadImage}
                  alt="Iceland Road" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}