import LanguageSkills from "./LanguageSkills";
import TechnologySkills from "./TechnologySkills";
import SoftSkills from "./SoftSkills";

interface SkillsSectionProps {
  currentColor: string;
}

export default function SkillsSection({ currentColor }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div 
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: currentColor }}
          />
        </div>
        
        {/* Skills Introduction */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            These are many of the technical skills that I have acquired thus far in my computer science career. I am not claiming to be a master in all of these skills, that would be amazing, but it is simply not true. With that said, I am confident that I can hold a position that utilizes any of the following competencies and increase my mastery in any of these skills if needed.
          </p>
        </div>
        
        <LanguageSkills currentColor={currentColor} />
        <TechnologySkills currentColor={currentColor} />
        <SoftSkills currentColor={currentColor} />
      </div>
    </section>
  );
} 