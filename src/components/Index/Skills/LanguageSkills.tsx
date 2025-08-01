import { HoverCard } from "@/components/ScrollReveal";

interface LanguageSkillsProps {
  currentColor: string;
}

export default function LanguageSkills({ currentColor }: LanguageSkillsProps) {
  const languages = [
    // First row - Main languages
    { 
      name: 'Python', 
      level: 90, 
      image: '/src/assets/technologies/python.jpeg'
    },
    { 
      name: 'Java', 
      level: 85, 
      image: '/src/assets/technologies/java.png'
    },
    { 
      name: 'JavaScript', 
      level: 80, 
      image: '/src/assets/technologies/javascript.png'
    },
    { 
      name: 'C++', 
      level: 75, 
      image: '/src/assets/technologies/cpp.png'
    },
    { 
      name: 'C', 
      level: 70, 
      image: '/src/assets/technologies/c.png'
    },
    { 
      name: 'TypeScript', 
      level: 85, 
      image: '/src/assets/technologies/typescript.png'
    },
    
    // Second row - HTML, CSS
    { 
      name: 'HTML', 
      level: 85, 
      image: '/src/assets/technologies/html.png'
    },
    { 
      name: 'CSS', 
      level: 80, 
      image: '/src/assets/technologies/css.svg'
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Languages
        </h3>
        <p className="text-gray-600 dark:text-gray-300">Programming, markup, and styling languages I use to build solutions</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {languages.map((skill, index) => (
          <HoverCard key={skill.name} scale={1.05} shadowIntensity={15} className="group relative bg-white dark:bg-neutral-700 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-neutral-600 w-[calc(50%-12px)] md:w-[calc(25%-18px)]">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center overflow-hidden">
                <img 
                  src={skill.image} 
                  alt={skill.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
            </div>
          </HoverCard>
        ))}
      </div>
    </div>
  );
} 