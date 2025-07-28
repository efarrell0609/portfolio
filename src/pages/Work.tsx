import { useState, useEffect } from "react";
import { FadeInOnScroll, HoverCard } from "@/components/ScrollReveal";
import { useSettings } from "@/contexts/SettingsContext";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import DarkVeil from "@/components/DarkVeil";



interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function Work() {
  const { darkMode, currentColor } = useSettings();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log('Current color changed:', currentColor);
  }, [currentColor]);

  // Remove the complex color conversion - we'll use a different approach
  const workExperience: WorkExperience[] = [
    {
      title: "Research Assistant",
      company: "Center for Safe and Secure AI Robotics",
      location: "SUNY Polytechnic Institute",
      duration: "Feb 2025 – May 2025",
      description: [
        "Developed a real-time, multi-agent conversation application in C++/GTK for structured LLM dialogues over HTTP.",
        "Led deployment across 30 NVIDIA Orin Nano lab machines, handling network configurations and support.",
        "Designed memory architecture and message-routing pipelines for long-running, context-aware sessions."
      ],
      technologies: ["C++", "GTK", "HTTP", "NVIDIA Orin Nano", "Multi-agent Systems"]
    },
    {
      title: "Work Study Assistant",
      company: "The Workplace",
      location: "Watertown, NY",
      duration: "Aug 2021 – Dec 2021",
      description: [
        "Provided technical support and troubleshooting for devices and user software."
      ],
      technologies: ["Technical Support", "Troubleshooting", "User Software"]
    }
  ];

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A responsive site built with HTML, CSS, and JavaScript featuring dynamic theming (light/dark mode and color picker), modern design, and a live comment section powered by a NoSQL cloud database (Firestore).",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      githubUrl: "https://github.com/elijah-farrell/portfolio",
      liveUrl: "https://elijah-farrell.github.io/portfolio"
    },
    {
      title: "Valorant Pick'em Analyzer",
      description: "Cross-platform CLI and standalone desktop tool for advanced Valorant esports analytics. Scrapes structured player/match data from VLR.gg and Underdog Fantasy's public API, aggregates stats, cross-references fantasy pick'em lines, and generates color-coded Excel analytics.",
      technologies: ["Python", "CLI", "API", "PyInstaller"],
      githubUrl: "https://github.com/elijah-farrell/valorant-pickem-analyzer"
    }
  ];

  return (
    <div className="min-h-screen w-full font-['Inter'] transition-colors duration-300 bg-white dark:bg-black">
      <Navigation />
      <main className="pt-16">
                 {/* DarkVeil Background */}
         <div className="relative h-96 w-full overflow-hidden">
           <DarkVeil 
             hexColor="#F59E0B"
             noiseIntensity={0}
             scanlineIntensity={0}
             speed={0.5}
             scanlineFrequency={0.5}
             warpAmount={0}
             resolutionScale={1}
           />
           
           {/* Color overlay using your theme color */}
           <div 
             className="absolute inset-0 opacity-60"
             style={{
               background: `linear-gradient(135deg, ${currentColor}80 0%, ${currentColor}40 50%, ${currentColor}20 100%)`
             }}
           />
           
           {/* Dark overlay for better text readability */}
           <div className="absolute inset-0 bg-black bg-opacity-30"></div>
           
           {/* Gradient overlay for smooth transition */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-neutral-800"></div>
           
           <div className="absolute inset-0 flex items-end justify-center pb-16">
             <div className="text-center text-white">
               <h1 className="text-5xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
                 Work Experience
               </h1>
               <p className="text-xl opacity-90 max-w-2xl mx-auto drop-shadow-lg">
                 My professional journey and featured projects
               </p>
             </div>
           </div>
         </div>
        
        <section id="work" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-neutral-800">
              <div className="max-w-6xl mx-auto">

        {/* Work Experience */}
        <div className="mb-20">
          <FadeInOnScroll direction="up" duration={1000} delay={400} initialOpacity={0} elementId="work-experience-header">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Experience
            </h3>
          </FadeInOnScroll>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <FadeInOnScroll 
                key={job.title} 
                direction="up" 
                duration={1000} 
                delay={600 + index * 200} 
                initialOpacity={0} 
                elementId={`work-${index}`}
              >
                <HoverCard scale={1.02} shadowIntensity={15} className="w-full">
                  <div className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {job.title}
                        </h4>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                          {job.company}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {job.location}
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <span 
                          className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                          style={{ 
                            backgroundColor: `${currentColor}20`, 
                            color: currentColor,
                            border: `1px solid ${currentColor}40`
                          }}
                        >
                          {job.duration}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {job.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div 
                            className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                            style={{ backgroundColor: currentColor }}
                          />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {job.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-neutral-600 text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </HoverCard>
              </FadeInOnScroll>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <FadeInOnScroll direction="up" duration={1000} delay={1000} initialOpacity={0} elementId="projects-header">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Projects
            </h3>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeInOnScroll 
                key={project.title} 
                direction="up" 
                duration={1000} 
                delay={1200 + index * 200} 
                initialOpacity={0} 
                elementId={`project-${index}`}
              >
                <HoverCard scale={1.03} shadowIntensity={20} className="w-full h-full">
                  <div className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              backgroundColor: `${currentColor}20`, 
                              color: currentColor,
                              border: `1px solid ${currentColor}40`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 rounded-xl font-semibold text-center transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                            style={{ 
                              backgroundColor: currentColor,
                              color: 'white'
                            }}
                          >
                            View Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 rounded-xl font-semibold text-center border-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                            style={{ 
                              borderColor: currentColor,
                              color: currentColor
                            }}
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
                             </div>
       </section>
     </main>
     <Footer currentColor={currentColor} />
   </div>
   );
} 