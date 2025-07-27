import { HoverCard } from "@/components/ScrollReveal";

interface TechnologySkillsProps {
  currentColor: string;
}

export default function TechnologySkills({ currentColor }: TechnologySkillsProps) {
  const technologies = [
    // Development Tools
    { name: 'Git', color: '#F05032' },
    { name: 'APIs', color: '#FF6B6B' },
    { name: 'Vite', color: '#646CFF' },
    
    // Operating Systems
    { name: 'Linux', color: '#FCC624' },
    { name: 'Windows', color: '#0078D4' },
    { name: 'UNIX', color: '#FF6600' },
    
    // Virtualization
    { name: 'Virtual Machines', color: '#6C5CE7' },
    
    // Data Science
    { name: 'MatPlotLib', color: '#11557C' },
    { name: 'Pandas', color: '#130654' },
    
    // AI/ML
    { name: 'PyTorch', color: '#EE4C2C' },
    { name: 'Tensorflow', color: '#FF6F00' },
    { name: 'Generative AI Tools', color: '#8B5CF6' }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Technologies & Frameworks
        </h3>
        <p className="text-gray-600 dark:text-gray-300">Tools and platforms I use to build solutions</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech) => (
          <HoverCard key={tech.name} scale={1.05} shadowIntensity={10} className="group bg-white dark:bg-neutral-700 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-neutral-600">
            <div className="text-center">
              <div 
                className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name.charAt(0)}
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
            </div>
          </HoverCard>
        ))}
      </div>
    </div>
  );
} 