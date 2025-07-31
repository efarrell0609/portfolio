import { HoverCard } from "@/components/ScrollReveal";

interface TechnologySkillsProps {
  currentColor: string;
}

export default function TechnologySkills({ currentColor }: TechnologySkillsProps) {
  const technologies = [
    // Development Tools
    { name: 'Git' },
    { name: 'Vite' },
    { name: 'React' },
    { name: 'Node.js' },
    
    // Operating Systems
    { name: 'Linux' },
    { name: 'Windows' },
    
    // Data Science
    { name: 'Pandas' },
    { name: 'NumPy' },
    
    // AI/ML
    { name: 'PyTorch' },
    { name: 'HuggingFace' },
    
    // Databases & Backend
    { name: 'MySQL' },
    { name: 'SQLite' },
    { name: 'Firebase' }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Technologies & Frameworks
        </h3>
        <p className="text-gray-600 dark:text-gray-300">Tools and platforms I use to build solutions</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech) => (
          <HoverCard 
            key={tech.name} 
            scale={1.05} 
            shadowIntensity={10} 
            className="group bg-white dark:bg-neutral-700 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-neutral-600 w-32 md:w-36 lg:w-40"
          >
            <div className="text-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
            </div>
          </HoverCard>
        ))}
      </div>
    </div>
  );
} 