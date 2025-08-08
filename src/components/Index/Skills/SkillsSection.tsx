import LanguageSkills from "./LanguageSkills";
import TechnologySkills from "./TechnologySkills";
import { FadeInOnScroll } from "@/components/ScrollReveal";
import { useRef, useEffect, useState } from "react";

interface SkillsSectionProps {
  currentColor: string;
}

export default function SkillsSection({ currentColor }: SkillsSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      setUnderlineWidth(titleRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="skills" className="py-20 px-6 sm:px-8 bg-gray-50 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll direction="up" duration={800} delay={200} elementId="skills-header">
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 text-3xl sm:text-4xl font-extrabold tracking-wide uppercase"
              style={{ color: currentColor, borderColor: currentColor }}
            >
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{ backgroundColor: currentColor }}
              />
              Technical Skills
            </div>
            <h2 className="sr-only">Skills & Technologies</h2>
          </div>
        </FadeInOnScroll>
        
        {/* Skills Introduction */}
        <FadeInOnScroll direction="up" duration={800} delay={400} elementId="skills-intro">
          <div className="text-left mb-12 max-w-4xl">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              These are many of the technical skills that I have acquired thus far in my computer science career. I am not claiming to be a master in all of these skills, that would be amazing, but it is simply not true. With that said, I am confident that I can hold a position that utilizes any of the following competencies and increase my mastery in any of these skills if needed.
            </p>
          </div>
        </FadeInOnScroll>
        
        <FadeInOnScroll direction="up" duration={800} delay={600} elementId="skills-languages">
          <LanguageSkills currentColor={currentColor} />
        </FadeInOnScroll>
        
        <FadeInOnScroll direction="up" duration={800} delay={800} elementId="skills-technologies">
          <TechnologySkills currentColor={currentColor} />
        </FadeInOnScroll>
      </div>
    </section>
  );
} 