import { HoverCard } from "@/components/ScrollReveal";
import pythonLogo from '@/assets/technologies/python.jpeg';
import javaLogo from '@/assets/technologies/java.png';
import javascriptLogo from '@/assets/technologies/javascript.png';
import cppLogo from '@/assets/technologies/cpp.png';
import cLogo from '@/assets/technologies/c.png';
import typescriptLogo from '@/assets/technologies/typescript.png';
import htmlLogo from '@/assets/technologies/html.png';
import cssLogo from '@/assets/technologies/css.svg';

interface LanguageSkillsProps {
  currentColor: string;
}

export default function LanguageSkills({ currentColor }: LanguageSkillsProps) {
  const languages = [
    // First row - Main languages
    { 
      name: 'Python', 
      level: 90, 
      image: pythonLogo
    },
    { 
      name: 'Java', 
      level: 85, 
      image: javaLogo
    },
    { 
      name: 'JavaScript', 
      level: 80, 
      image: javascriptLogo
    },
    { 
      name: 'C++', 
      level: 75, 
      image: cppLogo
    },
    { 
      name: 'C', 
      level: 70, 
      image: cLogo
    },
    { 
      name: 'TypeScript', 
      level: 85, 
      image: typescriptLogo
    },
    
    // Second row - HTML, CSS
    { 
      name: 'HTML', 
      level: 85, 
      image: htmlLogo
    },
    { 
      name: 'CSS', 
      level: 80, 
      image: cssLogo
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
          <HoverCard key={skill.name} scale={1.05} shadowIntensity={15} className="group relative bg-white dark:bg-black rounded-xl p-6 shadow-sm border border-gray-100 dark:border-neutral-600 w-[calc(50%-12px)] md:w-[calc(25%-18px)]">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center overflow-hidden bg-white dark:bg-white">
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