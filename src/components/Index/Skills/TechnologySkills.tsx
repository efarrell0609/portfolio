import { HoverCard } from "@/components/ScrollReveal";

interface TechnologySkillsProps {
  currentColor: string;
}

export default function TechnologySkills({ currentColor }: TechnologySkillsProps) {
  const technologyCategories = [
    {
      title: "Tools",
      technologies: [
        { name: 'Git' },
        { name: 'Vite' },
        { name: 'React' },
        { name: 'Node.js' }
      ]
    },
    {
      title: "Frameworks",
      technologies: [
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'PyTorch' },
        { name: 'HuggingFace' }
      ]
    },
    {
      title: "Databases",
      technologies: [
        { name: 'MySQL' },
        { name: 'SQLite' },
        { name: 'Firebase' }
      ]
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Technologies & Frameworks
        </h3>
        <p className="text-gray-600 dark:text-gray-300">Tools and platforms I use to build solutions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologyCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
              {category.title}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {category.technologies.map((tech) => (
                <HoverCard 
                  key={tech.name} 
                  scale={1.05} 
                  shadowIntensity={10} 
                  className="group bg-white dark:bg-black rounded-lg p-3 shadow-sm border border-gray-100 dark:border-neutral-600"
                >
                  <div className="text-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </div>
                </HoverCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 