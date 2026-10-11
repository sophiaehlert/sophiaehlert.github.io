import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/app/components/ui/dialog";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hotWheelsImg from "figma:asset/5470686dd0e1bba9ec357226eec171c0642851b9.png";
import hotWheelsPhoto1 from "figma:asset/0baac3b20bf8fc88217a68b752f2fe16111cbc4f.png";
import hotWheelsPhoto2 from "figma:asset/925a890b50f57e4e13c23ba681d7c7bb9ae13a49.png";
import hotWheelsPhoto3 from "figma:asset/ed508ae05510e1ecbd5a4692b4608b7e8ba90930.png";
import shovelImg from "figma:asset/7e40829345f64e8ecc216f1b75b6cf8678ccdf65.png";
import walleImg from "figma:asset/6abece0a56133e7b38dad1e297fd780651a3356a.png";
import moshiPhoneImg from "figma:asset/067783d1c09d29cee842487384a93e3452bb923b.png";
import originalMoshiPhone from "figma:asset/a8df6029e66dcc4ff7bf4f2981520f8d81aab74b.png";
import airpodsImg from "figma:asset/c3562a70dc31dc5dce4098d34ee7d478c889aeaa.png";
import airpodsPhoto1 from "figma:asset/7393698f2d2cd05608f34c0f708ce8981e8a73dd.png";
import airpodsPhoto2 from "figma:asset/47972039d544157a81ebb744694b506c6fbc8fb8.png";
import airpodsPhoto3 from "figma:asset/898f03e557c7e99bf07627fb3680f2a9b39b539d.png";
import airpodsPhoto4 from "figma:asset/9b5a444c0a1ab31e2abbf5362f78dc947881871d.png";
import airpodsPhoto5 from "figma:asset/3832811468f2f9c59db48ab382bf8d691c37b5a8.png";
import airpodsPhoto6 from "figma:asset/8d4e9d20c9b4ae63529145940c0750c6a2fc4d14.png";
import airpodsPhoto7 from "figma:asset/aacbf2f4fdb25822d91473ba872ef6b31f95aebb.png";
import airpodsPhoto8 from "figma:asset/cea6cd2e9bb8906c402a17d63b080fc3323f082b.png";
import airpodsPhoto9 from "figma:asset/6c5666655e274788b3be014a59c4dd64eadeb1a2.png";
import airpodsPhoto10 from "figma:asset/cf5b5982028ed6fe9befebc06e28e83c72560f64.png";
import airpodsPhoto11 from "figma:asset/6abf719bdf4f96678d0e7bb365bd14e3f3ad9332.png";
import airpodsPhoto12 from "figma:asset/7895ce0e1dc82a1f41ca97c79b7a421d987c5580.png";

interface CadProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  detailedDescription?: string;
  additionalImages?: string[];
  categorizedImages?: { category: string; images: string[] }[];
  specs?: { label: string; value: string }[];
}

export function CadProjects() {
  const [selectedProject, setSelectedProject] = useState<CadProject | null>(null);

  // Custom arrow components
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
      aria-label="Next project"
    >
      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#35612f]" />
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
      aria-label="Previous project"
    >
      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#35612f]" />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const cadProjects: CadProject[] = [
    {
      title: "AirPods Model",
      description: "Detailed CAD model of AirPods created for a personal project, demonstrating surface modeling and assembly techniques.",
      image: airpodsImg,
      tags: ["SOLIDWORKS", "Surface Modeling", "Mastermodeling", "Assembly Design"],
      detailedDescription: "A detailed CAD model of AirPods, created as a personal project to practice surface modeling and assembly techniques. The project involved modeling the intricate details of the earbuds, charging case, and hinge mechanism. This exercise helped develop skills in creating complex assemblies with multiple parts and surfaces.",
      categorizedImages: [
        {
          category: "Silicone Tip Details",
          images: [airpodsPhoto3, airpodsPhoto4]
        },
        {
          category: "Airpod Body (without tip)",
          images: [airpodsPhoto1, airpodsPhoto2]
        },
        {
          category: "Full Earbud Assembly (body + tip)",
          images: [airpodsPhoto5, airpodsPhoto6]
        },
        {
          category: "Charging Case Views",
          images: [airpodsPhoto8, airpodsPhoto9]
        },
        {
          category: "Complete Assembly (case + earbuds)",
          images: [airpodsPhoto12, airpodsPhoto7]
        },
        {
          category: "Transparent Assembly Views",
          images: [airpodsPhoto11, airpodsPhoto10]
        }
      ],
      specs: [
        { label: "CAD Software", value: "SolidWorks" },
        { label: "Modeling Type", value: "Surface & Solid" },
        { label: "Features", value: "Curves, Fillets, Patterns" },
        { label: "Inspiration", value: "Modern Product Design" }
      ]
    },
    {
      title: "Baja Hot Wheels Car",
      description: "Custom hot wheels car for Baja team - CAD modeled body in SolidWorks, lathed wheels from delrin, milled chassis on manual mill, and assembled with bolt axles.",
      image: hotWheelsImg,
      tags: ["SOLIDWORKS", "Lathe", "Manual Mill"],
      detailedDescription: "A fun training exercise for first-year members of NU Baja SAE that combined CAD modeling with hands-on manufacturing. I designed the car body in SolidWorks, with the styling inspired by a Volkswagen Beetle. The wheels were precision-lathed from delrin plastic, providing durability and a smooth finish. The chassis was machined on a manual mill, and standard bolts served as axles. This project demonstrates the full cycle from digital design to physical fabrication, introducing new team members to essential machining and CAD skills.",
      additionalImages: [hotWheelsPhoto1, hotWheelsPhoto2, hotWheelsPhoto3],
      specs: [
        { label: "CAD Software", value: "SolidWorks" },
        { label: "Materials", value: "Delrin, Aluminum, Steel" },
        { label: "Manufacturing", value: "Lathe, Manual Mill" },
        { label: "Inspiration", value: "Volkswagen Beetle" }
      ]
    },
    {
      title: "Shovel Model",
      description: "Detailed CAD model of a shovel created for advanced modeling course, demonstrating solid modeling techniques.",
      image: shovelImg,
      tags: ["SOLIDWORKS", "Solid Modeling"],
      detailedDescription: "Created as part of an advanced CAD course, this shovel model showcases proficiency in surface modeling techniques. The project required careful attention to handle ergonomics, blade geometry, and realistic material representations. Multiple surface lofts and blends were used to achieve smooth transitions between components.",
      specs: [
        { label: "CAD Software", value: "SolidWorks" },
        { label: "Techniques", value: "Lofts, Sweeps" },
        { label: "Parts", value: "3 (Blade, Handle, Grip)" },
        { label: "Project Type", value: "Academic" }
      ]
    },
    {
      title: "Moshi Phone",
      description: "CAD recreation of vintage Moshi phone with detailed surface features and product design elements.",
      image: moshiPhoneImg,
      tags: ["SOLIDWORKS", "Product Design"],
      detailedDescription: "A detailed CAD recreation of the vintage Moshi phone, focusing on capturing the unique aesthetic and surface details of the original design. The project required careful measurement and modeling of curved surfaces, button details, and the iconic character face. This exercise developed skills in reverse engineering and product design.",
      additionalImages: [originalMoshiPhone],
      specs: [
        { label: "CAD Software", value: "SolidWorks" },
        { label: "Modeling Type", value: "Surface & Solid" },
        { label: "Features", value: "Curves, Fillets, Patterns" },
        { label: "Inspiration", value: "Vintage Product Design" }
      ]
    },
    {
      title: "Wall-E Assembly",
      description: "Simplified Wall-E assembly model demonstrating multi-part assembly design and mate constraints.",
      image: walleImg,
      tags: ["SOLIDWORKS", "Assembly Design"],
      detailedDescription: "A simplified assembly model of the iconic Wall-E character, created to practice assembly modeling techniques. The project involved creating multiple parts with proper mate constraints to ensure realistic articulation. This exercise helped develop skills in managing complex assemblies with multiple sub-assemblies and components.",
      specs: [
        { label: "CAD Software", value: "SolidWorks" },
        { label: "Total Parts", value: "~15 components" },
        { label: "Mates Used", value: "Concentric, Coincident, Distance" },
        { label: "Sub-assemblies", value: "Tracks, Body" }
      ]
    }
  ];

  return (
    <>
      <section id="cad-projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4 text-[#35612f]">CAD & Small Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of CAD models and smaller personal projects demonstrating technical modeling skills and hands-on manufacturing experience.
            </p>
          </div>

          <div className="relative px-2 sm:px-12">
            <Slider {...sliderSettings}>
              {cadProjects.map((project, index) => (
                <div key={index} className="px-1 sm:px-3">
                  <Card 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 flex flex-col group hover:-translate-y-1 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="aspect-square overflow-hidden bg-white relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="flex-grow pt-5 pb-5 px-5">
                      <h3 className="text-lg mb-2 text-[#35612f]">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="bg-slate-100 text-slate-700 hover:bg-slate-200 font-sans text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#35612f] font-bold uppercase">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.detailedDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Main Image */}
                <div className="bg-white rounded-lg overflow-hidden flex items-center justify-center max-h-96">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Additional Images */}
                {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                  <div className={`grid gap-3 ${selectedProject.additionalImages.length === 1 ? 'grid-cols-1' : selectedProject.additionalImages.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {selectedProject.additionalImages.map((img, index) => (
                      <div key={index} className={`bg-gray-100 rounded-lg overflow-hidden ${selectedProject.additionalImages!.length > 1 ? 'aspect-square' : ''}`}>
                        <img
                          src={img}
                          alt={`${selectedProject.title} - Additional ${index + 1}`}
                          className="w-full h-full object-contain"
                          onError={(e) => console.error('Image failed to load:', img)}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Categorized Images */}
                {selectedProject.categorizedImages && selectedProject.categorizedImages.length > 0 && (
                  <div className="space-y-4">
                    {selectedProject.categorizedImages.map((category, index) => (
                      <div key={index}>
                        <h4 className="text-lg mb-2 text-[#35612f]">{category.category}</h4>
                        <div className={`grid gap-3 ${category.images.length === 1 ? 'grid-cols-1' : category.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                          {category.images.map((img, imgIndex) => (
                            <div key={imgIndex} className={`bg-gray-100 rounded-lg overflow-hidden ${category.images.length > 1 ? 'aspect-square' : ''}`}>
                              <img
                                src={img}
                                alt={`${selectedProject.title} - ${category.category} ${imgIndex + 1}`}
                                className="w-full h-full object-contain"
                                onError={(e) => console.error('Image failed to load:', img)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Specifications */}
                {selectedProject.specs && (
                  <div>
                    <h4 className="text-lg mb-3 text-[#35612f]">Project Details</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.specs.map((spec, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-sans">
                            {spec.label}
                          </div>
                          <div className="text-base text-gray-900">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-slate-100 text-slate-700 font-sans"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}